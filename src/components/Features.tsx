import { Heart, Smartphone, Zap, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    { icon: Smartphone, title: "Responsif & Modern", desc: "Tampilan memukau di semua perangkat." },
    { icon: Zap, title: "Cepat & Mudah", desc: "Proses pembuatan yang sangat cepat." },
    { icon: Heart, title: "Desain Eksklusif", desc: "Pilihan tema yang cantik dan elegan." },
    { icon: ShieldCheck, title: "Aman & Privasi", desc: "Data acara Anda tetap terjaga aman." },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 bg-white shadow-sm border border-black/5">
            <f.icon className="w-8 h-8 text-accent-editor mb-6" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-editor mb-3">{f.title}</h3>
            <p className="text-sm text-accent-editor leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
