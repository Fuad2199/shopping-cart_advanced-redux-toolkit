import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./components/AppContent";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

export default App;
