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
    <>
      {flag === 1 ? <Investor_form /> :
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <div className="font-bold text-2xl mb-4 text-center">Investor Details</div>
          <div className="mb-4">
            <p><span className="font-semibold">Username:</span> {userData.username}</p>
            <p><span className="font-semibold">Investment Range:</span> {userData.investment_range}</p>
            <p><span className="font-semibold">Investment Experience:</span> {userData.investmentExperience}</p>
            <p><span className="font-semibold">Preferred Industry:</span> {userData.preferred_industry}</p>
          </div>
          <div className="font-bold text-xl mb-2 text-center">Payment Information</div>
          <div>
            <p><span className="font-semibold">Bank Name:</span> {userData.paymentInfo.bankName}</p>
            <p><span className="font-semibold">Account Number:</span> {userData.paymentInfo.accountNumber}</p>
            <p><span className="font-semibold">Location:</span> {userData.paymentInfo.location}</p>
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
    </>
  );
}
