import React from 'react'
import { Check, ChevronDown, CreditCard, Wallet, Banknote, Plus, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
export const PaymentMethod = (
    {
        selectedAddress,
        setSelectedAddress,
        showForm,
        setShowForm,
        formData,
        setFormData,
        handleChange,
        handleSave,
        addresses,
        setAddresses,
        paymentMethod,
        setPaymentMethod
    }
) => {
    return (
        <>
            {/* Shipping Address Card (DYNAMIC) */}
            < div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm" >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Shipping Address</h2>
                </div>

                {
                    showForm ? (
                        // --- ADD NEW ADDRESS FORM ---
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="fullname">Full Name</Label>
                                    <Input value={formData.fullName} name="fullName" onChange={handleChange} id="fullname" required placeholder="John Doe" />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input value={formData.phone} name="phone" onChange={handleChange} id="phone" required placeholder="+91 9988554466" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input value={formData.email} name="email" onChange={handleChange} id="email" type="email" required placeholder="rahul76@email.com" />
                            </div>
                            <div>
                                <Label htmlFor="address">Address</Label>
                                <Input value={formData.address} name="address" onChange={handleChange} id="address" required placeholder="123 street, Area" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="city">City</Label>
                                    <Input value={formData.city} name="city" onChange={handleChange} id="city" required placeholder="Amritsar" />
                                </div>
                                <div>
                                    <Label htmlFor="state">State</Label>
                                    <Input value={formData.state} name="state" onChange={handleChange} id="state" required placeholder="Punjab" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="zip">Zip Code</Label>
                                    <Input value={formData.zip} name="zip" onChange={handleChange} id="zip" required placeholder="155745" />
                                </div>
                                <div>
                                    <Label htmlFor="country">Country</Label>
                                    <Input value={formData.country} name="country" onChange={handleChange} id="country" required placeholder="India" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <Button type="submit" className="w-full sm:w-auto bg-[#B8860B] hover:bg-[#9c7209]">Save & Continue</Button>
                                {addresses.length > 0 && (
                                    <Button type="button" variant="outline" onClick={() => { setShowForm(false); setFormData(emptyForm) }} className="w-full sm:w-auto">
                                        Cancel
                                    </Button>
                                )}
                            </div>
                        </form>
                    ) : (
                        // --- SAVED ADDRESSES LIST ---
                        <div className="space-y-4">
                            {addresses.length === 0 && (
                                <p className="text-sm text-gray-500">No addresses saved yet.</p>
                            )}

                            {addresses.map((addr, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedAddress(index)}
                                    className={`border p-4 rounded-lg cursor-pointer relative transition-colors ${selectedAddress === index
                                        ? 'border-[#B8860B] bg-[#FDF8EE]'
                                        : 'border-gray-200 hover:border-[#B8860B]/50'
                                        }`}
                                >
                                    <p className="font-medium text-gray-900">{addr.fullName}</p>
                                    <p className="text-sm text-gray-600">{addr.phone} | {addr.email}</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {addr.address}, {addr.city}, {addr.state} - {addr.zip}, {addr.country}
                                    </p>

                                    <button
                                        onClick={(e) => handleDelete(index, e)}
                                        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>

                                    {/* Selected Checkmark */}
                                    {selectedAddress === index && (
                                        <div className="absolute top-3 right-10 w-4 h-4 bg-[#B8860B] rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            <Button
                                variant="outline"
                                className="cursor-pointer w-full border-dashed border-gray-300 text-gray-600 hover:text-[#B8860B] hover:border-[#B8860B] hover:bg-[#FDF8EE]"
                                onClick={() => setShowForm(true)}
                            >
                                <Plus className="w-4 h-4 mr-2" /> Add New Address
                            </Button>
                        </div>
                    )
                }
            </div >

            {/* Payment Method Card */}
            < div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm" >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Payment Method</h2>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
                    {/* Option 1: Credit Card */}
                    <div
                        onClick={() => setPaymentMethod('card')}
                        className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-100 transition-colors
                    ${paymentMethod === 'card' ? 'bg-[#FDF8EE]' : 'hover:bg-gray-50'}`}
                    >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                    ${paymentMethod === 'card' ? 'border-[#B8860B]' : 'border-gray-300'}`}>
                            {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-[#B8860B]" />}
                        </div>
                        <CreditCard className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-[#B8860B]' : 'text-gray-400'}`} />
                        <span className={`text-sm ${paymentMethod === 'card' ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                            Credit/Debit Card
                        </span>
                    </div>

                    {/* Option 2: UPI / Wallet */}
                    <div
                        onClick={() => setPaymentMethod('upi')}
                        className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-100 transition-colors
                    ${paymentMethod === 'upi' ? 'bg-[#FDF8EE]' : 'hover:bg-gray-50'}`}
                    >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                    ${paymentMethod === 'upi' ? 'border-[#B8860B]' : 'border-gray-300'}`}>
                            {paymentMethod === 'upi' && <div className="w-2.5 h-2.5 rounded-full bg-[#B8860B]" />}
                        </div>
                        <Wallet className={`w-5 h-5 ${paymentMethod === 'upi' ? 'text-[#B8860B]' : 'text-gray-400'}`} />
                        <span className={`text-sm ${paymentMethod === 'upi' ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                            UPI / Wallets
                        </span>
                    </div>

                    {/* Option 3: Cash on Delivery */}
                    <div
                        onClick={() => setPaymentMethod('cod')}
                        className={`flex items-center gap-3 p-4 cursor-pointer transition-colors
                    ${paymentMethod === 'cod' ? 'bg-[#FDF8EE]' : 'hover:bg-gray-50'}`}
                    >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                    ${paymentMethod === 'cod' ? 'border-[#B8860B]' : 'border-gray-300'}`}>
                            {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-[#B8860B]" />}
                        </div>
                        <Banknote className={`w-5 h-5 ${paymentMethod === 'cod' ? 'text-[#B8860B]' : 'text-gray-400'}`} />
                        <span className={`text-sm ${paymentMethod === 'cod' ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                            Cash on Delivery
                        </span>
                    </div>
                </div>
            </div >
        </>
    )
}
