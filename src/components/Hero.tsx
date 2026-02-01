'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GiTiara } from 'react-icons/gi';
import { InvitationData } from '@/app/data';

interface HeroProps {
    data: InvitationData;
    delay: number;
}

const Hero: React.FC<HeroProps> = ({ data, delay }) => {
    return (
        <section className="min-h-screen md:min-h-[110vh] flex flex-col items-center justify-center text-center px-4 py-12 md:p-8 gap-6 relative overflow-hidden">
            {/* Tiara / Crown */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: [0, -15, 0],
                }}
                transition={{
                    opacity: { duration: 2, delay: delay },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ willChange: 'transform, opacity' }}
                className="text-gold text-5xl md:text-7xl mb-4 md:mb-6 filter drop-shadow(0 0 15px rgba(212,175,55,0.5))"
            >
                <GiTiara />
            </motion.div>

            {/* Intro Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: delay + 0.5 }}
                style={{ willChange: 'opacity' }}
                className="text-lg md:text-2xl font-serif tracking-[0.2em] text-white/90 uppercase text-glow-soft"
            >
                {data.textoPrincipal}
            </motion.p>

            {/* Name */}
            <div className="relative w-full">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: delay + 1.2, ease: "easeOut" }}
                    style={{ willChange: 'transform, opacity' }}
                    className="text-7xl sm:text-8xl md:text-[12rem] font-script text-gold-gradient leading-[0.8] my-6 md:my-8 shimmer relative z-10 break-words"
                >
                    {data.quinceanera.nombre}
                </motion.h1>
                {/* Subtle backglow for the name */}
                <div className="absolute inset-0 bg-gold/10 blur-[80px] md:blur-[100px] pointer-events-none rounded-full"></div>
            </div>

            {/* Blessing */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: delay + 2.0 }}
                style={{ willChange: 'transform, opacity' }}
                className="text-base md:text-2xl max-w-[90%] md:max-w-[85%] leading-relaxed italic font-serif text-white/80 text-glow-soft mt-2 md:mt-4"
            >
                {data.bendicion}
            </motion.p>

            {/* Verse */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: delay + 2.8, ease: "easeInOut" }}
                className="mt-8 md:mt-12 pt-6 border-t border-gold/30 w-[90%] max-w-[650px] text-sm md:text-lg opacity-90 leading-relaxed font-serif tracking-wide"
            >
                {data.versiculo}
            </motion.div>
        </section>
    );
};

export default Hero;
