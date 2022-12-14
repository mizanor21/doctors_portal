import React from 'react';
import img1 from '../../../assets/images/doctor.png';
import BtnPrimary from '../../usesComponent/BtnPrimary';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className="lg:mt-48 mx-5">
                <div className="lg:flex justify-center container mx-auto">
                    <div className="w-1/2 hidden lg:block" data-aos="fade-up" data-aos-duration="3000">
                        <img src={img1} alt='' className="-mt-40 h-[800px]" />
                    </div>
                    <div className=' flex items-center lg:w-1/2 py-10 lg:py-36' data-aos="fade-up" data-aos-duration="3000">
                        <div className="">
                            <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                            <h1 className="text-5xl font-bold my-5 text-white">Make an appointment Today</h1>
                            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <BtnPrimary>Get Started</BtnPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;