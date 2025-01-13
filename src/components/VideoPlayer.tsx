import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
    videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    const handlePlay = () => {
        setIsPlaying(true);

        if (videoContainerRef.current?.requestFullscreen) {
            videoContainerRef.current.requestFullscreen();
        }
    }
    return (
        <div>
            <button
                onClick={handlePlay}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Watch Movie
            </button>

            <div
                ref={videoContainerRef}
                style={{
                    display: isPlaying ? "block" : "none",
                    position: "relative",
                    paddingTop: "56.25%",
                }}
            >
                <ReactPlayer
                    url={videoUrl}
                    playing={isPlaying}
                    controls
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
