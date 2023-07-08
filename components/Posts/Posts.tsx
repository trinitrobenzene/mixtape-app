import Post from '../Posts/Post';
import './posts.scss';

interface PostProps {
	id: string;
	comments: 
}

const Posts = ({ userId }) => {
	/* const { isLoading, error, data } = useQuery(['posts'], () =>
		makeRequest.get('/posts?userId=' + userId).then(res => {
			return res.data;
		})
	); */
	const error = false;
	const isLoading = true;
	const data = {
		{
			id: "123",

		}
	}


	return (
		<div className="flex flex-col gap-14">
			{error
				? 'Something went wrong!'
				: isLoading
				? 'loading'
				: data.map(post => <Post post={post} key={post.id} />)}
		</div>
	);
};

export default Posts;
