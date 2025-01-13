import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
    videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <ReactPlayer
            url={videoUrl}
            controls
            playing
            style={{ position: "absolute", top: 0, left: 0 }}
        />
    </div>
);

export default VideoPlayer;
