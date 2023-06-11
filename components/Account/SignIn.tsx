'use client';
import { setLogin } from '@/src/redux/features/User';
import { useAppDispatch } from '@/src/redux/hooks';
import { useRouter } from 'next/navigation';
import React from 'react';

const SignIn = ({ callback }: { callback: Function }) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(setLogin(true));
        route.push('/');
    };
    return (
        <form onSubmit={onSubmit}>
            <h3>Đăng nhập đê</h3>
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
                    Don't have account?
                    <button className='btn btn-link' onClick={() => callback(false)}>
                        Sign Up here!
                    </button>
                </p>
                <div className="flex justify-end pt-5">
                    <button
                        className="btn btn-outline btn-primary"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SignIn;
