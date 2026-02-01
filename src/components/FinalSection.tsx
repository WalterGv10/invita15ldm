'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface FinalSectionProps {
    data: any;
    delay: number;
}

const FinalSection: React.FC<FinalSectionProps> = ({ data, delay }) => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(data.contacto.mensajeWhatsapp)}`;

    return (
        <section className="text-center py-20 px-4 pb-32">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-4xl md:text-5xl font-script mb-12 text-glow-soft"
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
                className="inline-flex items-center gap-3 bg-gold text-black px-8 py-3 rounded-full text-lg font-bold shadow-[0_4px_15px_rgba(212,175,55,0.4)] transition-all hover:bg-gold-light"
            >
                <FaWhatsapp size={24} />
                Confirmar Asistencia
            </motion.a>
        </section>
    );
};

export default FinalSection;
