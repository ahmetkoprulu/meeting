import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import HomeService from "../services/home";

import "../styles/login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const navigate = useNavigate();

  async function onSignUp() {
    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.name
    )
      return;

    try {
      await HomeService.signUp(formData);

      navigate("/sign-in");
    } catch (ex) {
      console.error(ex);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => {
      const { name, type, value } = e.target;
      if (type === "checkbox") {
        const { checked } = e.target;

        return {
          ...prev,
          [name]: checked,
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="container-view-wide">
      <div className="login-container">
        <div className="text-center login-brand">
          <h2>Sign Up</h2>
        </div>
        <form className="form py-4 px-4" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <div>Name</div>
            <input
              name="name"
              type="text"
              className="text-input text-input-lg"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div>E-Mail</div>
            <input
              name="email"
              type="email"
              className="text-input text-input-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="text-input text-input-lg"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              className="text-input text-input-lg"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3 w-100"
            onClick={onSignUp}
          >
            Sign Up
          </button>

          <div className="d-flex justify-center m-4">
            <a href="/">Already have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
