import { ArrowClockwise } from 'react-bootstrap-icons';
import Image from 'next/image';
import { useAppSelector } from '@/src/redux/hooks';
import router from 'next/router';
import CustomImage from '../CustomImage';
import Link from 'next/link';
import GetToken from '@/components/Token';
import TrackService from '@/src/redux/services/api/track';

const DisplayTrack = ({
	audioRef,
	setDuration,
	progressBarRef,
	handleNext,
}: any) => {
	const { player } = useAppSelector(_ => _);
	/* const [audioUrl, setAudioUrl] = useState({ preview: '' }); */
	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};
	/* const getATrack = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODczMjA5OCwiZXhwIjoxNjkzOTE2MDk4fQ.PQhamKRL67JfZY05tCDVFIIAAVPM8_JvlK3hhEaO7II';
		TrackService.getAudioFileById('64a804cd222f9174fecbef88', token)
			.then(resp => resp && setAudioUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};
 */
	/* useEffect(() => {
		return () => URL.revokeObjectURL(audioUrl.preview);
	}, [audioUrl]);
	console.log(audioUrl.preview);
	console.log(currentTrack.fileTrack); */

	return (
		<div
			className="flex flex-row 
    items-center justify-between 
    w-screen max-w-full"
		>
			<audio
				src={player.trackUrl}
				ref={audioRef}
				onLoadedMetadata={onLoadedMetadata}
				onEnded={handleNext}
			/>
			<div className="flex flex-row items-center w-full cursor-pointer">
				<div
					style={{
						boxShadow:
							'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
					}}
					className="w-[auto] h-[auto] cursor-pointer rounded-sm"
				>
					<Image
						src={player.coverImageUrl}
						alt="track cover"
						quality={100}
						style={{ objectFit: 'fill' }}
						width={200}
						height={400}
					/>
				</div>

				<div className="mx-4 gap-8">
					<p
						className="text-2xl text-black-500 
          cursor-pointer line-clamp-1"
					>
						{player.activeSong?.name}
					</p>

					<p
						className="text-gray-400 text-sm  
            hover:underline cursor-pointer"
						onClick={e => {
							console.log('ghhh');
							{
								/* <Link href={`/artist/${player.activeSong.userUpload}`}></Link> */
							}
						}}
					>
						{player.activeSong?.author}
					</p>
				</div>
			</div>
		</div>
	);
};
export default DisplayTrack;
