import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaBell,
} from "react-icons/fa";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SignInForm from "../modalPopUp/signInForm"; 
import SignUpForm from "../modalPopUp/signUpForm"; 

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [openModal, setOpenModal] = useState(false); 
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.name) {
          setUsername(parsedUser.name);
        }
      }
    } catch (err) {
      console.error("User JSON parsing error:", err);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUsername(null);
    navigate("/");
  };

  const handleOpenModal = () => {
    setIsLogin(true); 
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 py-3 px-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/nature.png" alt="Green Shop Logo" className="w-8 h-8" />
            <span className="text-green-600 font-bold text-lg">GREENSHOP</span>
          </div>

          <div className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
            <button onClick={() => navigate("/dashboard")} className="hover:text-green-600 transition">Home</button>
            <button onClick={() => navigate("/Blog")} className="hover:text-green-600 transition">Blog</button>
          </div>

          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-600 cursor-pointer hover:text-green-600" />
            <Link to="/productCard">
              <FaShoppingCart className="text-gray-600 cursor-pointer hover:text-green-600" />
            </Link>
            <FaBell className="text-gray-600 cursor-pointer hover:text-green-600" />

            {username ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate("/profile")}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
                >
                  Hi, {username}
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleOpenModal}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
              >
                <FaSignInAlt />
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="xs" fullWidth>
        <DialogContent>
          <div className="relative p-6">
            <IconButton
              onClick={handleCloseModal}
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>

            <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
              {isLogin ? "Welcome Back" : "Create an Account"}
            </h2>

            {isLogin ? <SignInForm /> : <SignUpForm />}
            <div className="text-center mt-4">
              {isLogin ? (
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-green-600 hover:underline"
                  >
                    Register
                  </button>
                </p>
              ) : (
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-green-600 hover:underline"
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
