import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Heart, Star, Plus } from 'lucide-react';
import { Card, CardAction, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const WishlistPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    // Mock Wishlist Data
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Gold Hoop Earrings",
            price: 18999,
            rating: 5,
            reviews: 40,
            img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80"
        },
        {
            id: 2,
            name: "Diamond Necklace Set",
            price: 45999,
            rating: 5,
            reviews: 112,
            img: "https://images.unsplash.com/photo-1599643478514-4a11011d3702?w=500&q=80"
        },
        {
            id: 3,
            name: "Palm Ring",
            price: 12999,
            rating: 5,
            reviews: 45,
            img: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=500&q=80"
        }
    ]);

    // Remove item from wishlist
    const handleRemove = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen py-12 bg-[F8F6F1] px-4 font-sans flex justify-center">
            {/* Main Container */}
            <div className="w-full max-w-7xl bg-white">
                
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Your Wishlist</h1>
                </div>

                {/* Empty State */}
                {wishlistItems.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg mb-4">Your wishlist is empty.</p>
                    </div>
                )}

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishlistItems.map((item) => (
                        <Card 
                            key={item.id} 
                            className="flex flex-col bg-white border border-gray-100 rounded-sm p-3 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <CardHeader className="flex flex-col flex-grow p-0">
                                {/* Image Container */}
                                <Link to={`/collections/${item.id}`} className="relative w-full aspect-square bg-[#F8F6F0] rounded-sm overflow-hidden group">
                                    {loading ? (
                                        <Skeleton className="h-full w-full" />
                                    ) : (
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                                        />
                                    )}

                                    {/* Red Heart Remove Button */}
                                    <CardAction className="absolute top-2 right-2 z-20">
                                        <button
                                            onClick={(e) => handleRemove(e, item.id)}
                                            className="bg-white rounded-full p-1.5 shadow-sm hover:scale-110 transition-transform"
                                            aria-label="Remove from wishlist"
                                        >
                                            <Heart className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                                        </button>
                                    </CardAction>
                                </Link>

                                {/* Details */}
                                <div className="pt-3 px-1 flex flex-col flex-grow">
                                    <CardTitle className="text-sm font-semibold text-gray-800 truncate w-full mb-1">
                                        <h3>{item.name}</h3>
                                    </CardTitle>
                                    
                                    <p className="text-sm font-bold text-gray-900 mb-2">
                                        ₹ {Number(item.price ?? 0).toLocaleString()}
                                    </p>
                                    
                                    {/* Star Rating */}
                                    <div className="flex items-center gap-1 mt-auto">
                                        <div className="flex text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
}