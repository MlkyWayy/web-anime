"use client";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import Youtube from "react-youtube";
const VideoPlayer = ({ youtubeId }: { youtubeId: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleButton = () => {
    setIsOpen((prevState: any) => !prevState);
  };
  const options = {
    height: "250",
    width: "300",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button className="text-primary float-right" onClick={handleButton}>
          <XCircle size={32} />
        </button>
        <Youtube videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} opts={options}></Youtube>
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button className="fixed bottom-2 right-2 bg-primary text-dark" onClick={handleButton}>
      TONTON DISINI
    </button>
  );
};

export default VideoPlayer;
