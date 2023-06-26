'use client';
import User from '@/src/models/User';
// import { setLogin } from '@/src/redux/features/User';
import { useAppDispatch } from '@/src/redux/hooks';
import { createUser } from '@/src/redux/services/user';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignUp = ({ callback }: { callback: Function }) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const [user, setUser] = useState(new User());
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(createUser(user));
        /* UserService.createUser(user)
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
        */
        // dispatch(setLogin(true));
        // route.push('/');
    };

    const onChangeUser = (e: React.BaseSyntheticEvent)=> {
        console.log(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Sign Up</h3>
            <div className="form-control w-full py-3">
                <label className="label">
                    <span className="label-text">Your name</span>
                </label>
                <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-control w-full py-3">
                <label className="label">
                    <span className="label-text">Your email</span>
                </label>
                <input
                    type="email"
                    placeholder=""
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-control w-full py-3">
                <label className="label">
                    <span className="label-text">Your password</span>
                </label>
                <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full"
                />
            </div>
            <div>
                <p>
                    Already have an account?
                    <button className='btn btn-link' onClick={() => callback(true)}>
                        Sign Up here!
                    </button>
                </p>
                <div className="flex justify-end pt-5">
                    <button
                        className="btn btn-outline btn-primary"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
