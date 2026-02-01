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
        <section className="text-center py-24 px-4 pb-40 flex flex-col items-center gap-12">
            <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="text-5xl md:text-7xl font-script text-gold-gradient mb-4 max-w-[90%] leading-snug drop-shadow-2xl"
            >
                “{data.mensajeFinal}”
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col items-center gap-4"
            >
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-4 bg-gradient-to-r from-gold-deep via-gold to-gold-light text-black px-12 py-4 rounded-full text-xl font-bold shadow-2xl transition-all duration-300 group"
                >
                    <FaWhatsapp size={28} className="group-hover:rotate-12 transition-transform" />
                    Confirmar Asistencia
                </motion.a>
                <p className="text-gold-light/40 text-xs uppercase tracking-[0.2em] font-serif">Agradecemos tu confirmación</p>
            </motion.div>
        </section>
    );
};

export default FinalSection;
