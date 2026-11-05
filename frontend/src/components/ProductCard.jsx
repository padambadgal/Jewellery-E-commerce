import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ProductCard = ({
  product,
  // onToggleWishlist,
  onAddToCart,
  loading,
  setLoading
}) => {

  const [wished, setWished] = useState([]);


  const handleToggleWishlist = (e) => {
    e.preventDefault()
    setWished(!wished);
  };
  return (
    <Card className="flex flex-col bg-white border border-gray-100 rounded-sm p-3 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Full-bleed image (pt-0 + no CardHeader above removes the top gap) */}

      <CardHeader className="flex flex-col flex-grow px-1">
        <Link to={`/collections/${product.id}`} className="relative w-full aspect-[4/5] bg-[#F8F6F0] md:h-[250px] rounded-sm overflow-hidden">

          {loading ? <Skeleton className="h-full w-full" /> : <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 hover:scale-110"
          />}


          {/* CardAction is a grid slot — override with aabsolute placement */}
          <CardAction className="absolute top-2 right-2 z-20">
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) =>
                handleToggleWishlist(e)}
              aria-pressed={wished}
              aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer"
            >
              <Heart
                className={`w-5 h-5 cursor-pointer transition-colors duration-200
                ${wished
                    ? 'fill-[#D4AF37] text-[#D4AF37]'
                    : 'text-[#D4AF37]'}
              `}
              />
            </Button>
          </CardAction>
        </Link>
        <CardTitle className="text-xs sm:text-sm md:text-base font-semibold mt-3 text-gray-800 truncate w-full">
          <h3>{product.name}</h3>
        </CardTitle>
        {/* {product.description && (
          <CardDescription className="line-clamp-2">
            {product.description}
          </CardDescription>
        )} */}
        <p className="text-sm md:text-base font-bold text-[#D4AF37] mt-auto">
          ${Number(product.price ?? 0).toFixed(2)}
        </p>
      </CardHeader>

      {/* <CardFooter className="mt-auto flex items-center justify-between gap-3">
        <span className="text-base font-bold text-[#D4AF37]">
          ${Number(product.price ?? 0).toFixed(2)}
        </span>
        <Button size="sm" onClick={() => onAddToCart?.(product)}>
          Add to cart
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;