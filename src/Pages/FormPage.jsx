import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../Styles/FormPage.scss";
import BrandImage from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const OutletForm = Yup.object().shape({
  outletname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Outlet Name is Required"),
  phone: Yup.string()
    .matches(/^[5-9]{1}[0-9]{9}$/, "Invalid mobile")
    .required("Contact Number is Required"),
  sign: Yup.string().required("Signatory name is Required"),
  city: Yup.string().required("City name is Required"),
  state: Yup.string().required("State name is Required"),
});

const FormPage = () => {
  const navigate = useNavigate();
  return (
    <div className="formpage-section">
      <div className="outlet-form">
        <div className="form-details">
          <img src={BrandImage} alt="" className="cola-img" />
          <h2>Complete the form </h2>
          <Formik
            initialValues={{
              outletname: "",
              phone: "",
              sign: "",
              state: "",
              city: "",
            }}
            validationSchema={OutletForm}
            onSubmit={(values) => {
              // same shape as initial values
              console.log("Outlet form: ",values);
              navigate("/certificate")
            }}
          >
            {({ errors, touched, values, handleBlur, handleChange }) => (
              <Form className="cola-form">
                <div className="admission-form">
                  <label htmlFor="outletname">Outlet Name:</label>
                  <input
                    name="outletname"
                    value={values.outletname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.outletname && touched.outletname ? (
                    <div className="error">{errors.outletname}</div>
                  ) : null}
                </div>
                <div className="admission-form">
                  <label htmlFor="phone number">Contact Number:</label>
                  <input
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone ? (
                    <div className="error">{errors.phone}</div>
                  ) : null}
                </div>
                <div className="admission-form">
                  <label htmlFor="sign name">Signatory Name:</label>
                  <input
                    name="sign"
                    value={values.sign}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.sign && touched.sign ? (
                    <div className="error">{errors.sign}</div>
                  ) : null}
                </div>
                <div className="admission-form">
                  <label htmlFor="city">City:</label>
                  <input
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.city && touched.city ? (
                    <div className="error">{errors.city}</div>
                  ) : null}
                </div>
                <div className="admission-form">
                  <label htmlFor="outletaname">State:</label>
                  <input
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.state && touched.state ? (
                    <div className="error">{errors.state}</div>
                  ) : null}
                </div>
                <div className="btn" type="submit">
                  <button type="submit">Next</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
