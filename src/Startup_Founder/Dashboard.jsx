import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";

const fundingData = [
  { round: "Seed", amount: 50000 },
  { round: "Series A", amount: 200000 },
  { round: "Series B", amount: 500000 },
  { round: "Series C", amount: 1000000 }
];

const Dashboard = () => {
  let {detail}=useSelector(state=>state.startupDetail);
  let arr=detail.payload;
  
  return (
    <>
    {arr.map((val,key)=>(
      <div key="key">{val.funding_raised}
      data
      </div>
    ))}
    <ResponsiveContainer width="100%" height={300} className="m-12">
      <BarChart data={fundingData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="round" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#4CAF50" />
      </BarChart>
    </ResponsiveContainer>
    <div>Interested investors </div>
    <div>Latest messages</div>
    </>
  );
};

export default Dashboard;
