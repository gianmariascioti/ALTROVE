import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import Salumeria from "./components/Salumeria";
import Speakeasy from "./components/Speakeasy";
import SoundRoom from "./components/SoundRoom";
import Events from "./components/Events";
import SlopingRoom from "./components/SlopingRoom";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <>
      <Router>
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/salumeria" element={<Salumeria />} />
          <Route path="/speakeasy" element={<Speakeasy />} />
          <Route path="/soundroom" element={<SoundRoom />} />
          <Route path="/sloping" element={<SlopingRoom />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}
