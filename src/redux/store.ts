import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./features/Counter";
import { user } from "./features/User";
import { player } from "./features/Player";

export const store = configureStore({
  reducer: {
    counter: counter.reducer,
    user: user.reducer,
    player: player.reducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
