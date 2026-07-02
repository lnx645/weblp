import { useNavigate } from "react-router-dom";

export default function ThemeSelection() {
  const navigate = useNavigate();
  return (
    <div className="py-20 px-4 md:px-8">
      <h2 className="text-4xl font-serif text-center mb-12">Pilih Tema Undangan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {["Klasik", "Modern", "Minimalis"].map((theme) => (
          <div key={theme} onClick={() => navigate("/payment")} className="p-8 border border-black/10 rounded-2xl text-center hover:border-accent-editor transition-all cursor-pointer">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="font-bold">{theme}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
