import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";

import Home from "../Home/Home";
import Search from "../Search/Search";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
