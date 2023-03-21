// eslint-disable-next-line import/order
import { useCallback } from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import YouTube from "react-youtube";

import type { YouTubeEvent } from "react-youtube";

interface VideoYouTubeProps {
  title: string;
  embedId: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export const VideoYouTube = ({
  title,
  embedId,
  autoPlay,
  loop,
}: VideoYouTubeProps) => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: Number(autoPlay),
      mute: Number(autoPlay),
      loop: Number(loop),
    },
  };

  const handleAutoPlay = useCallback(
    ({ target }: YouTubeEvent<any>) => {
      if (autoPlay) {
        target.playVideo();
      }
    },
    [autoPlay],
  );

  const handleLoop = useCallback(
    ({ data, target }: YouTubeEvent<number>) => {
      if (loop) {
        if (data === YouTube.PlayerState.ENDED) {
          target.playVideo();
        }
      }
    },
    [loop],
  );

  return (
    <YouTube
      id={embedId}
      videoId={embedId}
      className="card-shadow aspect-video w-full overflow-hidden rounded-lg p-0 shadow-lg"
      title={title}
      opts={opts}
      onReady={handleAutoPlay}
      onStateChange={handleLoop}
    />
  );
};
