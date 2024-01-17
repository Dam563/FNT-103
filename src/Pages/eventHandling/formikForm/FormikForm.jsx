import React from "react";
import { Formik } from "formik";
// import "./formik.css";

const FormikForm = () => (
  <div>
    <h1>Complete your application</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        department: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "First Name is required";
        } else if (values.firstName.length > 15) {
          errors.firstName = "First Name is too long";
        } 
        if (!values.lastName) {
          errors.lastName = "Last Name is required";
        } 
        if (!values.password) {
          errors.password = "Password is required";
        } 
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Password must match";
        } 
        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isDirty,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <label htmlFor="">First Name</label>
            <input
              type="firstName"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <span
              style={{
                color: "red",
              }}
            >
              {" "}
              {errors.firstName && touched.firstName && errors.firstName}
            </span>
          </div>
          <label htmlFor="">Last Name</label>
          <input
            type="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          <span
              style={{
                color: "red",
              }}
            >
              {" "}
          {errors.lastName && touched.lastName && errors.lastName}
          </span>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <span
              style={{
                color: "red",
              }}
            >
              {" "}
          {errors.email && touched.email && errors.email}
          </span>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <span
              style={{
                color: "red",
              }}
            >
              {" "}
          {errors.password && touched.password && errors.password}
         </span> 
          <label htmlFor="">Confirm Password</label>
          <input
            type="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          <span
              style={{
                color: "red",
              }}
            >
              {" "}
          {errors.confirmPassword &&
            touched.confirmPassword &&
            errors.confirmPassword}
            </span>
          <button
            id="button"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default FormikForm;
