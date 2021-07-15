import React from "react";
import img from "./Images/white-logo.png";
import "./Signup.css";

export default function Signup() {
  return (
    <div>
      <div class="main-login" data-controller="authenticate">
        <div class="signin-logo-image">
          <img src={img} alt="Signup Logo Image" />
        </div>
        <form class="login" method="post">
          <h2>Sign Up</h2>
          <p>Enter your email address and password below to log in.</p>

          <p>
            <input
              type="text"
              onpaste="return false;"
              ondrop="return false;"
              autocomplete="off"
              name="signup-name"
              placeholder="Full name"
              title="Full name"
            />
          </p>
          <p>
            <input
              type="text"
              onpaste="return false;"
              ondrop="return false;"
              autocomplete="off"
              name="signup-email"
              placeholder="Email address"
              title="Email address"
            />
          </p>
          <p>
            <input
              type="text"
              onpaste="return false;"
              ondrop="return false;"
              autocomplete="off"
              name="signup-email-confirm"
              placeholder="Confirm Email address"
              title="Confirm Email address"
            />
          </p>
          <p>
            <input
              type="password"
              onpaste="return false;"
              ondrop="return false;"
              autocomplete="off"
              name="signup-password"
              placeholder="Password"
              title="Password"
              aria-autocomplete="list"
            />
          </p>
          <p>
            <input
              type="password"
              onpaste="return false;"
              ondrop="return false;"
              autocomplete="off"
              name="signup-confirm"
              placeholder="Confirm your password"
              title="Confirm your password"
            />
          </p>
          <p class="hint">Please select one of the following options.</p>
          <p class="checkbox">
            <input
              type="radio"
              name="signup-usertype-test"
              id="signup-usertype-public"
              value="public"
              checked=""
            />
            <label for="signup-usertype-public">
              I am a member of the public
            </label>
          </p>
          <p class="checkbox">
            <input
              type="radio"
              name="signup-usertype-test"
              id="signup-usertype-medical"
              value="medical"
            />
            <label for="signup-usertype-medical">
              I have an organisation code
            </label>
          </p>
          <div class="form-footer">
            <div class="signup-btn-main">
              <button class="lozenge" data-action="process-login">
                Sign in
              </button>
            </div>
          </div>
          <div class="register">
            <a href="#" data-action="signup">
              Back to sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
