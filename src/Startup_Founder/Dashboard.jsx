import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
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
    <>
      
      {loginStatus==true ?<ResponsiveContainer width="50%" height={300} className="m-12">
        <BarChart data={data} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="fundingNeeded" fill="#FF8042" name="Funding Needed" barSize={50}  />

          <Bar dataKey="fundingRaised" fill="#4CAF50" name="Funding Raised" barSize={50}  />
        </BarChart>
      </ResponsiveContainer> : <div>No Funding data found</div>}
      <div>Interested investors</div>
      <div>Latest messages</div>
    </>
  );
};

export default Dashboard;
