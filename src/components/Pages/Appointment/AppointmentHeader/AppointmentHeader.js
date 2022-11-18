import React, { } from 'react';
import chair from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import './AppointmentHeader.css';

const AppointmentHeader = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='appointment-header md:py-20'>
            <div className="container mx-auto">
                <div className="lg:flex flex-col lg:flex-row-reverse items-center">
                    <div className='w-full md:w-1/2'>
                        <img src={chair} alt='img not found!' className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                        <div className=''>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentHeader;