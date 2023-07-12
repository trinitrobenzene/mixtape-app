import { ArrowClockwise } from 'react-bootstrap-icons';
import Image from 'next/image';
import TrackService from '@/src/redux/services/api/track';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/src/redux/hooks';

const DisplayTrackInPlaybar = ({
	currentTrack,
	audioRef,
	setDuration,
	progressBarRef,
	handleNext,
}: any) => {
	const { player } = useAppSelector(_ => _);
	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};

	return (
		<div>
			<audio
				src={player.trackUrl}
				ref={audioRef}
				onLoadedMetadata={onLoadedMetadata}
				onEnded={handleNext}
			/>
			<div className="flex gap-4">
				<div>
					{currentTrack.coverImage ? (
						<img
							src={player.coverImageUrl || ''}
							alt="track cover"
							width={50}
							height={50}
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
					<p className="garage-title max-w-[100px] text-base">
						{currentTrack.name}
					</p>
					<p>{currentTrack.author}</p>
				</div>
			</div>
		</div>
	);
};
export default DisplayTrackInPlaybar;
