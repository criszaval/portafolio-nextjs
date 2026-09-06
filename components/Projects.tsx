"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

// Definimos la interfaz del proyecto incluyendo el slug y la categoría para las rutas dinámicas
interface Project {
  title: string;
  slug: string;
  category_slug?: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase.from("projects").select("*");
        
        if (error) {
          console.error("Error al obtener los proyectos:", error.message);
        } else if (data) {
          setProjects(data);
        }
      } catch (err) {
        console.error("Error inesperado:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id="proyectos" className="relative py-32 bg-slate-950 text-white overflow-hidden px-6">
      
      {/* Resplandor decorativo */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
            Portafolio
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mt-2">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Sistemas web y aplicaciones reales construidas combinando lógica de backend sólida con interfaces limpias y funcionales.
          </p>
        </motion.div>

        {/* Estado de carga */}
        {loading ? (
          <div className="text-center text-slate-400 py-12">
            Cargando proyectos desde Supabase...
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center text-slate-400 py-12">
            No se encontraron proyectos registrados.
          </div>
        ) : (
          /* Grid de proyectos */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <div className="flex gap-2 items-center">
                      {project.category_slug && (
                        <Link
                          href={`/categorias/${project.category_slug}`}
                          className="text-xs text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 hover:bg-purple-500/20 transition-colors uppercase tracking-wider"
                        >
                          {project.category_slug}
                        </Link>
                      )}
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-slate-400 hover:text-white transition-colors bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags de tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-800/60 text-blue-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.slug && (
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Ver detalles <span className="ml-1">→</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}