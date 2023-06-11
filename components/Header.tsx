'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setLogin } from '@/src/redux/features/User';
import style from '@/src/styles/header.module.scss'
import SearchBox from './SearchBox';

const Header = () => {
    const dispatch = useAppDispatch();
    const onSearch = (value: string) => {
        console.log(value)
    }
    const { user } = useAppSelector(_ => _);

    const onSignOut = () => {
        dispatch(setLogin(false))
    }

    return (
<<<<<<< HEAD
        /**
         * Cần sửa user.logged để lấy lại trạng thái đúng
         */
        <header className={`head ${user.logged?'':'left-0 w-full'}`}>
            <SearchBox w={400} onSearch={onSearch} />
            <div className='flex items-center gap-2 relative'>
                <p className='text-white'>Welcome Satori</p>
                <div id={style['user-action']}>
                    <div className='rounded-full h-[44px] w-[44px] text-white bg-stone-200'>
                    </div>
                    <ul className='bg-main'>
                        <li className='py-2 px-6'>User profile</li>
                        <li className='py-2 px-6'>
                            <Link href={'/account'} onClick={onSignOut}>
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
=======
    <header className="p-4 bg-gray-300">
		<SearchBox w={400} onSearch={onSearch} />
      <Link href="/">Mixtape</Link>
      &nbsp;
      <Link href="/songlist">SongList</Link>
      &nbsp;
      <Link href="/songpage">SongPage</Link>
      &nbsp;
    </header>
  );
>>>>>>> 21112ee156d55d6c89217a82a8b0f27419ebaa12
};

export default Header;
