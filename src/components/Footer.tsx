'use client';

import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="w-full py-12 text-center bg-gradient-to-t from-black to-transparent border-t border-gold/5 mt-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2"
            >
                <p className="text-gold-light/40 text-[10px] uppercase tracking-[0.4em] font-serif">
                    Diseño Exclusivo por
                </p>
                <a
                    href="https://walweb.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                >
                    <span className="text-3xl md:text-4xl font-bold tracking-[0.3em] text-gold-gradient shimmer filter drop-shadow(0 0 15px rgba(212,175,55,0.4)) group-hover:drop-shadow(0 0 25px rgba(212,175,55,0.7)) transition-all duration-500">
                        WALWEB
                    </span>
                </a>
                <p className="text-gold-light/20 text-[9px] mt-4 tracking-widest uppercase">
                    Hecho con ❤️ para momentos inolvidables
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
