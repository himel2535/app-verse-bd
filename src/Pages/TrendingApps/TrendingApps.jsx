import React from 'react';
import { useLoaderData } from 'react-router';

const TrendingApps = () => {
    const apps=useLoaderData()
    // console.log(apps)
    return (
        <div className='my-7 text-center'>
            <h1 className='font-semibold text-2xl mb-1'>Trending Apps</h1>
            <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>

            {
                apps.map(app=>console.log(app.image))
            }
            
        </div>
    );
};

export default TrendingApps;