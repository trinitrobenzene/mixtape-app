import React, { useState } from "react";
import Image from "next/image";

export default function SendComment(props: any) {
  const [comment, setComment] = useState("");
  const [buttonText, setButtonText] = useState(props.buttonText);

  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    props.submitComment(comment, props.replyingTo);
    setComment("");
    props.hasReplied && props.hasReplied();
  };
  return (
    <div className=" bg-white m-3 p-5 rounded-lg flex flex-col max-w-5xl space-y-3">
      <textarea
        onChange={handleCommentChange}
        value={comment}
        rows={5}
        className="bg-white border resize-none border-s-indigo-500 py-2 px-5 rounded-md placeholder:text-start text-Grayish-Blue"
        placeholder="Add a comment..."
      />

      <div className="flex justify-between py-2">
        <Image src={props.image} width={35} height={35} alt="pfp" />
        <button
          onClick={handleCommentSubmit}
          className="bg-purple-300 px-5 py-1 rounded-md hover:opacity-50"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
