export default function Pricing() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-12">Pilihan Paket</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-black/5 rounded-2xl">
            <h3 className="font-bold uppercase text-sm mb-4">Basic</h3>
            <p className="text-3xl font-bold mb-6">Rp 99.000</p>
            <ul className="text-left space-y-2 text-sm text-gray-600">
              <li>• Desain Dasar</li>
              <li>• RSVP</li>
            </ul>
          </div>
          <div className="p-8 bg-text-editor text-white rounded-2xl">
            <h3 className="font-bold uppercase text-sm mb-4">Premium</h3>
            <p className="text-3xl font-bold mb-6">Rp 199.000</p>
            <ul className="text-left space-y-2 text-sm text-gray-200">
              <li>• Desain Eksklusif</li>
              <li>• RSVP Otomatis</li>
              <li>• Galeri Foto</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
