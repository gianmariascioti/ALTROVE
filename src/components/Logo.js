// src/components/Logo.js
import React from "react";
import { Link } from "react-router-dom";
import logo_nero from "../images/logoasterisco_nero.png";

export default function Logo() {
  return (
    <Link
      to="/"
      className="fixed top-2 left-3 z-50 w-[120px] sm:w-[160px] lg:w-[200px] h-auto"
    >
      <img
        src={logo_nero}
        alt="Altrove Logo"
        className="w-full h-auto object-contain"
      />
    </Link>
  );
}
