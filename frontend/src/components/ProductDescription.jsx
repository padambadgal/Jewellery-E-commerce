import React from 'react'
import { Plus, Minus, Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export const ProductDescription = (
  { product, activeTab, setActiveTab, quantity, setQuantity }
) => {
    
  const tabs = ['Description', 'Specifications', 'Reviews'];
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-1/2 flex flex-col">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        {product.title}
      </h1>

      {/* Price & Ratings */}
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 line-through text-lg">
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews} Reviews)</span>
        </div>
      </div>

      {/* Short Description */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Actions (Quantity & Add to Cart) */}
      <div className="flex items-center gap-4 mb-10">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-300 rounded-md h-12">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 h-full text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 h-full text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button onClick={() => navigate('/cart')} className="flex-1 h-12 bg-[#A67C00] hover:bg-[#8e6900] text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer ">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-4">
        <div className="flex border-b border-gray-200 gap-8 mb-4 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 cursor-pointer  text-sm md:text-base font-medium transition-colors relative ${activeTab === tab ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A67C00]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-sm md:text-base text-gray-600 leading-relaxed">
          {activeTab === 'Description' && (
            <p>Elevate your style with our exquisite collection. This piece is crafted with precision using the finest materials, ensuring durability and timeless elegance. Whether you're dressing up for a special occasion or adding a touch of sophistication to your daily wear, this jewelry piece is the perfect choice.</p>
          )}
          {activeTab === 'Specifications' && (
            <ul className="list-disc pl-5 space-y-1">
              <li>Material: 18K Gold & Diamond</li>
              <li>Weight: 12g</li>
              <li>Chain Length: 18 inches</li>
              <li>Clasp Type: Lobster Claw</li>
            </ul>
          )}
          {activeTab === 'Reviews' && (
            <p>No reviews yet. Be the first to review this product!</p>
          )}
        </div>
      </div>

    </div>
  )
}
