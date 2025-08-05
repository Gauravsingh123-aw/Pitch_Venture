import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function Piechart({ funding_goal, funding_raised }) {
  // Ensure numbers and avoid NaN
  const goal = Number(funding_goal) || 0;
  const raised = Number(funding_raised) || 0;
  const remaining = Math.max(goal - raised, 0);
  const fundingData = [
    { name: 'Raised', value: raised },
    { name: 'Remaining', value: remaining },
  ];
  const COLORS = ['#00C49F', '#FF8042'];
  return (
    <div>
      <PieChart width={120} height={120}>
        <Pie
          data={fundingData}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={50}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          label={({ name, value }) => value > 0 ? `${name}: ${value}` : ''}
        >
          {fundingData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align="center" verticalAlign="bottom" height={24} iconType="circle"/>
      </PieChart>
    </div>
  );
}

export default Piechart
