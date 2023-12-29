import React from "react";

import { useNavigate } from "react-router-dom";

function Signup() {
  const history = useNavigate();
  const sample = () => {
    history(-1);
  };

  return (
    <div className="containers2">
      <img
        className="container-img2 "
        alt=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />

      <div className="para3">
        <div className="textb2">
          <br></br>
          <h1 className="text-4xl">Sign Up</h1>
          <form>
          <input type="text" placeholder="     Email address" />
          <input type="password" placeholder="     Password" />
          <button>Sign Up </button>
          <button onClick={sample} style={{ backgroundColor: "blue" }}>
            Cancel
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
