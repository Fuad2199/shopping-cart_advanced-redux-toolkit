import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";


const AppContent = () => {
  const location = useLocation();
  const isNotFoundPage =
    location.pathname !== "/" &&
    location.pathname !== "/cart" &&
    location.pathname !== "/about";
  return (
    <div>
      {!isNotFoundPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

export default App;
