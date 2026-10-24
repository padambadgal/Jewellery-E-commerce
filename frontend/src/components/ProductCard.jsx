import React, { useState, useEffect, useMemo } from 'react';
import { Search, SlidersHorizontal,Heart } from 'lucide-react';

const ProductCard = ({ Products = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const itemsPerPage = 6;

  // Safely calculate categories
  const categories = ['All', ...new Set(Products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let result = [...Products];

    if (searchQuery) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [Products, searchQuery, selectedCategory, sortOption]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOption]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortOption('featured');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Page Header */}
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-wide">
          Our Collection
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-md">
          Discover timeless pieces crafted to celebrate your most special moments.
        </p>
      </div>

      {/* Flex Container for Sidebar and Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* ================= SIDEBAR (1/4 Width) ================= */}
        <aside className="w-full lg:w-1/4 shrink-0">
          
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden w-full flex items-center justify-between bg-gray-50 border border-gray-200 p-4 rounded-lg font-semibold text-gray-800 mb-4"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </span>
            <span>{isMobileFilterOpen ? '−' : '+'}</span>
          </button>

          {/* Sidebar Content (Hidden on mobile unless toggled) */}
          <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block bg-white border border-gray-100 rounded-xl p-6 shadow-sm`}>
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h2 className="font-semibold text-lg text-gray-900">Filters</h2>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button onClick={clearFilters} className="text-xs text-[#D4AF37] hover:underline font-medium">
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter List */}
            <div className="mb-8">
              <h3 className="text-sm font-bold  text-gray-800 uppercase tracking-wider mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left text-sm cursor-pointer transition-colors duration-200 flex items-center gap-3
                          ${selectedCategory === cat ? 'text-[#D4AF37] font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      {/* Custom Radio Indicator */}
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                          ${selectedCategory === cat ? 'border-[#D4AF37]' : 'border-gray-300'}`}>
                        {selectedCategory === cat && <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>}
                      </div>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </aside>

        {/* ================= MAIN CONTENT (3/4 Width) ================= */}
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
            
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm text-gray-700 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          {/* Note: Changed to 3 columns on desktop since sidebar takes 1/4 space */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {currentItems.length > 0 ? (
              // BUG FIX: Map 'currentItems' instead of 'Products'
              currentItems.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col bg-white border border-gray-100 rounded-sm p-3 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] bg-[#F8F6F0] rounded-sm overflow-hidden mb-3 sm:mb-4">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <button className="absolute top-2 right-2 bg-white rounded-full p-1.5">
                      <Heart className="w-5 h-5  text-[#D4AF37]" />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col flex-grow px-1">
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 truncate w-full">
                      {product.name}
                    </h3>
                    <p className="text-sm md:text-base font-bold text-[#D4AF37] mt-auto">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              /* Empty State */
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center w-full">
                <div className="bg-gray-50 p-6 rounded-full mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6 max-w-xs mx-auto">
                  We couldn't find anything matching your search or filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-[#D4AF37] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-black transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center items-center gap-2 mt-12 mb-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-sm cursor-pointer font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-1.5 text-sm cursor-pointer font-medium rounded-md transition-colors ${
                      currentPage === pageNumber
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
                className="px-3 py-1.5 text-sm font-medium cursor-pointer text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;