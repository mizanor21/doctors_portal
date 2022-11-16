import React from 'react';
import icon1 from '../../../assets/icons/quote.svg';
import person1 from '../../../assets/images/people1.png';
import person2 from '../../../assets/images/people2.png';
import person3 from '../../../assets/images/people3.png';

const PatientFeedback = () => {
    return (
        <section className='container mx-auto my-20'>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h1 className="text-3xl">What Our Patients Says</h1>
                </div>
                <div className='w-[200px]'>
                    <img src={icon1} alt="" className='' />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 md:m-0 lg:m-0">
                <div className="shadow-lg p-10 w-[380px] rounded-lg">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="flex items-center mt-8">
                        <img src={person1} alt="" className='mr-5' />
                        <div className="">
                            <h3 className='text-xl font-bold'>Winson Herry</h3>
                            <h5 className='text-lg'>California</h5>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg p-10 w-[380px] rounded-lg">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="flex items-center mt-8">
                        <img src={person2} alt="" className='mr-5' />
                        <div className="">
                            <h3 className='text-xl font-bold'>Winson Herry</h3>
                            <h5 className='text-lg'>Dubai</h5>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg p-10 w-[380px] rounded-lg">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="flex items-center mt-8">
                        <img src={person3} alt="" className='mr-5' />
                        <div className="">
                            <h3 className='text-xl font-bold'>Winson Herry</h3>
                            <h5 className='text-lg'>Dhaka</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientFeedback;