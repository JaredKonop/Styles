import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Impressionism from "./pages/Impressionism";
import Surrealism from "./pages/Surrealism";
import Cubism from "./pages/Cubism";
import Minimalism from "./pages/Minimalism";
import PopArt from "./pages/PopArt";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/impressionism" element={<Impressionism />} />
          <Route path="/surrealism" element={<Surrealism />} />
          <Route path="/cubism" element={<Cubism />} />
          <Route path="/minimalism" element={<Minimalism />} />
          <Route path="/popart" element={<PopArt />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
