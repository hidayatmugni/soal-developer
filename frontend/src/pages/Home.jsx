import { useEffect, useState } from "react";
import axios from "axios";
import Marketing from "../components/Marketing";
import Payments from "../components/Payments";
function Home() {
  const [commissions, setCommissions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/api/comission/komisi").then((res) => {
      setCommissions(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">Soal Developer</h1>
      <div className="p-10 w-3/4 mx-auto">
        <h1 className="text-2xl font-bold text-center">Data Komisi</h1>
        <table className="w-full mt-5 border text-lg w-1/3 mx-auto">
          <thead className="text-center">
            <tr className="bg-yellow-200">
              <th>Marketing</th>
              <th>Bulan</th>
              <th>Omzet</th>
              <th>Komisi %</th>
              <th>Komisi Nominal</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {commissions.map((commission, index) => (
              <tr key={index}>
                <td>{commission.marketing}</td>
                <td>{commission.month}</td>
                <td>{commission.total_omzet}</td>
                <td>{commission.commission_percentage}%</td>
                <td>{commission.commission_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Marketing />
        <Payments />
      </div>
    </>
  );
}

export default Home;
