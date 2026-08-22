export type Category = {
  name: string;
  slug: string;
  count: number;
  image: string;
  note?: string;
};

export const categories: Category[] = [
  {
    name: "Bed & Pillows",
    slug: "bed-pillows",
    count: 8,
    image: "/images/bed-pillows/elite-bed-pillow-1.png",
    note: "Bed pillows, neck pillows, ballfiber",
  },
  { name: "Bath Towels", slug: "bath-towels", count: 3, image: "/images/bath-towels/hanging-towel-pack-of-2-1.png" },
  {
    name: "Kitchen Essentials",
    slug: "kitchen-essentials",
    count: 1,
    image: "/images/kitchen/kitchen-apron-1.png",
    note: "Aprons",
  },
  { name: "Wash Cloths", slug: "wash-cloths", count: 5, image: "/images/wash-cloths/wash-cloth-lifestyle-1.png" },
  {
    name: "Baby Care",
    slug: "baby-care",
    count: 1,
    image: "/images/baby-care/baby-wedge-pillow-1.png",
    note: "Wedge pillow",
  },
  {
    name: "Cushions & Bean Bags",
    slug: "cushions-bean-bags",
    count: 1,
    image: "/images/cushions/bean-bag-colors.png",
  },
  {
    name: "Hair Care",
    slug: "hair-care",
    count: 3,
    image: "/images/hair-care/hair-cap-1.png",
    note: "Hair drying caps",
  },
  {
    name: "Bath Slippers & Aprons",
    slug: "bath-slippers-aprons",
    count: 3,
    image: "/images/bath-slippers/bath-slippers-1.png",
    note: "Bath slippers",
  },
];
