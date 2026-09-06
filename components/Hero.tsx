"use client";
import { motion } from "motion/react";
import TypewriterTitle from "./TypewriterTitle";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 text-white py-20 px-6">

      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-purple-500/10 blur-3xl"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full my-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-sm sm:text-base font-medium text-blue-400"
        >
          Hola, soy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
        >
          Cristofer Zavala
        </motion.h1>

        {/* Profesión con Tipeo Dinámico */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-2"
        >
          <TypewriterTitle />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-400"
        >
          Desarrollo aplicaciones web modernas, funcionales y
          enfocadas en ofrecer buenas experiencias digitales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto"
        >
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-3 font-semibold transition-colors hover:bg-blue-700 text-center shadow-lg shadow-blue-600/20"
          >
            Ver proyectos
          </motion.a>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-900 px-8 py-3 font-semibold transition-colors hover:border-blue-500 hover:text-blue-400 text-center"
          >
            Contactarme
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-2 max-w-lg mx-auto"
        >
          {["Next.js", "React", "Laravel", "TypeScript", "Supabase"].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs sm:text-sm text-slate-400"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

      </div>

      {/* Indicador de scroll adaptado para móvil y pantallas grandes */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="mt-8 sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 text-center"
      >
        <p className="mb-1 text-[10px] uppercase tracking-widest text-slate-500">
          Explorar
        </p>
        <div className="mx-auto h-5 w-3.5 rounded-full border border-slate-600 p-0.5">
          <div className="mx-auto h-1 w-1 rounded-full bg-blue-400" />
        </div>
      </motion.div>

    </section>
  );
}