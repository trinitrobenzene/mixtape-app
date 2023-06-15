'use client';
import React from 'react'
import style from '@/src/styles/account.module.scss';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setLogin } from '@/src/redux/features/User';
import { useRouter } from 'next/navigation';

const Account = () => {
    const dispatch = useAppDispatch();
    const route = useRouter()

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(setLogin(true));
        route.push('/');
    }

    return (
        <div className={style.account}>
            <div className='p-4 w-3/5 m-auto grid grid-cols-3'>
                <div className='col-span-1 bg-purple-600 p-6'>
                    <h1>Welcome to Mixtape</h1>
                    <p className='py-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit placeat cumque modi repudiandae maiores
                    </p>
                    <button className="btn btn-primary rounded-3xl">Read more</button>
                </div>
                <div className='col-span-2 p-6 bg-white'>
                    <h1>Đăng nhập đê</h1>
                    <form>
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
                        <div className='flex justify-end pt-5'>
                            <button className='btn btn-outline btn-primary' onClick={onSubmit}>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account