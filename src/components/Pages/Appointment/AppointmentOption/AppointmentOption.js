import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatement }) => {
    const { name, slots } = appointmentOption;
    return (
        <div>
            <div className="card text-neutral-content shadow-xl py-10">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div className="card-actions justify-end">
                        <label disabled={slots.length === 0} onClick={() => setTreatement(appointmentOption)} htmlFor="appointment-modal" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;