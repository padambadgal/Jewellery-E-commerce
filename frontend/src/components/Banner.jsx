import React from 'react';
import banner from '../assets/banner.jpeg';
// ❌ REMOVED: import { expess } from 'express'; (Not needed in React)

const Banner = () => {
    return (
        // 1. The parent needs 'relative' so the text can position itself inside it
        <div className='relative w-full overflow-hidden '>
            
            {/* 2. The Image (added object-cover so it doesn't stretch) */}
            <img 
                src={banner} 
                alt="Timeless Elegance" 
                className='w-full h-[250px] sm:h-[425px] md:h-[500px] lg:h-[600px] object-cover object-center' 
                // className='m-0 p-0 lg:h-[600px] md:h-[500px] h-[220px] sm:w-[425px] object-cover ' 

            />

            {/* 4. The Text Container (Absolute positioned to the left) */}
            <div className='absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white'>
                
                {/* Heading - Playfair Display */}
                <h1 className='font-display text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4'>
                    Timeless Elegance <br />
                    <span className='text-[#D4AF37]'>In Every Piece</span>
                </h1>

                {/* Paragraph - Poppins */}
                <p className='font-sans text-base text-sm md:text-lg  text-gray-200 max-w-md'>
                    Exquisite Jewellery for your <br/>
                    most special moments.
                </p>
                
                {/* Optional: Add a Shop Now button */}
                <div className='mt-8'>
                    <a href="/shop" className=' rounded-lg inline-block bg-[#d4af37] text-white px-8 py-3 font-sans uppercase tracking-widest text-sm font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors'>
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;