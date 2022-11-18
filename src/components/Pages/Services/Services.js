import React from 'react';
import img1 from '../../../assets/images/cavity.png';
import img2 from '../../../assets/images/fluoride.png';
import img3 from '../../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className="text-center">
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className="flex justify-center">
                <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center ">
                    <div className="card card-compact text-center bg-base-100 py-14 shadow-xl">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <h2 className='font-bold text-xl mt-6'>Cavity</h2>
                        <div className="p-5">
                            <p>If a dog chews shoes whose shoes. If a dog chews shoes whose shoes</p>
                        </div>
                    </div>
                    <div className="card card-compact text-center bg-base-100 py-14 shadow-xl">
                        <figure><img src={img2} alt="Shoes" /></figure>
                        <h2 className='font-bold text-xl mt-6'>Fluoride</h2>
                        <div className="p-5">
                            <p>If a dog chews shoes whose shoes. If a dog chews shoes whose shoes</p>
                        </div>
                    </div>
                    <div className="card card-compact text-center bg-base-100 py-14 shadow-xl">
                        <figure><img src={img3} alt="Shoes" /></figure>
                        <h2 className='font-bold text-xl mt-6'>Whitening</h2>
                        <div className="p-5">
                            <p>If a dog chews shoes whose shoes. If a dog chews shoes whose shoes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;