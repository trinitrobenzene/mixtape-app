'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import SearchBox from './SearchBox';

const Header = () => {
    const onSearch = (value: string) => {
        console.log(value)
    }
    return (
        <header className="p-4 bg-main">
            <SearchBox w={400} onSearch={onSearch} />
        </header>
    );
};

export default Header;
