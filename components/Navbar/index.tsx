import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	const links = [
		{
			icon: 'icon-1',
			name: 'Home',
			url: '/'
		},
		{
			icon: 'icon-2',
			name: 'Feeds',
			url: '/'
		},
		{
			icon: 'icon-3',
			name: 'Library',
			url: '/'
		},
		{
			icon: 'icon-4',
			name: 'Upload Song',
			url: '/'
		},
		{
			icon: 'icon-5',
			name: 'Liked Song',
			url: '/'
		},
		{
			icon: 'icon-6',
			name: 'Chat',
			url: '/'
		}
	]
	return (
		<nav className='nav'>
			<h1 className='text-2xl text-center'>
				Mixtape
			</h1>
			<ul className="menu bg-main w-full">
				{
					links.map((link, i) =>
						<Link key={i} href={link.url} className='my-2'>
							{link.name}
						</Link>
					)
				}
			</ul>
		</nav>
	)
}

export default Navbar