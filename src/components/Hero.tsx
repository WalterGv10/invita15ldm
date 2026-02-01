'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';

interface HeroProps {
    data: any;
    delay: number;
}

const Hero: React.FC<HeroProps> = ({ data, delay }) => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 gap-4 relative">
            {/* Tiara */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
                className="text-gold text-6xl mb-4"
            >
                <FaCrown />
            </motion.div>

            {/* Intro Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: delay }}
                className="text-xl md:text-2xl font-serif tracking-widest text-glow-soft"
            >
                {data.textoPrincipal}
            </motion.p>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeOut" }}
                className="text-7xl md:text-9xl font-script text-gold-light leading-tight my-4 text-glow shimmer"
            >
                {data.quinceanera.nombre}
            </motion.h1>

            {/* Blessing */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: delay + 1.0 }}
                className="text-lg md:text-xl max-w-[80%] leading-relaxed italic mb-8 text-glow-soft"
            >
                {data.bendicion}
            </motion.p>

            {/* Verse */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: delay + 1.5, ease: "easeInOut" }}
                className="mt-8 pt-4 border-t border-gold/20 max-w-[600px] text-base opacity-90 leading-relaxed"
            >
                {data.versiculo}
            </motion.div>
        </section>
    );
};

export default Hero;
