'use client';
import MyPostWidget from '@/components/Widget/MyPostWidget';
import PostsWidget from '@/components/Widget/PostsWidget';
import UserWidget from '@/components/Widget/UserWidget';
import { useEffect, useState } from 'react';
import st from '@/data-test/avatar1.jpg';
import { useSelector } from 'react-redux';
import Artists from '@/src/models/User';
import Image from 'next/image';
import TracksList from '@/components/List/TracksList';

const SocialPage = () => {
	const [user, setUser] = useState(null);
	const userId = '123';
	const artistTest: Artists = {
		id: '1',
		name: 'Son Tung',
		email: 'mymail@gmail.com',
		avatar: 'st',
		isAdmin: false,
		numberOfPlays: 3,
		numberOfFollowings: 10,
		numberOfFollowers: 6,
		numberOfReports: 1,
		createdAt: '12/02/2021',
		password: '123',
	};
	const artist = artistTest;

	/* const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };
 */
	/*   useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 */
	// if (!user) return null;

	return (
		<div>
			<div className="bg-gradient-to-r from-indigo-500 h-64">
				<div className="flex flex-row items-center">
					<Image
						src={st}
						alt="img"
						className="rounded-full ml-8 mt-24 w-32 h-32"
					></Image>
					<div className="mt-24 mobile:mx-3">
						<p
							className="text-black-300 capitalize indent-6 font-bold text-2xl mb-6 
          cursor-pointer line-clamp-1 mobile:text-sm"
						>
							{artist?.name}
						</p>
						<p
							className="text-black-400 text-center capitalize indent-6 font-bold text-sm mobile:text-xs 
            hover:underline cursor-pointer"
						>
							{artist.numberOfFollowers} followers | {artist.numberOfFollowings}{' '}
							followings | {artist.numberOfPlays} plays
						</p>
					</div>
				</div>
				<div className="flex justify-end gap-4">
					<button className="hover:bg-sky-700 border-4 rounded-full border-black-500 w-48 p-1.5 text-center">
						Follow
					</button>
					<button className="hover:bg-sky-700 border-4 rounded-full border-black-500 w-48 p-1.5 text-center">
						More
					</button>
				</div>
			</div>
			<div className="box-border">
				<div className="flex flex-row w-full p-8 block gap-8 justify-center">
					<div className="basis-4/12">
						<UserWidget
							userId={userId}
							picturePath={/* ser.picturePath */ ''}
						/>
						<div className="box-content my-8 mx-0" />
					</div>
					<div className="box-border basis-7/12	mt-8">
						<MyPostWidget picturePath={/* user.picturePath */ ''} />
						<div className="box-border mx-0 my-8" />
						<PostsWidget userId={userId} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialPage;
