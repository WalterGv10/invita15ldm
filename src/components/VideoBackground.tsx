'use client';

import React, { useState, useEffect } from 'react';

interface VideoBackgroundProps {
    videos: {
        mobile: string;
        desktop: string;
    };
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videos }) => {
    const [videoSrc, setVideoSrc] = useState<string>('');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < window.innerHeight) {
                setVideoSrc(videos?.mobile || '/videos/vertical.mp4');
            } else {
                setVideoSrc(videos?.desktop || '/videos/horizontal.mp4');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [videos]);

    if (!videoSrc) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* Texture layer / Polarizado - Reduced complexity for performance */}
            <div className="polarizado absolute inset-0 z-10 opacity-10 pointer-events-none"></div>

            {/* Main overlay / Vignette */}
            <div className="vignette absolute inset-0 z-5"></div>

            {/* Cinematic soft edges */}
            <div className="absolute inset-0 z-[6] pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>

            <video
                key={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/video-poster.png"
                className="absolute top-0 left-0 w-full h-full object-cover scale-[1.02] transition-opacity duration-1000"
                style={{
                    filter: 'brightness(0.6) contrast(1.1)',
                    willChange: 'transform'
                }}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBackground;
