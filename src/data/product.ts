import type { Product } from "../types";

export const products: Product[] = [
  { id: "formal-oxford", name: "Classic Formal Oxford", category: "Formal Shoes", collectionId: "mens", price: "From ₹1,499", badge: "Popular", iconKind: "formal", isDemo: true, description: "A clean, classic oxford silhouette designed for formal wear and everyday office use." },
  { id: "comfort-sneakers", name: "Everyday Comfort Sneakers", category: "Sports & Running", collectionId: "sports", price: "From ₹1,299", badge: "New", iconKind: "sneaker", isDemo: true, description: "A comfortable everyday sneaker suited for casual wear and light activity." },
  { id: "kids-school-shoes", name: "Kids School Shoes", category: "School Shoes", collectionId: "school", price: "From ₹699", iconKind: "kids", isDemo: true, description: "A comfortable school shoe designed for regular school-day wear." },
  { id: "womens-ballet-flats", name: "Women's Ballet Flats", category: "Women's Footwear", collectionId: "womens", price: "From ₹899", iconKind: "sandal", isDemo: true, description: "A comfortable, versatile flat suited for everyday wear." },
  { id: "leather-loafers", name: "Genuine Leather Loafers", category: "Leather Collection", collectionId: "leather", price: "From ₹1,999", badge: "Popular", iconKind: "leather", isDemo: true, description: "A leather loafer designed for a smart-casual look." },
  { id: "casual-sandals", name: "Men's Casual Sandals", category: "Casual Footwear", collectionId: "mens", price: "From ₹599", iconKind: "sandal", isDemo: true, description: "A relaxed, everyday sandal for casual wear." },
  { id: "kids-casual-sneakers", name: "Kids Casual Sneakers", category: "Kids' Footwear", collectionId: "kids", price: "From ₹799", iconKind: "kids", isDemo: true, description: "A comfortable casual sneaker designed for everyday play and school outings." },
];