import React from "react";
import ReactDOM from "react-dom";
imr;
import "./Home.css";
import android from "./Images/android.png";
import capture from "./Images/Capture.png";
import androidIcon from "./Images/android-icons.png";
import { useState } from "react";
import { Modal, Button } from "antd";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="port-right-sidebar">
        <div class="right-side-col">
          <div className="intor-profile">
            <div className="man-image"></div>
            <div className="intro-profile-content">
              <h2>Welcome James Smith</h2>
              <p>Passport ID: 2S5T-H2OOQ8-E1</p>
              <p>Below is an overview of your Passport.</p>
              <div className="intor-profile-btns">
                <button className="intro-pfi-btn" onClick={showModal}>
                  Covid-19 Test
                </button>
                <Modal
                  title="Basic Modal"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>

                <button className="intro-pfi-btn">Vaccine Form</button>
              </div>
            </div>
          </div>
          <div className="intor-bottom-content">
            <p>
              You must add the information below to your V-Health Passport™
              account before booking a test if you are to receive a flight
              certificate.
            </p>
            <ul>
              <li>PORTPass Number e.g GBR - 000000000</li>
              <li>Valid Passport Style Photo (Head & Shoulders)</li>
              <li>Valid Image of your Photo ID</li>
              <li>Date of Birth Sex & Ethnicity</li>
            </ul>
          </div>
          <div className="download-box">
            <div className="download-text">
              <div className="robot-icon">
                <img src={android} />
              </div>
              <p>You can Download Android App Now</p>
            </div>
            <div className="download-btn-main">
              <button className="download-btn">Download</button>
            </div>
          </div>
        </div>
        <div className="left-side-col">
          <div className="print-card">
            <div className="print-card-inner">
              <div className="scaner">
                <div className="scan-img">
                  <img src={capture} />
                </div>
                <h3>James Smith</h3>
              </div>
              <div className="scaner-menu">
                <div className="scan-content">
                  <div className="scan-text">
                    <h5>0</h5>
                    <p>Total Scans</p>
                  </div>
                  <div className="scan-text">
                    <h5>Untested</h5>
                    <p>Current Status</p>
                  </div>
                </div>
                <div className="print-code">
                  <button className="print-code-btn">Print Code</button>
                </div>
              </div>
            </div>
          </div>
          <div className="download-code">
            <button className="download-code-btn">Downlord Code</button>
          </div>
          <div className="andriod-logo-img">
            <img src={androidIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Home />, mountNode);
export default Home;
