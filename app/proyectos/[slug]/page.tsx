import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Operación de lectura individual desde Supabase por slug
  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Enlace de regreso con su respectivo margen inferior para separarlo */}
        <div>
          <Link href="/#proyectos" className="text-sm text-blue-400 hover:underline mb-6 inline-block">
            ← Volver al inicio
          </Link>
        </div>
        
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Detalle del Sistema
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 mb-6 tracking-tight">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags?.map((tag: string) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-blue-300 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Descripción General</h2>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          <div className="pt-6 border-t border-slate-800 flex gap-4">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700"
              >
                Ver Repositorio en GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}