import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  async function onSignIn() {
    if (!formData.email || !formData.password) return;

    const result = await axios.post(
      "http://localhost:5000/api/login",
      formData
    );

    if (result.status !== 200) {
      return;
    }

    navigate("/");
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
          <h2>Sign In</h2>
        </div>
        <form className="form py-4 px-4" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <div>E-Mail</div>
            <input
              name="email"
              type="email"
              className="text-input text-input-lg"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="d-flex justify-space-between">
              <label>Password</label> <a href="/">Forgot?</a>
            </div>
            <input
              name="password"
              type="password"
              className="text-input text-input-lg"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              name="rememberMe"
              type="checkbox"
              className="form-check-input"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-3 w-100"
            onClick={onSignIn}
          >
            Sign In
          </button>

          <div className="d-flex justify-center m-4">
            <a href="/">Create an Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}
