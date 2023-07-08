'use client';
import { useEffect, useRef, useState } from 'react';
import { tracks } from '@/data-test/tracks';

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import {
	setActiveSong,
	setCoverImage,
	setCurrentIndex,
	setCurrentPlaylist,
	setFileTrack,
} from '@/src/redux/features/Player';
import GetToken from '@/components/Token';
import TrackService from '@/src/redux/services/api/track';
import Track from '@/src/models/Track';
import ImageService from '@/src/redux/services/api/image';

const AudioPlayer = () => {
	// states
	const dispatch = useAppDispatch();
	const { player } = useAppSelector(_ => _);
	const [audioUrl, setAudioUrl] = useState({ preview: '' });
	const [imgUrl, setImgUrl] = useState({ preview: '' });
	const [currentTrack, setCurrentTrack] = useState(new Track());
	const [trackInfo, setTrackInfor] = useState(new Track());
	const [duration, setDuration] = useState(0);
	const [trackIndex, setTrackIndex] = useState(player.currentIndex);

	// reference
	const audioRef = useRef();
	const progressBarRef = useRef();

	// function
	const getATrack = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgwODE3NiwiZXhwIjoxNjkzOTkyMTc2fQ.I3kfNDp89UjIc_RXrN4YYcE1xJuSQzsMYZlkWuuihIM';
		await TrackService.getTrackById('64a802eb222f9174fecbef83', token)
			.then(resp => resp && setCurrentTrack(resp))
			.catch(err => console.log(err));
	};

	const getAudioFile = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgwODE3NiwiZXhwIjoxNjkzOTkyMTc2fQ.I3kfNDp89UjIc_RXrN4YYcE1xJuSQzsMYZlkWuuihIM';
		await TrackService.getAudioFileById(trackInfo.trackFile, token)
			.then(resp => resp && setAudioUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};

	/* Xoá audio khi bị thay đổi để không bị rò rỉ bộ nhớ */
	useEffect(() => {
		dispatch(setFileTrack(audioUrl.preview));
		return () => URL.revokeObjectURL(audioUrl.preview);
	}, [audioUrl]);

	/** Gọi api để lấy ảnh */
	const getAnImage = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgwODE3NiwiZXhwIjoxNjkzOTkyMTc2fQ.I3kfNDp89UjIc_RXrN4YYcE1xJuSQzsMYZlkWuuihIM';
		await ImageService.getById(`64a802e8222f9174fecbef7f`, token)
			.then(resp => resp && setImgUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};
	console.log(imgUrl.preview);
	/* Xoá hình ảnh khi bị thay đổi để không bị rò rỉ bộ nhớ */
	useEffect(() => {
		dispatch(setCoverImage(imgUrl.preview));
		return () => URL.revokeObjectURL(imgUrl.preview);
	}, [imgUrl]);

	/* const [currentTrack, setCurrentTrack] = useState(player.activeSong); */

	useEffect(() => {
		getATrack();
		getAudioFile();
		getAnImage();
	}, []);

	/* 	useEffect(() => {
		setCurrentTrack(trackInfo);
	}, [trackInfo]); */

	useEffect(() => {
		/* setCurrentTrack(player.activeSong); */
		dispatch(setActiveSong(currentTrack));
	}, [currentTrack]);

	console.log(audioUrl.preview);
	const handleNext = () => {
		if (trackIndex >= tracks.length - 1) {
			dispatch(setCurrentIndex(0));
			setTrackIndex(0);
			/* setCurrentTrack(tracks[0]); */
			dispatch(setActiveSong(tracks[0]));
		} else {
			if (player.isShuffle) {
				let randomIndex = Math.floor(Math.random() * tracks.length);
				setTrackIndex(randomIndex);
				dispatch(setCurrentIndex(randomIndex));
				/* setCurrentTrack(tracks[randomIndex]); */
				dispatch(setActiveSong(tracks[randomIndex]));
			} else {
				setTrackIndex(trackIndex + 1);
				dispatch(setCurrentIndex(trackIndex + 1));
				/* setCurrentTrack(tracks[trackIndex + 1]); */
				dispatch(setActiveSong(tracks[trackIndex + 1]));
			}
		}
	};
	return (
		<div className="bg-white">
			<div className="max-w-7xl m-auto">
				<DisplayTrack
					{...{
						audioUrl,
						currentTrack,
						audioRef,
						setDuration,
						progressBarRef,
						handleNext,
					}}
				/>
				<Controls
					{...{
						audioRef,
						progressBarRef,
						duration,
						tracks,
						trackIndex,
						setTrackIndex,
						setCurrentTrack,
						handleNext,
					}}
				/>
				<ProgressBar {...{ progressBarRef, audioRef, duration }} />
			</div>
		</div>
	);
};
export default AudioPlayer;
