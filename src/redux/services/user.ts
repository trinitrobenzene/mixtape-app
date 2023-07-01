import AppApi from '@/src/api/config';
import UserService from '@/src/api/user';
import { STATUS } from '@/src/constant';
import User from '@/src/models/User';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// get all users from database
export const getAllUsers = createAsyncThunk('user', async () => {
    try {
        const response = await UserService.getAllUser();
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
});

// create new user who isn't admin
export const createUser = createAsyncThunk('user', async (param: User) => {
    try {
        const response = await UserService.createUser(param);
        if (response.statusText === 'Created') return response.data;
        else {
            console.log(response);
            return 'Xem response để biết chi tiết.';
        }
    } catch (error) {
        console.log(error);
        return error;
    }
});

/* export const signIn = createAsyncThunk(
    'user',
    async (param: { email: string; password: string }) => {
        try {
            const response = await UserService.signIn(param);
            if (response.statusText === 'Created') {
                const {access_token} = response.data;
                localStorage.setItem('token', access_token);
                return STATUS.OK;
            }
            else {
                console.log(response);
                return 'Xem response để biết chi tiết.';
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }
); */

const apiActions = [createUser, getAllUsers];
export default apiActions;
