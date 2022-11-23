import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const AppointmentModal = ({ selectedDate, treatement, refetch }) => {
    const { name, slots } = treatement;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);
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

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // console.log(data);
                    toast.success('Successfully appointment booked!')
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })
            .catch(error => console.error(error));
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
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder='Full name' className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder='email' className="input input-bordered w-full" />
                        <input name='phone' defaultValue={user?.phone} type="phone" placeholder='Phone number' className="input input-bordered w-full" />
                        <input type="submit" placeholder='' className='btn btn-accent' value="Submit" />
                    </form>
                </label>
            </label>
        </div>
    );
};

export default AppointmentModal;