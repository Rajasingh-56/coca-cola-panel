import React from "react";
import BrandImage from "../assets/Logo.png";
import PdfImage from "../assets/pdfimage.png";
import PdfUser from "../assets/outlet-user.png";
import { FiDownload } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import "../Styles/Pdf.scss";
import { useNavigate } from "react-router-dom";
import logobrand from "../assets/Rectangle 24.png";

const Pdf = () => {
  const navigate = useNavigate();

  const differentOutlet = () => {
    navigate("/outlet");
  };

  return (
    <div className="pdf-section">
      <div className="pdf-view">
        <div className="pdf-dwld">
          <img src={BrandImage} alt="" className="cola-img" />

          <div className="outler-name">
            <input type="text" />
            <img src={PdfUser} alt="" className="user-img" />
          </div>

          <div className="image-pdf">
            <img src={PdfImage} alt="" className="pdf-img" />
            <p>
              Your certificate is ready <br /> to download
            </p>
          </div>
          <div className="pdf-btn">
            <button>
              {" "}
              <span>
                <FiDownload />
              </span>{" "}
              <a href={logobrand} download target="target_blank">
                Download
              </a>
            </button>
          </div>
          <div className="choose-outlet" onClick={differentOutlet}>
            <h2>
              Choose another oultlet{" "}
              <span>
                <FaChevronLeft />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf;
