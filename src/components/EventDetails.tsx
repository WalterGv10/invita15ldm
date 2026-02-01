'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { InvitationData } from '@/app/data';

interface EventDetailsProps {
    data: InvitationData;
    delay: number;
}

const EventDetails: React.FC<EventDetailsProps> = ({ data, delay }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
            className="my-16 mx-auto p-6 sm:p-10 md:p-16 text-center glass-panel rounded-3xl max-w-[95%] md:max-w-3xl relative overflow-hidden"
        >
            {/* Elegant ornaments */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

            {/* Parents Section */}
            <div className="mb-12 md:mb-16">
                <h3 className="text-[10px] md:text-sm text-gold-light uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-6 opacity-70 font-serif">Honrosamente Invitados por sus Padres</h3>
                <div className="flex flex-col gap-2 md:gap-3">
                    <p className="text-5xl sm:text-6xl md:text-7xl font-script text-white drop-shadow-lg">{data.padres.papa}</p>
                    <p className="text-5xl sm:text-6xl md:text-7xl font-script text-white drop-shadow-lg">{data.padres.mama}</p>
                </div>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl mb-10 md:mb-12 text-gold-gradient font-script text-glow">Detalles del Evento</h2>

            <div className="grid gap-8 md:gap-12 font-serif">
                <div className="relative group">
                    <h3 className="text-xs md:text-base text-gold-light uppercase tracking-widest mb-2 md:mb-3 opacity-80">Fecha Elegante</h3>
                    <p className="text-2xl sm:text-3xl md:text-4xl tracking-widest text-white/90">{data.evento.fecha}</p>
                </div>

                <div className="pt-6 md:pt-8 border-t border-gold/10">
                    <h3 className="text-xs md:text-base text-gold-light uppercase tracking-widest mb-4 md:mb-6 opacity-80">Itinerario de la Celebración</h3>
                    <div className="flex flex-col gap-5 md:gap-6">
                        <div className="flex flex-col">
                            <span className="text-gold-light/60 text-[10px] uppercase tracking-tighter mb-1 font-serif">Ceremonia Religiosa</span>
                            <p className="text-lg md:text-2xl text-white/90 leading-tight">
                                {data.evento.misa}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gold-light/60 text-[10px] uppercase tracking-tighter mb-1 font-serif">Recepción Social</span>
                            <p className="text-lg md:text-2xl text-white/90 leading-tight">
                                {data.evento.recepcion}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default EventDetails;
