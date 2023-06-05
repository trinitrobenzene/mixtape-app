'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import SearchBox from './SearchBox';

const Header = () => {
    const onSearch = (value: string) => {
        console.log(value)
    }
    return (
        <header className="head flex justify-between">
            <SearchBox w={400} onSearch={onSearch} />
            <div className='flex items-center gap-2'>
                <p className='text-white'>Welcome Satori</p>
                <div className='rounded-full h-[44px] w-[44px] text-white bg-stone-200'></div>                
            </div>
        </header>
    );
};

export default Header;
