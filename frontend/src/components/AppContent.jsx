import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";

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

export default AppContent