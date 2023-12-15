import React from 'react'
import style from "./Login.module.css";


function LoginForm({ formData, onChange, onSubmit, formErrors }) {
  return (
    <form className={style.form} onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Name"
      value={formData.name}
      name="name"
      onChange={onChange}
    />
    <span className={style.error}>{formErrors.name}</span>
    <input
      type="text"
      placeholder="UserName"
      value={formData.username}
      name="username"
      onChange={onChange}
    />
    <span className={style.error}>{formErrors.username}</span>
    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      name="email"
      onChange={onChange}
    />
    <span className={style.error}>{formErrors.email}</span>
    <input
      type="tel"
      inputMode="numeric"
      placeholder="Mobile"
      value={formData.mobile}
      name="mobile"
      onChange={onChange}
    />
    <span className={style.error}>{formErrors.mobile}</span>
    <label>
      <input
        type="checkbox"
        checked={formData.agreeToTerms}
        onChange={onChange}
        name="agreeToTerms"
      />
      <span> Share my registration data with Superapp </span>
    </label>
    <span className={style.error}>{formErrors.agreeToTerms}</span>
    <button type="submit">SIGN UP</button>
  </form>
  )
}

export default LoginForm