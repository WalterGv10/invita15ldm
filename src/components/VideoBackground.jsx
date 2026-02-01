import React, { useState, useEffect } from 'react';

const VideoBackground = ({ videos }) => {
    const [videoSrc, setVideoSrc] = useState('');
    const [activeVideo, setActiveVideo] = useState('A');
    const videoRefA = React.useRef(null);
    const videoRefB = React.useRef(null);

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
        const fadeTime = 1.5; // Seconds of cross-fade
        const checkInterval = setInterval(() => {
            const currentVideo = activeVideo === 'A' ? videoRefA.current : videoRefB.current;
            const nextVideo = activeVideo === 'A' ? videoRefB.current : videoRefA.current;

            if (currentVideo && nextVideo && currentVideo.duration > 0) {
                // When current video is near the end
                if (currentVideo.currentTime > currentVideo.duration - fadeTime) {
                    if (nextVideo.paused) {
                        nextVideo.currentTime = 0;
                        nextVideo.play().catch(() => { });
                        setActiveVideo(activeVideo === 'A' ? 'B' : 'A');
                    }
                }
            }
        }, 100);

        return () => clearInterval(checkInterval);
    }, [activeVideo, videoSrc]);

    if (!videoSrc) return null;

    const commonStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'scale(1.1)',
        transition: 'opacity 1.5s ease-in-out'
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            backgroundColor: '#000'
        }}>
            {/* Capa de Polarizado / Textura */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `
                    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                    linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.04))
                `,
                backgroundSize: '100% 4px, 3px 100%',
                pointerEvents: 'none',
                zIndex: 4,
                opacity: 0.35
            }}></div>

            {/* Overlay de contraste (Vignette) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)',
                zIndex: 2
            }}></div>

            <video
                ref={videoRefA}
                key={videoSrc + 'A'}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                style={{ ...commonStyle, opacity: activeVideo === 'A' ? 1 : 0, zIndex: activeVideo === 'A' ? 1 : 0 }}
            />
            <video
                ref={videoRefB}
                key={videoSrc + 'B'}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                style={{ ...commonStyle, opacity: activeVideo === 'B' ? 1 : 0, zIndex: activeVideo === 'B' ? 1 : 0 }}
            />
        </div>
    );
};

export default VideoBackground;
