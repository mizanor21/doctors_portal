import React from 'react';
import { format } from 'date-fns';

const AppointmentModal = ({ selectedDate, treatement }) => {
    const { name, slots } = treatement;
    const date = format(selectedDate, 'PP');
    // console.log(slots)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        form.reset();

        const booking = {
            appointDate: date,
            treatement: treatement.name,
            patient: name,
            slot,
            email,
            phone
        }
        console.log(booking);
    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <label htmlFor="appointment-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 my-5'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder='Full name' className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder='email' className="input input-bordered w-full" />
                        <input name='phone' type="phone" placeholder='Phone number' className="input input-bordered w-full" />
                        <input type="submit" placeholder='' className='btn btn-accent' value="Submit" />
                    </form>
                </label>
            </label>
        </div>
    );
};

export default AppointmentModal;