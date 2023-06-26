'use client';
import { STATUS } from '@/src/constant';
import { setUser } from '@/src/redux/features/User';
// import { setLogin } from '@/src/redux/features/User';
import { useAppDispatch } from '@/src/redux/hooks';
import { signIn } from '@/src/redux/services/user';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignIn = ({ callback }: { callback: Function }) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const [infor, setInfor] = useState({ password: '', email: '' });
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // dispatch(setLogin(true));
        route.push('/');

        if (!infor.email || !infor.password) {
            return;
        }
        dispatch(signIn(infor))
            .then(resp => {
                if (resp.payload === STATUS.OK) {
                    route.push('/');
                    console.log('Đăng nhập thành công!');
                    dispatch(setUser(infor.email));
                }
            })
            .then(() => {
                const main = document.querySelector('main');
                const head = document.querySelector('header');
                document.querySelector('nav')?.classList.remove('opacity-0');
                document
                    .querySelector('#playbar')
                    ?.classList.remove('opacity-0');
                main?.classList.add('active');
                main?.classList.remove('expand');
                head?.classList.remove('opacity-0');
            });
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
                    <button
                        className="btn btn-link"
                        onClick={() => callback(false)}
                        type="button"
                    >
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
