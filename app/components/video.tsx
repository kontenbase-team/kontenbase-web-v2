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
  return (
    <iframe
      className="border-panel aspect-video w-full rounded-lg shadow-lg"
      title={title}
      src={`https://www.youtube.com/embed/${embedId}?playlist=${embedId}&controls=1&modestbranding=1&rel=0&disablekb=1${
        autoPlay ? "&autoplay=1&mute=1" : ""
      }${loop ? "&loop=1" : ""}`}
      frameBorder="0"
      allowFullScreen
      style={{ border: "none" }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    />
  );
};
