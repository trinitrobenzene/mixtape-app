import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface state {
    logged: boolean
}

const initialState: state = {
    logged: true,
}

export const user = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setLogin: (state, { payload }) => {
            const main = document.querySelector('main') ;
            payload ? main?.classList.add('active') : main?.classList.remove('active');
            state.logged = payload;
        }
    }
})

export const {
    setLogin
} = user.actions;