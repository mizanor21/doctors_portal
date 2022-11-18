import React from 'react';
import img1 from '../../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div>
            <div className=" my-24">
                <div className="lg:flex justify-center container mx-auto">
                    <div className="w-full lg:w-1/2 md:mr-5">
                        <img src={img1} alt='' className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className=' flex items-center lg:w-1/2 mt-10 md:mt-0'>
                        <div className="">
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;