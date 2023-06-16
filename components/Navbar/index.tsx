'use client';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import {
    HouseDoorFill,
    CollectionFill,
    Upload,
    ChatLeftFill,
    Newspaper,
    HeartFill,
} from 'react-bootstrap-icons';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const { user } = useAppSelector(_ => _);
    const [activeItem, setActiveItem] = useState(0);

    const links = [
        {
            name: 'Home',
            icon: <HouseDoorFill size={24} />,
            url: '/',
            active: false,
        },
        {
            name: 'Feed',
            icon: <Newspaper size={24} />,
            url: '/',
            active: false,
        },
        {
            name: 'Library',
            icon: <CollectionFill size={24} />,
            url: '/',
            active: false,
        },
        {
            name: 'Upload Song',
            icon: <Upload size={24} />,
            url: '/upload',
            active: false,
        },
        {
            name: 'Liked Song',
            icon: <HeartFill size={24} />,
            url: '/',
            active: false,
        },
        {
            name: 'Chat',
            icon: <ChatLeftFill size={24} />,
            url: '/',
            active: false,
        },
    ];

    if (!user.logged) return <></>;

    return (
        <nav className="nav">
            <h1 className="text-2xl text-center">Mixtape</h1>
            <ul className="menu bg-main w-full">
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={link.url}
                        className={`${
                            activeItem === i ? 'text-blue-300' : ''
                        } pb-3 flex gap-3 items-center hover:underline`}
                        onClick={() => setActiveItem(i)}
                        shallow
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
