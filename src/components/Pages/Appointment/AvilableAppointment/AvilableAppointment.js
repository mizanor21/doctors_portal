import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import { useQuery } from '@tanstack/react-query';
import PrivetRoute from '../../../../routes/Routes/PrivetRoute/PrivetRoute';

const AvilableAppointment = ({ selectedDate }) => {
    const [treatement, setTreatement] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOption?date=${date}`)
            .then(res => res.json())
    })

    return (
        <div className='container mx-auto my-10'>
            <p className='text-secondary text-xl text-center mt-10'>Available Appointments on <strong>{format(selectedDate, 'PP')}</strong></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    appointmentOptions.map(option => <AppointmentOption key={option._id} appointmentOption={option} setTreatement={setTreatement}></AppointmentOption>)
                }
            </div>
            {
                treatement &&
                <PrivetRoute>
                    <AppointmentModal
                        selectedDate={selectedDate}
                        treatement={treatement}
                        refetch={refetch}
                    ></AppointmentModal>
                </PrivetRoute>

            }
        </div>
    );
};

export default AvilableAppointment;