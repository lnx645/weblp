import { useNavigate } from "react-router-dom";

export default function InvitationForm() {
  const navigate = useNavigate();
  return (
    <div className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-serif text-center mb-12">Isi Data Undangan</h2>
      <form onSubmit={(e) => { e.preventDefault(); navigate("/publish"); }} className="space-y-4">
        <input type="text" placeholder="Nama Mempelai Pria" className="w-full p-3 border rounded-lg" required />
        <input type="text" placeholder="Nama Mempelai Wanita" className="w-full p-3 border rounded-lg" required />
        <input type="date" className="w-full p-3 border rounded-lg" required />
        <textarea placeholder="Alamat Lokasi" className="w-full p-3 border rounded-lg" required></textarea>
        <button type="submit" className="w-full bg-text-editor text-white p-3 rounded-lg">Simpan & Lanjut</button>
      </form>
    </div>
  );
}
