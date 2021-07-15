import React from "react";
import "./Sign_In.css";
import img from "./Images/white-logo.png";
export default function Sign_in() {
  return (
    <div>
      <div class="main-login" data-controller="authenticate">
        <div class="signin-logo-image">
          <img src={img} alt="Signup Logo Image" />
        </div>
        <form class="login" method="post">
          <h2>Sign in</h2>
          <p>Enter your email address and password below to log in.</p>

          <p>
            <input
              type="text"
              name="username"
              placeholder="Enter your email address"
              title="Enter your email address"
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              title="Enter your password"
            />
          </p>
          <div class="form-footer">
            <a href="#" data-action="reset">
              Forgotten password?
            </a>
            <div class="signup-btn-main">
              <button class="lozenge" data-action="process-login">
                Sign in
              </button>
            </div>
          </div>
          <div class="register">
            <a href="#" data-action="signup">
              Sign up for an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
