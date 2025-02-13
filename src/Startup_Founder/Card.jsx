import React, { useEffect } from 'react';
import Piechart from './Piechart';
const Card = ({data} ) => {
 


  return (
    <div className="flex  flex-wrap items-start p-4 border border-gray-300 rounded-lg bg-white text-slate-500 w-full">
       {data.map((ele,key)=>(
        <div key={key} className='flex flex-row justify-between w-full border-b border-2'>
        <div className="flex-1 p-4">
          <div className="font-bold text-xl mb-2 text-red-600">{ele.startupName}</div>
          <p className="text-gray-700 text-base">{ele.business_desc}</p>
          <p><strong>Industry:</strong> {ele.industry}</p>
          <p><strong>Stage:</strong> {ele.stage}</p>
          <p><strong>Funding Goal:</strong> ${ele.funding_goal}</p>
          <p><strong>Funding Raised:</strong> ${ele.funding_raised}</p>
          <p><strong>Equity Offered:</strong> {ele.equityOffered}%</p>
        </div>
        <div className="flex-1 p-4 text-xl">
          <h3 className="font-bold mb-2 text-teal-600">Team Members</h3>
          {ele.team_members.map((member, index) => (
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
          <Piechart funding_goal={{ name: 'Raised', value: ele.funding_raised }} funding_raised={{ name: 'Needed', value: ele.funding_goal - ele.funding_raised }}/>
        </div>
        {/* <div className="w-full text-center mt-4">
          <a href={ele.websiteurl} className="text-indigo-600 hover:text-indigo-900">Visit Website</a>
        </div>  */}
        </div>))
}
    
    </div>
  );
};

export default Card;
