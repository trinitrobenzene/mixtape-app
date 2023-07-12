'use client';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import SendComment from '../Comments/SendComment';
import CommentBlock from '../Comments/CommentBlock';
import { UserComment } from '../../data-test/comments';
import CommentInTrack from '@/src/models/CommentInTrack';
import { useAppSelector } from '@/src/redux/hooks';
import CommentService from '@/src/redux/services/api/comment';
import CreateCommentTrack from '@/src/dto/create-comment.dto';
import ImageService from '@/src/redux/services/api/image';

export default function Comments() {
	// const currentUser = UserComment[0].currentUser;
	const [commentData, setCommentData] = useState<CommentInTrack[]>([]);
	const [isNewComment, setIsNewComment] = useState(false);
	const [imgUrl, setImgUrl] = useState({ preview: '' });
	const { player } = useAppSelector(_ => _);
	const { user } = useAppSelector(_ => _);
	const [currentUser, setCurrentUser] = useState(user.infor);
	console.log(user);

	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgwODE3NiwiZXhwIjoxNjkzOTkyMTc2fQ.I3kfNDp89UjIc_RXrN4YYcE1xJuSQzsMYZlkWuuihIM';

	function buildCommentSection(comment: any) {
		// getCommentByTrackId();
		if (comment) {
			return comment.map((comment: any) => (
				<CommentBlock
					currentUser={currentUser}
					commentId={comment.id}
					key={comment.id}
					comment={comment}
				/>
			));
		} else {
			return <div>Loading</div>;
		}
	}

	function buildCommentObj(text: any) {
		const newComment: CreateCommentTrack = {
			id: '',
			content: text,
			atTimeInTrack: player.currentTime,
			track: player.activeSong._id,
		};

		return newComment;
	}

	/*  function addNewComment(text: any) {
    const newComment = buildCommentObj(text);
    setCommentSection((previousComments: any) => [
      ...previousComments,
      newComment,
    ]);
  } */

	const getAnImage = async () => {
		ImageService.getById(currentUser.avatar, token)
			.then(resp => resp && setImgUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};

	const getCommentByTrackId = async () => {
		// console.log(player.activeSong._id.toString());
		await CommentService.getCommentsByIdTrack('64abd84772ef0e0f90bb9f8e', token)
			.then(resp => resp && setCommentData(resp))
			.catch(err => console.log(err));
	};

	const addNewComment = async (text: any) => {
		setIsNewComment(true);
		const newComment = buildCommentObj(text);
		CommentService.postComment(newComment, token)
			.then(resp => console.log(resp.data))
			.catch(err => console.log(err));
	};

	useEffect(() => {
		// buildCommentSection()
		getCommentByTrackId();
		getAnImage();
		console.log(imgUrl.preview);
	}, []);

	useEffect(() => {
		getCommentByTrackId();
		setIsNewComment(false);
	}, [isNewComment]);

	return (
		<>
			<div className="font-rubik py-5 flex justify-center">
				<section className="flex flex-col ">
					<h1 className="sr-only">Comment section</h1>
					<SendComment
						buttonText={'SEND'}
						submitComment={addNewComment}
						image={imgUrl.preview}
					/>
					{buildCommentSection(commentData)}
				</section>
			</div>
		</>
	);
}
