import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostWidget from './PostWidget';

const PostsWidget = ({ userId, isProfile = false }: any) => {
	const dispatch = useDispatch();
	const posts = new Array(
		{
			_id: '1',
			userId: userId,
			firstName: 'Nguyen',
			lastName: 'Thang',
			description: 'Mo ta',
			location: 'HCM city',
			picturePath: 'sdads',
			userPicturePath: '',
			likes: 5,
			comments: 6,
		},
		{
			_id: '2',
			userId: userId,
			firstName: 'Nguyen',
			lastName: 'Lan',
			description: 'Mo ta 1',
			location: 'Da Nang',
			picturePath: 'adasd',
			userPicturePath: '',
			likes: 5,
			comments: 6,
		}
	);
	/*   const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token); */

	/*  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  }; */

	/* const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  }; */

	/* useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 */
	return (
		<div className="flex flex-col gap-8">
			{posts.map(
				({
					_id,
					userId,
					firstName,
					lastName,
					description,
					location,
					picturePath,
					userPicturePath,
					likes,
					comments,
				}) => (
					<PostWidget
						key={_id}
						postId={_id}
						postUserId={userId}
						name={`${firstName} ${lastName}`}
						description={description}
						location={location}
						picturePath={picturePath}
						userPicturePath={userPicturePath}
						likes={likes}
						comments={comments}
					/>
				)
			)}
		</div>
	);
};

export default PostsWidget;
