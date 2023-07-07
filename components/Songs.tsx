import Song from './Song';
import { tracks } from '@/data-test/tracks';
const Songs = () => {
	return (
		<div className="flex flex-col space-y-1 px-8 pb-28">
			{tracks.map((item, index) => (
				<Song key={item.id} item={item} itemIndex={index} />
			))}
		</div>
	);
};

export default Songs;
