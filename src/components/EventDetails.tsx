'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EventDetailsProps {
    data: any;
    delay: number;
}

const EventDetails: React.FC<EventDetailsProps> = ({ data, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay, ease: "easeInOut" }}
            className="my-8 mx-auto p-12 text-center bg-black/40 backdrop-blur-md rounded-2xl border-y border-gold/30 max-w-[90%]"
        >
            {/* Parents */}
            <div className="mb-12">
                <h3 className="text-sm text-gold-light uppercase tracking-[0.3em] mb-4 opacity-80">Padres</h3>
                <div className="flex flex-col gap-2">
                    <p className="text-4xl md:text-5xl font-script text-white">{data.padres.papa}</p>
                    <p className="text-4xl md:text-5xl font-script text-white">{data.padres.mama}</p>
                </div>
            </div>

            <h2 className="text-5xl md:text-6xl mb-8 text-glow-soft font-script">Detalles del Evento</h2>

            <div className="grid gap-10 font-serif">
                <div>
                    <h3 className="text-xl text-gold-light mb-2">Fecha</h3>
                    <p className="text-2xl tracking-wider">{data.evento.fecha}</p>
                </div>
                <div>
                    <h3 className="text-xl text-gold-light mb-4">Actividades</h3>
                    <div className="flex flex-col gap-4">
                        <p className="text-xl text-white/90">{data.evento.misa}</p>
                        <p className="text-xl text-white/90">{data.evento.recepcion}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default EventDetails;
