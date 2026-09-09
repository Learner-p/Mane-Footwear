import type { Collection } from "../types";

export const collections: Collection[] = [
  { id: "mens", name: "Men's Footwear", description: "Formal, casual and everyday styles for men.", href: "/collections?category=mens", iconKind: "formal" },
  { id: "womens", name: "Women's Footwear", description: "Comfortable and stylish footwear for women.", href: "/collections?category=womens", iconKind: "sandal" },
  { id: "kids", name: "Kids' Footwear", description: "Durable, playful footwear built for young feet.", href: "/collections?category=kids", iconKind: "kids" },
  { id: "school", name: "School Shoes", description: "Reliable, all-day school footwear.", href: "/collections?category=school", iconKind: "boot" },
  { id: "sports", name: "Sports & Running", description: "Supportive footwear for sport and everyday activity.", href: "/collections?category=sports", iconKind: "sneaker" },
  { id: "leather", name: "Leather Collection", description: "Genuine leather footwear crafted to last.", href: "/collections?category=leather", iconKind: "leather" },
];