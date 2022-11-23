import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created Successfully!')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserInfo(data?.name, data?.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error)
                toast(error.message)
            })
    }

    const saveUserInfo = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Save user: ', data)
                navigate('/');
            })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="shadow-2xl rounded-xl p-10">
                <h1 className='text-xl text-center'>Signup</h1>
                <div className="grid grid-cols-1 gap-4">
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Full Name <span className='text-red-700'>*</span></span>
                            </label>
                            <input type="text"{...register("name", { required: "Full name is required" })} className="input input-bordered w-full" />

                            {errors.fullName && <small className='text-red-600'>{errors.fullName?.message}</small>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email <span className='text-red-700'>*</span></span>
                            </label>
                            <input type="email"{...register("email", { required: "Email address is required" })} className="input input-bordered w-full" />

                            {errors.email && <small className='text-red-600'>{errors.email?.message}</small>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password <span className='text-red-700'>*</span></span>
                            </label>
                            <input type="password"{...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must 6 character or long' }, pattern: { value: /(?=.*[!#$%&?@ "])/, message: 'Added at list one special character' } })} className="input input-bordered w-full" />

                            {errors.password && <small className='text-red-600'>{errors.password?.message}</small>}
                        </div>
                        <input type="submit" className='btn btn-accent text-white w-full mt-5' />
                    </form>
                    <div className="text-center">
                        <small>Already have an account? <Link to={'/login'} className='text-primary'>Please Login</Link></small>
                        <div className="divider">OR</div>
                    </div>
                    <button className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;