import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Investor_form from "./Investor_form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InvestorDetail() {
  const [data, setData] = useState({});
  let { currentUser } = useSelector(state => state.userLogin);
  const API_URL = import.meta.env.VITE_API_URL;
  const [flag, setFlag] = useState(1);
  let [userData, setUserData] = useState({});

  useEffect(() => {
    let isMounted = true; // To handle potential memory leaks

    const fetchData = async () => {
      let data = currentUser.username;
      try {
        let res = await axios.post(`${API_URL}investor-api/check_investor`, { data });
        if (isMounted) {
          if (res.data.message === "investor not found") {
            setFlag(1);
          } else {
            setUserData(res.data.payload[0]);
            setFlag(0);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function
    };
  }, [flag, currentUser.username]);

  return (
    <div className="w-1/3">
      {flag === 1 ? <Investor_form /> :
       <div className="max-w-full rounded overflow-hidden shadow-lg p-2 bg-[#338778] text-white mt-10">
       <div className="text-center mb-2">
         <h2 className="font-bold text-2xl mb-1">Investor Details</h2>
         <div className="bg-white rounded-lg p-4 text-gray-900 font-mono">
           <p className="mb-2 text-slate-500 text-lg"><span className="font-semibold text-slate-600">Username:</span> {userData.username}</p>
           <p className="mb-2 text-slate-500 text-lg"><span className="font-semibold text-slate-600">Investment Range:</span> {userData.investment_range}</p>
           <p className="mb-2 text-slate-500 text-lg"><span className="font-semibold text-slate-600">Investment Experience:</span> {userData.investmentExperience}</p>
           <p className="mb-2 text-slate-500 text-lg"><span className="font-semibold text-slate-600">Preferred Industry:</span> {userData.preferred_industry}</p>
         </div>
       </div>
       <div className="text-center">
         <h3 className="font-bold text-xl mb-2">Payment Information</h3>
         <div className="bg-white rounded-lg p-4 text-gray-900 font-mono">
           <p className="mb-2"><span className="font-semibold">Bank Name:</span> {userData.paymentInfo.bankName}</p>
           <p className="mb-2"><span className="font-semibold">Account Number:</span> {userData.paymentInfo.accountNumber}</p>
           <p className="mb-2"><span className="font-semibold">Location:</span> {userData.paymentInfo.location}</p>
         </div>
       </div>
     </div>
     

      }
      <ToastContainer
        className="toast-position"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
