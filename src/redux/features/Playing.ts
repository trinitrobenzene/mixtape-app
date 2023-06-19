import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayingInterface {
    idTrack: string;
    idPlaylist: string;
    volume: number;
    isMuted: boolean;
    isPlaying: boolean;
    image: string;
}

const initialState: PlayingInterface = {
    idTrack: '',
    idPlaylist: '',
    volume: 100,
    isMuted: false,
    isPlaying: false,
    image: '',
};

export const playing = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: () => initialState,
        setTrack: (state, { payload }) => {
            console.log(payload);
        },
        setVolume: (state, { payload }: PayloadAction<number>) => {
            console.log(payload);
        },
        setPlaying: (state, { payload }: PayloadAction<boolean>) => {
            state.isPlaying = payload;
        },
        // increment: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
        // decrement: (state, action: PayloadAction<number>) => {
        //     state.value -= action.payload;
        // },
    },
});

export const { reset, setTrack, setPlaying, setVolume } = playing.actions;
