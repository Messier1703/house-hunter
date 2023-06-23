import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    width: "100%",
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;