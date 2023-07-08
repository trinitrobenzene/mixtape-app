import Track from '@/src/models/Track';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TrackService from '../services/api/track';
import { useState } from 'react';

export interface IStateProps {
	currentPlaylist: Track[];
	currentIndex: number;
	isPlaying: boolean;
	isShuffle: boolean;
	volume: number;
	currentTime: number;
	activeSong: Track;
	liked: number[];
	trackUrl: string;
	coverImageUrl: string;
}

const initialState: IStateProps = {
	currentPlaylist: [],
	currentIndex: 0,
	isPlaying: false,
	isShuffle: false,
	volume: 0,
	currentTime: 0,
	activeSong: new Track(),
	liked: [],
	trackUrl: '',
	coverImageUrl: '',
};

export const player = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setIsPlaying: (state, action: PayloadAction<boolean>) => {
			state.isPlaying = action.payload;
		},
		setIsShuffle: (state, action: PayloadAction<boolean>) => {
			state.isShuffle = action.payload;
		},
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload;
		},
		setCurrentTime: (state, action: PayloadAction<number>) => {
			state.currentTime = action.payload;
		},
		setCurrentIndex: (state, action: PayloadAction<number>) => {
			state.currentIndex = action.payload;
		},
		setActiveSong: (state, action: PayloadAction<Track>) => {
			state.activeSong = action.payload;
			state.currentTime = 0;
		},
		setCurrentPlaylist: (state, action: PayloadAction<Array<Track>>) => {
			state.currentPlaylist = action.payload;
		},
		addLike: (state, action) => {
			let liked = [...state.liked, action.payload.track_id];
			state.liked = liked;
		},
		removeLike: (state, action) => {
			let liked = state.liked.filter(
				(value: number) => value != action.payload.track_id
			);
			state.liked = liked;
		},
		setFileTrack: (state, action: PayloadAction<string>) => {
			state.trackUrl = action.payload;
		},
		setCoverImage: (state, action: PayloadAction<string>) => {
			state.coverImageUrl = action.payload;
		},

		/* setAudioSong: (state, action: PayloadAction<string>) => {
			const token =
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODczMjA5OCwiZXhwIjoxNjkzOTE2MDk4fQ.PQhamKRL67JfZY05tCDVFIIAAVPM8_JvlK3hhEaO7II';
			TrackService.getById(action.payload, token)
				.then(
					resp => resp && setAudioUrl({ preview: URL.createObjectURL(resp) })
				)
				.catch(err => console.log(err));
			state.activeSong.trackFile = audioUrl.preview;
		}, */

		/* setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },
 */
		// nextSong: (state, action) => {
		//   if (state.currentSongs[action.payload]?.track) {
		//     state.activeSong = state.currentSongs[action.payload]?.track;
		//   } else {
		//     state.activeSong = state.currentSongs[action.payload];
		//   }

		//   state.currentIndex = action.payload;
		//   state.isActive = true;
		// },

		// prevSong: (state, action) => {
		//   if (state.currentSongs[action.payload]?.track) {
		//     state.activeSong = state.currentSongs[action.payload]?.track;
		//   } else {
		//     state.activeSong = state.currentSongs[action.payload];
		//   }

		//   state.currentIndex = action.payload;
		//   state.isActive = true;
		// },

		// playPause: (state, action) => {
		//   state.isPlaying = action.payload;
		// },
	},
});

export const {
	setVolume,
	setIsPlaying,
	setIsShuffle,
	setCurrentTime,
	setCurrentIndex,
	setActiveSong,
	setCurrentPlaylist,
	addLike,
	removeLike,
	setFileTrack,
	setCoverImage,
} = player.actions;
