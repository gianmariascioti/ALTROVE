import React from "react";
import Logo from "./Logo";
import heroImage from "../images/event_2.jpg";
import event_1 from "../images/event_1.jpg";
import mama_market from "../images/mama_market.jpg";
import der from "../images/der.jpg";
import Locandine from "./Locandine";
import ciaone_18_06 from "../images/ciaone_18_06.jpg";
import ciaone_04_06 from "../images/ciaone_04_06.jpg";
import ciaone_28_05 from "../images/ciaone_28_05.jpg";
import ciaone_21_05 from "../images/ciaone_21_05.jpg";
import ciaone_11_06 from "../images/ciaone_11_06.jpg";

export default function Events() {
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
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-5xl font-extrabold">EVENTS</h1>
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
        <br></br>
        <Locandine img1={mama_market} img2={der} />
        <Locandine img1={ciaone_21_05} img2={ciaone_28_05} />
        <Locandine img1={ciaone_04_06} img2={ciaone_11_06} />
        <Locandine img1={ciaone_18_06} />
      </div>
    </div>
  );
}
