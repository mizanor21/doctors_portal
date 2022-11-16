import React from 'react';
import Banner from '../Banner/Banner';
import HeaderHighlight from '../HeaderHighlight/HeaderHighlight';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <HeaderHighlight></HeaderHighlight>
            <Services></Services>
        </div>
    );
};

export default Home;