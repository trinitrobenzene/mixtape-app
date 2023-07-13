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
	getUserById: async (id: string, token: string) => {
		try {
			const resp = await axios.get(`user/get-by-id/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return await resp.data;
		} catch (error) {
			console.log(error);
		}
	},

	/**
	 * GET: http://localhost:4000/user
	 * Get all users from database
	 */
	getAllUser: async () => await axios.get('user'),
};

export default UserService;
