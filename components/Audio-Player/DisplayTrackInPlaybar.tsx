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
      <div className="audio-info">
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
            <div className="icon-wrapper">
              <span className="audio-icon">
                <ArrowClockwise />
              </span>
            </div>
          )}
        </div>
        <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrackInPlaybar;
