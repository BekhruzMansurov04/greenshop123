import React, { useState } from "react";
import { Box, Button, TextField, Typography, Snackbar, Alert, CircularProgress, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const SignUpForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");
  const [formData, setFormData] = useState({ name: "", surname: "", email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
        { headers: { "Content-Type": "application/json" } }
      );
  
      const token = response?.data?.data?.token || response?.data?.token;
      const user = response?.data?.data?.user || response?.data?.user;
  
      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess({ token, user }));
  
        showSnackbar("success", "Ro'yxatdan muvaffaqiyatli o'tildi!");
        onSuccess();
        navigate("/dashboard");
      } else {
        showSnackbar("error", "Token yoki user ma'lumotlari topilmadi.");
      }
    } catch (error) {
      showSnackbar("error", error.response?.data?.message || "Ro'yxatdan o'tishda xato");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google foydalanuvchi:", user);
  
      const email = user.email;
  
      const response = await axios.post(
        `https://green-shop-backend.onrender.com/api/user/sign-up/google?access_token=6803b89df2a99d0247959d1a`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
  
      const token = response?.data?.data?.token || response?.data?.token;
      const userData = response?.data?.data?.user || response?.data?.user;
  
      if (token && userData) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch(loginSuccess({ token, user: userData }));
  
        showSnackbar("success", "Google bilan ro'yxatdan o'tildi!");
        onSuccess();
        navigate("/dashboard");
      } else {
        showSnackbar("error", "Google bilan ro'yxatdan o'tishda xato");
      }
    } catch (error) {
      console.error(error);
      showSnackbar("error", "Google bilan ro'yxatdan o'tishda xatolik");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" align="center" mb={2}>
        Ro'yxatdan o'tish
      </Typography>

      <TextField
        label="Ism"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Familiya"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Parol"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Ro'yxatdan o'tish"}
      </Button>

      <Divider sx={{ my: 2 }}>Yoki</Divider>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignUp}
        disabled={googleLoading}
      >
        {googleLoading ? <CircularProgress size={24} color="inherit" /> : "Google bilan ro'yxatdan o'tish"}
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarType} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUpForm;
