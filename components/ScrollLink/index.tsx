import React from 'react';

interface props {
    href: string;
    children: React.ReactNode;
}

export default function ScrollLink({ href, children }: props) {
    const handleScroll = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, '');

        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <a href={href} onClick={handleScroll}>
            {children}
        </a>
    );
}
