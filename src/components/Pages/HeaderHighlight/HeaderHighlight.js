import React from 'react';
import icon1 from '../../../assets/icons/clock.svg';
import icon2 from '../../../assets/icons/marker.svg';
import icon3 from '../../../assets/icons/phone.svg';

const HeaderHighlight = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto my-10 text-white'>
            <div className="card md:card-side bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-4 lg:px-8 lg:py-8 shadow-xl" data-aos="fade-right" data-aos-duration="3000">
                <figure><img src={icon1} alt="icon not found!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
            <div className="card md:card-side bg-accent px-4 py-4 lg:px-8 lg:py-8 shadow-xl" data-aos="fade-up" data-aos-duration="3000">
                <figure><img src={icon2} alt="icon not found!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="card md:card-side bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-4 lg:px-8 lg:py-8 shadow-xl" data-aos="fade-left" data-aos-duration="3000">
                <figure><img src={icon3} alt="icon not found!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderHighlight;