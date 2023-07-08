import './post.scss';
import {
	Heart,
	HeartFill,
	ChatLeftDots,
	Share,
	ThreeDots,
} from 'react-bootstrap-icons';
import Link from 'next/link';
import Comments from '../Comments/Comments';
import { useState } from 'react';
import moment from 'moment';
/* import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext'; */

const Post = ({ post }) => {
	const [commentOpen, setCommentOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const { currentUser } = useContext(AuthContext);
	const isLoading = true;
	const error = false;
	const data = 

	/* const { isLoading, error, data } = useQuery(['likes', post.id], () =>
		makeRequest.get('/likes?postId=' + post.id).then(res => {
			return res.data;
		})
	); */

	const queryClient = useQueryClient();

	const mutation = useMutation(
		/* liked => {
			if (liked) return makeRequest.delete('/likes?postId=' + post.id);
			return makeRequest.post('/likes', { postId: post.id });
		},
		{
			onSuccess: () => {
				// Invalidate and refetch
				queryClient.invalidateQueries(['likes']);
			},
		} */
		
	);
	const deleteMutation = useMutation(
		/* postId => {
			return makeRequest.delete('/posts/' + postId);
		},
		{
			onSuccess: () => {
				// Invalidate and refetch
				queryClient.invalidateQueries(['posts']);
			},
		} */
	);

	const handleLike = () => {
		/* mutation.mutate(data.includes(currentUser.id)); */
	};

	const handleDelete = () => {
		/* deleteMutation.mutate(post.id); */
	};

	return (
		<div className="post">
			<div className="container">
				<div className="user">
					<div className="userInfo">
						<img src={'/upload/' + post.profilePic} alt="" />
						<div className="details">
							<Link
								href={`/profile/${post.userId}`}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								<span className="name">{post.name}</span>
							</Link>
							<span className="date">{moment(post.createdAt).fromNow()}</span>
						</div>
					</div>
					<ThreeDots onClick={() => setMenuOpen(!menuOpen)} />
					{menuOpen && post.userId === currentUser.id && (
						<button onClick={handleDelete}>delete</button>
					)}
				</div>
				<div className="content">
					<p>{post.desc}</p>
					<img src={'/upload/' + post.img} alt="" />
				</div>
				<div className="info">
					<div className="item">
						{isLoading ? (
							'loading'
						) : data.includes(currentUser.id) ? (
							<HeartFill
								style={{ color: 'red' }}
								onClick={handleLike}
							/>
						) : (
							<Heart onClick={handleLike} />
						)}
						{data?.length} Likes
					</div>
					<div className="item" onClick={() => setCommentOpen(!commentOpen)}>
						<ChatLeftDots />
						See Comments
					</div>
					<div className="item">
						<Share />
						Share
					</div>
				</div>
				{commentOpen && <Comments /* postId={post.id} */ />}
			</div>
		</div>
	);
};

export default Post;
