import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setCurrentTime, setTemp } from '@/src/redux/features/Player';
import { useEffect } from 'react';

const ProgressBar = ({
	progressBarRef,
	audioRef,
	timeProgress,
	duration,
}: any) => {
	const { player } = useAppSelector(_ => _);
	const dispatch = useAppDispatch();

	const handleProgressChange = async () => {
		audioRef.current.currentTime = await progressBarRef.current.value;
		console.log(audioRef.current.currentTime);
		let i = audioRef.current.currentTime;
		dispatch(setCurrentTime(audioRef.current.currentTime));
		dispatch(setTemp(12));
		console.log(player);
	};

	const formatTime = (time: any) => {
		if (time && !isNaN(time)) {
			const minutes = Math.floor(time / 60);
			const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
			const seconds = Math.floor(time % 60);
			const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
			return `${formatMinutes}:${formatSeconds}`;
		}
		return '00:00';
	};

	return (
		<div className="flex justify-end items-center pr-5 pb-3 space-x-3 md:space-x-4">
			<span className="">{formatTime(player.currentTime)}</span>
			<input
				type="range"
				ref={progressBarRef}
				defaultValue="0"
				style={{
					background: `linear-gradient(to right, #ccc ${player.currentTime}%)`,
				}}
				onChange={handleProgressChange}
			/>
			<span className="">{formatTime(duration)}</span>
		</div>
	);
};

export default ProgressBar;
