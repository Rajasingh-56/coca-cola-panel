import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../Styles/Login.scss";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const LoginValid = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number is not valid")
    .required("Phone number is required."),
});

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-sec">
      <Navigation />
      <div className="login">
        <div className="login-form">
          <h2>
            Please login to submit details to get your outlet <br />
            listed on the Coke Foodmarks Website{" "}
          </h2>
          <Formik
            key="home"
            initialValues={{
              phone: "",
            }}
            validationSchema={LoginValid}
            onSubmit={(values) => {
              console.log("Logged in", values);
              navigate("/otp");
            }}
          >
            {({ errors, touched, values, handleBlur, handleChange }) => (
              <Form action="">
                <div className="form-pos">
                  <div className="admission-form">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile*"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone && (
                      <span className="error">{errors.phone}</span>
                    )}
                  </div>
                  <div className="digit">+91</div>
                </div>

                <div className="lgn-btn">
                  <button type="register" className="submit-btn">
                    Submit
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

export default Login;
