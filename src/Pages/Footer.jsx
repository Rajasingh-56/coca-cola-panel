import React from "react";
import FoodMark from "../assets/Carbonated Water Mark.png";
import "../Styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-sec">
      <div className="footer-info">
        <div className="ft-mtr">
          <div className="terms">
            <ul>
              <li>
                <a href="">
                  Terms & Conditions <span>|</span> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="foodmark">
            <p>
              COKE FOODMARKS” IS A REGISTERED TRADEMARK OF THE <br /> COCA-COLA
              COMPANY. IMAGE FOR REPRESENTATIONAL <br /> PURPOSE ONLY{" "}
            </p>
            <img src={FoodMark} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
