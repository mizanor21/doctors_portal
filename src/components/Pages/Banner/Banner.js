import React from 'react';
import img1 from '../../../assets/images/chair.png';
import BtnPrimary from '../../usesComponent/BtnPrimary';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner lg:py-12 '>
            <div className=" container mx-auto">
                <div className=" lg:flex items-center">
                    <div className='lg:w-1/2 mb-5 lg:mb-0 '>
                        <div className="lg:w-1/2">
                            <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                        </div>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <BtnPrimary>get started</BtnPrimary>
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