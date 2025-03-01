import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>Online Shop</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <IoBagHandle size={40} />
          <span className="bag-quantity">3</span>
        </div>
      </Link>
    </nav>
  );
};
