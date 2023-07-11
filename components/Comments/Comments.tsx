'use client';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import SendComment from '../Comments/SendComment';
import CommentBlock from '../Comments/CommentBlock';
import { UserComment } from '../../data-test/comments';
import CommentInTrack from '@/src/models/CommentInTrack';
import { useAppSelector } from '@/src/redux/hooks';
import CommentService from '@/src/redux/services/api/comment';

export default function Comments() {
	const currentUser = UserComment[0].currentUser;
	const [commentData, setCommentData] = useState(new CommentInTrack());
	const { player } = useAppSelector(_ => _);

	const formatTime = (time: any) => {
		if (time && !isNaN(time)) {
			const minutes = Math.floor(time / 60);
			const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
			const seconds = Math.floor(time % 60);
			const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
			return `${formatMinutes}:${formatSeconds}`;
		}
		return '00:00';
	};

	function buildCommentSection(comment: any) {
		getCommentById();
		return comment.map((comment: any) => (
			<CommentBlock
				currentUser={currentUser}
				commentId={comment.id}
				key={comment.id}
				comment={comment}
			/>
		));
	}

	function buildCommentObj(text: any) {
		const newComment: CommentInTrack = {
			id: '',
			content: text,
			atTimeInTrack: formatTime(player.currentTime),
			id_track: player.activeSong.id,
			id_user: '',
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
	const getCommentById = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgwODE3NiwiZXhwIjoxNjkzOTkyMTc2fQ.I3kfNDp89UjIc_RXrN4YYcE1xJuSQzsMYZlkWuuihIM';
		await CommentService.getCommentsByIdTrack(`64a802eb222f9174fecbef83`, token)
			.then(resp => resp && setCommentData(resp))
			.catch(err => console.log(err));
	};

	const addNewComment = async (text: any) => {
		const newComment = buildCommentObj(text);
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgwODE3NiwiZXhwIjoxNjkzOTkyMTc2fQ.I3kfNDp89UjIc_RXrN4YYcE1xJuSQzsMYZlkWuuihIM';
		CommentService.postComment(newComment, token)
			.then(resp => console.log(resp.data))
			.catch(err => console.log(err));
	};

	return (
		<>
			<div className="font-rubik py-5 flex justify-center">
				<section className="flex flex-col ">
					<h1 className="sr-only">Comment section</h1>
					<SendComment
						buttonText={'SEND'}
						submitComment={addNewComment}
						image={currentUser.image.png}
					/>
					{buildCommentSection(commentData)}
				</section>
			</div>
		</>
	);
}
