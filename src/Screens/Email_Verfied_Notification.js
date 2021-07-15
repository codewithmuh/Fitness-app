import React from "react";
import img from "./Images/white-logo.png";

export default function Email_Verfied_Notification() {
  return (
    <div>
      <div class="main-login" data-controller="authenticate">
        <div class="signin-logo-image">
          <img src={img} alt="Signup Logo Image" />
        </div>
        <form class="login">
          <h2>Email address not verified</h2>
          <p>Your email address has not been verified.</p>

          <p>
            Please check the email account you used to register and click on the
            link provided in the email.
          </p>
        </form>
      </div>
    </div>
  );
}
