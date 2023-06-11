import { ArrowClockwise } from "react-bootstrap-icons";
import Image from "next/image";

const DisplayTrackInPlaybar = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}: any) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="flex gap-4">
        <div>
          {currentTrack.thumbnail ? (
            <Image
              src={currentTrack.thumbnail || ""}
              alt="track cover"
              width={50}
              height={10}
              className="rounded-full"
            />
          ) : (
            <div className="flex justify-center items-center max-h-fit">
              <span className="flex justify-center items-center bg-slate-300">
                <ArrowClockwise />
              </span>
            </div>
          )}
        </div>
        <div className="text-left">
          <p className="text-left py-2 font-bold text-2xl">
            {currentTrack.title}
          </p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrackInPlaybar;
