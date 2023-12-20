import React, { useState } from "react";
import style from "./Login.module.css";
import LoginForm from "./LoginForm";
import LoginImage from "../Assets/loginImage.png";

function Login({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    agreeToTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    agreeToTerms: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Field is required";
      valid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = "At least 3 characters ";
      valid = false;
    } else if (
      formData.name.length < 3 ||
      /\d/.test(formData.name) ||
      /^\d/.test(formData.name.trim())
    ) {
      newErrors.name = "Should not contain numbers";
      valid = false;
    } else if (
      formData.name.length > 16 ||
      !/^[a-zA-Z]+\s[a-zA-Z]+$/.test(formData.name.trim())
    ) {
      newErrors.name = "At most 16 characters";
      valid = false;
    } else {
      newErrors.name = "";
    }

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = "Field is required";
      valid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = "At least 3 characters ";
      valid = false;
    } else if (
      formData.username.length > 10 ||
      !/^[a-zA-Z]+\s[a-zA-Z]+$/.test(formData.name.trim())
    ) {
      newErrors.username = "At most 10 characters";
      valid = false;
    } else {
      newErrors.username = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Field is required";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Validate mobile
    const mobileRegex = /^\d{10}$/;
    if (!formData.mobile.trim() || !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Field is required and should have exactly 10 numbers";
      valid = false;
    } else {
      newErrors.mobile = "";
    }

    // Validate checkbox
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Check this box, if you want to proceed";
      valid = false;
    } else {
      newErrors.agreeToTerms = "";
    }

    setFormErrors(newErrors);
    return valid;
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("user", JSON.stringify(formData));
      handleSubmit();
    }
  };
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src={LoginImage} alt="" />
        <p>Discover new things on Superapp</p>
      </div>
      <div className={style.right}>
        <h2>Super app</h2>
        <p className={style.smh}>Create your new account</p>
        <LoginForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleFormSubmit}
          formErrors={formErrors}
        />
        <p>
          By clicking on Sign up. you agree to Superapp{" "}
          <span>Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
