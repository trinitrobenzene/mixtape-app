'use client';
import Track from '@/src/models/Track';
import ImageService from '@/src/redux/services/api/image';
import TrackService from '@/src/redux/services/api/track';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Row = () => {
	// const imgUrl = 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/5/6/4/6564372bd4a9df8add0125fe9fe4b226.jpg';
	const data = [
		{
			name: 'Bài hát 1',
			id: 1,
			img: 'empty',
			url: 'songlist',
			descript: 'Aliqua ad esse aliquip ea minim ad.',
		},
		{
			name: 'Bài hát 2',
			id: 2,
			img: 'empty',
			url: 'songlist',
			descript: 'Aliqua ad esse aliquip ea minim ad.',
		},
		{
			name: 'Bài hát 3',
			id: 3,
			img: 'empty',
			url: 'songlist',
			descript: 'Aliqua ad esse aliquip ea minim ad.',
		},
		{
			name: 'Bài hát 4',
			id: 4,
			img: 'empty',
			url: 'songlist',
			descript: 'Aliqua ad esse aliquip ea minim ad.',
		},
	];

	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgzMjY2MCwiZXhwIjoxNjk0MDE2NjYwfQ.nwZV3vu-XGhi6EQ0S7k_s0K60I9c_HCppDSunUXWPVI';

	const [trackList, setTrackList] = useState<Track[]>([]);
	const [imgList, setImgList] = useState<string[]>([]);
	useEffect(() => {
		TrackService.getByQuantity(0, 10, token)
			.then(resp => setTrackList(resp))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		for (const track of trackList) {
			if (track.coverImage[0]) {
				ImageService.getTrackCoverById(track.coverImage[0]._id, token)
					.then(res => {
						res &&
							setImgList(prev => [
								...prev,
								URL.createObjectURL(res),
							]);
					})
					.catch(err => console.log(err));
			}
		}
	}, [trackList]);

	return (
		<div className="py-4">
			<h2 className="font-semibold pb-2">Được phát gần đây</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{trackList.length > 0 &&
					trackList.map((d, index) => (
						<div
							className="col-auto rounded-lg shadow-xl p-3"
							key={index}
						>
							<figure>
								{/* <img src={imgUrl} alt="" width={'w-full'} /> */}
								{imgList[index] ? (
									<img
										src={imgList[index]}
										alt=""
										className="w-full h-[150px] rounded-md"
									/>
								) : (
									<div className="w-full h-[150px] rounded-md bg-stone-200"></div>
								)}
							</figure>
							<div className="card-body p-0 mt-2">
								<h5 className="font-semibold text-lg">
									<Link href={'/track/' + d.id} shallow>
										{d.name}
									</Link>
								</h5>
								<p className="garage-title">{d.description}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Row;
