import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductList = ({
    currentItems,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
    currentPage,
    totalPages,
    handlePageChange,
    clearFilters,
    loading,
    setLoading
}) => {


    return (
        <div className="w-full lg:w-3/4">

            {/* Top Controls: Search and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search jewellery..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm transition-all"
                    />
                </div>

                <div className="relative w-full sm:w-auto">
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="w-full sm:w-auto appearance-none pl-5 pr-12 py-2.5 bg-[#FCFCFC] border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-800 cursor-pointer transition-shadow hover:shadow-sm"
                    >
                        <option value="featured">Sort by: Popularity</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 pt-6">
                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Skeleton cards */}
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-sm p-4 animate-pulse">
                                <div className="bg-gray-200 h-48 rounded-xl mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // {currentItems.length > 0 ? (
                            currentItems.map((product) => (
                                // FIX: Pass the single 'product' object, not the whole 'products' array
                                <ProductCard key={product.id} product={product} />
                            ))
                    //     ) : (
                    //         /* Empty State */
                    //         <div className="col-span-full flex flex-col items-center justify-center py-20 text-center w-full">
                    //             <div className="bg-gray-50 p-6 rounded-full mb-4">
                    //                 <Search className="w-10 h-10 text-gray-400" />
                    //             </div>
                    //             <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    //                 No products found
                    //             </h3>
                    //             <p className="text-gray-500 mb-6 max-w-xs mx-auto">
                    //                 We couldn't find anything matching your search or filters.
                    //             </p>
                    //             <button
                    //                 onClick={clearFilters}
                    //                 className="bg-[#D4AF37] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-black transition-colors"
                    //             >
                    //                 Clear All Filters
                    //             </button>
                    //         </div>
                    //     )
                    // }
                )}
            </div>

            {/* Pagination */}
            {filteredProducts.length > 0 && (
                <div className="flex justify-center items-center gap-2 mt-12 mb-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${currentPage === pageNumber
                                    ? 'bg-[#D4AF37] text-white border border-[#D4AF37]'
                                    : 'text-gray-600 bg-white border border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductList;