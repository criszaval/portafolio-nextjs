export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center text-white px-6">
      <div className="animate-pulse space-y-4 text-center">
        <div className="h-8 w-48 bg-slate-800 rounded mx-auto"></div>
        <div className="h-4 w-64 bg-slate-800/60 rounded mx-auto"></div>
      </div>
    </main>
  );
}