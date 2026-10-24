import React from 'react';
import Banner2 from '../assets/banner2.png';

const FooterBanner = () => {
  return (
    <div className="relative flex flex-col mx-4 md:mx-10 my-8 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
      
      {/* 
        MOBILE FIX: Added h-[300px] for mobile so it has a defined height.
        Kept all your sm:, md:, and lg: classes exactly the same.
      */}
      <img
        src={Banner2}
        alt="Pure Gold Jewellery"
        className="w-full h-[170px] sm:h-[200px] md:h-[300px] lg:h-[600px] object-cover object-center md:object-right rounded-xl md:rounded-2xl"
      />

      {/* Gradient: Made it slightly stronger on mobile so black text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent md:from-white/60 md:via-transparent"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:py-10 md:px-16 lg:px-24 text-black">
        
        {/* 
          MOBILE FIX: Changed text-xm to text-2xl. 
          Adjusted margin-bottom to mb-2 for mobile.
        */}
        <h1 className="font-display text-2xl sm:pt-2 sm:text-lg md:text-4xl lg:text-5xl font-semibold leading-[1.1] mb-2 sm:mb-3 md:mb-4">
          Pure Gold <br />
          <span className="text-[#D4AF37]">In Every Piece</span>
        </h1>

        {/* 
          MOBILE FIX: Fixed the conflicting sm:text-xl sm:text-base. 
          Changed max-w-xs to max-w-[220px] so it wraps beautifully on small phones.
        */}
        <p className="font-sans text-sm sm:text-base md:text-lg max-w-[220px] sm:max-w-xs md:max-w-md text-gray-800">
          Exquisite Jewellery for your <br className="hidden sm:block" />
          most special moments.
        </p>

        {/* Button */}
        <div className="mt-4 md:mt-8">
          <a 
            href="/shop" 
            className="rounded-lg inline-block bg-[#D4AF37] text-white px-5 sm:px-6 md:px-8 py-2 md:py-2.5 lg:py-3 font-sans uppercase tracking-widest text-xs md:text-sm font-semibold hover:bg-black transition-colors duration-300"
          >
            Shop Collection
          </a>
        </div>
      </div>

    </div>
  );
};

export default FooterBanner;