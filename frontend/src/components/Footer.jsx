import React from 'react'
import { CreditCard, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'

const FeatureBar = () => {
    return (
        // Changed background to a very dark gray (almost black) for a premium feel
        <div className='w-full bg-[#111111]  mt-3 py-8 text-white border-y border-gray-800'>
            
            {/* Container matches your header/banner max-width */}
            <div className='mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
                
                {/* 1. Authentic */}
                <div className='flex items-center gap-3'>
                    <ShieldCheck className='w-8 h-8 text-white shrink-0' strokeWidth={1.5} />
                    <div className='font-sans text-sm'>
                        <p className='font-semibold text-white'>100% Authentic</p>
                        <p className='text-gray-400'>Jewellery</p>
                    </div>
                </div>

                {/* 2. Secure Payment */}
                <div className='flex items-center gap-3'>
                    <CreditCard className='w-8 h-8 text-white shrink-0' strokeWidth={1.5} /> 
                    <div className='font-sans text-sm'>
                        <p className='font-semibold text-white'>Secure Payment</p>
                        <p className='text-gray-400'>Options</p>
                    </div>
                </div>

                {/* 3. Returns */}
                <div className='flex items-center gap-3'>
                    <RefreshCcw className='w-8 h-8 text-white shrink-0' strokeWidth={1.5} />
                    <div className='font-sans text-sm'>
                        <p className='font-semibold text-white'>Easy Return</p>
                        <p className='text-gray-400'>& Exchange</p>
                    </div>
                </div>

                {/* 4. Shipping */}
                <div className='flex items-center gap-3'>
                    <Truck className='w-8 h-8 text-white shrink-0' strokeWidth={1.5} /> 
                    <div className='font-sans text-sm'>
                        <p className='font-semibold text-white'>Free Shipping</p>
                        <p className='text-gray-400'>Above ₹999</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeatureBar