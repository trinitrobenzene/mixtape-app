import { ArrowClockwise } from 'react-bootstrap-icons';
import Image from 'next/image';
import TrackService from '@/src/redux/services/api/track';
import { useEffect, useState } from 'react';

const DisplayTrackInPlaybar = ({
	currentTrack,
	audioRef,
	setDuration,
	progressBarRef,
	handleNext,
}: any) => {
	const [audioUrl, setAudioUrl] = useState({ preview: '' });
	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};
	const getATrack = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODcyNDI5NSwiZXhwIjoxNjkzOTA4Mjk1fQ.eC9o3xm4wtJ3iDryeGjfO_V-lWVPOWnwhPHn5RxwZaw';
		TrackService.getById('64a5827877e11b77dc2cc532', token)
			.then(resp => resp && setAudioUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};
	const getAllTrack = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODcyNDI5NSwiZXhwIjoxNjkzOTA4Mjk1fQ.eC9o3xm4wtJ3iDryeGjfO_V-lWVPOWnwhPHn5RxwZaw';
		TrackService.getAll(token)
			.then(resp => resp && setAudioUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};
	useEffect(() => {
		return () => URL.revokeObjectURL(audioUrl.preview);
	}, [audioUrl]);
	console.log(currentTrack);
	return (
		<div>
			<audio
				src={audioUrl.preview}
				ref={audioRef}
				onLoadedMetadata={onLoadedMetadata}
				onEnded={handleNext}
			/>
			<div className="flex gap-4">
				<div>
					{currentTrack.image ? (
						<Image
							src={currentTrack.image || ''}
							alt="track cover"
							width={50}
							height={10}
							className="rounded-full"
						/>
					) : (
						<div className="flex justify-center items-center max-h-fit">
							<span className="flex justify-center items-center bg-slate-300">
								<ArrowClockwise />
							</span>
						</div>
					)}
				</div>
				<div className="text-left">
					<p className="garage-title max-w-[100px]">{currentTrack.name}</p>
					<p>{currentTrack.author}</p>
				</div>
			</div>
		</div>
	);
};
export default DisplayTrackInPlaybar;
