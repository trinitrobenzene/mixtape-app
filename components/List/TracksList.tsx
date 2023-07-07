import Track from '@/src/models/Track';
import { useAppDispatch } from '@/src/redux/hooks';
import TrackCard from '../Card/TrackCard';
import { setActiveSong } from '@/src/redux/features/Player';

const TracksList = ({ tracks }: { tracks: Track[] }) => {
	const dispatch = useAppDispatch();
	return (
		<div className="flex flex-row">
			<div className="mx-4 mobile:mx-2 tablet:mx-6"></div>
			{tracks.map((track: Track) => (
				<TrackCard
					key={track.id}
					track={track}
					onClick={() => dispatch(setActiveSong(track))}
				/>
			))}
		</div>
	);
};

export default TracksList;
