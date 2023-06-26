'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
// import { setLogin } from '@/src/redux/features/User';
import style from '@/src/styles/header.module.scss';
import SearchBox from './SearchBox';
import { useRouter } from 'next/navigation';

const Header = () => {
    const dispatch = useAppDispatch();
    const route = useRouter();
    const { user } = useAppSelector(_ => _);

    const onSignOut = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // dispatch(setLogin(false));
        route.push('/account');
        const main = document.querySelector('main');
        const head = document.querySelector('header');
        document.querySelector('nav')?.classList.add('opacity-0');
        document.querySelector('#playbar')?.classList.add('opacity-0'); 
        main?.classList.remove('active');
        main?.classList.remove('expand');
        head?.classList.add('opacity-0');
    };

    const onSearch = (value: string) => {
        console.log(value);
    };

    return (
        /**
         * Cần sửa user.logged để lấy lại trạng thái đúng
         */
        <header className={`head ${user.logged ? '' : 'left-0 w-full'}`}>
            <SearchBox w={400} onSearch={onSearch} />
            <div className="flex items-center gap-2 relative">
                <p className="text-white">
                    Welcome {user.infor.email.split('@')[0]}
                </p>
                <div id={style['user-action']}>
                    <div className="rounded-full h-[40px] w-[40px] text-white bg-stone-200"></div>
                    <ul className="bg-main">
                        <li className="py-2 px-6">User profile</li>
                        <li className="py-2 px-6">
                            <Link shallow href={'/account'} onClick={onSignOut}>
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
