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
	/**
	 * POST: http://localhost:4000/track/
	 */
	createNewTrack: async (body: FormData, token: string) => {
		try {
			const resp = await axios({
				method: 'POST',
				url: 'track',
				headers: {
					Authorization: `Bearer ${token}`,
				},
				data: body,
			});
			return resp.data;
		} catch (error) {
			console.log(error);
		}
	},
	getByQuantity: async (skip: number, limit: number, token: string) => {
		try {
			const resp = await axios.get('track/limit', {
				params: { skip, limit },
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return resp.data;
		} catch (error) {
			console.log(error);
		}
	},
};

export default TrackService;
