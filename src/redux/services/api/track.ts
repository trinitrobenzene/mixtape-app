import axios from 'axios';

const TrackService = {
	/**
	 * GET: http://localhost:4000/track-file/{id}
	 * Get specific track by id
	 */
	getById: async (id: string, token: string) => {
		try {
			const resp = await fetch(`http://localhost:4000/track-file/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return await resp.blob();
		} catch (error) {
			console.log(error);
		}
	},
	getAll: async (token: string) => {
		try {
			const resp = await fetch(`http://localhost:4000/track-file/all`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return await resp.blob();
		} catch (error) {
			console.log(error);
		}
	},
};

export default TrackService;
