import React, { FC, useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { ref } from "yup";

type Props = {
  videoUrl: string;
  title?: string;
  onCompleteVideo: any;
  onUpdateTime: any;
};

const CoursePlayer: FC<Props> = ({ videoUrl, onCompleteVideo, onUpdateTime }) => {
  const [isYoutubeVideo, setIsYoutubeVideo] = useState<boolean | null>(false);
  const [isStreamableVideo, setStreamableVideo] = useState<boolean | null>(
    false
  );
  const [linkVideo, setLinkVideo] = useState("");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (videoUrl?.includes("youtube.com")) {
      setIsYoutubeVideo(true);
      setLinkVideo(videoUrl?.replace("watch?v=", "embed/") + '?loop=0&autoplay=1');
    }
    else if (videoUrl?.includes("streamable.com")) {
      setLinkVideo(videoUrl);
    }
    else {
      setStreamableVideo(true);
      setLinkVideo('https://streamable.com/' + videoUrl);
    }
  }, [videoUrl]);

  useEffect(() => {
    onUpdateTime(currentTime)
  }, [currentTime])

  const handleProgress = (progress: { played: number; playedSeconds: number }) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleVideoEnded = () => {
    onCompleteVideo()
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    if (playerRef.current) {
      playerRef.current.seekTo(2469);
    }
  };

  const isVideoOrStreamable = isYoutubeVideo || isStreamableVideo;

  return (
    <div
      style={{
        position: "relative",
        paddingTop: `0`,
        overflow: "hidden",
      }}
    >
      {
        isYoutubeVideo ?
          <RenderYoutubeVideo linkVideo={linkVideo} /> :
          <ReactPlayer
            ref={playerRef}
            onEnded={handleVideoEnded}
            onProgress={handleProgress}
            // playing={isPlaying}
            className="w-full aspect-video"
            url={linkVideo}
            width="100%"
            height="100%"
            controls
          />
      }
    </div>
  );
};

const RenderYoutubeVideo = ({ linkVideo }: any) => {
  return (
    <iframe
      src={linkVideo}
      frameBorder={0}
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="w-full aspect-video rounded-xl"
    />
  );
};

const RenderStreamableVideo = ({ linkVideo }: any) => {
  return (
    <div className="videoWrapper">
      <div
        style={{
          width: "100%",
          height: 0,
          position: "relative",
          paddingBottom: "62.500%",
        }}
      >
        <iframe
          className="w-full aspect-video"
          src={linkVideo}
          frameBorder={0}
          width="100%"
          height="100%"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default CoursePlayer;