import React, { useState } from 'react';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvilableAppointment from './AvilableAppointment/AvilableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentHeader>
            <AvilableAppointment selectedDate={selectedDate}></AvilableAppointment>
        </div>
    );
};

export default Appointment;