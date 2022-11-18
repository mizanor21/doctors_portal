import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvilableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='container mx-auto my-10'>
            <p className='text-secondary text-xl text-center mt-10'>Available Appointments on <strong>{format(selectedDate, 'PP')}</strong></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    appointmentOptions.map(option => <AppointmentOption key={option._id} appointmentOption={option}></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvilableAppointment;