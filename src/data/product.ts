import type { Product } from "../types";

export const products: Product[] = [
  { id: "formal-oxford", name: "Classic Formal Oxford", category: "Formal Shoes", price: "From ₹1,499", badge: "Popular", iconKind: "formal", isDemo: true },
  { id: "comfort-sneakers", name: "Everyday Comfort Sneakers", category: "Sports & Running", price: "From ₹1,299", badge: "New", iconKind: "sneaker", isDemo: true },
  { id: "kids-school-shoes", name: "Kids School Shoes", category: "School Shoes", price: "From ₹699", iconKind: "kids", isDemo: true },
  { id: "womens-ballet-flats", name: "Women's Ballet Flats", category: "Women's Footwear", price: "From ₹899", iconKind: "sandal", isDemo: true },
  { id: "leather-loafers", name: "Genuine Leather Loafers", category: "Leather Collection", price: "From ₹1,999", badge: "Popular", iconKind: "leather", isDemo: true },
  { id: "casual-sandals", name: "Men's Casual Sandals", category: "Casual Footwear", price: "From ₹599", iconKind: "sandal", isDemo: true },
];