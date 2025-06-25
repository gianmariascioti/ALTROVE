import React from "react";
import Logo from "./Logo.js";

export default function Info() {
  return (
    <div className="bg-white text-black min-h-screen p-10">
      <Logo />
      <h1
        className="text-lg max-w-2xl font-bold"
        style={{
          marginLeft: "150px",
          marginTop: "150px",
          textTransform: "uppercase",
        }}
      >
        Altrove è un luogo dove il sociale incontra la cultura. In questo spazio
        convivono idee, eventi, performance e convivialità. Nato per riscoprire
        il valore delle relazioni umane.
      </h1>
    </div>
  );
}
