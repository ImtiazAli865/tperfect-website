"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Truck } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/lib/products";

type Status = "idle" | "submitting" | "success" | "error";

export default function CheckoutPage() {
  const { lines, clearCart } = useCart();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const items = lines
    .map((line) => {
      const product = getProductById(line.id);
      if (!product) return null;
      return { product, qty: line.qty };
    })
    .filter((item): item is { product: NonNullable<ReturnType<typeof getProductById>>; qty: number } => item !== null);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      notes: formData.get("notes"),
      items: lines,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setOrderNumber(data.orderNumber ?? "");
      setStatus("success");
      clearCart();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Order Placed!</h1>
        {orderNumber && (
          <p className="mt-2 text-sm text-muted">
            Order number <span className="font-semibold text-foreground">{orderNumber}</span>
          </p>
        )}
        <p className="mt-4 max-w-md text-sm text-muted sm:text-base">
          Thanks for shopping with T.perfect. We&apos;ll call you shortly to confirm your order. Pay in cash
          when it arrives at your door.
        </p>
        <Link
          href="/shop"
          className="mt-8 rounded-full bg-gradient-to-r from-accent to-accent-hover px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted">Add something to your cart before checking out.</p>
        <Link
          href="/shop"
          className="mt-8 rounded-full bg-gradient-to-r from-accent to-accent-hover px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Checkout</h1>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-2">
          <h2 className="font-semibold text-foreground">Shipping Details</h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Phone</label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="03XX-XXXXXXX"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Email (optional)</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-foreground">Address</label>
              <input
                name="address"
                type="text"
                required
                placeholder="House #, street, area"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">City</label>
              <input
                name="city"
                type="text"
                required
                placeholder="Karachi"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Order Notes (optional)</label>
            <textarea
              name="notes"
              rows={3}
              placeholder="Delivery instructions, landmark, etc."
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent-soft p-4 text-sm text-foreground">
            <Truck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>Cash on Delivery — pay when your order arrives at your doorstep.</span>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Placing Order..." : `Place Order — Rs. ${subtotal.toLocaleString()}`}
          </button>

          {status === "error" && <p className="text-sm font-medium text-red-600">{errorMessage}</p>}
        </form>

        <div className="h-fit space-y-4 rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-foreground">Order Summary</h2>
          <div className="space-y-3">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface-muted">
                  <Image src={product.image} alt={product.name} fill sizes="48px" className="object-contain p-1" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
                    {qty}
                  </span>
                </div>
                <p className="line-clamp-1 flex-1 text-xs font-medium text-foreground sm:text-sm">{product.name}</p>
                <p className="shrink-0 text-xs font-semibold text-foreground sm:text-sm">
                  Rs. {(product.price * qty).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4 text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="font-semibold text-foreground">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Shipping</span>
            <span className="font-semibold text-accent">Free</span>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="font-semibold text-foreground">Total</span>
            <span className="text-lg font-bold text-foreground">Rs. {subtotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
