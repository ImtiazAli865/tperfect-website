export type Product = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  description: string;
  tags: string[];
  sku: string;
  type: string;
  addedDate: string;
};

export const products: Product[] = [
  // ---- Bed Pillows ----
  {
    id: "gold-bed-pillow",
    name: "Gold Bed Pillow (Pack of 2)",
    category: "PILLOWS",
    categorySlug: "bed-pillows",
    price: 3998,
    rating: 4.6,
    reviews: 94,
    image: "/images/bed-pillows/gold-bed-pillow-1.png",
    description:
      "A plush, breathable pair of bed pillows finished with a soft cotton casing and long-lasting fiber fill. Holds its shape night after night while keeping your neck and shoulders properly supported.",
    tags: ["Pillow", "Pack of 2", "Cotton"],
    sku: "TP-PIL-GLD-02",
    type: "Bed Pillow",
    addedDate: "2026-06-10",
  },
  {
    id: "platinum-bed-pillow",
    name: "Platinum Bed Pillow (Pack of 2)",
    category: "PILLOWS",
    categorySlug: "bed-pillows",
    price: 5998,
    rating: 4.7,
    reviews: 76,
    image: "/images/bed-pillows/platinum-bed-pillow-1.png",
    description:
      "An upgraded pair of bed pillows with denser fill for extra loft and support, wrapped in a soft, breathable cotton cover that stays fresh wash after wash.",
    tags: ["Pillow", "Pack of 2", "Cotton", "Premium"],
    sku: "TP-PIL-PLT-02",
    type: "Bed Pillow",
    addedDate: "2026-06-12",
  },
  {
    id: "elite-bed-pillow",
    name: "Elite Bed Pillow (Pack of 2)",
    category: "PILLOWS",
    categorySlug: "bed-pillows",
    price: 7998,
    originalPrice: 8998,
    rating: 4.9,
    reviews: 132,
    image: "/images/bed-pillows/elite-bed-pillow-1.png",
    description:
      "Sink into premium comfort with the Elite Bed Pillow duo — the top tier of our pillow range, built for deep, restful sleep with a full, cloud-like feel that lasts.",
    tags: ["Pillow", "Pack of 2", "Cotton", "Popular"],
    sku: "TP-PIL-ELT-02",
    type: "Bed Pillow",
    addedDate: "2026-06-15",
    isNew: true,
  },

  // ---- Ballfiber (pillow/quilt filling) ----
  {
    id: "gold-ballfiber",
    name: "Gold Ballfiber (5kg Bag)",
    category: "PILLOWS",
    categorySlug: "bed-pillows",
    price: 2999,
    rating: 4.5,
    reviews: 41,
    image: "/images/ballfiber/gold-ballfiber-1.png",
    description:
      "Soft, springy siliconized ball fiber for stuffing pillows, quilts, and cushions. Sold in a 5kg bag — fluffs up easily and stays lofty wash after wash.",
    tags: ["Ballfiber", "5kg", "Filling"],
    sku: "TP-BLF-GLD-5",
    type: "Ballfiber",
    addedDate: "2026-05-02",
  },
  {
    id: "platinum-ballfiber",
    name: "Platinum Ballfiber (5kg Bag)",
    category: "PILLOWS",
    categorySlug: "bed-pillows",
    price: 3999,
    rating: 4.6,
    reviews: 33,
    image: "/images/ballfiber/platinum-ballfiber-1.png",
    description:
      "A finer, denser grade of siliconized ball fiber for a fuller, more supportive stuffing. Sold in a 5kg bag, ideal for pillows and cushions that need extra body.",
    tags: ["Ballfiber", "5kg", "Filling"],
    sku: "TP-BLF-PLT-5",
    type: "Ballfiber",
    addedDate: "2026-05-04",
  },
  {
    id: "elite-ballfiber",
    name: "Elite Ballfiber (5kg Bag)",
    category: "PILLOWS",
    categorySlug: "bed-pillows",
    price: 5999,
    rating: 4.8,
    reviews: 27,
    image: "/images/ballfiber/elite-ballfiber-1.png",
    description:
      "Our top-grade siliconized ball fiber — ultra-soft, hypoallergenic, and built to hold its loft the longest. Sold in a 5kg bag for premium stuffing projects.",
    tags: ["Ballfiber", "5kg", "Filling", "Premium"],
    sku: "TP-BLF-ELT-5",
    type: "Ballfiber",
    addedDate: "2026-05-06",
  },

  // ---- Neck Pillows ----
  {
    id: "perfect-neck-pillow-pack-2",
    name: "Perfect Neck Pillow (Pack of 2)",
    category: "PILLOWS",
    categorySlug: "bed-pillows",
    price: 1998,
    rating: 4.7,
    reviews: 118,
    image: "/images/neck-pillow/neck-pillow-pack-of-2-1.png",
    description:
      "The Perfect Neck Pillow duo — a U-shaped travel companion with 360° neck support, a machine-washable cover, and an adjustable snap closure that keeps it secure.",
    tags: ["Neck Pillow", "Travel", "Pack of 2"],
    sku: "TP-NCK-002",
    type: "Neck Pillow",
    addedDate: "2026-07-10",
    isNew: true,
  },
  {
    id: "perfect-neck-pillow-pack-3",
    name: "Perfect Neck Pillow (Pack of 3)",
    category: "PILLOWS",
    categorySlug: "bed-pillows",
    price: 2997,
    rating: 4.7,
    reviews: 85,
    image: "/images/neck-pillow/neck-pillow-pack-of-3-1.png",
    description:
      "Stock up with three Perfect Neck Pillows — soft, portable, and ergonomically shaped for travel, office, or home naps, with a snap closure that keeps it in place.",
    tags: ["Neck Pillow", "Travel", "Pack of 3"],
    sku: "TP-NCK-003",
    type: "Neck Pillow",
    addedDate: "2026-07-12",
  },

  // ---- Hanging Towels ----
  {
    id: "hanging-towel-pack-2",
    name: "Hanging Towel (Pack of 2)",
    category: "TOWELS",
    categorySlug: "bath-towels",
    price: 398,
    rating: 4.6,
    reviews: 152,
    image: "/images/bath-towels/hanging-towel-pack-of-2-1.png",
    description:
      "A pair of hanging towels finished with a reinforced loop for easy access in kitchen or bath. Woven from thick, absorbent cotton that stays soft wash after wash.",
    tags: ["Towel", "Hanging", "Pack of 2"],
    sku: "TP-TWL-002",
    type: "Hanging Towel",
    addedDate: "2026-05-18",
  },
  {
    id: "hanging-towel-pack-4",
    name: "Hanging Towel (Pack of 4)",
    category: "TOWELS",
    categorySlug: "bath-towels",
    price: 796,
    rating: 4.7,
    reviews: 97,
    image: "/images/bath-towels/hanging-towel-pack-of-4-1.png",
    description:
      "A set of four hanging towels — enough for every sink in the house. Reinforced loops, thick absorbent cotton, and quick-drying performance.",
    tags: ["Towel", "Hanging", "Pack of 4"],
    sku: "TP-TWL-004",
    type: "Hanging Towel",
    addedDate: "2026-05-20",
  },
  {
    id: "hanging-towel-pack-5",
    name: "Hanging Towel (Pack of 5)",
    category: "TOWELS",
    categorySlug: "bath-towels",
    price: 995,
    originalPrice: 1150,
    rating: 4.8,
    reviews: 63,
    image: "/images/bath-towels/hanging-towel-pack-of-5-1.png",
    description:
      "Our best-value hanging towel bundle — five thick, absorbent cotton towels with reinforced hanging loops for the whole home.",
    tags: ["Towel", "Hanging", "Pack of 5", "Best Value"],
    sku: "TP-TWL-005",
    type: "Hanging Towel",
    addedDate: "2026-05-22",
  },

  // ---- Wash Cloths ----
  {
    id: "wash-cloth-classic-pack-2",
    name: "Microfiber Wash Cloth Set – Classic (Pack of 2)",
    category: "WASH CLOTHS",
    categorySlug: "wash-cloths",
    price: 798,
    rating: 4.7,
    reviews: 143,
    image: "/images/wash-cloths/wash-cloth-lifestyle-1.png",
    description:
      "Two packets (8 cloths total) of ultra-absorbent microfiber wash cloths in black, grey, brown, and tan. Soft on skin, tough on grime — quick-drying and machine washable.",
    tags: ["Wash Cloth", "Microfiber", "Pack of 2"],
    sku: "TP-WSH-CLS-02",
    type: "Wash Cloth",
    addedDate: "2026-07-01",
  },
  {
    id: "wash-cloth-pastel-pack-2",
    name: "Microfiber Wash Cloth Set – Pastel (Pack of 2)",
    category: "WASH CLOTHS",
    categorySlug: "wash-cloths",
    price: 998,
    rating: 4.8,
    reviews: 109,
    image: "/images/wash-cloths/wash-cloth-6pack-pack-of-2-1.png",
    description:
      "Two packets (12 cloths total) of soft microfiber wash cloths in blue, yellow, mint, and grey. Highly absorbent and gentle on skin — perfect for kitchen, bath, and everyday wiping.",
    tags: ["Wash Cloth", "Microfiber", "Pack of 2", "Pastel"],
    sku: "TP-WSH-PST-02",
    type: "Wash Cloth",
    addedDate: "2026-07-03",
    isNew: true,
  },
  {
    id: "baby-tiny-towel-pack-5",
    name: "Baby Tiny Towel Wash Cloth (Pack of 5)",
    category: "WASH CLOTHS",
    categorySlug: "wash-cloths",
    price: 1245,
    rating: 4.9,
    reviews: 71,
    image: "/images/wash-cloths/baby-tiny-towel-pack-of-5-1.png",
    description:
      "Five packets (30 tiny towels total) of soft, gentle multi-purpose towels sized for baby's face, hands, and everyday cleanup. Soft and gentle for delicate skin.",
    tags: ["Baby", "Wash Cloth", "Pack of 5"],
    sku: "TP-WSH-BBY-05",
    type: "Baby Wash Cloth",
    addedDate: "2026-07-06",
  },

  // ---- Kitchen ----
  {
    id: "kitchen-apron-classic",
    name: "Premium Kitchen Apron",
    category: "KITCHEN",
    categorySlug: "kitchen-essentials",
    price: 249,
    rating: 4.6,
    reviews: 58,
    image: "/images/kitchen/kitchen-apron-1.png",
    description:
      "A durable, water-resistant kitchen apron with an adjustable neck strap and spacious front pockets. Machine washable and built for everyday cooking, baking, and grilling.",
    tags: ["Apron", "Kitchen", "Unisex"],
    sku: "TP-KIT-001",
    type: "Apron",
    addedDate: "2026-04-20",
  },

  // ---- Baby Care ----
  {
    id: "baby-wedge-pillow",
    name: "Baby Wedge Pillow",
    category: "BABY",
    categorySlug: "baby-care",
    price: 499,
    rating: 4.8,
    reviews: 46,
    image: "/images/baby-care/baby-wedge-pillow-1.png",
    isNew: true,
    description:
      "An elevated wedge pillow with side bolsters that help keep baby in a safe sleeping position while supporting healthy posture. Soft, breathable, baby-safe materials. Available in blue, pink, and cream.",
    tags: ["Baby", "Wedge Pillow", "Safe Sleep"],
    sku: "TP-BBY-001",
    type: "Baby Wedge Pillow",
    addedDate: "2026-08-02",
  },

  // ---- Cushions & Bean Bags ----
  {
    id: "beans-bag-lounge",
    name: "Beans Bag Lounge Chair",
    category: "CUSHIONS",
    categorySlug: "cushions-bean-bags",
    price: 11999,
    rating: 4.7,
    reviews: 39,
    image: "/images/cushions/bean-bag-colors.png",
    description:
      "A roomy, durable bean bag finished in tough parachute fabric — perfect for reading corners, kids' rooms, or extra lounge seating. Available in 9 colors.",
    tags: ["Bean Bag", "Lounge", "Multiple Colors"],
    sku: "TP-CSH-001",
    type: "Bean Bag",
    addedDate: "2026-03-15",
  },

  // ---- Hair Care ----
  {
    id: "hair-drying-cap-pack-2",
    name: "Women Hair Drying Cap (Pack of 2)",
    category: "HAIR CARE",
    categorySlug: "hair-care",
    price: 598,
    rating: 4.8,
    reviews: 167,
    image: "/images/hair-care/hair-cap-1.png",
    description:
      "Two super-absorbent, soft microfiber hair drying caps that cut drying time and reduce frizz. Lightweight, breathable, and comfortable for everyday use.",
    tags: ["Hair Care", "Quick Dry", "Pack of 2"],
    sku: "TP-HAR-002",
    type: "Hair Drying Cap",
    addedDate: "2026-07-25",
  },
  {
    id: "hair-drying-cap-pack-3",
    name: "Women Hair Drying Cap (Pack of 3)",
    category: "HAIR CARE",
    categorySlug: "hair-care",
    price: 897,
    rating: 4.8,
    reviews: 104,
    image: "/images/hair-care/hair-cap-2.png",
    description:
      "Three soft microfiber hair drying caps in assorted colors — super absorbent, gentle on hair, and quick to dry.",
    tags: ["Hair Care", "Quick Dry", "Pack of 3"],
    sku: "TP-HAR-003",
    type: "Hair Drying Cap",
    addedDate: "2026-07-27",
  },
  {
    id: "hair-drying-cap-pack-4",
    name: "Women Hair Drying Cap (Pack of 4)",
    category: "HAIR CARE",
    categorySlug: "hair-care",
    price: 1196,
    originalPrice: 1350,
    rating: 4.9,
    reviews: 88,
    image: "/images/hair-care/hair-cap-3.png",
    description:
      "Four soft microfiber hair drying caps in assorted colors — our best-value hair care bundle. Super absorbent, reduces frizz, and saves time.",
    tags: ["Hair Care", "Quick Dry", "Pack of 4", "Best Value"],
    sku: "TP-HAR-004",
    type: "Hair Drying Cap",
    addedDate: "2026-07-29",
  },

  // ---- Bath Slippers ----
  {
    id: "bath-slippers-pack-2",
    name: "Bath Slippers (Pack of 2 Pairs)",
    category: "BATH",
    categorySlug: "bath-slippers-aprons",
    price: 998,
    rating: 4.5,
    reviews: 72,
    image: "/images/bath-slippers/bath-slippers-1.png",
    description:
      "Two pairs of non-slip, quick-dry bath slippers designed for everyday comfort and safety on wet floors. Soft, lightweight, and machine washable.",
    tags: ["Bath", "Slippers", "Pack of 2"],
    sku: "TP-BTH-002",
    type: "Bath Slippers",
    addedDate: "2026-02-16",
  },
  {
    id: "bath-slippers-pack-3",
    name: "Bath Slippers (Pack of 3 Pairs)",
    category: "BATH",
    categorySlug: "bath-slippers-aprons",
    price: 1497,
    rating: 4.6,
    reviews: 54,
    image: "/images/bath-slippers/bath-slippers-5.png",
    description:
      "Three pairs of soft, non-slip bath slippers in assorted colors — comfortable at home, in hotels, or at the spa.",
    tags: ["Bath", "Slippers", "Pack of 3"],
    sku: "TP-BTH-003",
    type: "Bath Slippers",
    addedDate: "2026-02-18",
  },
  {
    id: "bath-slippers-pack-4",
    name: "Bath Slippers (Pack of 4 Pairs)",
    category: "BATH",
    categorySlug: "bath-slippers-aprons",
    price: 1996,
    rating: 4.7,
    reviews: 45,
    image: "/images/bath-slippers/bath-slippers-2.png",
    description:
      "Four pairs of premium velvet and terry slippers in assorted colors — ultra-soft, cushioned, and non-slip for the whole family.",
    tags: ["Bath", "Slippers", "Pack of 4"],
    sku: "TP-BTH-004",
    type: "Bath Slippers",
    addedDate: "2026-02-20",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}
