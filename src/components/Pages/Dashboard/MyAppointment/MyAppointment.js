import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () =>
            fetch(url)
                .then(res => res.json())
    })

    return (
        <div className="overflow-x-auto m-10">
            <h1 className='text-2xl mb-5'>My Appointment - <strong className='text-3xl'>{user?.displayName}</strong></h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{booking?.treatement}</td>
                            <td>{booking?.appointDate}</td>
                            <td>{booking?.slot}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;