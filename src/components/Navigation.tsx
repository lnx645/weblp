import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="h-20 px-12 flex items-center justify-between border-b border-black/5 bg-bg-editor">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent-editor rounded-full flex items-center justify-center">
          <span className="text-white font-serif italic text-lg">i</span>
        </div>
        <span className="text-xl font-serif font-bold tracking-tight">Invitnesia</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-accent-editor">
        <Link to="/catalog">Katalog</Link>
        <Link to="/features">Fitur</Link>
        <Link to="/themes">Tema</Link>
        <Link to="/testimonials">Testimoni</Link>
      </nav>
      <Link to="/create" className="px-6 py-2 bg-text-editor text-white text-sm font-medium rounded-full hover:opacity-90 transition-all">
        Buat Undangan
      </Link>
    </header>
  );
}
