'use client';
import {
    HouseDoorFill,
    CollectionFill,
    Upload,
    ChatLeftFill,
    Newspaper,
    HeartFill,
    List,
} from 'react-bootstrap-icons';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    // const { user } = useAppSelector(_ => _);
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
            url: '/library',
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

    // if (!user.logged) return <></>;

    return (
        <nav className="nav">
            <ul className="menu bg-main pt-8 px-4">
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={link.url}
                        className={`${
                            activeItem === i ? 'text-blue-300' : ''
                        } pb-3 flex gap-3 items-center hover:underline`}
                        onClick={() => setActiveItem(i)}
                        title={link.name}
                        shallow
                    >
                        {link.icon}
                        <span className="nav-link">{link.name}</span>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
