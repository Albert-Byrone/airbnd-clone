import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
// import Footer from "./Footer";
import Foot from "./Foot";
// import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
// import your route components too

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Foot />
      </>
    </div>
  );
}

export default App;
