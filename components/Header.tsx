'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setLogin } from '@/src/redux/features/User';
import style from '@/src/styles/header.module.scss';
import SearchBox from './SearchBox';
import { List } from 'react-bootstrap-icons';
import { useRouter } from 'next/navigation';

const Header = () => {
    const dispatch = useAppDispatch();
    const route = useRouter();
    const { user } = useAppSelector(_ => _);

    const onSignOut = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(setLogin(false));
        route.push('/account');
    };

    const onSearch = (value: string) => {
        console.log(value);
    };

    /**
     * toggle navbar expand/collapse status
     */
    const onCollapseNav = () => {
        const sideBar = document.querySelector('.nav');
        const main = document.querySelector('main');
        if (sideBar && main) {
            if (sideBar.classList.contains('minimize')) {
                sideBar.classList.remove('minimize');
                main.classList.remove('expand');
            } else {
                sideBar.classList.add('minimize');
                main.classList.add('expand');
            }
        }
    };

    return (
        /**
         * Cần sửa user.logged để lấy lại trạng thái đúng
         */
        <header className={`head`}>
            <div className="flex gap-4 text-white items-center">
                <button onClick={onCollapseNav} title="Expand/Collapse Navbar">
                    <List size={28} />
                </button>
                <h1 className="text-2xl text-center">
                    <Link href={'/'}>Mixtape</Link>
                </h1>
            </div>
            <SearchBox w={400} onSearch={onSearch} />
            <div className="flex items-center gap-2 relative">
                <p className="text-white">Welcome Satori</p>
                <div id={style['user-action']}>
                    <div className="rounded-full h-[40px] w-[40px] text-white bg-stone-200"></div>
                    <ul className="bg-main">
                        <li className="py-2 px-6">User profile</li>
                        <li className="py-2 px-6">
                            <Link href={'/account'} shallow onClick={onSignOut}>
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
