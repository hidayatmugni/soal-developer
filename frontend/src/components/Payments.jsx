import { useEffect, useState } from "react";
import axios from "axios";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [salesId, setSalesId] = useState("");
  const [amountPaid, setAmountPaid] = useState("");

  // Fetch data pembayaran
  useEffect(() => {
    axios.get("http://localhost:5001/api/payments").then((res) => {
      setPayments(res.data);
    });
  }, []);

  // Fungsi untuk menambahkan pembayaran
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/payments", {
        sales_id: salesId,
        amount_paid: Number(amountPaid),
      });
      alert(res.data.message);
      window.location.reload(); // Refresh halaman setelah pembayaran sukses
    } catch (error) {
      alert("Gagal melakukan pembayaran: " + error.response.data.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Lakukan Pembayaran</h1>

      <form onSubmit={handlePayment} className="my-5 p-5 border">
        <h2 className="text-xl">Tambah Pembayaran</h2>
        <input type="text" placeholder="ID Transaksi" value={salesId} onChange={(e) => setSalesId(e.target.value)} className="border p-2 m-2" />
        <input type="number" placeholder="Jumlah Bayar" value={amountPaid} onChange={(e) => setAmountPaid(e.target.value)} className="border p-2 m-2" />
        <button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 p-2">
          Bayar
        </button>
      </form>

      <table className="w-full mt-5 border text-center border-collapse">
        <thead>
          <tr className="bg-blue-200">
            <th>ID Transaksi</th>
            <th>Jumlah Bayar</th>
            <th>Sisa Saldo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.sales_id.transaction_number}</td>
              <td>{payment.amount_paid}</td>
              <td>{payment.remaining_balance}</td>
              {payment.status === "Belum Lunas" ? <td className="text-red-500">Belum Lunas</td> : <td>Lunas</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;
