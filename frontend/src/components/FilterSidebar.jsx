import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const FilterSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  clearFilters,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
}) => {
  return (
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

      {/* Sidebar Content */}
      <div
        className={`${
          isMobileFilterOpen ? 'block' : 'hidden'
        } lg:block bg-white border border-gray-100 rounded-xl p-6 shadow-sm`}
      >
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <h2 className="font-semibold text-lg text-gray-900">Filters</h2>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-xs text-[#D4AF37] hover:underline font-medium cursor-pointer"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Category List */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
            Categories
          </h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left text-sm cursor-pointer transition-colors duration-200 flex items-center gap-3
                    ${
                      selectedCategory === cat
                        ? 'text-[#D4AF37] font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {/* Custom Radio Indicator */}
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center
                    ${
                      selectedCategory === cat
                        ? 'border-[#D4AF37]'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedCategory === cat && (
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                    )}
                  </div>
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;