'use client';
import Artist from '@/components/Card/Artist';
import Playlist from '@/components/Card/Playlist';
import React, { useState, useEffect } from 'react';

const Library = () => {
	const [size, setSize] = useState(3);
	useEffect(() => {
		const handleResize = () => {
			const width = document.querySelector('main')?.offsetWidth;
			if (width && width <= 600) setSize(1);
			else if (width && width <= 768) setSize(2);
			else if (width && width <= 992) setSize(3);
			else if (width && width >= 1200) setSize(4);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [size]);

	return (
		<>
			<section id="playlist" className="my-8">
				<h2 className="py-4">Library</h2>
				<div className="flex gap-3 md:gap-4 lg:gap-6">
					<div className="bg-stone-200 rounded-md w-[240px] md:w-[360px] h-[300px]"></div>
					{Array(size)
						.fill(0)
						.map((i, idx) => (
							<Playlist key={idx} />
						))}
				</div>
			</section>
			<section id="artist" className="my-8">
				<h2 className="py-4">Artist</h2>
				<div className="flex gap-6">
					{Array(size + 1)
						.fill(0)
						.map((i, idx) => (
							<Artist key={idx} name="YOASOBI" href="/" description="Artist" />
						))}
				</div>
			</section>
			<section id="album" className="my-8">
				<h2 className="py-4">Album</h2>
				<div className="flex gap-6">
					{Array(size + 2)
						.fill(0)
						.map((i, idx) => (
							<Playlist key={idx} />
						))}
				</div>
			</section>
		</>
	);
};

export default Library;
