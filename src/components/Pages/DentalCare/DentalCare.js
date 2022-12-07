import React from 'react';
import img1 from '../../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div>
            <div className=" my-24">
                <div className="lg:flex justify-center container mx-auto">
                    <div className="w-full lg:w-1/2 md:mr-5" data-aos="zoom-in" data-aos-duration="3000">
                        <img src={img1} alt='' className="rounded-lg shadow-2xl lg:w-[650px] lg:h-[650px]" />
                    </div>
                    <div className=' flex items-center lg:w-1/2 mt-10 md:mt-0' data-aos="fade-left" data-aos-duration="3000">
                        <div className="">
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <p className="pb-6">There are 32 permanent teeth: one pair each of upper and lower central incisors, lateral incisors, canines, first bicuspids, second bicuspids, first molars, second molars, and third molars (wisdom teeth). Wisdom teeth, however, vary—not everyone gets all four wisdom teeth, and some people do not get any wisdom teeth.</p>
                            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;