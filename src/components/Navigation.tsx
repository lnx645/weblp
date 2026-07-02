import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-black/5 bg-bg-editor relative">
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
        <Link to="/login" className="text-text-editor font-bold">Masuk</Link>
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <Link to="/create" className="px-6 py-2 bg-text-editor text-white text-sm font-medium rounded-full hover:opacity-90 transition-all">
          Buat Undangan
        </Link>
      </div>
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-bg-editor border-b border-black/5 p-6 flex flex-col gap-4 md:hidden z-50">
          <Link to="/catalog" onClick={() => setIsOpen(false)}>Katalog</Link>
          <Link to="/features" onClick={() => setIsOpen(false)}>Fitur</Link>
          <Link to="/themes" onClick={() => setIsOpen(false)}>Tema</Link>
          <Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimoni</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Masuk</Link>
          <Link to="/create" className="bg-text-editor text-white px-6 py-2 rounded-full text-center" onClick={() => setIsOpen(false)}>
            Buat Undangan
          </Link>
        </div>
      )}
    </header>
  );
}
