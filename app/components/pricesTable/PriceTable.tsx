'use client'
import { prices } from '@/lib/data/prices';
import React from 'react';
import SinglePrice from './SinglePrice';

const PriceTable = () => {
    const pricesdata = prices;
    const handleBuyNow = (planId: string) => {
    const plan = prices.plans.find(p => p.id === planId);
    if (!plan) return;

    const phoneNumber = "8801886573319"; // Replace with your WhatsApp number
    const message = `Hello, I want to buy the "${plan.title}" plan.\nPrice: $${plan.price}\nReviews: ${plan.reviews} \nFeatures: ${plan.features.join(', ')}\n\nPlease provide me with more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
};

    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold text-center my-8'>
                    {pricesdata.service} - {pricesdata.currency}
                </h2>
            </div>

            <div className='max-w-6xl mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {pricesdata.plans.map((plan) => (
                        <SinglePrice key={plan.id} plan={plan} handleBuyPlan={(str: string) => handleBuyNow(str)} />
                    ))}
                </div>
                </div>

            
        </div>
    );
};

export default PriceTable;