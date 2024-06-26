import React, { FC, useEffect, useState } from "react";

type Props = {
  videoUrl: string;
  title?: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [isYoutubeVideo, setIsYoutubeVideo] = useState<boolean | null>(false);
  const [isStreamableVideo, setStreamableVideo] = useState<boolean | null>(
    false
  );
  const [linkYT, setLinkYT] = useState("");

  useEffect(() => {
    if (videoUrl?.includes("youtube.com")) {
      setIsYoutubeVideo(true);
      setLinkYT(videoUrl?.replace("watch?v=", "embed/"));
    } else if (videoUrl?.includes("streamable.com")) {
      setStreamableVideo(true);
      setLinkYT(videoUrl?.replace(".com/", ".com/e/"));
    } else {
      setStreamableVideo(true);
      setLinkYT(`https://streamable.com/e/${videoUrl}`);

    }
  }, [videoUrl]);

  const isVideoOrStreamable = isYoutubeVideo || isStreamableVideo;

  return (
    <div
      style={{
        position: "relative",
        paddingTop: `${isVideoOrStreamable ? 0 : "5.25%"}`,
        overflow: "hidden",
      }}
    >
      <>
        {isYoutubeVideo ? (
          <RenderYoutubeVideo linkYT={linkYT} />
        ) : (
          <>
            {isStreamableVideo ? (
              <RenderStreamableVideo linkYT={linkYT} />
            ) : (
              <>
              </>
            )}
          </>
        )}
      </>
    </div>
  );
};

const RenderYoutubeVideo = ({ linkYT }: any) => {
  return (
    <iframe
      src={linkYT}
      frameBorder={0}
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="w-full aspect-video rounded-xl"
    />
  );
};

const RenderStreamableVideo = ({ linkYT }: any) => {
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
          src={linkYT}
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
