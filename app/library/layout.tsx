'use client';
import React from 'react';
import style from '@/src/styles/library.module.scss';
import ScrollLink from '@/components/ScrollLink';

const Library = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ul className={style.nav}>
                <li>
                    <ScrollLink href={'#library'}>Library</ScrollLink>
                </li>
                <li className='border-x border-gray-200'>
                    <ScrollLink href={'#artist'}>Artist</ScrollLink>
                </li>
                <li>
                    <ScrollLink href={'#album'}>Album</ScrollLink>
                </li>
            </ul>
            <div>{children}</div>
        </>
    );
};

export default Library;
