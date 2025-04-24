import { Routes, Route } from "react-router-dom";
import Navbar from "./Header/header";
import Footer from "./Footer/footer";
import Hero from "./components/Main";
import Home from "./components/Home";
import SignIn from "./auth/signIn";
import SignUp from "./auth/signUp";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ProductCard from "./pages/productCard";
import Shop from "./pages/shop";
import PrivateRoute from "./isProtected/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Hero />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/productCard"
          element={
            <PrivateRoute>
              <ProductCard />
            </PrivateRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <PrivateRoute>
              <Shop />
            </PrivateRoute>
          }
        />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
