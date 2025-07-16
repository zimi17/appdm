import React from 'react';

interface VideoEmbedProps {
  videoIdOrUrl: string;
  provider: 'youtube';
  title?: string;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoIdOrUrl, provider, title, className }) => {
  const getEmbedUrl = () => {
    if (provider === 'youtube') {
      const videoId = videoIdOrUrl.includes('youtube.com')
        ? new URL(videoIdOrUrl).searchParams.get('v')
        : videoIdOrUrl;
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return '';
  };

  const embedUrl = getEmbedUrl();

  if (!embedUrl) {
    return <p className="text-red-500">Unsupported video provider.</p>;
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-lg shadow-lg ${className}`} style={{ paddingTop: '56.25%' }}>
      <iframe
        src={embedUrl}
        title={title || 'Embedded video'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
