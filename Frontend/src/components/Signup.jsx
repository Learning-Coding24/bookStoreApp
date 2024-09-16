import React, { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { closeModalAndRedirect } from "../helper/closeModalAndRedirect ";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const handleClose = () => closeModalAndRedirect("my_modal_3", navigate, "/");

  // Email and password validation function
  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "" };
    let isValid = true;
    // name validation
    if (!fullname) {
      newErrors.fullname = "Name is required";
      isValid = false;
    }

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
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    if (validateForm()) {
      const userInfo = {
        fullname: fullname,
        email: email,
        password: password,
      };

      try {
        const response = await axios.post(
          "http://localhost:4001/user/signup",
          userInfo
        );

        if (response.data) {
          toast.success(response.data.message);
          localStorage.setItem("Users", JSON.stringify(response.data.user)); // Show the response message in an alert
          navigate("/");
          window.location.reload();
        }
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message); // Show error message if any
        } else {
          console.error("Error:", error.message);
        }
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">SignUp</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="name"
                placeholder="Enter your full name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                value={fullname}
                onChange={(fullname) => setFullname(fullname.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

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
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-around mt-4">
              {/* Button */}
              <button
                onClick={handleSubmit}
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer"
              >
                SignUp
              </button>
              <p>
                Have Account ?
                <button
                  className="underline text-blue-600 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  LogIn
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
