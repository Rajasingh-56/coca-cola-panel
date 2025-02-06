import React from "react";
import BrandImage from "../assets/Logo.png";
import OfferImage from "../assets/Rectangle 24.png";
import "../Styles/Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation-section">
      <div className="nav-info">
        <div className="nav-bar">
          <img src={BrandImage} alt="" className="cola-img"/>
          <h2>Foodmarks Outlet Consent Form</h2>
          <img src={OfferImage} alt="" className="offer-img"/>
        </div>
        
      </div>
    </div>
  );
};

export default Navigation;
