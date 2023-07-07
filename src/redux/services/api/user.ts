import User from '@/src/models/User';
import axios from 'axios';

interface SignInDTO {
	email: string;
	password: string;
}

const UserService = {
	/**
	 * POST: http://localhost:4000/authen/register
	 * Create new user who isn't admin
	 */
	createUser: async (user: User) => {
		return await axios.post(
			'authen/register',
			{
				email: user.email,
				password: user.password,
				name: user.name,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	},

	/**
	 * GET: http://localhost:4000/user
	 * Get all users from database
	 */
	getAllUser: async () => await axios.get('user'),
};

export default UserService;
