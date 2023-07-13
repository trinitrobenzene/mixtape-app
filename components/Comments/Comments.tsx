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
import User from '@/src/models/User';
import UserService from '@/src/redux/services/api/user';

export default function Comments() {
	const currentUser = UserComment[0].currentUser;
	const [commentData, setCommentData] = useState<CommentInTrack[]>([]);
	const [isNewComment, setIsNewComment] = useState(false);
	const [imgUrl, setImgUrl] = useState({ preview: '' });
	const { player } = useAppSelector(_ => _);
	const { user } = useAppSelector(_ => _);
	const [currentAuthor, setCurrentAuthor] = useState(new User());

	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODgwODE3NiwiZXhwIjoxNjkzOTkyMTc2fQ.I3kfNDp89UjIc_RXrN4YYcE1xJuSQzsMYZlkWuuihIM';

	function buildCommentSection(comment: any) {
		// getCommentByTrackId();
		console.log(Object.keys(comment).length);
		if (Object.keys(comment).length > 0) {
			// console.log(comment[0].user._id);
			// getUserById(comment[0].user._id);
			// getAnImage(currentAuthor.avatar);
			// console.log(currentAuthor);
			// console.log(imgUrl.preview);
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

	const getAnImage = async (avatar: string) => {
		ImageService.getById(avatar, token)
			.then(resp => resp && setImgUrl({ preview: URL.createObjectURL(resp) }))
			.catch(err => console.log(err));
	};

	const getCommentByTrackId = async () => {
		// console.log(player.activeSong._id.toString());
		await CommentService.getCommentsByIdTrack('64abd84772ef0e0f90bb9f8e', token)
			.then(resp => resp && setCommentData(resp))
			.catch(err => console.log(err));
	};

	const getUserById = async (id: string) => {
		// console.log(player.activeSong._id.toString());
		await UserService.getUserById(id, token)
			.then(resp => resp && setCurrentAuthor(resp))
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
		getCommentByTrackId();
		console.log(commentData);
		//getUserById(commentData[0].id_user);
		// console.log(currentAuthor);
		// getAnImage(currentAuthor.avatar);
		// console.log(imgUrl.preview);
	}, []);

	useEffect(() => {
		getCommentByTrackId();
		console.log(commentData);
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
