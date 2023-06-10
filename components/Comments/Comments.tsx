"use client";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import SendComment from "../Comments/SendComment";
import CommentBlock from "../Comments/CommentBlock";
import { UserComment } from "../../data-test/comments";

export default function Comments() {
  const currentUser = UserComment[0].currentUser;
  const [commentSection, setCommentSection] = useState(UserComment[0].comments);
  console.log(commentSection);
  console.log(currentUser);
  function buildCommentSection(comments: any) {
    return comments.map((comment: any) => (
      <CommentBlock
        currentUser={currentUser}
        commentId={comment.id}
        key={comment.id}
        comment={comment}
      />
    ));
  }

  function buildCommentObj(text: any) {
    const newComment = {
      id: commentSection.length + 1,
      content: text,
      createdAt: "a second ago",
      score: 0,
      user: currentUser,
      replies: [],
    };

    return newComment;
  }

  function addNewComment(text: any) {
    const newComment = buildCommentObj(text);
    setCommentSection((previousComments: any) => [
      ...previousComments,
      newComment,
    ]);
  }

  return (
    <>
      <div className="font-rubik py-5 flex justify-center">
        <section className="flex flex-col ">
          <h1 className="sr-only">Comment section</h1>
          <SendComment
            buttonText={"SEND"}
            submitComment={addNewComment}
            image={currentUser.image.png}
          />
          {buildCommentSection(commentSection)}
        </section>
      </div>
    </>
  );
}
