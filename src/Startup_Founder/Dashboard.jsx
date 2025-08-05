import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import Piechart from "./Piechart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { startupLifecycle } from "../redux/slices/startupSlice";

const Dashboard = () => {
  const { detail } = useSelector(state => state.startupDetail);
  const { loginStatus ,currentUser} = useSelector(state => state.userLogin);
  const [data, setData] = useState([]);
  let dispatch=useDispatch();

  useEffect(()=>{
        dispatch(startupLifecycle(currentUser.username))
  },[])
  useEffect(() => {
    if (loginStatus === true && detail && detail.payload) {
      const updatedData = detail.payload.map(val => ({
        name: val.startupName,
        fundingRaised: val.funding_raised,
        fundingNeeded: val.funding_goal - val.funding_raised
      }));
      setData(updatedData);
    }
  }, [loginStatus, detail]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold font-Kanit text-green-700 mb-8">Startup Dashboard</h1>
        {loginStatus === true && data.length > 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Funding Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="fundingNeeded" fill="#FF8042" name="Funding Needed" barSize={40}  />
                <Bar dataKey="fundingRaised" fill="#4CAF50" name="Funding Raised" barSize={40}  />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500 mb-10">No Funding data found</div>
        )}

        <h2 className="text-2xl font-semibold text-green-700 mb-6">Your Registered Startups</h2>
        {loginStatus === true && detail && detail.payload && Array.isArray(detail.payload) && detail.payload.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {detail.payload.map((startup, idx) => (
              <div key={startup.startup_id || idx} className="bg-white rounded-xl shadow-lg p-8 min-h-[420px] flex flex-col gap-4 border border-green-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap">
                      <span className="text-lg font-bold text-green-700 break-words">{startup.startupName}</span>
                      <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">{startup.stage}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center sm:items-end sm:justify-start w-full sm:w-auto pt-2">
                    <div className="w-28 h-28 flex items-center justify-center">
                      <Piechart funding_goal={startup.funding_goal} funding_raised={startup.funding_raised} />
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm mb-2">{startup.buisness_desc}</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-green-50 text-green-700 px-2 py-1 rounded">Industry: {startup.industry}</span>
                  <span className="bg-green-50 text-green-700 px-2 py-1 rounded">ID: {startup.startup_id}</span>
                  <span className="bg-green-50 text-green-700 px-2 py-1 rounded">Owner: {startup.username}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                  <span className="bg-lime-50 text-lime-700 px-2 py-1 rounded">Goal: ₹{startup.funding_goal}</span>
                  <span className="bg-lime-50 text-lime-700 px-2 py-1 rounded">Raised: ₹{startup.funding_raised}</span>
                  <span className="bg-lime-50 text-lime-700 px-2 py-1 rounded">Equity: {startup.equityOffered}%</span>
                </div>
                {startup.websiteurl && (
                  <a href={startup.websiteurl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs mt-2">{startup.websiteurl}</a>
                )}
                <div className="mt-3">
                  <div className="font-semibold text-sm text-gray-700 mb-1">Team Members:</div>
                  <div className="flex flex-col gap-1">
                    {Array.isArray(startup.team_members) && startup.team_members.length > 0 ? (
                      startup.team_members.map((member, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-xs bg-gray-50 rounded px-2 py-1">
                          <span className="font-medium text-gray-800">{member.name}</span>
                          <span className="text-gray-500">({member.role})</span>
                          <span className="ml-auto text-green-700">Stake: {member.stake}%</span>
                        </div>
                      ))
                    ) : (
                      <span className="text-gray-400 text-xs">No team members listed.</span>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm text-gray-700 mb-1">Payment Info:</div>
                  {startup.paymentInfo ? (
                    <div className="flex flex-col gap-1 text-xs bg-gray-50 rounded px-2 py-1">
                      <span>Account: {startup.paymentInfo.accountNumber}</span>
                      <span>Holder: {startup.paymentInfo.accoundHolderName}</span>
                      <span>Bank: {startup.paymentInfo.bankName}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400 text-xs">No payment info.</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">No startups registered yet.</div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Interested Investors</h2>
            <div className="text-gray-500">(Coming soon)</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Latest Messages</h2>
            <div className="text-gray-500">(Coming soon)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
