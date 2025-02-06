import React from "react";
import "../Styles/Certificate.scss";
import BrandImage from "../assets/Logo.png";
import CertificateImage from "../assets/certificate.png";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
    
     const navigate=  useNavigate()

     const certificatedPdf=()=>{
        navigate("/pdf")
     }
return ( 
    <div className="certificate-section">
      <div className="letter-pic">
        <div className="letter-info">
          <img src={BrandImage} alt="" className="cola-img" />
          <h2>Preview Certificate</h2>
          <img src={CertificateImage} alt="" className="certificate-img" />
          <div className="certificate-btn" onClick={certificatedPdf}>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
