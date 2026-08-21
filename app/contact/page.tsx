import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Get in Touch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted sm:text-base">
          Questions about an order, Cash on Delivery, or a product? We&apos;re happy to help.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="font-semibold text-foreground">Address</p>
              <p className="mt-1 text-sm text-muted">Karachi, Sindh, Pakistan</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="font-semibold text-foreground">Phone / WhatsApp</p>
              <p className="mt-1 text-sm text-muted">+92 3462816319/3453317865</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <p className="mt-1 text-sm text-muted">t.perfect@outlook.com</p>
            </div>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent-soft p-5 text-sm text-foreground">
            Cash on Delivery available across Pakistan on all orders.
          </div>
        </div>
      </div>
    </div>
  );
}
