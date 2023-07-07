import Artists from '@/src/models/User';
import Track from '@/src/models/Track';
import st from '@/data-test/avatar1.jpg';
import Image from 'next/image';
import TracksList from '@/components/List/TracksList';
import { tracks } from '@/data-test/tracks';

const artistTest: Artists = {
	id: '1',
	name: 'Son Tung',
	email: 'mymail@gmail.com',
	avatar: st,
	isAdmin: false,
	numberOfPlays: 3,
	numberOfFollowings: 10,
	numberOfFollowers: 6,
	numberOfReports: 1,
	createdAt: '12/02/2021',
	password: '123',
};

function ArtistProfile({
	data,
	tracks,
	counts,
}: {
	data: Artists;
	tracks: Track[];
	counts: number;
}) {
	const artist = artistTest;
	counts = 5;
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
							{artist!.name}
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
			<div className="mt-12">
				<h1 className="px-8 tablet:px-6 mobile:px-4 text-xl font-ProximaBold mb-6 mobile:text-base">
					Popular Tracks
				</h1>
				<TracksList tracks={tracks} />
			</div>
		</div>
	);
}
export default ArtistProfile;
