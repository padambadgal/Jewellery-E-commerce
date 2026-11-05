import React, { useState, useEffect, useMemo } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductList from '../components/ProductList';

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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 6;

  // Safely calculate categories
  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let result = [...products];

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
  }, [products, searchQuery, selectedCategory, sortOption]);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Main Layout Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          clearFilters={clearFilters}
          isMobileFilterOpen={isMobileFilterOpen}
          setIsMobileFilterOpen={setIsMobileFilterOpen}
        />

        <ProductList
          currentItems={currentItems}
          filteredProducts={filteredProducts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          clearFilters={clearFilters}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};
