import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { setCurrentTime } from '@/src/redux/features/Player';

const ProgressBar = ({
	progressBarRef,
	audioRef,
	timeProgress,
	duration,
}: any) => {
	const { player } = useAppSelector(_ => _);
	const dispatch = useAppDispatch();
	console.log(duration);

	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
		dispatch(setCurrentTime(progressBarRef.current.value));
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
					background: `linear-gradient(to right, #600f78 ${player.currentTime}%, #ccc ${player.currentTime}%)`,
				}}
				onChange={handleProgressChange}
			/>
			<span className="">{formatTime(duration)}</span>
		</div>
	);
};

export default ProgressBar;
