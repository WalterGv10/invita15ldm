import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = ({ data, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay, ease: "easeInOut" }}
            style={{
                textAlign: 'center',
                padding: '2rem',
                borderTop: '1px solid rgba(212,175,55,0.3)',
                borderBottom: '1px solid rgba(212,175,55,0.3)',
                margin: '2rem',
                backgroundColor: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(5px)',
                borderRadius: '10px'
            }}
        >
            <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1rem', opacity: 0.8 }}>Padres</h3>
                <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-script)', marginBottom: '0.5rem' }}>{data.padres.papa}</p>
                <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-script)' }}>{data.padres.mama}</p>
            </div>

            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Detalles del Evento</h2>

            <div style={{ display: 'grid', gap: '2.5rem', fontFamily: 'var(--font-serif)' }}>
                <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-gold-light)', marginBottom: '0.5rem' }}>Fecha</h3>
                    <p style={{ fontSize: '1.6rem', letterSpacing: '1px' }}>{data.evento.fecha}</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-gold-light)', marginBottom: '0.8rem' }}>Actividades</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p style={{ fontSize: '1.3rem' }}>{data.evento.misa}</p>
                        <p style={{ fontSize: '1.3rem' }}>{data.evento.recepcion}</p>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default EventDetails;
