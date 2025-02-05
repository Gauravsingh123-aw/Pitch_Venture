// Card.js

import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Card = ({ data }) => {
  const fundingData = [
    { name: 'Funding Raised', value: data.funding_raised },
    { name: 'Funding Needed', value: data.funding_goal - data.funding_raised },
  ];

  const COLORS = ['#00C49F', '#FF8042'];

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.startupName}</div>
        <p className="text-gray-700 text-base">{data.buisness_desc}</p>
      </div>
      <div className="px-6 py-4">
        <p><strong>Industry:</strong> {data.industry}</p>
        <p><strong>Stage:</strong> {data.stage}</p>
        <p><strong>Funding Goal:</strong> ${data.funding_goal}</p>
        <p><strong>Funding Raised:</strong> ${data.funding_raised}</p>
        <p><strong>Equity Offered:</strong> {data.equityOffered}%</p>
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg mb-2">Team Members</h3>
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
      <div className="px-6 py-4">
        <PieChart width={200} height={200}>
          <Pie
            data={fundingData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {fundingData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="px-6 py-4">
        <a href={data.websiteurl} className="text-indigo-600 hover:text-indigo-900">Visit Website</a>
      </div>
    </div>
  );
};

export default Card;
