import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FinalSection = ({ data, delay }) => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(data.contacto.mensajeWhatsapp)}`;

    return (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', paddingBottom: '6rem' }}>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-script)',
                    marginBottom: '3rem'
                }}
            >
                “{data.mensajeFinal}”
            </motion.p>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: 'var(--color-gold)',
                    color: '#000',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(212,175,55,0.4)'
                }}
            >
                <FaWhatsapp size={24} />
                Confirmar Asistencia
            </motion.a>

        </div>
    );
};

export default FinalSection;
