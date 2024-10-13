import React from "react"

import "../style/login.css"

export default function Login(){
    return(
        <section>
<div className="login-container">
  <h2>Hi, Welcome Back! </h2>
  <form>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="enter your email" />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" placeholder="enter your password" />
    <div>
      <input type="checkbox" id="remember" name="remember" />
      <label htmlFor="remember" className="remember">Remember me</label>
      <a href="#" className="forgot">Forgot Password?</a>
    </div>
    <button type="submit">Login</button>
  </form>
  <div className="extra">Or With</div>
  <div className="social-media">
    <a href="#" className="facebook">Login with Facebook</a>
    <a href="#" className="google">Login with Google</a>
  </div>
  <div className="sign-up">
    Don't have an account? <a href="#">Sign up</a>
  </div>
</div>


        </section>
    );

}
