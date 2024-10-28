import React from "react";

function Login() {
  return (
    <div className="h-[35rem] w-[28rem] bg-white m-nav_space flex flex-col items-center gap-y-8 pt-8">
      <div className="text-left w-full pl-16 text-heading ">Log in</div>
      <input className="w-2/3 h-12  border-2 text-center " placeholder="Usersname" />

      <div className="w-2/3 flex-col">
        <input className="w-full border-2  h-12  text-center  " placeholder="Password" />
        <div className="text-sm text-left  mt-2 text-blue-600">Forgot your password?</div>
      </div>
      <button className="text-center h-12 text-xl p-2 w-2/3 rounded-md bg-button-color text-white border-2">Log in</button>

      <div className="text-[1.2rem] mt-10">New to PitchVenture ? <span className="text-blue-800 ">Sign Up</span></div>
    </div>
  );
}

export default Login;
