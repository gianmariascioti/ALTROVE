import React from "react";
import Logo from "./Logo";
import heroImage from "../images/hover_speakeasy.jpg";
import event_1 from "../images/event_1.jpg";
import eventImage from "../images/hover_speakeasy.jpg";

export default function Speakeasy() {
  return (
    <div className="bg-white text-black">
      <Logo />

      {/* Main content area with consistent margin */}
      <div className="m-[100px]">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh]">
          <img
            src={heroImage}
            alt="SoundRoom Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-5xl font-extrabold">SPEAKEASY</h1>
          </div>
        </div>
        <br></br>
        <div className="relative w-full h-[100vh]">
          <img
            src={event_1}
            alt="SoundRoom Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Concept Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <img
            src={eventImage}
            alt="SoundRoom Experience"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </section>
      </div>
    </div>
  );
}
