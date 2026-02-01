import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown } from 'react-icons/fa'; // Using a crown icon as a tiara placeholder

const Hero = ({ data, delay }) => {
    return (
        <div className="flex-center" style={{ minHeight: '100vh', gap: '1rem', textAlign: 'center', padding: '2rem' }}>

            {/* Tiara/Crown Icon */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
                className="text-gold"
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
            >
                <FaCrown />
            </motion.div>

            {/* Intro Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: delay }}
                style={{
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '2px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)' // Sombra oscura para destacar el texto
                }}
            >
                {data.textoPrincipal}
            </motion.p>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeOut" }}
                style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    lineHeight: '1.2',
                    margin: '0.5rem 0 1.5rem 0',
                    textShadow: '0 0 25px rgba(212,175,55,0.8), 0 0 10px rgba(0,0,0,0.9)', // Sombra combinada
                    zIndex: 10
                }}
            >
                {data.quinceanera.nombre}
            </motion.h1>

            {/* Blessing */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: delay + 1.0 }}
                style={{
                    fontSize: '1.2rem',
                    maxWidth: '80%',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                }}
            >
                {data.bendicion}
            </motion.p>

            {/* Verse */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: delay + 1.5, ease: "easeInOut" }}
                style={{
                    marginTop: '2rem',
                    fontStyle: 'normal',
                    fontSize: '1rem',
                    opacity: 0.9,
                    borderTop: '1px solid rgba(212,175,55,0.2)',
                    paddingTop: '1rem',
                    maxWidth: '600px',
                    lineHeight: '1.5'
                }}
            >
                {data.versiculo}
            </motion.div>

        </div>
    );
};

export default Hero;
