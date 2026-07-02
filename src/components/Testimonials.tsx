export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8">
      <h2 className="text-4xl font-serif text-center mb-12">Kata Mereka</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <blockquote className="p-8 bg-gray-50 italic text-gray-700 rounded-2xl">
          "Undangan digital di Invitnesia sangat memukau dan mudah digunakan!"
        </blockquote>
        <blockquote className="p-8 bg-gray-50 italic text-gray-700 rounded-2xl">
          "Pilihan temanya elegan dan membuat hari spesial saya lebih sempurna."
        </blockquote>
      </div>
    </section>
  );
}
