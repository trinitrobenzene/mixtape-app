import Dropzone from 'react-dropzone';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	PencilSquare,
	Trash,
	ImageFill,
	Clipboard2,
	Paperclip,
	Mic,
	ThreeDots,
} from 'react-bootstrap-icons';
import st from '@/data-test/avatar1.jpg';
import Image from 'next/image';

const MyPostWidget = ({ picturePath }: any) => {
	const dispatch = useDispatch();
	const [isImage, setIsImage] = useState(false);
	const [image, setImage] = useState(null);
	const [post, setPost] = useState('');
	const token = '';
	const isNonMobileScreens = false;

	const handlePost = async () => {
		const formData = new FormData();
		/* formData.append("userId", _id);
      formData.append("description", post);
      if (image) {
        formData.append("picture", image);
        formData.append("picturePath", image.name);
      } */

		/* const response = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const posts = await response.json();
      dispatch(setPosts({ posts }));
      setImage(null);
      setPost("");*/
	};

	return (
		<div className="box-border p-5 bg-slate-50 rounded-xl">
			<div className="flex justify-between items-center gap-6">
				{/* <UserImage image={picturePath} /> */}
				<Image
					style={{ objectFit: 'cover', borderRadius: '50%' }}
					width={50}
					height={50}
					alt="us"
					src={st}
				></Image>
				<input
					placeholder="What's on your mind..."
					onChange={e => setPost(e.target.value)}
					value={post}
					className="w-full bg-gray-300 rounded-3xl py-4 px-8"
				/>
			</div>
			{isImage && (
				<div className="box-border border-solid gap-4 bg-gray-400 rounded-md mt-4 p-4">
					<Dropzone
						//   acceptedFiles = ".jpg,.jpeg,.png"
						multiple={false}
						onDrop={acceptedFiles => console.log('dd')}
					>
						{({ getRootProps, getInputProps }) => (
							<div className="flex justify-between items-center gap-2">
								<div
									className="box-border w-full p-4 hover:bg-slate-500 cursor-pointer border-solid"
									{...getRootProps()}
								>
									<input {...getInputProps()} />
									{!image ? (
										<p>Add Image Here</p>
									) : (
										<div className="flex justify-between items-center gap-2">
											<div className="text-base">
												{/* image.name */ 'Nguyen Huu Thang'}
											</div>
											<PencilSquare />
										</div>
									)}
								</div>
								{image && (
									<button onClick={() => setImage(null)} className="w-full">
										<Trash />
									</button>
								)}
							</div>
						)}
					</Dropzone>
				</div>
			)}

			<div className="divide-black my-5 mx-0" />

			<div className="flex justify-between items-center gap-4">
				<div
					className="flex justify-between items-center gap-24"
					onClick={() => setIsImage(!isImage)}
				>
					<div className="flex justify-between items-center gap-1">
						<ImageFill className="text-base" />
						<div className="text-gray-600">Image</div>
					</div>
					<div className="flex justify-between items-center gap-1">
						<Clipboard2 className="text-base" />
						<div className="text-gray-600">Clip</div>
					</div>

					<div className="flex justify-between items-center gap-1">
						<Paperclip className="text-base" />
						<div className="text-gray-600">Attachment</div>
					</div>

					<div className="flex justify-between items-center gap-1">
						<Mic className="text-base" />
						<div className="text-gray-600">Audio</div>
					</div>
					<button
						disabled={!post}
						onClick={handlePost}
						className="bg-blue-300 rounded-3xl w-14 hover:bg-warmGray-400 cursor-pointer"
					>
						POST
					</button>
				</div>
			</div>
		</div>
	);
};

export default MyPostWidget;
