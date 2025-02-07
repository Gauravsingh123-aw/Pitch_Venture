import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Card = ({ data }) => {
  const fundingData = [
    { name: 'Raised', value: data.funding_raised },
    { name: 'Needed', value: data.funding_goal - data.funding_raised },
  ];

  const COLORS = ['#00C49F', '#FF8042'];

  return (
    <div className="flex flex-wrap items-start p-4 border border-gray-300 rounded-lg bg-white text-slate-500 w-full">
      <div className="flex-1 p-4">
        <div className="font-bold text-xl mb-2 text-red-600">{data.startupName}</div>
        <p className="text-gray-700 text-base">{data.business_desc}</p>
        <p><strong>Industry:</strong> {data.industry}</p>
        <p><strong>Stage:</strong> {data.stage}</p>
        <p><strong>Funding Goal:</strong> ${data.funding_goal}</p>
        <p><strong>Funding Raised:</strong> ${data.funding_raised}</p>
        <p><strong>Equity Offered:</strong> {data.equityOffered}%</p>
      </div>
      <div className="flex-1 p-4 text-xl">
        <h3 className="font-bold mb-2 text-teal-600">Team Members</h3>
        {data.team_members.map((member, index) => (
          <div key={index} className="flex items-center mb-2">
            <img className="w-10 h-10 rounded-full mr-4" src={member.img_url} alt={member.name} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-600">Stake: {member.stake}%</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 flex justify-center items-center p-4 ">
        <PieChart width={310} height={240}>
          <Pie
            data={fundingData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, value }) => `${value}`}
          >
            {fundingData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="w-full text-center mt-4">
        <a href={data.websiteurl} className="text-indigo-600 hover:text-indigo-900">Visit Website</a>
      </div>
    </div>
  );
};

export default Card;
