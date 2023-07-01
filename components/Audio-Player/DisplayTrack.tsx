import { ArrowClockwise } from "react-bootstrap-icons";
import Image from "next/image";
import { useAppSelector } from "@/src/redux/hooks";
import router from "next/router";
import CustomImage from "../CustomImage";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}: any) => {
  const { player } = useAppSelector((_) => _);
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div
      className="flex flex-row 
    items-center justify-between 
    w-screen max-w-full mini-laptop:px-2 mobile:p-2 mobile:pb-0"
    >
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="flex flex-row items-center w-full cursor-pointer">
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          }}
          className="w-[150px] h-[150px] min-w-[50px]
         relative mini-laptop:w-[40px] mini-laptop:h-[40px]
          mini-laptop:min-w-[40px] mobile:min-w-[35px] mobile:w-[35px]
           mobile:h-[35px] cursor-pointer rounded-sm"
        >
          <CustomImage
            src={
              player.activeSong!.image +
              "&auto=format&fit=crop&w=400&q=50&h=400"
            }
            alt="track cover"
            className="rounded-sm w-[50px] h-[50px]"
          />
        </div>

        <div className="mx-4 mobile:mx-3">
          <p
            className="text-gray-300 
          cursor-pointer line-clamp-1 mobile:text-sm"
          >
            {player.activeSong!.name}
          </p>

          <p
            className="text-gray-400 text-sm mobile:text-xs 
            hover:underline cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              if (player.activeSong?.author_id == "120") {
                window.open(`https://anshrathod.com`, "_blank");
              } else {
                router.push(`/artist/${player.activeSong?.author_id}`);
              }
            }}
          >
            {player.activeSong!.author}
          </p>
        </div>
      </div>

      {/* <div className="grid gap-4">
        <div className="w-full md:w-auto">
          {currentTrack.image ? (
            <Image src={currentTrack.image || ""} alt="track cover" />
          ) : (
            <div className="flex justify-center items-center max-h-fit">
              <span className="flex justify-center items-center bg-slate-300">
                <ArrowClockwise />
              </span>
            </div>
          )}
        </div>
        <div className="text-left text-black">
          <p className="text-left p-2 text-black font-bold text-2xl">
            {currentTrack.name}
          </p>
          <p className="text-left">{currentTrack.author}</p>
        </div>
      </div> */}
    </div>
  );
};
export default DisplayTrack;
