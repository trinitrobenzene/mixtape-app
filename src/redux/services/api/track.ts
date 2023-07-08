import axios from 'axios';
import { tk } from '@/pages/api/auth/[...nextauth]';

const TrackService = {
	/**
	 * GET: http://localhost:4000/track-file/{id}
	 * Get specific track by id
	 */
	getAudioFileById: async (id: string, token: string) => {
		try {
			const resp = await fetch(`http://localhost:4000/track-file/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return await resp.blob();
		} catch (error) {
			console.log(error);
		}
	},
	getTrackById: async (id: string, token: string) => {
		try {
			const resp = await axios.get(`track/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return await resp.data;
		} catch (error) {
			console.log(error);
		}
	},
	getAll: async () => {
		return await axios.get('track', {
			headers: {
				Authorization: 'Bearer ' + tk,
			},
		});
	},
};

export default TrackService;
