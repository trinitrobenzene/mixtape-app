import User from '@/src/models/User';
import axios from './axiosConfig';

const UserService = {
    /**
     * api create new user who isn't admin
     */
    createUser: async (user: User) => {
        return await axios.post('user', {
            ...user,
            isAdmin: false,
        });
    },
};

export default UserService;
