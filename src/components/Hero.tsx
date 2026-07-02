import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-8 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-[72px] font-serif leading-[1.05] tracking-tight text-text-editor mb-6"
      >
        Undangan Digital <br className="hidden md:block" />Elegan untuk Momen Spesial
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-accent-editor mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        Buat undangan pernikahan digital yang modern, responsif, dan mudah dibagikan kepada orang-orang terkasih.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-text-editor text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all"
      >
        Mulai Sekarang
      </motion.button>
    </section>
  );
}
