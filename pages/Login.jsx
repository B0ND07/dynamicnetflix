import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Login() {
  
const [email,setEmail]=useState('')
const [password,setPassword]=useState("")
const [error,setError]=useState('')


  const {user,logIn}=UserAuth()


const handleSubmit=async(e)=>{
  e.preventDefault()
  setError('')
  try{
    await logIn(email,password)


    navigate("/")
  }catch(error){
    console.log(error)
    setError(error.message)
  }
}


  const navigate = useNavigate();
  const sample = () => {
    navigate("/");
  };
  return (
    <div className="containers2">
      <img
        className="container-img2"
        alt=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />

      <div className="para3">
        <div className="textb2">
          <br></br>
          <h1 className="text-4xl">Sign In</h1>
          {error?<p className="p-3 bg-red-600">{error}</p>:null}
          <form onSubmit={handleSubmit}>
          <input onChange={(e)=>setEmail(e.target.value)} className="p-3 my-2" type="text" placeholder="Email address" />
          <input onChange={(e)=>setPassword(e.target.value)} className="p-3 my-2" type="password" placeholder="Password" />
          <button type="submit">Sign In </button>
          <button onClick={sample} style={{ backgroundColor: "blue" }}>
            Cancel
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
