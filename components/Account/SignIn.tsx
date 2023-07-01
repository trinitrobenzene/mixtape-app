'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { useAppDispatch } from '@/src/redux/hooks';
import { showElements } from '@/src/utils/account';

const SignInPage = ({ callback }: { callback: Function }) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const [infor, setInfor] = useState({ password: '', email: '' });
    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        // dispatch(setLogin(true));
        // route.push('/');

        if (!infor.email || !infor.password) {
            return;
        }
        /* dispatch(signIn(infor))
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
            }); */

        const resp = await signIn('credentials', {
            email: infor.email,
            password: infor.password,
            redirect: false,
            callbackUrl: '/'
        });

        if (resp && resp.ok) {
            showElements();
        }
    };

    const onSetInfor = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;
        setInfor({ ...infor, [name]: value });
    };

    return (
        <form onSubmit={onSubmit}>
            <h3>Đăng nhập đê</h3>
            <div className="form-control w-full py-3">
                <label className="label">
                    <span className="label-text">Your email</span>
                </label>
                <input
                    value={infor.email}
                    onChange={onSetInfor}
                    type="email"
                    name="email"
                    placeholder=""
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-control w-full py-3">
                <label className="label">
                    <span className="label-text">Your password</span>
                </label>
                <input
                    type="password"
                    name="password"
                    value={infor.password}
                    onChange={onSetInfor}
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

export default SignInPage;
