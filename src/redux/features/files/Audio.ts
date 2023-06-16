import Track from '@/src/models/Track';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AudioState {
    audioList: DataTransfer;
}

const initialState: AudioState = {
    audioList: new DataTransfer(),
};

export const audio = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        /**
         * Reset the audioList to initalState
         */
        reset: () => initialState,

        /**
         * Upload multiple files
         */
        upload: (state, { payload }) => {
            state.audioList.items.clear();
            for (const item of payload) {
                if (item.type.includes('audio'))
                    state.audioList.items.add(item);
                else console.log('This file is not supported!', item);
            }
        },
        remove: (state, { payload }) => {},
    },
});

export const { reset, upload, remove } = audio.actions;
