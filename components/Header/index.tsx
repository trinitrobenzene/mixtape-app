'use client';

import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { List } from 'react-bootstrap-icons';

import SearchBox from '../SearchBox';
import { hideElements } from '@/src/utils/account';
import style from '@/src/styles/header.module.scss';

const Header = () => {
    const { data: session } = useSession();

    const onSignIn = () => {
        hideElements();
        signIn();
    };

    const onSignOut = (e: React.SyntheticEvent) => {
        e.preventDefault();
        hideElements();
        signOut();
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
            <SearchBox onSearch={onSearch} />
            <div className="flex items-center gap-2 relative">
                <div className="text-white">
                    {session?.user && <em>{session.user.email}</em>}
                    {!session?.user && (
                        <div>
                            <em>You are not logging...</em>
                            <button
                                className="btn btn-active btn-link"
                                onClick={onSignIn}
                            >
                                Sign In here!
                            </button>
                        </div>
                    )}
                </div>
                <div id={style['user-action']}>
                    <div className="rounded-full h-[40px] w-[40px] text-white bg-stone-200"></div>
                    <ul className="bg-main p-2">
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
