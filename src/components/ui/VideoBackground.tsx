'use client';

import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc, 
  overlayOpacity = 60 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced gradient overlay with darker left side for better text visibility */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary-navy/90 via-primary-navy/75 to-primary-blue/${overlayOpacity} z-10`}></div>
      
      {/* Additional left side darkening for text area */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary-navy/80 to-transparent z-10"></div>
      <video
        className="absolute min-w-full min-h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
