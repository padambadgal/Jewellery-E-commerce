import React, { useState, useRef } from 'react';
import { Plus, X } from 'lucide-react';
import {ProductDescription}  from '../components/ProductDescription'; // Fixed import path
import { Breadcrums } from '../components/Breadcrums';
// import { Link } from 'react-router-dom';
export const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Zoom States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center center', transform: 'scale(1)' });
  const imageRef = useRef(null);

  // Mock Data
  const product = {
    title: "Diamond Pendant Necklace",
    originalPrice: 45900,
    price: 41099,
    rating: 4.5,
    reviews: 120,
    description: "Flaunt elegant and sophisticated looks with this beautiful pendant necklace. Featuring a stunning diamond centerpiece, it adds a touch of luxury to any outfit. Perfect for both everyday wear and special occasions.",
    images: [
      "https://images.unsplash.com/photo-1599643478514-4a11011d3702?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=400&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
    ]
  };

  // Hover Zoom Logic
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    
    // Calculate cursor position as a percentage
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.2)', // Adjust zoom level here (2 = 200%)
    });
  };

  const handleMouseLeave = () => {
    // Reset zoom when mouse leaves
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)',
    });
  };

  return (
    <div className="p-4 md:p-8 bg-white font-sans text-gray-800">
      
      {/* <div className="mb-6">`` */}
        <Breadcrums product={product} />
      {/* </div> */}

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          
          {/* Main Image with Hover Zoom */}
          <div 
            ref={imageRef}
            className="relative w-full h-120  aspect-square bg-[#F8F6F0] rounded-lg overflow-hidden border border-gray-100 cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsModalOpen(true)} // Click to open full screen
          >
            <img
              src={product.images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover mix-blend-multiply transition-transform duration-100 ease-out"
              style={zoomStyle}
            />
            {/* Zoom/Plus Button */}
            <button 
              className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition z-10"
              onClick={(e) => {
                e.stopPropagation(); // Prevents double firing
                setIsModalOpen(true);
              }}
            >
              <Plus className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative w-20 h-20 shrink-0 bg-[#F8F6F0] rounded-md overflow-hidden border-2 transition-all cursor-pointer  ${
                  selectedImage === idx ? 'border-[#A67C00]' : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Product Info */}
        <ProductDescription 
          product={product} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          quantity={quantity} 
          setQuantity={setQuantity} 
        />
      </div>

      {/* FULL SCREEN ZOOM MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)} // Click outside to close
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Full Image */}
          <img 
            src={product.images[selectedImage]} 
            alt="Product Zoomed" 
            className="max-w-full max-h-[90vh] object-contain rounded-md"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          />
        </div>
      )}
    </div>
  );
};