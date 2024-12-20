import React, { useState, useEffect } from "react";
import { IoLogoGoogle } from "react-icons/io";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedRememberMe && savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(savedRememberMe);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      setMessage("Login successful!");

      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
      }
    } else {
      setMessage("Invalid email or password.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-14 right-3 transform -translate-y-1/2 text-gray-500"
            >
              {passwordVisible ? (
                <FaEyeSlash className="text-2xl" />
              ) : (
                  <FaEye className="text-2xl" />
                )}
            </button>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2 leading-tight"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link
              to="/auth/forgot-password"
              className="text-sm text-purple-600 hover:text-purple-800"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-4">Or login with</p>

          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center w-14 h-14 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              <IoLogoGoogle className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition">
              <FaFacebook className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition">
              <FaGithub className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition">
              <FaTwitter className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-14 h-14 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition">
              <FaLinkedin className="text-xl" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-purple-600 hover:text-purple-800"
            >
              Sign up
            </Link>
          </p>
        </div>

        {message && (
          <div
            className={`text-sm ${
              message.includes("Invalid")
                ? "text-red-600"
                : "text-green-600"
              } mb-4`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
