import React from 'react';

// Note: Make sure your images are transparent PNGs for the best look
const CATEGORIES = [
    { id: 1, label: "Necklaces", img: "https://pngimg.com/uploads/necklace/necklace_PNG58.png" },
    { id: 2, label: "Earrings", img: "https://pngimg.com/uploads/earrings/earrings_PNG37.png" },
    { id: 3, label: "Rings", img: "https://pngimg.com/uploads/ring/ring_PNG40.png" },
    { id: 4, label: "Bracelets", img: "https://pngimg.com/uploads/bracelet/bracelet_PNG19.png" },
    { id: 5, label: "Sets", img: "https://pngimg.com/uploads/earrings/earrings_PNG36.png" },
];

const Category = () => {
    return (
        <section className="w-full py-8 bg-white">
            {/* 
        Container for mobile scrolling and desktop centering.
        - Mobile: horizontal scroll (overflow-x-auto), no wrapping (flex-nowrap), scroll snapping.
        - Desktop: centered row (md:justify-center).
      */}
            <div className="flex gap-3 md:gap-6 overflow-x-auto px-4 pb-4 
                   snap-x snap-mandatory md:justify-around overflow-x-auto
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {CATEGORIES.map((cat) => (
                    <div
                        key={cat.id}
                        className="flex mt-3 flex-col items-center shrink-0 snap-center cursor-pointer group"
                    >
                        {/* Soft Rounded Background Shape */}
                        <div className="w-20 h-18 md:h-34 md:w-36 lg:w-43 lg:h-40 bg-[#F6F4F0] 
                        rounded-full flex items-center justify-center 
                         transition-transform duration-300
                         "
                        >
                            {/* Jewelry Image */}
                            <img
                                src={cat.img}
                                alt={cat.label}
                                className="w-3/4 h-3/4 object-contain drop-shadow-md transition-transform   group-hover:scale-105 duration-300"
                                loading="lazy"
                            />
                        </div>

                        {/* Label */}
                        <span className="mt-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700 tracking-wide">
                            {cat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Category;