import { configureStore } from '@reduxjs/toolkit';
import { counter } from './features/Counter';
import { userSlice } from './features/User';
import { player } from "./features/Player";

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
        player: player.reducer,
        user: userSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
