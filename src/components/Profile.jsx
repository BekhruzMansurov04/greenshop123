import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import {
  FaBoxOpen,
  FaHeart,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaTruck,
} from "react-icons/fa";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    profilePhoto: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, type: "", message: "" });

  const token = "6803b89df2a99d0247959d1a";

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://green-shop-backend.onrender.com/api/user/account-details?access_token=${token}`
        );
        const user = data.user || {};

        setFormData({
          firstName: user.name || "",
          lastName: user.surname || "",
          email: user.email || "",
          phoneNumber: user.phone || "",
          username: user.username || "",
          profilePhoto: null,
        });

        if (user.profilePhoto) {
          setPreview(user.profilePhoto);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setSnackbar({
          open: true,
          type: "error",
          message: "Profilni yuklashda xatolik yuz berdi",
        });
      }
    };

    getUserDetails();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSend = new FormData();
      dataToSend.append("firstName", formData.name);
      dataToSend.append("lastName", formData.surname);
      dataToSend.append("email", formData.email);
      dataToSend.append("phoneNumber", formData.phoneNumber);
      dataToSend.append("username", formData.username);
      if (formData.profilePhoto) {
        dataToSend.append("profilePhoto", formData.profilePhoto);
      }

      await axios.put(
        `https://green-shop-backend.onrender.com/api/user/by_id/:_id?access_token=${token}`,
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSnackbar({
        open: true,
        type: "success",
        message: "Profil ma'lumotlari yangilandi!",
      });
    } catch (error) {
      console.error("Update error:", error);
      setSnackbar({
        open: true,
        type: "error",
        message: "Ma'lumotlarni saqlashda xatolik yuz berdi",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 py-10 gap-6">
      {/* Left menu */}
      <Box className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4">
        <Typography variant="h6" className="text-green-600 font-semibold mb-4">
          My Account
        </Typography>
        <ul className="space-y-3 text-gray-700">
          <Link to="/accountDetails" className="flex items-center gap-2 text-green-600 font-medium">
            <FaUser /> Account Details
          </Link>
          <Link to="/myProducts" className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaBoxOpen /> My Products
          </Link>
          <Link to="/address" className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaHome /> Address
          </Link>
          <Link to="/wishlist" className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaHeart /> Wishlist
          </Link>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaTruck /> Track Order
          </li>
        </ul>
        <div className="mt-4 border-t pt-4">
          <button className="flex items-center gap-2 text-red-500 hover:underline">
            <FaSignOutAlt /> Log out
          </button>
        </div>
      </Box>

      {/* Profile form */}
      <Box className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="First name"
            name="name"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last name"
            name="surname"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
          />

          {/* Profile photo upload */}
          <Box className="flex items-center gap-3 col-span-1 md:col-span-2">
            <Avatar src={preview} sx={{ width: 48, height: 48 }} />
            <Button variant="outlined" component="label">
              Upload
              <input type="file" hidden accept="image/*" onChange={handleImageChange} />
            </Button>
          </Box>

          <Box className="col-span-1 md:col-span-2">
            <Button
              type="submit"
              variant="contained"
              color="success"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Save changes"}
            </Button>
          </Box>
        </form>
      </Box>

      {/* Snackbar notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.type}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Profile;
