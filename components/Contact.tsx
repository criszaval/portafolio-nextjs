"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-32 bg-slate-950 text-white overflow-hidden px-6">
      
      {/* Fondo con efecto de malla sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Estemos en contacto
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mt-4">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-lg font-light">
            ¿Tienes alguna duda, propuesta de trabajo o quieres que construyamos algo juntos? Escríbeme y te responderé lo antes posible.
          </p>
        </motion.div>

        {/* Contenedor principal en dos columnas (Info + Formulario) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          
          {/* Información de contacto lateral */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Información Directa
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              También puedes contactarme directamente a través de mis canales profesionales o redes sociales.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="h-10 w-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Correo</p>
                  <p className="text-sm font-medium text-white break-all">zcristofr993@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-300">
                <div className="h-10 w-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  📱
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Teléfono / WhatsApp</p>
                  <a href="https://wa.me/50379927366" target="_blank" rel="noreferrer" className="text-sm font-medium text-emerald-400 hover:underline">
                    +503 7992-7366
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-300">
                <div className="h-10 w-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Ubicación</p>
                  <p className="text-sm font-medium text-white">El Salvador</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-300">
                <div className="h-10 w-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  💻
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">GitHub</p>
                  <a href="https://github.com/criszaval" target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-400 hover:underline">
                    github.com/criszaval
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario Estilizado */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
          >
            {/* Borde sutil con brillo en hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-blue-500/30 transition-all duration-500 rounded-2xl pointer-events-none" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mb-4 border border-blue-500/30 shadow-lg shadow-blue-500/10">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado con éxito!</h3>
                <p className="text-slate-400 text-sm">Gracias por contactarme. Me pondré en contacto contigo muy pronto.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Cristofer Zavala"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Tu Correo
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="correo@ejemplo.com"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Cuéntame sobre tu requerimiento o proyecto..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all resize-none text-sm"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all hover:from-blue-500 hover:to-indigo-500"
                >
                  Enviar Mensaje Directo
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Footer simple dentro de la sección */}
        <div className="mt-24 text-center text-sm text-slate-500 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Cristofer Zavala. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#sobre-mi" className="hover:text-blue-400 transition-colors">Sobre mí</a>
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
        </div>

      </div>
    </section>
  );
}