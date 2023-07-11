import axios from 'axios';
import { tk } from '@/pages/api/auth/[...nextauth]';
import CommentInTrack from '@/src/models/CommentInTrack';

const CommentService = {
	/**
	 * GET: http://localhost:4000/track-file/{id}
	 * Get specific track by id
	 */
	getCommentsByIdTrack: async (id: string, token: string) => {
		try {
			const resp = await axios.get(`track/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return await resp.data;
		} catch (error) {
			console.log(error);
		}
	},
	postComment: async (comment: CommentInTrack, token: string) => {
		return await axios.post(
			'comment',
			{
				content: comment.content,
				atTimeInTrack: comment.atTimeInTrack,
				id_track: comment.id_track,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},
};

export default CommentService;
