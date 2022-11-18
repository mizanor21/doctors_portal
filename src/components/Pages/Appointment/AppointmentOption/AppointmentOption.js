import React from 'react';
import BtnPrimary from '../../../usesComponent/BtnPrimary';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div>
            <div className="card text-neutral-content shadow-xl py-10">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div className="card-actions justify-end">
                        <BtnPrimary>Book Appointment</BtnPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;