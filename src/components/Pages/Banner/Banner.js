import React from 'react';
import img1 from '../../../assets/images/chair.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner py-28 '>
            <div className=" container mx-auto">
                <div className=" lg:flex items-center mx-5 md:mx-0 lg:mx-0">
                    <div className='lg:w-1/2 mb-5 lg:mb-0 '>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                    <div className="lg:w-1/2">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;