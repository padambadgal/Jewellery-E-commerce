import React from 'react'

export const OrderSummary = (selectedAddress) => {

    // Order Summary Mock Data
    const orderDetails = {
        subtotal: 64998,
        shipping: 0,
        total: 64998,
    };


    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-6 ">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>

            <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">₹ {orderDetails.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-green-600">
                        {orderDetails.shipping === 0 ? 'Free' : `₹ ${orderDetails.shipping}`}
                    </span>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-gray-900">
                        ₹ {orderDetails.total.toLocaleString()}
                    </span>
                </div>
            </div>

            <button
                disabled={selectedAddress === null}
                className="w-full bg-[#B8860B] hover:bg-[#9c7209] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition-colors duration-200 cursor-pointer"
            >
                Place Order
            </button>
        </div>
    )
}
