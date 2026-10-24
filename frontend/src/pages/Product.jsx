import React from 'react'
import ProductCard from '../components/ProductCard'

export const Product = () => {
  const products = [
    { id: 1, name: "Classic Gold Ring", price: 450, category: "Rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=500&q=80" },
    { id: 2, name: "Diamond Necklace", price: 1200, category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478514-4a11011d3702?w=500&q=80" },
    { id: 3, name: "Pearl Drop Earrings", price: 350, category: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80" },
    { id: 4, name: "Gold Chain Bracelet", price: 600, category: "Bracelets", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80" },
    { id: 5, name: "Bridal Jewelry Set", price: 2500, category: "Sets", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80" },
    { id: 6, name: "Minimalist Gold Band", price: 300, category: "Rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=500&q=80" },
    { id: 7, name: "Layered Gold Necklace", price: 850, category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478514-4a11011d3702?w=500&q=80" },
    { id: 8, name: "Stud Diamond Earrings", price: 900, category: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80" },
    { id: 9, name: "Rose Gold Cuff", price: 700, category: "Bracelets", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80" },
    { id: 10, name: "Emerald Ring", price: 1500, category: "Rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=500&q=80" },
  ];
  return (
    <div>
        <ProductCard Products={products}/>
    </div>
  )
}
