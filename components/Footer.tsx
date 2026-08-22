import Link from "next/link";
import { Mail, MessageCircle, Globe } from "lucide-react";
import { Logo } from "@/components/Logo";

const FOOTER_LINKS = {
  Shop: [
    { label: "Bed & Pillows", href: "/categories/bed-pillows" },
    { label: "Bath Towels", href: "/categories/bath-towels" },
    { label: "Kitchen Essentials", href: "/categories/kitchen-essentials" },
    { label: "New Arrivals", href: "/shop" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Categories", href: "/categories" },
  ],
  Support: [
    { label: "Shipping Policy", href: "/contact" },
    { label: "Returns & Exchanges", href: "/contact" },
    { label: "Cash on Delivery", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <Logo size="md" />
            <p className="mt-3 max-w-xs text-sm text-muted">Perfect Clean, Better Living.</p>
            <div className="mt-5 flex items-center gap-3">
              {[Globe, Mail, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} T.perfect. All rights reserved.</p>
          <p>Cash on Delivery available across Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
