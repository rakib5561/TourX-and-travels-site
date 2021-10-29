import React from 'react';
import Banner from '../Banner/Banner';
import GetUpdates from '../GetUpdates/GetUpdates';
import Pakages from '../Pakages/Pakages';
import WhyTourX from '../WhyTrourX/WhyTourX';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Pakages></Pakages>
            <WhyTourX></WhyTourX>
            <GetUpdates></GetUpdates>
        </div>
    );
};

export default Home;