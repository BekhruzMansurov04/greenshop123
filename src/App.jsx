import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Header/header";
import Footer from "./Footer/footer";
import Hero from "./components/Main";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ProductCard from "./pages/productCard";
import Blog from "./pages/Blog";
import PrivateRoute from "./isProtected/PrivateRoute";
import ModalAuth from "./modalPopUp/ModalAuth"; 

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setOpenModal(true)} />

      <Routes>
        <Route path="/" element={<Home onOpenModal={() => setOpenModal(true)} />} />
        <Route path="/Main" element={<Hero />} />
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
        <Route path="/Blog" element={<Blog />} />
      </Routes>

      <ModalAuth open={openModal} onClose={() => setOpenModal(false)} />

      <Footer />
    </>
  );
}

export default App;
