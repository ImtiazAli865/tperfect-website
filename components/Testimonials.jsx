"use client";

/**
 * Testimonials.jsx — T.perfect
 * -----------------------------------------------------------------
 * Concept: a "clothesline" of fabric swatch tags — each testimonial
 * hangs like a sample tag clipped to a washing line, tilted slightly
 * and swaying gently. Grounded in the home-textile subject instead
 * of a generic card grid.
 *
 * Fraunces is loaded via next/font/google in app/layout.tsx as the
 * --font-serif CSS variable; Inter is already loaded as --font-sans.
 * Colors below use the site's theme CSS custom properties (see
 * app/globals.css) so this section follows light/dark palette changes.
 *
 * No Tailwind required — styling is self-contained via styled-jsx,
 * which Next.js supports out of the box.
 */

const REVIEWS = [
  {
    name: "Ayesha Khan",
    role: "Karachi",
    product: "Baby Head & Neck Pillow",
    quote:
      "Fabric bohat soft hai aur stitching neat — meri beti ab pehle se behtar soti hai. Packaging bhi bohat achi thi.",
    rating: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "Lahore",
    product: "Bed Pillow Set",
    quote:
      "Order time pe pohncha aur quality sample se match karti thi. Doosri baar bhi order kiya, koi shikayat nahi.",
    rating: 5,
  },
  {
    name: "Sana Malik",
    role: "Islamabad",
    product: "Microfiber Wash Cloth (Pack of 2)",
    quote:
      "Ye wash cloth roz ke kaam mein bohat handy hai — spill foran soak kar leta hai. Ab ghar mein 3 pack hain.",
    rating: 5,
  },
  {
    name: "Hassan Raza",
    role: "Faisalabad",
    product: "Home Textile Bulk Order",
    quote:
      "Wholesale order diya tha apni dukaan ke liye, quality consistent thi har piece pe. Reliable supplier mila.",
    rating: 4,
  },
  {
    name: "Mariam Sheikh",
    role: "Karachi",
    product: "Bed Pillow Set",
    quote:
      "Design simple lekin premium lagta hai. Customer support ne WhatsApp pe har sawal ka jawab diya.",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    role: "Multan",
    product: "Baby Head & Neck Pillow",
    quote:
      "Doston ne recommend kiya tha, ab main khud recommend karta hoon. Value for money product hai.",
    rating: 5,
  },
];

function Star({ filled }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill={filled ? "var(--accent)" : "none"}
      stroke="var(--accent)"
      strokeWidth="1.4"
    >
      <path d="M12 2.5l2.9 6.6 7.1.6-5.4 4.8 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.7l7.1-.6z" />
    </svg>
  );
}

function SwatchTag({ item, index }) {
  const tilt = [-3, 2, -2, 3, -1.5, 1.5][index % 6];
  return (
    <div className="peg-wrap" style={{ "--tilt": `${tilt}deg`, "--delay": `${index * 0.35}s` }}>
      <div className="peg" />
      <div className="string" />
      <div className="tag">
        <span className="hole" />
        <p className="quote">&ldquo;{item.quote}&rdquo;</p>
        <div className="stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} filled={i < item.rating} />
          ))}
        </div>
        <div className="who">
          <span className="name">{item.name}</span>
          <span className="role">
            {item.role} · {item.product}
          </span>
        </div>
      </div>

      <style jsx>{`
        .peg-wrap {
          position: relative;
          flex: 0 0 auto;
          width: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 22px;
        }
        .peg {
          width: 22px;
          height: 12px;
          background: linear-gradient(180deg, #b98657, #8a5f3a);
          border-radius: 3px;
          position: relative;
          z-index: 2;
        }
        .peg::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 100%;
          width: 2px;
          height: 5px;
          background: #6f4a2b;
          transform: translateX(-50%);
        }
        .string {
          width: 1px;
          height: 16px;
          background: #b7ab95;
        }
        .tag {
          --tilt-base: var(--tilt);
          background: var(--surface);
          border: 1.5px dashed var(--accent-soft);
          border-radius: 10px 10px 10px 26px;
          padding: 22px 20px 18px;
          width: 100%;
          box-shadow: 0 10px 22px -12px rgba(31, 30, 20, 0.35);
          transform: rotate(var(--tilt));
          animation: sway 6s ease-in-out infinite;
          animation-delay: var(--delay);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .tag:hover {
          transform: rotate(0deg) translateY(-3px);
          box-shadow: 0 16px 28px -14px rgba(31, 30, 20, 0.45);
        }
        .hole {
          position: absolute;
          top: -7px;
          left: 22px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--section-cream);
          border: 1.5px solid var(--accent-soft);
        }
        .quote {
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: var(--foreground);
          margin: 4px 0 12px;
          min-height: 84px;
        }
        .stars {
          display: flex;
          gap: 3px;
          margin-bottom: 10px;
        }
        .who {
          display: flex;
          flex-direction: column;
          border-top: 1px dashed var(--accent-soft);
          padding-top: 8px;
        }
        .name {
          font-family: var(--font-serif), serif;
          font-weight: 600;
          font-size: 15px;
          color: var(--foreground);
        }
        .role {
          font-family: var(--font-sans), sans-serif;
          font-size: 11.5px;
          color: var(--muted);
          margin-top: 2px;
        }
        @keyframes sway {
          0%,
          100% {
            transform: rotate(var(--tilt));
          }
          50% {
            transform: rotate(calc(var(--tilt) * -1));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tag {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="rope" />
      <div className="header">
        <span className="eyebrow">Customer Swatches</span>
        <h2>Straight From the Thread</h2>
        <p>Real feedback from families who chose T.perfect for their home.</p>
      </div>

      <div className="line">
        {REVIEWS.map((item, i) => (
          <SwatchTag key={item.name} item={item} index={i} />
        ))}
      </div>

      <style jsx>{`
        .testimonials {
          position: relative;
          background: var(--section-cream);
          padding: 64px 0 76px;
          overflow: hidden;
        }
        .header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 46px;
          padding: 0 20px;
        }
        .eyebrow {
          font-family: var(--font-sans), sans-serif;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }
        h2 {
          font-family: var(--font-serif), serif;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 600;
          color: var(--foreground);
          margin: 10px 0 10px;
        }
        .header p {
          font-family: var(--font-sans), sans-serif;
          font-size: 14.5px;
          color: var(--muted);
        }
        .line {
          display: flex;
          gap: 34px;
          overflow-x: auto;
          padding: 0 34px 14px;
          scroll-snap-type: x proximity;
        }
        .line > :global(.peg-wrap) {
          scroll-snap-align: start;
        }
        .line::-webkit-scrollbar {
          height: 6px;
        }
        .line::-webkit-scrollbar-thumb {
          background: var(--accent-soft);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
