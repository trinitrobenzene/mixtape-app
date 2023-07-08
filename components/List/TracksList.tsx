import Track from '@/src/models/Track';
import { useAppDispatch } from '@/src/redux/hooks';
import TrackCard from '../Card/Track';
import { setActiveSong } from '@/src/redux/features/Player';
import TrackService from '@/src/redux/services/api/track';

const TracksList = () => {
	const dispatch = useAppDispatch();

	/* const getAllTrack = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODczMjA5OCwiZXhwIjoxNjkzOTE2MDk4fQ.PQhamKRL67JfZY05tCDVFIIAAVPM8_JvlK3hhEaO7II';
		TrackService.getAll()
			.then(resp => resp && setAudioUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	}; */
	return (
		<div className="flex flex-row">
			<div className="mx-4 mobile:mx-2 tablet:mx-6"></div>
			{[1, 2, 3].map((track: number) => (
				<TrackCard
					key={track}
					/* track={track} */
					/* onClick={() => dispatch(setActiveSong(track))} */
				/>
			))}
		</div>
	);
};

export default TracksList;
