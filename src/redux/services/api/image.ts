import { tk } from '@/pages/api/auth/[...nextauth]';
import axios from 'axios';

const ImageService = {
	getAll: async () => {
		return await axios.get('avatar/all', {
			headers: {
				Authorization: 'Bearer ' + tk,
			},
		});
	},

	getById: async (id: string, token: string) => {
		try {
			const resp = await fetch(`http://localhost:4000/avatar/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return await resp.blob();
		} catch (error) {
			console.log(error);
		}
	},
};

export default ImageService;
