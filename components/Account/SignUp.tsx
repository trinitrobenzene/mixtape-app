'use client';
import User from '@/src/models/User';
// import { setLogin } from '@/src/redux/features/User';
import { useAppDispatch } from '@/src/redux/hooks';
import { createUser } from '@/src/redux/services/user';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import 'react-notifications-component/dist/theme.css';
import { Notice, showElements } from './auxilary';
import { signIn } from 'next-auth/react';

const SignUp = ({ callback }: { callback: Function }) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const [user, setUser] = useState(new User());
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // console.log(user);
        dispatch(createUser(user)).then(resp => {
            if (resp.payload.email) {
                signIn('credentials', {
                    email: user.email,
                    password: user.password,
                    redirect: false,
                });
                Notice({
                    title: 'Success',
                    message: 'Thành công!',
                    type: 'info',
                });
                setTimeout(() => {
                    callback(true);
                    showElements();
                    route.push('/');
                }, 2000);
            } else {
                console.log(resp)
                // const { data } = resp.payload.response;
                Notice({
                    title: 'Warning',
                    message: 'Something went wrong...',
                    type: 'warning',
                });
            }
        });
        // dispatch(setLogin(true));
        // route.push('/');
    };

    const onSetUserInfor = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <h3>Sign Up</h3>
                <div className="form-control w-full py-3">
                    <label className="label">
                        <span className="label-text">Your name</span>
                    </label>
                    <input
                        value={user.name}
                        name="name"
                        type="text"
                        placeholder=""
                        className="input input-bordered w-full"
                        onChange={onSetUserInfor}
                        required
                    />
                </div>
                <div className="form-control w-full py-3">
                    <label className="label">
                        <span className="label-text">Your email</span>
                    </label>
                    <input
                        name="email"
                        value={user.email}
                        onChange={onSetUserInfor}
                        type="email"
                        placeholder=""
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control w-full py-3">
                    <label className="label">
                        <span className="label-text">Your password</span>
                    </label>
                    <input
                        name="password"
                        value={user.password}
                        onChange={onSetUserInfor}
                        type="password"
                        placeholder=""
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <p>
                        Already have an account?
                        <button
                            className="btn btn-link"
                            onClick={() => callback(true)}
                            type="button"
                        >
                            Sign In here
                        </button>
                    </p>
                    <div className="flex justify-end pt-5">
                        <input
                            type="submit"
                            value={'Sign Up'}
                            className="btn btn-outline btn-primary"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUp;
