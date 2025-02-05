import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const fundingData = [
  { round: "Seed", amount: 50000 },
  { round: "Series A", amount: 200000 },
  { round: "Series B", amount: 500000 },
  { round: "Series C", amount: 1000000 }
];

const Dashboard = () => {
  return (
    <>
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
