import {
	setActiveSong,
	setCurrentIndex,
	setCurrentTime,
	setIsPlaying,
	setIsShuffle,
	setVolume,
} from '@/src/redux/features/Player';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { useState, useEffect, useRef, useCallback } from 'react';

// icons
import {
	SkipEndFill,
	SkipStartFill,
	SkipForwardFill,
	SkipBackwardFill,
	PlayFill,
	PauseFill,
	VolumeDownFill,
	VolumeUpFill,
	VolumeMuteFill,
	Shuffle,
} from 'react-bootstrap-icons';
import LikeButton from './LikeButton';

const Controls = ({
	audioRef,
	progressBarRef,
	duration,
	setTrackIndex,
	setCurrentTrack,
	handleNext,
	isFullScreen,
}: any) => {
	// const [isPlaying, setIsPlaying] = useState(false);

	const [muteVolume, setMuteVolume] = useState(false);
	const dispatch = useAppDispatch();
	const { player } = useAppSelector(_ => _);
	isFullScreen = true;
	const togglePlayPause = () => {
		const p = player.isPlaying;
		dispatch(setIsPlaying(!p));
		// setIsPlaying((prev) => !prev);
	};
	const onChange = (value: number) => {
		dispatch(setVolume(value));
	};
	const setMuteVolumeOnClick = (value: any) => {
		setMuteVolume(!value);
		dispatch(setVolume(0));
	};

	const playAnimationRef: any = useRef();

	const repeat = useCallback(() => {
		const currentTime = audioRef.current.currentTime;
		progressBarRef.current.value = currentTime;
		progressBarRef.current.style.setProperty(
			'--range-progress',
			`${(progressBarRef.current.value / duration) * 100}%`
		);

		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef]);

	useEffect(() => {
		// if (isPlaying) {
		//   audioRef.current.play();
		// } else {
		//   audioRef.current.pause();
		// }
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, repeat]);

	const skipForward = () => {
		audioRef.current.currentTime += 15;
		console.log(audioRef.current.currentTime);
		dispatch(setCurrentTime(audioRef.current.currentTime));
	};

	const skipBackward = () => {
		audioRef.current.currentTime -= 15;
		console.log(audioRef.current.currentTime);
		dispatch(setCurrentTime(audioRef.current.currentTime));
	};

	const handlePrevious = () => {
		if (player.currentIndex === 0) {
			let lastTrackIndex = player.currentPlaylist.length - 1;
			setTrackIndex(lastTrackIndex);
			setCurrentTrack(player.currentPlaylist[lastTrackIndex]);
			dispatch(setCurrentIndex(lastTrackIndex));
			dispatch(setActiveSong(player.currentPlaylist[lastTrackIndex]));
		} else {
			let i = player.currentIndex;
			setTrackIndex((prev: any) => prev - 1);
			setCurrentTrack(player.currentPlaylist[i - 1]);
			dispatch(setCurrentIndex(i - 1));
			dispatch(setActiveSong(player.currentPlaylist[i - 1]));
		}
	};

	useEffect(() => {
		if (audioRef) {
			audioRef.current.volume = player.volume / 100;
			audioRef.current.muted = muteVolume;
		}
	}, [player.volume, audioRef, muteVolume]);

	const onShuffle = () => {
		dispatch(setIsShuffle(!player.isShuffle));
	};

	if (isFullScreen) {
		return (
			<div
				className="flex flex-row justify-between 
    items-center mt-6 tablet:w-[400px] mobile:w-[320px]"
			>
				<div className="flex items-center mr-6 gap-3 ">
					<Shuffle
						className={
							player.isShuffle
								? 'text-[#e72be4]'
								: 'text-gray-400 hover:text-white'
						}
						onClick={onShuffle}
					></Shuffle>
					<div
						className={player.isShuffle ? 'bg-[#e72be4] block' : 'hidden'}
					></div>
					<div className="flex items-center mr-6">
						<LikeButton track_id={player.activeSong.id} />
						<div
							className={player.liked ? 'bg-[#e72be4] block' : 'hidden'}
						></div>
					</div>
				</div>
				<div className="flex flex-row items-center">
					<button className="p-5" onClick={handlePrevious}>
						<SkipStartFill />
					</button>
					<button className="p-5" onClick={skipBackward}>
						<SkipBackwardFill />
					</button>
					<button className="p-5" onClick={togglePlayPause}>
						{player.isPlaying ? <PauseFill /> : <PlayFill />}
					</button>
					<button className="p-5" onClick={skipForward}>
						<SkipForwardFill />
					</button>
					<button className="p-5" onClick={handleNext}>
						<SkipEndFill />
					</button>
				</div>

				<div className="flex flex-col items-center ml-6 mr-2">
					<div className="flex items-center">
						<button
							onClick={(e: any) =>
								setMuteVolumeOnClick(Boolean(e.target.value))
							}
						>
							{player.volume == 0 || player.volume < 5 ? (
								<VolumeMuteFill />
							) : player.volume < 40 ? (
								<VolumeDownFill />
							) : (
								<VolumeUpFill />
							)}
						</button>
						<input
							type="range"
							min={0}
							max={100}
							value={player.volume}
							onChange={(e: any) => onChange(Number(e.target.value))}
							style={{
								background: `linear-gradient(to right, #b700ffd2 ${player.volume}%, #ccc ${player.volume}%)`,
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="flex justify-between items-center mt-2.5">
			<div className="flex justify-between p-5">
				<button className="p-5" onClick={handlePrevious}>
					<SkipStartFill />
				</button>
				<button className="p-5" onClick={skipBackward}>
					<SkipBackwardFill />
				</button>
				<button className="p-5" onClick={togglePlayPause}>
					{player.isPlaying ? <PauseFill /> : <PlayFill />}
				</button>
				<button className="p-5" onClick={skipForward}>
					<SkipForwardFill />
				</button>
				<button className="p-5" onClick={handleNext}>
					<SkipEndFill />
				</button>
			</div>
			<div className="flex items-center">
				<button
					onClick={(e: any) => setMuteVolumeOnClick(Boolean(e.target.value))}
				>
					{player.volume == 0 || player.volume < 5 ? (
						<VolumeMuteFill />
					) : player.volume < 40 ? (
						<VolumeDownFill />
					) : (
						<VolumeUpFill />
					)}
				</button>
				<input
					type="range"
					min={0}
					max={100}
					value={player.volume}
					onChange={(e: any) => onChange(Number(e.target.value))}
					style={{
						background: `linear-gradient(to right, #b700ffd2 ${player.volume}%, #ccc ${player.volume}%)`,
					}}
				/>
			</div>
		</div>
	);
};

export default Controls;
