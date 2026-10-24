import { Link } from 'react-router-dom'
import { ArrowRight, Heart } from 'lucide-react'

function Featured() {

  const products = [
    { id: 1, name: "Classic Gold Ring", price: 450, category: "Rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=500&q=80" },
    { id: 2, name: "Diamond Necklace", price: 1200, category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478514-4a11011d3702?w=500&q=80" },
    { id: 3, name: "Pearl Drop Earrings", price: 350, category: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80" },
    { id: 4, name: "Gold Chain Bracelet", price: 600, category: "Bracelets", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80" },
  ];
  return (
    /* Centered container with max-width for large screens */
    <>
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-4">

        <div className="flex justify-between items-end pb-4 md:pb-6">
          <div className="pr-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Featured Collection
            </h1>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-lg text-gray-600">
              Handpicked pieces for your timeless beauty
            </p>
          </div>

          <Link
            className="flex items-center gap-1 sm:gap-2 cursor-pointer shrink-0  mb-0.5"
            to={`/collection`}
          >
            <h2 className="text-xs sm:text-sm md:text-base font-semibold">
              View All
            </h2>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform hover:translate-x-1" />
          </Link>
        </div>

        {/* Responsive Grid: 2 on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-6">

          {products.map((product) => (

            /* The Card Wrapper */
            <Link
              key={product.id}
              to={`/collection`}
              className="flex flex-col bg-white border border-gray-100 rounded-sm p-3 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >

              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] bg-[#F8F6F0] md:h-[250px] rounded-sm overflow-hidden mb-3 sm:mb-4">
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

            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Featured
