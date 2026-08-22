import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getProductById, type Product } from "@/lib/products";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "t.perfect@outlook.com";

type CartLineInput = { id: string; qty: number };
type OrderLine = { product: Product; qty: number; lineTotal: number };

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const address = typeof body.address === "string" ? body.address.trim() : "";
  const city = typeof body.city === "string" ? body.city.trim() : "";
  const notes = typeof body.notes === "string" ? body.notes.trim() : "";
  const items: CartLineInput[] = Array.isArray(body.items)
    ? body.items.filter(
        (line: unknown): line is CartLineInput =>
          typeof line === "object" &&
          line !== null &&
          typeof (line as CartLineInput).id === "string" &&
          Number.isInteger((line as CartLineInput).qty) &&
          (line as CartLineInput).qty > 0
      )
    : [];

  if (!name || !phone || !address || !city) {
    return NextResponse.json(
      { error: "Name, phone, address, and city are required." },
      { status: 400 }
    );
  }

  if (items.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  const lineItems = items
    .map((line): OrderLine | null => {
      const product = getProductById(line.id);
      if (!product) return null;
      return { product, qty: line.qty, lineTotal: product.price * line.qty };
    })
    .filter((line): line is OrderLine => line !== null);

  if (lineItems.length === 0) {
    return NextResponse.json({ error: "None of the items in your cart could be found." }, { status: 400 });
  }

  const total = lineItems.reduce((sum, line) => sum + line.lineTotal, 0);
  const orderNumber = `TP-${Date.now().toString(36).toUpperCase()}`;

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set; cannot send order email.");
    return NextResponse.json(
      { error: "Checkout is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "T.perfect Orders <contact@tperfect.org>",
      to: CONTACT_TO_EMAIL,
      replyTo: email || undefined,
      subject: `New order ${orderNumber} from ${name}`,
      text: [
        `Order: ${orderNumber}`,
        `Payment: Cash on Delivery`,
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        `Address: ${address}`,
        `City: ${city}`,
        notes ? `Notes: ${notes}` : null,
        "",
        "Items:",
        ...lineItems.map(
          (line) => `- ${line.product.name} x${line.qty} — Rs. ${line.lineTotal.toLocaleString()}`
        ),
        "",
        `Total: Rs. ${total.toLocaleString()}`,
      ]
        .filter((line): line is string => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to place order." }, { status: 502 });
    }

    return NextResponse.json({ success: true, orderNumber, total });
  } catch (err) {
    console.error("Checkout order send failed:", err);
    return NextResponse.json({ error: "Failed to place order." }, { status: 500 });
  }
}
