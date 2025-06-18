'use client'
import React from 'react';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import Lottie from 'lottie-react';
import animationData from '@/public/lottie/Greview.json'; // Adjust the path as necessary

const Hero = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between max-w-[1280px] mx-auto min-h-screen items-center p-4 gap-8'>
            {/* Text Section */}
            <div className='space-y-4  text-center md:text-left max-w-[70%]'>
                <h1 className='text-4xl  sm:text-5xl lg:text-8xl font-bold text-blue-600 space-y-0.5'>
                    <span className='text-5xl text-black font-semibold'>Get best quality<br/></span>
                     google review
                </h1>
                <p className='text-gray-600  text-lg md:text-xl'>visible local commited to serve best quality google reviews to increase google ranking and grow bussiness reputation</p>
                
                <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4'>
                    <button className='bg-blue-600 cursor-pointer hover:text-blue-600 hover:bg-white drop-shadow-xl duration-300 text-white px-6 py-2 rounded-sm'>
                        Get Started
                    </button>
                    <button className='flex items-center gap-2 cursor-pointer bg-white text-green-600 hover:bg-green-600 hover:text-white duration-300 px-6 py-2 rounded-sm shadow'>
                        <FaSquareWhatsapp /> Connect WhatsApp
                    </button>
                </div>
            </div>

            {/* Animation Section */}
            <div className='w-full max-w-sm'>
                <Lottie animationData={animationData} loop={true} />
            </div>
        </div>

    );
};

export default Hero;