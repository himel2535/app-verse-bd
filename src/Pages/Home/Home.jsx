import React from 'react';
import Banner1 from '../Banner/Banner1';
import Banner2 from '../Banner/Banner2';
import TrendingApps from '../TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <div className='-mx-6 md:-mx-12'>
                <Banner2></Banner2>
            </div>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;
 