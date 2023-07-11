import React, { useState } from 'react';
import SendComment from './SendComment';
import DeleteWarning from './DeleteWarning';
import {
	Trash,
	Pencil,
	Reply,
	EmojiLaughing,
	EmojiFrown,
} from 'react-bootstrap-icons';
import st from '../../data-test/avatars/image-amyrobson.png';
import Image from 'next/image';
import { useAppSelector } from '@/src/redux/hooks';

export default function Comment(props: any) {
	const [isEditing, setIsEditing] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [showDeleteWarning, setShowDeleteWarning] = useState(false);
	const { user } = useAppSelector(_ => _);

	function handleShowWarning() {
		setShowDeleteWarning(true);
	}

	/* function like() {
		if (userScore === -1) return;
		if (userScore === 1) {
			setScore(score - 1);
			setUserScore(0);
		} else {
			setScore(score + 1);
			setUserScore(1);
		}
	}

	function dislike() {
		if (userScore === 1) return;
		if (userScore === -1) {
			setScore(score + 1);
			setUserScore(0);
		} else {
			setScore(score - 1);
			setUserScore(-1);
		}
	} */

	/* function handleHasReplied() {
		setIsReplying(false);
	} */

	function confirmDelete() {
		setIsVisible(false);
		setShowDeleteWarning(false);
	}

	function cancelDelete() {
		setShowDeleteWarning(false);
	}

	function editComment() {
		setIsEditing(true);
	}

	function Username() {
		return (
			<>
				{(props.id === user.infor.id && (
					<div>
						<span className="text-blue-600 font-bold">{user.infor.name}</span>
						<span className="bg-sky-500 px-1.5 rounded-sm mx-3">You</span>
					</div>
				)) || <span className="text-blue-600 font-bold">{props.name}</span>}
			</>
		);
	}

	function CommentButtons() {
		/* const handleIsReplying = () => {
			setIsReplying(true);
		}; */

		if (props.id === user.infor.id) {
			return (
				<>
					<button
						onClick={handleShowWarning}
						className="flex space-x-2 items-center py-1 hover:opacity-50 text-red-600 "
					>
						<Trash />
						Delete
					</button>
				</>
			);
		}
		return <span className="text-zinc-400">{props.createdAt}</span>;
	}

	return (
		<>
			{showDeleteWarning && (
				<>
					<div className="fixed inset-0 flex items-center justify-center z-10 bg-Dark-blue bg-opacity-50">
						<DeleteWarning onCancel={cancelDelete} onDelete={confirmDelete} />
					</div>
				</>
			)}

			{isVisible && (
				<div>
					<div className="flex flex-col bg-white m-3 px-4 py-3 md:pl-20 rounded-lg max-w-3xl min-h-[10rem] space-y-3 relative">
						<div className="md:order-2 ">
							<div className="flex justify-start items-center space-x-4">
								<Image src={props.image.png} width={35} height={35} alt="pfp" />
								<Username />
								<span className="text-zinc-400"> at {props.atTimeInTrack}</span>
							</div>
							<Content
								setIsEditing={setIsEditing}
								// replyingTo={props.replyingTo}
								content={props.content}
								isEditing={isEditing}
							/>
						</div>
						<div className="flex my-3 md:order-1"></div>
						<div className="flex space-x-4 absolute right-0 bottom-0 p-5 md:top-0 md:bottom-full ">
							<CommentButtons />
						</div>
					</div>
					{/* isReplying && (
						<SendComment
							buttonText={'REPLY'}
							hasReplied={handleHasReplied}
							submitComment={props.handleReply}
							image={props.currentUser.image.png}
							replyingTo={props.username}
						/>
					) */}
				</div>
			)}
		</>
	);
}

function Content(props: any) {
	const [content, setContent] = useState(props.content);
	// const replyTag = props.replyingTo ? `@${props.replyingTo}` : null;
	return (
		<>
			{(!props.isEditing && (
				<p className="text-Grayish-Blue my-3 break-words"> {content}</p>
			)) || (
				<ContentEdit
					contentToEdit={content}
					setContent={setContent}
					setIsEditing={props.setIsEditing}
				/>
			)}
		</>
	);
}

function ContentEdit(props: any) {
	const handleContentChange = (event: any) => {
		props.setContent(event.target.value);
	};

	const handleEditSubmit = () => {
		props.setIsEditing(false);
	};

	return (
		<div className="m-3 flex flex-col">
			<textarea
				onChange={handleContentChange}
				value={props.contentToEdit}
				rows={5}
				className="bg-white border resize-none border-Light-gray py-2 px-5 rounded-md placeholder:text-start text-Grayish-Blue "
				placeholder="Add a comment..."
			/>
			<div className="flex justify-end my-4">
				<button
					onClick={handleEditSubmit}
					className="bg-purple-300 px-3 py-1 rounded-md hover:opacity-50"
				>
					UPDATE
				</button>
			</div>
		</div>
	);
}
