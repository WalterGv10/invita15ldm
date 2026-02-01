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
            {/* Texture layer / Polarizado */}
            <div className="polarizado absolute inset-0 z-10 opacity-20 pointer-events-none"></div>

            {/* Main overlay / Vignette */}
            <div className="vignette absolute inset-0 z-5"></div>

            {/* Cinematic soft edges */}
            <div className="absolute inset-0 z-[6] pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>

            <video
                key={videoSrc}
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover scale-[1.05]"
            />
        </div>
    );
};

export default VideoBackground;
