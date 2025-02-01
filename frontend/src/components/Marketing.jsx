import { useEffect, useState } from "react";
import axios from "axios";

function Marketing() {
  const [marketings, setMarketings] = useState([]);
  const [penjualan, setPenjualan] = useState([]);

  // Fetch data marketing
  useEffect(() => {
    axios.get("http://localhost:5001/api/marketing").then((res) => {
      setMarketings(res.data);
    });
  }, []);

  // Fetch data sales
  useEffect(() => {
    axios.get("http://localhost:5001/api/penjualan").then((res) => {
      setPenjualan(res.data);
    });
  }, []);

  return (
    <div className="p-10">
      {/* Table Marketing */}
      <h1 className="text-2xl font-bold">Data Marketing</h1>
      <table className="w-full mt-5 border  text-center border-collapse text-lg">
        <thead>
          <tr className="bg-violet-200">
            <th>ID</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {marketings.map((marketing) => (
            <tr key={marketing._id}>
              <td>{marketing._id}</td>
              <td>{marketing.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table Sales */}
      <h1 className="text-2xl font-bold mt-10">Data Penjualan</h1>
      <table className="w-full mt-5 border text-center border-collapse text-lg">
        <thead>
          <tr className="bg-green-200">
            <th>Id</th>
            <th>Transaksi Number</th>
            <th>Marketing</th>
            <th>Tanggal</th>
            <th>Cargo Fee</th>
            <th>Total Balance</th>
            <th>Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {penjualan.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.transaction_number}</td>
              <td>{item.marketing_Id ? item.marketing_Id.name : "Unknown"}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.cargo_fee}</td>
              <td>{item.total_balance}</td>
              <td>{item.grand_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Marketing;
