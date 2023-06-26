import User from '@/src/models/User';
import axios from './config';

interface SignInDTO {
    email: string;
    password: string;
}

const UserService = {
    /**
     * POST: http://localhost:4000/user/signup
     * Create new user who isn't admin
     */
    createUser: async (user: User) => {
        return await axios.post('user/signup', {
            ...user,
            isAdmin: false,
        });
    },

    /**
     * GET: http://localhost:4000/user
     * Get all users from database
     */
    getAllUser: async () => await axios.get('user'),

    /**
     * POST: http://localhost:4000/auth/login
     */
    signIn: async (user: SignInDTO) => await axios.post('auth/login', user),
};

export default UserService;
