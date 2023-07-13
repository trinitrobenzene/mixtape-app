import { useState } from 'react';
import {
	Chat,
	Heart,
	HeartFill,
	Share,
	ThreeDots,
} from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import st from '@/data-test/avatar1.jpg';
import Image from 'next/image';

const PostWidget = ({
	postId,
	postUserId,
	name,
	description,
	location,
	picturePath,
	userPicturePath,
	likes,
	comments,
}: any) => {
	const [isComments, setIsComments] = useState(false);
	const dispatch = useDispatch();
	const token = '';
	const loggedInUserId = 5;
	const isLiked = Boolean(likes[loggedInUserId]);
	const likeCount = Object.keys(likes).length;

	/*     const patchLike = async () => {
      const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      });
      const updatedPost = await response.json();
      dispatch(setPost({ post: updatedPost }));
    }; */

	return (
		<div className="box-border p-6 bg-slate-50 rounded-xl px-0 py-8 gap-8">
			<div className="flex justify-between items-center">
				<div className="flex justify-between items-center gap-4 ml-8 mb-4">
					<Image
						width={50}
						height={50}
						alt="post"
						style={{ objectFit: 'cover', borderRadius: '50%' }}
						src={st}
					/>
					<div className="box-border" onClick={() => console.log('ss')}>
						<div className="font-sans text-slate-600 font-medium hover:bg-gray-100 cursor-pointer">
							{'Son Tung'}
						</div>
						<div className="text-gray-400">{'HCM'}</div>
					</div>
				</div>
				<ThreeDots className="mr-8 mb-8 text-base w-5 h-5" />
			</div>
			<div className="text-base ml-8">{description}</div>
			{picturePath && (
				<Image
					width={300}
					height={200}
					alt="post"
					className="rounded-xl mt-3"
					src={st}
				/>
			)}
			<div className="flex justify-between items-center gap-2 mt-1">
				<div className="flex justify-between items-center gap-4">
					<div className="flex justify-between items-center gap-1">
						<button onClick={() => console.log('click')}>
							{isLiked ? (
								<Heart className="text-base" />
							) : (
								<HeartFill className="text-base" />
							)}
						</button>
						<span>{likeCount}</span>
					</div>

					<div className="flex justify-between items-center gap-1">
						<button onClick={() => setIsComments(!isComments)}>
							<Chat />
						</button>
						<div>{comments.length}</div>
					</div>
				</div>

				<button>
					<Share />
				</button>
			</div>
			{isComments && (
				<div className="box-border mt-2">
					{comments.map((comment: any, i: any) => (
						<div className="box-border" key={`${name}-${i}`}>
							<div className="divide-black" />
							<div className="text-gray-400 mx-0 my-2 pl-4">{comment}</div>
						</div>
					))}
					<div className="divide-black" />
				</div>
			)}
		</div>
	);
};

export default PostWidget;
