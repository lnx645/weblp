import { Smartphone, Building, CreditCard } from "lucide-react";

export default function PaymentMethods() {
  const methods = [
    { icon: Smartphone, title: "QRIS", desc: "Scan langsung bayar." },
    { icon: Building, title: "Transfer Bank", desc: "Terverifikasi instan." },
    { icon: CreditCard, title: "Virtual Account", desc: "Proses cepat & aman." },
  ];

  return (
    <section className="py-20 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Pembayaran Otomatis & Terverifikasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-white border border-black/5 rounded-2xl">
              <method.icon className="w-10 h-10 text-accent-editor mb-4" />
              <h3 className="font-bold text-lg mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600">{method.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
