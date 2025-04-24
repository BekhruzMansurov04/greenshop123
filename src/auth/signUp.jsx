import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showSnackbar = (type, message) => {
    setSnackbarType(type);
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(
        `https://green-shop-backend.onrender.com/api/user/sign-up/?access_token=6803b89df2a99d0247959d1a`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
  
      const { token, user } = response.data.data;
  
      if (token && user) {
        console.log("📦 Token:", token);
        console.log("👤 User:", user);
  
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess({ token, user }));
  
        showSnackbar("success", "Ro'yxatdan muvaffaqiyatli o'tildi!");
        navigate("/dashboard");
      } else {
        showSnackbar("error", "Token yoki foydalanuvchi ma'lumotlari topilmadi.");
        console.error("❌ Token yoki user yo'q:", response.data);
      }
    } catch (error) {
      console.error("❌ Xato:", error);
      const errorMsg =
        error.response?.data?.message || "Ro'yxatdan o'tishda xatolik";
      showSnackbar("error", errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-white px-4">
      <Box className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <Typography variant="h4" className="text-green-700 text-center mb-6">
          Ro'yxatdan o'tish
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Ism"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Familiya"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Parol"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Ro‘yxatdan o‘tish"
            )}
          </Button>
        </form>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarType}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUp;
