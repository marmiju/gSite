import { portfolio } from '@/lib/data/portfolio';
import React from 'react';

const Portfolio = () => {
    return (
        <div className='max-w-6xl mx-auto p-4 justify-center mt-20 '>
            <h3 className='text-3xl font-semibold text-blue-600'>{portfolio.title}</h3>
            <p>{portfolio.summary}</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto '>
                {
                    portfolio.projects.map((project,index) =>(
                        <div key={index} className=' border border-slate-200 rounded shadow p-8'>
                            <h4 className='text-2xl font-bold '>{project.client}</h4>
                            <div className='text-gray-700  mb-2'>
                                <p >Business Type: {project.business_type}</p>
                            <p className='text-sm'>Reviews Delivered: {project.reviews_delivered}</p>
                            <p>Location: {project.location}</p>
                            <p>Features:</p>
                            <ul>
                                {
                                    project.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))
                                }
                            </ul>
                            <p>Result: {project.result}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Portfolio;