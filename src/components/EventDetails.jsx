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
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>Padres</h3>
                <p style={{ fontSize: '1.8rem', fontFamily: 'var(--font-script)' }}>{data.padres.papa}</p>
                <p style={{ fontSize: '1.8rem', fontFamily: 'var(--font-script)' }}>{data.padres.mama}</p>
            </div>

            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Detalles del Evento</h2>

            <div style={{ display: 'grid', gap: '2rem', fontFamily: 'var(--font-serif)' }}>
                <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--color-gold-light)' }}>Fecha</h3>
                    <p style={{ fontSize: '1.4rem' }}>{data.evento.fecha}</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--color-gold-light)' }}>Actividades</h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{data.evento.misa}</p>
                    <p style={{ fontSize: '1.2rem' }}>{data.evento.recepcion}</p>
                </div>
            </div>

        </motion.div>
    );
};

export default EventDetails;
