import React from "react";
import "../Styles/Outlet.scss";
import Navigation from "./Navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const outletValid = Yup.object().shape({
  outlet: Yup.string().required("Required"),
  checkbox: Yup.bool()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("Required"),
});

const Outlet = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  return (
    <div className="outlet-section">
      <Navigation />
      <div className="outlet">
        <div className="outlet-box">
          <h2>Choose an outlet to proceed</h2>
          <Formik
            key="home"
            initialValues={{
              outlet: "",
              checkbox: false,
            }}
            validationSchema={outletValid}
            onSubmit={(values) => {
              console.log("Outlet Name:", values.outlet);
              if (values.outlet === "Meghana") {
                navigate("/certificate");
              } else if (values.outlet === "Beharoz") {
                navigate("/formpage");
              }
            }}
          >
            {({ errors, touched, values, handleBlur, handleChange }) => (
              <Form action="">
                <div className="form-pos">
                  <div className="admission-form outlet-form-input">
                    <select
                      name="outlet"
                      value={values.outlet}
                      onChange={(e) => {
                        setSelectedOption(e.target.value); // Store the selected option
                        handleChange(e);
                      }}
                    >
                      <option value=""></option>
                      <option value="Meghana">Meghana</option>
                      <option value="Beharoz"> Beharoz</option>
                    </select>{" "}
                    <input
                      className="outlet-input-box"
                      type="select"
                      readOnly
                      placeholder={selectedOption}
                    />
                    <span className="icon-down">
                      <FaChevronDown />
                    </span>
                    {errors.outlet && touched.outlet && (
                      <span className="error">{errors.outlet}</span>
                    )}
                  </div>

                  <div className="admission-form wrapper-form">
                    <div className="wrapper">
                      <input
                        id="check"
                        name="checkbox"
                        type="checkbox"
                        onChange={handleChange}
                        value={values.checkbox}
                        onBlur={handleBlur}
                      />

                      <label htmlFor={"check"}>
                        We irrevocably permit Coca-Cola India Pvt. Ltd. to use
                        our Restaurant/Food Outlet’s name, images, logo and
                        details as part of the Coke Foodmarks Campaign and
                        cover/list the Campaign through various media including
                        social media platforms, newspapers, radio, television
                        including news, and other OTT channels/ <br />
                        platforms, internet, point of sale materials, microsite,
                        food delivery applications etc., and shall not raise any
                        objection, protest, or demur whatsoever to such coverage
                        or in this regard. We also consent to the attached Terms
                        & Conditions.
                      </label>
                    </div>
                    {errors.checkbox && touched.checkbox && (
                      <span className="error">{errors.checkbox}</span>
                    )}
                  </div>
                </div>

                <div className="lgn-btn">
                  <button type="register" className="submit-btn">
                    Next
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Outlet;
