import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTags, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://via.placeholder.com/150",
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <header className="bg-purple-700 rounded-full text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-extrabold text-white">
            DiscountPRO
          </Link>
        </div>
        <div className="flex-grow flex justify-center space-x-10">
          <Link to="/" className="flex items-center space-x-2 text-lg text-white hover:underline">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/brands" className="flex items-center space-x-2 text-lg text-white hover:underline">
            <FaTags />
            <span>Brands</span>
          </Link>
          {isLoggedIn && (
            <Link to="/my-profile" className="flex items-center space-x-2 text-lg text-white hover:underline">
              <IoMdPerson />
              <span>My Profile</span>
            </Link>
          )}
          <Link to="/about-us" className="flex items-center space-x-2 text-lg text-white hover:underline">
            <FaUserCircle />
            <span>About Us</span>
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          {!isLoggedIn ? (
            <>
              <Link
                to="/auth/login"
                className="bg-white text-blue-900 px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="bg-white text-blue-900 px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 transition duration-200"
              >
                SignUp
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-5">
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="text-base text-white">
                <div>{user.name}</div>
                <div className="text-sm">{user.email}</div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 transition duration-200 flex items-center"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
