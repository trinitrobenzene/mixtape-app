import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import apiActions from '../services/user';
import User from '@/src/models/User';
interface state {
    list: any[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    loading: boolean;
    infor: User;
    logged: boolean;
}

const initialState = {
    list: [],
    status: 'idle',
    loading: false,
    infor: new User(),
    logged: false,
} as state;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
<<<<<<< Updated upstream
        setLogin: (state, { payload }) => {
            const main = document.querySelector('main');
            if (main) {
                payload
                    ? main.classList.add('active')
                    : main.classList.remove('active');
=======
        setUser: (state, { payload }) => {
            console.log("Email: ", payload);
            state.infor.email = payload;
            state.logged = true;
        },
    },
    extraReducers: builder => {
        // --- Xử lý trong reducer với case pending / fulfilled / rejected ---
        builder.addMatcher(
            action => {
                const actionTypes = apiActions.flatMap(api => [
                    api.pending.type,
                    api.fulfilled.type,
                    api.rejected.type,
                ]);
                return actionTypes.includes(action.type);
            },
            (state, action) => {
                if (action.type.endsWith('/pending')) {
                    state.status = 'pending';
                    state.loading = true;
                } else if (action.type.endsWith('/fulfilled')) {
                    state.status = 'idle';
                    state.loading = false;
                } else if (action.type.endsWith('/rejected')) {
                    console.log(action.error);
                }
>>>>>>> Stashed changes
            }
        );
    },
});

export const { setUser } = userSlice.actions;

// export const user = createSlice({
//     name: 'userReducer',
//     initialState,
//     reducers: {
//         setLogin: (state, { payload }) => {
//             const main = document.querySelector('main');
//             const head = document.querySelector('header');
//             if (main && head) {
//                 if (payload) {
//                     // user is logged
//                     main.classList.add('active');
//                     main.classList.remove('expand');
//                     head.classList.remove('opacity-0');
//                 } else {
//                     // user is not logged
//                     main.classList.remove('active');
//                     main.classList.remove('expand');
//                     head.classList.add('opacity-0');
//                 }
//             }
//             state.logged = payload;
//         },
//     },
// });

// export const { setLogin } = user.actions;
