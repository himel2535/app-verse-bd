import React from 'react';
import Banner1 from '../Banner/Banner1';
import Banner2 from '../Banner/Banner2';

const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <div className='-mx-10 md:-mx-12'>
                <Banner2></Banner2>
            </div>
        </div>
    );
};

export default Home;