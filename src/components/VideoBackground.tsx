'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
    videos: {
        mobile: string;
        desktop: string;
    };
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videos }) => {
    const [videoSrc, setVideoSrc] = useState<string>('');
    const [activeVideo, setActiveVideo] = useState<'A' | 'B'>('A');
    const videoRefA = useRef<HTMLVideoElement>(null);
    const videoRefB = useRef<HTMLVideoElement>(null);

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

    useEffect(() => {
        const fadeTime = 2.0;
        const currentVideo = activeVideo === 'A' ? videoRefA.current : videoRefB.current;
        const nextVideo = activeVideo === 'A' ? videoRefB.current : videoRefA.current;

        if (!currentVideo) return;

        const handleTimeUpdate = () => {
            if (currentVideo.currentTime > currentVideo.duration - fadeTime) {
                if (nextVideo && nextVideo.paused) {
                    nextVideo.currentTime = 0;
                    nextVideo.play().catch(() => { });
                    setActiveVideo(activeVideo === 'A' ? 'B' : 'A');
                }
            }
        };

        currentVideo.addEventListener('timeupdate', handleTimeUpdate);
        return () => currentVideo.removeEventListener('timeupdate', handleTimeUpdate);
    }, [activeVideo, videoSrc]);

    if (!videoSrc) return null;

    const commonClass = "absolute top-0 left-0 w-full h-full object-cover scale-[1.05] transition-opacity duration-[2000ms] ease-in-out";

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* Texture layer / Polarizado */}
            <div className="polarizado absolute inset-0 z-10 opacity-20 pointer-events-none"></div>

            {/* Main overlay / Vignette */}
            <div className="vignette absolute inset-0 z-5"></div>

            {/* Cinematic soft edges */}
            <div className="absolute inset-0 z-[6] pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>

            <video
                ref={videoRefA}
                key={videoSrc + 'A'}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                className={`${commonClass} ${activeVideo === 'A' ? 'opacity-100 z-1' : 'opacity-0 z-0'}`}
            />
            <video
                ref={videoRefB}
                key={videoSrc + 'B'}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                className={`${commonClass} ${activeVideo === 'B' ? 'opacity-100 z-1' : 'opacity-0 z-0'}`}
            />
        </div>
    );
};

export default VideoBackground;
