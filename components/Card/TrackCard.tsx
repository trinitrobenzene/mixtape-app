'use client';
import Track from '@/src/models/Track';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import React, { useState } from 'react';
import CustomImage from '../CustomImage';
import { setIsPlaying } from '@/src/redux/features/Player';

const TrackCard = ({
	track,
	onClick,
}: {
	track: Track;
	onClick: () => void;
}) => {
	const [showPlayButton, setPlayButton] = useState(false);
	const { player } = useAppSelector(_ => _);

	return (
		<div
			key={track.id}
			className="mr-4 cursor-grab"
			onClick={onClick}
			onMouseEnter={() => setPlayButton(true)}
			onMouseLeave={() => setPlayButton(false)}
		>
			<div
				className="p-4 bg-gradient-to-t from-[#2c2a2a4a] to-[#2c2a2ac7] hover:bg-[#4340409d]
           rounded-md h-full
           "
			>
				<div
					style={{
						boxShadow:
							'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
					}}
					className="w-[160px] h-[160px] relative rounded-md"
				>
					{player.activeSong.id === track.id ? (
						<PlayPauseButton
							condition={player.activeSong.id === track.id}
							isPlaying={player.isPlaying}
						/>
					) : showPlayButton ? (
						<PlayPauseButton
							condition={showPlayButton}
							isHover
							isPlaying={player.isPlaying}
						/>
					) : null}
					<CustomImage src={track.image + ''} className="rounded-md" />
				</div>
				<p className="line-clamp-2 mt-3 text-base">{track.name}</p>
				<p
					className="line-clamp-2 mt-0.5 text-sm text-gray-400 
            font-ProximaRegular"
				>
					{track.author}
				</p>
			</div>
		</div>
	);
};

const PlayPauseButton = ({
	condition,
	isPlaying,
	isHover,
}: {
	condition: boolean;
	isPlaying: boolean;
	isHover?: boolean;
}) => {
	const dispatch = useAppDispatch();

	return (
		<div>
			{condition && (
				<div className="absolute w-full h-full bg-black bg-opacity-10 z-10 flex justify-end items-end rounded-md">
					<div
						onClick={() => dispatch(setIsPlaying(!isPlaying))}
						className="mx-2 my-3 bg-[#2bb540] rounded-full cursor-pointer hover:scale-110
                     w-[45px] h-[45px] flex justify-center items-center mobile:w-[30px] mobile:h-[30px]"
					>
						{isHover ? (
							<i className="icon-play text-[20px] ml-1 text-black mobile:text-[16px]" />
						) : !isPlaying ? (
							<i className="icon-play text-[20px] ml-1 text-black mobile:text-[16px]" />
						) : (
							<i className="icon-pause text-[20px] text-black mobile:text-[16px]" />
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default TrackCard;
