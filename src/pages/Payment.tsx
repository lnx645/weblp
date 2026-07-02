import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  return (
    <div className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-serif text-center mb-12">Pilih Metode Pembayaran</h2>
      <div className="space-y-4">
        {["QRIS", "Transfer Bank", "Virtual Account"].map((method) => (
          <div key={method} onClick={() => navigate("/form")} className="p-6 border border-black/10 rounded-xl cursor-pointer hover:bg-black/5">
            {method}
          </div>
        ))}
      </div>
    </div>
  );
}
