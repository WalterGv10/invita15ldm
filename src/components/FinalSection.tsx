'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPlus, FaMinus } from 'react-icons/fa';

interface FinalSectionProps {
    data: any;
    delay: number;
}

const FinalSection: React.FC<FinalSectionProps> = ({ data, delay }) => {
    const [numPeople, setNumPeople] = useState(1);

    const increment = () => setNumPeople(prev => Math.min(prev + 1, 15));
    const decrement = () => setNumPeople(prev => Math.max(prev - 1, 1));

    const finalMessage = `Hola ${data.contacto.nombre}, confirmo mi asistencia a los 15 años de Lolita Dulce Maria. Estaremos presentes un total de ${numPeople} ${numPeople === 1 ? 'persona' : 'personas'}. ¡Muchas gracias por la invitación!`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.contacto.telefono}&text=${encodeURIComponent(finalMessage)}`;

    return (
        <section className="text-center py-16 px-4 pb-32 md:py-24 md:pb-40 flex flex-col items-center gap-10 md:gap-12">
            <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="text-5xl sm:text-6xl md:text-8xl font-script text-gold-gradient mb-2 md:mb-4 max-w-[95%] md:max-w-[90%] leading-snug drop-shadow-2xl"
            >
                “{data.mensajeFinal}”
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col items-center gap-6 w-full max-w-sm"
            >
                <div className="flex flex-col items-center gap-3">
                    <p className="text-gold-light/80 text-sm uppercase tracking-widest font-serif">¿Cuántas personas asistirán?</p>
                    <div className="flex items-center gap-6 glass-panel px-6 py-2 rounded-full border border-gold/30">
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={decrement}
                            className="text-gold hover:text-gold-light transition-colors"
                        >
                            <FaMinus size={18} />
                        </motion.button>
                        <span className="text-3xl font-serif text-white min-w-[3rem]">{numPeople}</span>
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={increment}
                            className="text-gold hover:text-gold-light transition-colors"
                        >
                            <FaPlus size={18} />
                        </motion.button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 w-full">
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-3 md:gap-4 bg-gradient-to-r from-gold-deep via-gold to-gold-light text-black px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-2xl transition-all duration-300 group w-full"
                    >
                        <FaWhatsapp size={24} className="group-hover:rotate-12 transition-transform" />
                        Confirmar Asistencia
                    </motion.a>
                    <p className="text-gold-light/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-serif">Agradecemos tu confirmación</p>
                </div>
            </motion.div>
        </section>
    );
};

export default FinalSection;
