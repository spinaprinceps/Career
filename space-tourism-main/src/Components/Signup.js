import React from "react"

import "../style/signup.css"

export default function Signup(){
    return(
        <section>

      <div className="signup-wrapper">
        <div className="signup-container">
          <h1 className="main">Create an account</h1>
          <form action="#">
            <select name="options" id="options">
              <option value="" disabled selected>
                What's your role
              </option>
              <option value="option1">Student</option>
              <option value="option2">Counsellor</option>
              <option value="option3">Admin</option>
            </select>
            <input type="text" placeholder="Enter your username" />
            <input type="email" placeholder="Enter your email" />
            <input type="tel" placeholder="Enter your phone number" />
            <input type="password" placeholder="Enter your password" />
            <input type="password" placeholder="Re-enter your password" />
          </form>
          <form className="social-media">
            <button>Sign Up</button>
            <p>Or With</p>
            <button className="facebook-signup" padding="10px">
              Signup with Facebook
            </button>
            <button className="google-signup">Signup with Google</button>
          </form>
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
}
