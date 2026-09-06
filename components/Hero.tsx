"use client";
import { motion } from "motion/react";
import TypewriterTitle from "./TypewriterTitle"; // <-- Importamos el componente

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-lg font-medium text-blue-400"
          >
            Hola, soy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Cristofer Zavala
          </motion.h1>

          {/* Profesión con Tipeo Dinámico */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TypewriterTitle />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
          >
            Desarrollo aplicaciones web modernas, funcionales y
            enfocadas en ofrecer buenas experiencias digitales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold transition-colors hover:bg-blue-700"
            >
              Ver proyectos
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-slate-700 bg-slate-900 px-8 py-3 font-semibold transition-colors hover:border-blue-500 hover:text-blue-400"
            >
              Contactarme
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {["Next.js", "React", "Laravel", "TypeScript", "Supabase"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                  className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-400"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>

        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="mb-2 text-xs uppercase tracking-widest text-slate-500">
          Explorar
        </p>
        <div className="mx-auto h-8 w-5 rounded-full border border-slate-600 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-blue-400" />
        </div>
      </motion.div>

    </section>
  );
}