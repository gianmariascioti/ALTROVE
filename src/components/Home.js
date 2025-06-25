import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_white from "../images/altrove_gif.gif"; // White GIF cursor
import home_page from "../images/home_page_2.png";
import logo_nero from "../images/logoasterisco_nero.png";

import hover_speakeasy from "../images/hover_speakeasy.jpg";
import hover_info from "../images/hover_info_2.png";
import hover_salumeria from "../images/hover_salumeria.png";
import hover_sloping from "../images/hover_sloping.jpg";
import hover_events from "../images/hover_events.jpg";
import hover_soundroom from "../images/hover_soundroom.jpg";

export default function Home() {
  const [hoverImage, setHoverImage] = useState(null);

  const menuItems = [
    {
      image: logo_nero,
      path: "/",
      className: "top-2 left-3 w-[200px] h-auto",
    },
    {
      label: "INFO",
      path: "/info",
      hoverImage: hover_info,
      className: "top-0.5 left-[20%] transform -translate-x-1/2",
    },
    {
      label: "SALUMERIA POSTROMANTICA",
      path: "/salumeria",
      hoverImage: hover_salumeria,
      className: "top-0.5 left-[65%] transform -translate-x-1/2",
    },
    {
      label: "SOUND ROOM",
      path: "/soundroom",
      hoverImage: hover_soundroom,
      className:
        "right-12 bottom-[1%] transform translate-y-1/2 rotate-90 origin-right",
    },
    {
      label: "EVENTS",
      path: "/events",
      hoverImage: hover_events,
      className: "bottom-1 left-[75%] transform -translate-x-1/2",
    },
    {
      label: "SLOPING ROOM",
      path: "/sloping",
      hoverImage: hover_sloping,
      className: "bottom-1 left-[30%] transform -translate-x-1/2",
    },
    {
      label: "SPEAKEASY",
      path: "/speakeasy",
      hoverImage: hover_speakeasy,
      className:
        "top-[99%] left-[-10px] transform -rotate-90 origin-top-left text-[80px]",
    },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden bg-white text-black relative">
      {/* Background Image */}
      <div className="absolute inset-[100px] transition-all duration-500">
        <img
          src={hoverImage || home_page}
          alt="Altrove"
          className="w-full h-full object-cover"
        />
      </div>

      {/* White Border */}
      <div className="absolute inset-0 border-[100px] border-white pointer-events-none z-10"></div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onMouseEnter={() => item.hoverImage && setHoverImage(item.hoverImage)}
          onMouseLeave={() => setHoverImage(null)}
          className={`absolute z-30 ${item.className}`}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={`Menu ${index}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-normal text-[90px] leading-[1] text-black/90 whitespace-nowrap hover:underline">
              {item.label}
            </span>
          )}
        </Link>
      ))}

      {/* Center Logo (only if no hover image is active) */}
      {!hoverImage && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <img src={logo_white} width={299} height={295} alt="Altrove Logo" />
        </div>
      )}
    </div>
  );
}
