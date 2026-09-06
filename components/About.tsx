"use client";
import { motion } from "motion/react";

const backendSkills = [
  { name: "Laravel", level: 70 },
  { name: "PHP", level: 70 },
  { name: "Supabase", level: 40 },
  { name: "Git & GitHub", level: 60 },
];

const frontendSkills = [
  { name: "React", level: 40 },
  { name: "TypeScript", level: 40 },
  { name: "Tailwind CSS", level: 40 },
  { name: "Next.js", level: 30 },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-32 bg-slate-950 text-white overflow-hidden px-6">
      
      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
            Trayectoria y Talento
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mt-2">
            Sobre mí
          </h2>
        </motion.div>

        {/* Tarjeta de presentación con Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl shadow-2xl mb-16"
        >
          <div className="absolute -top-3 left-8 bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider text-white shadow-lg">
            Perfil Profesional
          </div>

          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-6 font-light">
            Hola de nuevo. Soy <span className="font-semibold text-blue-400">Cristofer Zavala</span>, un Ingeniero en Sistemas enfocado en el desarrollo web integral. Combino lógica de servidor sólida con interfaces limpias y funcionales para construir aplicaciones robustas de punta a punta.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-400">
            <div className="flex items-start space-x-3">
              <span className="flex h-2 w-2 translate-y-2 rounded-full bg-blue-500" />
              <p><strong className="text-white">Desarrollo Backend:</strong> Creación de APIs, lógica de negocio y gestión de datos con Laravel, PHP y bases de datos.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="flex h-2 w-2 translate-y-2 rounded-full bg-purple-500" />
              <p><strong className="text-white">Experiencia Frontend:</strong> Interfaces modernas y adaptables utilizando React, Next.js y Tailwind CSS.</p>
            </div>
          </div>
        </motion.div>

        {/* Bloque de Habilidades Dividido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Columna Backend & Datos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500"></span> Backend & Datos
            </h3>

            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-md transition-colors hover:border-slate-700"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna Frontend & UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-purple-500"></span> Frontend & UI
            </h3>

            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-md transition-colors hover:border-slate-700"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}