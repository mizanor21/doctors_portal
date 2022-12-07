import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/images/dashboard-unscreen.gif';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center'>
                <img className='w-[700px]' src={img1} alt="" />
                <h1 className='text-4xl hover:text-primary'><Link to={'/dashboard/myappointment'}>My Appointment</Link></h1>
            </div>
        </div>
    );
};

export default Dashboard;