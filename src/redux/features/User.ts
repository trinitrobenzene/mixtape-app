import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface state {
    logged: boolean;
}

const initialState: state = {
    logged: true,
};

export const user = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setLogin: (state, { payload }) => {
            const main = document.querySelector('main');
            const head = document.querySelector('header');
            if (main && head) {
                if (payload) {
                    // user is logged
                    main.classList.add('active');
                    main.classList.remove('expand');
                    head.classList.remove('opacity-0');
                } else {
                    // user is not logged
                    main.classList.remove('active');
                    main.classList.remove('expand');
                    head.classList.add('opacity-0');
                }
            }
            state.logged = payload;
        },
    },
});

export const { setLogin } = user.actions;
