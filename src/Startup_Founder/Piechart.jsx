import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function Piechart({funding_goal,funding_raised}) {
    const fundingData=[funding_goal,funding_raised]
    const COLORS = ['#00C49F', '#FF8042'];
  return (
    <div>

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
  )
}

export default Piechart
