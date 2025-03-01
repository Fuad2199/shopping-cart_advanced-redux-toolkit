import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
  <div className="not-found">
    <h2>404</h2>
    <p>Page is not found!</p>
    <Link className="back-btn" to='/'>
    Back to home
    </Link>
  </div>
  )
};
