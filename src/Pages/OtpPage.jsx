import React, { useEffect } from "react";
import Navigation from "./Navigation";
import "../Styles/OtpPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [Otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [otpResent, setOtpResent] = useState("");
  const navigate = useNavigate();

  const handleOtp = (e) => {
    setOtp(e.target.value);
  };

  const generateOtp = () => {
    console.log("Entered OTP:", Otp);
    navigate("/outlet");
  };

  const resendOtp = () => {
    if (!otpResent) {
      console.log("Resending OTP.... ");
      // setOtpResent(true);
      setCountdown(59);
    }
  };

  useEffect(() => {
    if (countdown <= 0) return;
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(prevCountdown - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  const gobackBtn = () => {
    navigate("/");
  };

  return (
    <div className="otp-section">
      <Navigation />
      <div className="otp-box">
        <div className="otp-info">
          <div className="input-box">
            <input type="number" onChange={handleOtp} />
          </div>

          <div className="lgn-btn">
            <button onClick={generateOtp}>Generate OTP</button>
          </div>

          <div className="otpcount-text">
            <p>
              <span>{countdown < 10 ? `0${countdown}` : countdown}</span> Didn't
              receive OTP?{" "}
            </p>
            <button
              className="resend-btn"
              href="#"
              onClick={resendOtp}
              disabled={countdown > 0}
            >
              Resend
            </button>
            <button className="go-back-btn" onClick={gobackBtn}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
