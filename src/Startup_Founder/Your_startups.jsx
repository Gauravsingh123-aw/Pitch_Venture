import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Card from "./Card.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Your_startups() {

  let {detail}=useSelector(state=>state.startupDetail);
  // let {currentUser}=useSelector(state=>state.userLogin);

  useEffect(()=>{},[detail])

  let [flag, setFlag] = useState(false);
  const [formData, setFormData] = useState({});
  const [teamMembers, setTeamMembers] = useState([
    { name: "", stake: "", role: "", img_url: "" },
  ]);

  const industries = [
    "technology",
    "medical",
    "business",
    "fashion",
    "research",
    "food",
    "manufacturing",
  ];
  const stages = ["Idea", "MVP", "Growth", "Scaling"];
  let [paymentInfo, setpayment] = useState({});

  useEffect(() => {
    const inputs = document.querySelectorAll("input, select");

    const handleAutofill = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    inputs.forEach((input) => {
      input.addEventListener("change", handleAutofill);
    });
    //cleanup function
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("change", handleAutofill);
      });
    };
  }, []);

  const handlePayment = (e) => {
    const { name, value } = e.target;
    setpayment((prevPayment) => {
      const updatedPayment = { ...prevPayment, [name]: value };
      setFormData((prevFormData) => ({
        ...prevFormData,
        paymentInfo: updatedPayment,
      }));
      return updatedPayment;
    });
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTeamMemberChange = (index, e) => {
    const { name, value } = e.target;
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index][name] = value;
    setTeamMembers(newTeamMembers);
    setFormData({ ...formData, team_members: newTeamMembers });
  };

  const addTeamMember = () => {
    setTeamMembers([
      ...teamMembers,
      { name: "", stake: "", role: "", img_url: "" },
    ]);
  };

  const removeTeamMember = (index) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers.splice(index, 1);
    setTeamMembers(newTeamMembers);
    setFormData({ ...formData, team_members: newTeamMembers });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, paymentInfo });

    console.log("Form Submitted", formData);
    sendApi();
  };

  async function sendApi(){
    const API_URL=import.meta.env.VITE_API_URL
    try{
    let result= await axios.post(`${API_URL}startup-api/register_startup`,{formData})
    if(result.data.message=="startup id exists"){
      toast('startup id exists')
    }
    else if(result.data.message=="startup listed"){
      toast('startup listed');
    }
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="w-full p-10 flex flex-col flex-wrap gap-5">
    <div className="w-full bg-gray-50 rounded-lg">
      <header className="bg-gradient-to-r from-[#3da28c] to-[#4caf99] text-white py-10 ">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold font-Kanit">Pitch Your Startup</h1>
          <p className="mt-4 text-lg font-light">
            Create, register, and present your startup idea to the world
          </p>
        </div>
      </header>
    {/* form */}
      <div className="max-w-7xl mx-auto px-6 py-12 rounded-b-lg">
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => setFlag(!flag)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-8 py-3"
          >
            Create a new Pitch
          </button>
        </div>

        {flag && (
          <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Register Your Startup
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Startup Details */}
              <div className="space-y-6">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleData}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="text"
                  name="startup_id"
                  placeholder="Startup ID"
                  onChange={handleData}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="text"
                  name="startupName"
                  placeholder="Startup Name"
                  onChange={handleData}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <textarea
                  name="buisness_desc"
                  placeholder="Business Description"
                  onChange={handleData}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>

              {/* Industry and Stage */}
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-lg">Industry</p>
                  <div className="flex flex-wrap gap-4">
                    {industries.map((industry) => (
                      <label
                        key={industry}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name="industry"
                          value={industry}
                          onChange={handleData}
                          className="h-4 w-4 text-red-600"
                          required
                        />
                        <span className="text-gray-600">{industry}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-lg">Stage</p>
                  <div className="flex flex-wrap gap-4">
                    {stages.map((stage) => (
                      <label
                        key={stage}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name="stage"
                          value={stage}
                          onChange={handleData}
                          className="h-4 w-4 text-red-600"
                          required
                        />
                        <span className="text-gray-600">{stage}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Funding Goal and Raised */}
              <div className="space-y-6">
                <input
                  type="number"
                  name="funding_goal"
                  placeholder="Funding Goal"
                  onChange={handleData}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="number"
                  name="equityOffered"
                  placeholder="Equity offered (%)"
                  onChange={handleData}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="number"
                  name="funding_raised"
                  placeholder="Funding Raised"
                  onChange={handleData}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Team Members */}
              <h3 className="text-xl font-semibold text-gray-800">
                Team Members
              </h3>
              {teamMembers.map((member, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                    <input
                      type="number"
                      name="stake"
                      placeholder="Stake"
                      value={member.stake}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                    <input
                      type="text"
                      name="role"
                      placeholder="Role"
                      value={member.role}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="img_url"
                    placeholder="Image URL"
                    value={member.img_url}
                    onChange={(e) => handleTeamMemberChange(index, e)}
                    className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeTeamMember(index)}
                      className="text-red-500 mt-2"
                    >
                      Remove Member
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addTeamMember}
                className="text-blue-500 mt-4"
              >
                Add Another Member
              </button>
              <div>
                <input
                  type="url"
                  placeholder="Website URL"
                  name="websiteurl"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  onChange={handleData}
                />
              </div>

              {/* Payment Information */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6">
                Payment Information
              </h3>
              <div className="space-y-6">
                <input
                  type="text"
                  name="accountNumber"
                  placeholder="Account Number"
                  onChange={handlePayment}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="text"
                  name="accoundHolderName"
                  placeholder="Account Holder Name"
                  onChange={handlePayment}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="text"
                  name="bankName"
                  placeholder="Bank Name"
                  onChange={handlePayment}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-500 transition-all duration-300"
                >
                  Submit Pitch
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      </div>
     <div className="text-2xl font-Kanit font-semibold ">Registered Startups</div>
      {/* Registered Startups */}
      <div className="w-full ">        { Object.keys(detail).length === 0 ? <div>asndl</div> : <Card data={detail.payload}/>  }
      </div>
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
        </div>
  );
}

export default Your_startups;
