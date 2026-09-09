import type { Product } from "../types";

export const products: Product[] = [
  { id: "formal-oxford", name: "Classic Formal Oxford", category: "Formal Shoes", collectionId: "mens", price: "From ₹1,499", badge: "Popular", iconKind: "formal", isDemo: true },
  { id: "comfort-sneakers", name: "Everyday Comfort Sneakers", category: "Sports & Running", collectionId: "sports", price: "From ₹1,299", badge: "New", iconKind: "sneaker", isDemo: true },
  { id: "kids-school-shoes", name: "Kids School Shoes", category: "School Shoes", collectionId: "school", price: "From ₹699", iconKind: "kids", isDemo: true },
  { id: "womens-ballet-flats", name: "Women's Ballet Flats", category: "Women's Footwear", collectionId: "womens", price: "From ₹899", iconKind: "sandal", isDemo: true },
  { id: "leather-loafers", name: "Genuine Leather Loafers", category: "Leather Collection", collectionId: "leather", price: "From ₹1,999", badge: "Popular", iconKind: "leather", isDemo: true },
  { id: "casual-sandals", name: "Men's Casual Sandals", category: "Casual Footwear", collectionId: "mens", price: "From ₹599", iconKind: "sandal", isDemo: true },
  { id: "kids-casual-sneakers", name: "Kids Casual Sneakers", category: "Kids' Footwear", collectionId: "kids", price: "From ₹799", iconKind: "kids", isDemo: true },
];