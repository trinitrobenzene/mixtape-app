import React from "react";
import { useState, useEffect } from "react";
import { addLike, removeLike } from "@/src/redux/features/Player";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { Heart, HeartFill } from "react-bootstrap-icons";

function LikeButton({ track_id, size, isList }: any) {
  const [like, setLike] = useState(false);
  const dispatch = useAppDispatch();
  const { player } = useAppSelector((_) => _);
  /* const { user } = useSelector((state: any) => state.auth); */

  useEffect(() => {
    setLike(player.liked.includes(track_id));
  }, [track_id, player.liked, like]);
  return (
    <div
      className={
        isList &&
        (like
          ? "visible"
          : "invisible group-hover:visible mobile:visible tablet:visible")
      }
    >
      {!like ? (
        <Heart
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addLike({ track_id }));
            setLike(true);
            /* dispatch(Like({ track_id, token: user?.token })); */
          }}
          className={` text-gray-400 
          ${size ? size : "text-[14px]"} mx-2 hover:text-white`}
        ></Heart>
      ) : (
        <HeartFill
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeLike({ track_id }));
            setLike(false);
            /*  dispatch(unLike({ track_id, token: user?.token })); */
          }}
          className={`text-[#e72be4] ${size ? size : "text-[15px]"} mx-2`}
        ></HeartFill>
      )}
    </div>
  );
}

export default LikeButton;
