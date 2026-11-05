import React, { useState } from 'react';
import { Share, Minus, Plus, ChevronDown, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  // Mock Cart Data based on your image
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Diamond Pendant Set",
      variant: "Diamond and Silver",
      price: 45999,
      quantity: 1,
      img: "https://images.unsplash.com/photo-1599643478514-4a11011d3702?w=200&q=80"
    },
    {
      id: 2,
      name: "Gold Hoop Earrings",
      variant: "Diamond and Silver",
      price: 18999,
      quantity: 1,
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80"
    }
  ]);

  // Handle Quantity Change
  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Calculate Total
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto bg-white">

        {/* HEADER */}
        <h1 className="text-xl  mb-8 md:text-2xl font-semibold text-gray-900">Cart Page</h1>

        {/* CART ITEMS LIST */}
        <div className="flex flex-col">
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 border-t border-gray-100"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full sm:w-2/5">
                  {index + 1}
                <div className="w-16 h-16 bg-[#F8F6F0] rounded-md overflow-hidden shrink-0 flex items-center justify-center">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.variant}</p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-8">
                <div className="flex items-center border border-gray-200 rounded-md h-8">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 h-full cursor-pointer text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 h-full cursor-pointer text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Prices */}
                <div className="flex items-center gap-8 sm:gap-12">
                  <div className="text-sm font-medium text-gray-500 w-16 text-right">
                    ₹{item.price.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 w-20 justify-end">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total SECTION */}
        <div className="mt-2 pt-6 border-t border-gray-100 flex flex-col items-end">
          <div className="w-full sm:w-[350px]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-500">Total (tax excl.)</span>
              <span className="text-lg font-bold text-gray-900">₹{total.toLocaleString()}</span>
            </div>

            <button onClick={()=> navigate('/checkout')} className="w-full cursor-pointer bg-[#A67C00] hover:bg-[#8e6900] text-white py-3 rounded-md font-semibold text-sm transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}