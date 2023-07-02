'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import links from './items';

const Navbar = () => {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<nav className="nav">
			<ul className="menu bg-main pt-8">
				{links.map((link, i) => (
					<li key={i} className={`${activeItem === i ? 'active' : ''} my-1`}>
						<Link
							href={link.url}
							className={`flex gap-2 items-center`}
							onClick={() => setActiveItem(i)}
							title={link.name}
							shallow={true}
						>
							{link.icon}
							<span className="nav-link">{link.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
