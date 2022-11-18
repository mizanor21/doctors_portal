import React from 'react';
import { format } from 'date-fns';

const AvilableAppointment = ({ selectedDate }) => {
    return (
        <div>
            <p className='text-secondary text-xl text-center my-10'>Available Appointments on <strong>{format(selectedDate, 'PP')}</strong></p>
        </div>
    );
};

export default AvilableAppointment;