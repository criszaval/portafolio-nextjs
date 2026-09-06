import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // Consulta al servidor para filtrar proyectos por la categoría dinámica
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("category_slug", slug);

  if (error || !projects || projects.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div>
          <Link href="/#proyectos" className="text-sm text-blue-400 hover:underline mb-6 inline-block">
            ← Volver al inicio
          </Link>
        </div>

        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Categoría: {slug}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 mb-10 tracking-tight capitalize">
          Proyectos en {slug.replace("-", " ")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id || project.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
              </div>
              <div>
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                >
                  Ver detalle del sistema <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}