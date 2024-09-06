import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { closeModalAndRedirect } from "../helper/closeModalAndRedirect ";

function Login() {
  const navigate = useNavigate();

  // State for form input values and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleClose = () => closeModalAndRedirect("my_modal_3", navigate, "/");

  // Email and password validation function
  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 2) {
      newErrors.password = "Password must be at least 2 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    if (validateForm()) {
      // Form is valid, proceed with login
      console.log("Form submitted successfully!");
      navigate("/"); // Redirect after login (you can replace this with actual login logic)
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Email Field */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-around mt-4">
            <button
              onClick={handleSubmit}
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer"
            >
              Login
            </button>
            <p>
              Not Registered?
              <a
                href="/signup"
                className="underline text-blue-600 cursor-pointer"
              >
                SignUp
              </a>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
