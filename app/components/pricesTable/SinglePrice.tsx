'use client'
import { PricePlan } from '@/lib/data/prices';
import React from 'react';

const SinglePrice = ({ plan,handleBuyPlan}: { plan: PricePlan, handleBuyPlan :(str:string)=> void }) => {
    return (
        <div key={plan.id} className='bg-white border border-slate-100 shadow rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>{plan.title}</h3>
            <p className='text-2xl font-bold mb-4'>${plan.price}</p>
            <p className='text-gray-600 mb-4'>Reviews: {plan.reviews}</p>
            <ul className='list-disc pl-5 mb-4'>
                {plan.features.map((feature, index) => (
                    <li key={index} className='text-gray-700'>{feature}</li>
                ))}
            </ul>
            <button
                onClick={() => handleBuyPlan(plan.id)}
                className='bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-full'>
                Buy Now
            </button>
        </div>
    );
};

export default SinglePrice;