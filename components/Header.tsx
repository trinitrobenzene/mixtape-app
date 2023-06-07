'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import SearchBox from './SearchBox';

const Header = () => {
    const onSearch = (value: string) => {
        console.log(value)
    }
    return (
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
};

export default Header;
