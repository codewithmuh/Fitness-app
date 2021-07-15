import React from "react";
import img from "./Images/white-logo.png";
import "./Email_Verified.css";

export default function Email_Verified() {
  return (
    <div>
      <div class="main-login" data-controller="authenticate">
        <div class="signin-logo-image">
          <img src={img} alt="Signup Logo Image" />
        </div>
        <form class="login">
          <h2>Email verified</h2>
          <p>Your email address has been verified.</p>

          <p>To activate your account you need to provide some information.</p>

          <p class="form-info">
            Please enter your full name as it is should appear on your V-Health
            Passport.
          </p>

          <p>
            <input
              type="text"
              name="user-full-name"
              placeholder="Full name"
              title="Full name"
            />
          </p>

          <p class="form-info">
            Please provide a clear image of yourself that you wish to use on
            your V-Health Passport.
          </p>

          <div class="profile-image-upload">
            <div class="profile-photo"></div>
            <label id="photo-label" class="lozenge" for="profile-photo">
              Upload photo...
            </label>
            <input
              type="file"
              accept="image/*"
              id="profile-photo"
              name="profile-photo"
              placeholder="Photographic ID"
              title="Photographic ID"
            />
          </div>

          <p class="form-info">
            Please provide a clear image of your photo ID.
          </p>

          <div class="profile-image-upload">
            <div class="profile-proof"></div>
            <label id="proof-label" class="lozenge outline" for="profile-proof">
              Upload proof of identity...
            </label>
            <input
              type="file"
              accept="image/*"
              id="profile-proof"
              name="profile-proof"
              placeholder="Proof of identity"
              title="Proof of identity"
            />
          </div>

          <div class="form-footer">
            <div>
              <button
                name="activate"
                id="activate"
                class="x-signin x-activate lozenge"
              >
                Next...
              </button>
            </div>
          </div>
          <input type="hidden" id="activate-code" name="activate-code" />
        </form>
      </div>
    </div>
  );
}
