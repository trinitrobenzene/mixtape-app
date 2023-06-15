import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
};

const initialState: CounterState = {
    value: 0,
}

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    reset,
} = counter.actions;
