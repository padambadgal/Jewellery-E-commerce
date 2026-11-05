import React, { useState } from 'react';
import { Check, ChevronDown, CreditCard, Wallet, Banknote, Plus, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { OrderSummary } from '@/components/OrderSummary';
import { PaymentMethod } from '@/components/PaymentMethod';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  // --- ADDRESS STATE ---
  const emptyForm = {
    fullName: '', phone: '', email: '', address: '', city: '', state: '', zip: '', country: ''
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  // Initialize with a mock address so you can see the "Saved Addresses" view immediately
  const [addresses, setAddresses] = useState([
    {
      fullName: "John Doe",
      phone: "+91 9988554466",
      email: "johndoe@email.com",
      address: "123 Market Street",
      city: "Bangalore",
      state: "Karnataka",
      zip: "560001",
      country: "India"
    }
  ]);
  const [selectedAddress, setSelectedAddress] = useState(0);

  // --- ADDRESS HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setAddresses([...addresses, formData]);
    setSelectedAddress(addresses.length); // Auto-select the newly added address
    setFormData(emptyForm);
    setShowForm(false);
  };

  const handleDelete = (indexToDelete, e) => {
    e.stopPropagation(); // Prevent selecting the card when clicking delete
    const newAddresses = addresses.filter((_, i) => i !== indexToDelete);
    setAddresses(newAddresses);
    if (selectedAddress === indexToDelete) {
      setSelectedAddress(newAddresses.length > 0 ? 0 : null);
    } else if (selectedAddress > indexToDelete) {
      setSelectedAddress(selectedAddress - 1);
    }
  };

  const steps = [
    { id: 1, name: 'Shipping' },
    { id: 2, name: 'Payment' },
    { id: 3, name: 'Confirmation' }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="w-full max-w-7xl bg-white">

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Checkout</h1>

        {/* --- STEPPER --- */}
        <div className="flex items-center w-full max-w-2xl mx-auto mb-10 px-4">
          {steps.map((step, index) => {
            const isActive = index === 0; // Shipping is active based on your previous code

            return (
              <React.Fragment key={step.id}>

                {/* Step Circle & Label */}
                <div className="flex items-center gap-2 shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors
              ${isActive ? 'bg-[#B8860B] text-white' : 'bg-gray-100 text-gray-500 border border-gray-200'}`}
                  >
                    {/* Show Check icon for active step, otherwise show number */}
                    {isActive ? <Check className="w-4 h-4" strokeWidth={3} /> : step.id}
                  </div>
                  <span className={`text-sm ${isActive ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    {step.name}
                  </span>
                </div>

                {/* Connecting Line (Only render if it's NOT the last step) */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-[2px] bg-gray-200 mx-2 sm:mx-4"></div>
                )}

              </React.Fragment>
            );
          })}
        </div>

        {/* --- MAIN GRID --- */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT COLUMN: Shipping & Payment */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">

            {/* Shipping Address Card (DYNAMIC) */}
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              selectedAddress={selectedAddress}
              showForm={showForm}
              setShowForm={setShowForm}
              addresses={addresses}
              setSelectedAddress={setSelectedAddress}
              formData={formData}
              handleChange={handleChange}
              handleSave={handleSave}
            />
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="w-full lg:w-1/3">
            <OrderSummary selectedAddress={selectedAddress} />
          </div>

        </div>
      </div>
    </div>
  );
}