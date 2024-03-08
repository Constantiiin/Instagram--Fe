import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";

import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="authentication">
      <div className="auth__left">
        <img
          src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
          alt=""
        />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?
                <button onClick={handleChange}>Sign up</button>{" "}
              </>
            ) : (
              <>
                Have an account?<button onClick={handleChange}>Log in</button>{" "}
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
