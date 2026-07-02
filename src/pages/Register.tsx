import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="py-20 px-4 flex justify-center">
      <div className="w-full max-w-md p-8 border border-black/5 rounded-2xl">
        <h2 className="text-3xl font-serif mb-6 text-center">Daftar</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nama Lengkap" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
          <button type="submit" className="w-full bg-text-editor text-white p-3 rounded-lg">Daftar</button>
        </form>
        <p className="mt-4 text-center text-sm">Sudah punya akun? <Link to="/login" className="text-accent-editor font-bold">Masuk</Link></p>
      </div>
    </div>
  );
}
