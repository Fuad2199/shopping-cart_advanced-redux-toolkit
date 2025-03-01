import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./components/AppContent";


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
