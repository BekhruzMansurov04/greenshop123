import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc"; 
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const SignInForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const showSnackbar = (type, message) => {
    setSnackbarType(type);
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post(
      `https://green-shop-backend.onrender.com/api/user/sign-in?access_token=6803b89df2a99d0247959d1a`,
      formData,
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => {
      const { token, user } = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(loginSuccess({ token, user }));
      showSnackbar("success", "Muvaffaqiyatli kirildi!");
      onSuccess?.();
      navigate("/dashboard");
    })
    .catch((err) => {
      showSnackbar("error", err.response?.data?.message || "Xatolik yuz berdi");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        const email = result.user.email;

        return axios.post(
          `https://green-shop-backend.onrender.com/api/user/sign-in/google?access_token=6803b89df2a99d0247959d1a`,
          { email },
          { headers: { "Content-Type": "application/json" } }
        );
      })
      .then((res) => {
        const { token, user } = res.data.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess({ token, user }));
        showSnackbar("success", "Google orqali muvaffaqiyatli kirildi!");
        onSuccess?.();
        navigate("/dashboard");
      })
      .catch((err) => {
        showSnackbar("error", err.response?.data?.message || "Google login xatoligi");
      })
      .finally(() => {
        setGoogleLoading(false);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" align="center" mb={2}>
        Kirish
      </Typography>

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
        {loading ? <CircularProgress size={24} color="inherit" /> : "Kirish"}
      </Button>

      <Stack direction="row" alignItems="center" spacing={1} my={2}>
        <Box flexGrow={1} height="1px" bgcolor="grey.400" />
        <Typography variant="body2" color="textSecondary">
          yoki
        </Typography>
        <Box flexGrow={1} height="1px" bgcolor="grey.400" />
      </Stack>

      <Button
        onClick={handleGoogleSignIn}
        variant="outlined"
        fullWidth
        sx={{
          textTransform: "none",
          borderColor: "#ccc",
          color: "#555",
          fontWeight: "bold",
          mb: 2,
          ":hover": {
            borderColor: "black",
          },
        }}
        disabled={googleLoading}
        startIcon={<FcGoogle size={24} />}
      >
        {googleLoading ? <CircularProgress size={24} color="inherit" /> : "Google bilan kirish"}
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
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

export default SignInForm;
