import React from 'react';
import BtnPrimary from '../../usesComponent/BtnPrimary';
import './contact.css'

const Contact = () => {
    return (
        <section>
            <div className='text-center contact py-10'>
                <fieldset className='border container mx-auto py-20 max-w-2xl'>
                    <legend className='text-primary text-xl font-bold'>Contact Us</legend>
                    <h1 className="text-3xl text-white mb-8">Stay connected with us</h1>
                    <input type="email" placeholder="Email address" className="input input-bordered input-accent w-full max-w-xs mb-5" data-aos="fade-up" data-aos-duration="1500" /><br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs mb-5" data-aos="fade-up" data-aos-duration="2000" /><br />
                    <textarea className="textarea textarea-accent w-full max-w-xs h-[130px] mb-5" placeholder="Your message" data-aos="fade-up" data-aos-duration="2500"></textarea><br />
                    <BtnPrimary>get started</BtnPrimary>
                </fieldset>
            </div>
        </section>
    );
};

export default Contact;