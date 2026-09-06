"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Nombre */}
        <a href="#" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
          <span>Cristofer.dev</span>
        </a>

        {/* Enlaces de navegación */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#sobre-mi" className="transition-colors hover:text-blue-400">
            Sobre mí
          </a>
          <a href="#proyectos" className="transition-colors hover:text-blue-400">
            Proyectos
          </a>
          <a href="#contacto" className="transition-colors hover:text-blue-400">
            Contacto
          </a>
        </div>

        {/* Botón de acción rápido */}
        <div>
          <a
            href="#contacto"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/25"
          >
            Hablemos
          </a>
        </div>

      </nav>
    </motion.header>
  );
}