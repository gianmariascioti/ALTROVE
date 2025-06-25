import { useEffect } from "react";
import logo_white from "../images/altrove_gif.gif"; // White GIF cursor
import logo_black from "../images/altrove_gif_black.gif"; // Black GIF cursor
import { useLocation } from "react-router-dom";

export default function Cursor() {
  const location = useLocation();

  useEffect(() => {
    // Cursor creation logic
    const blackCursor = document.createElement("img");
    blackCursor.src = logo_black;
    Object.assign(blackCursor.style, {
      position: "fixed",
      width: "60px",
      height: "60px",
      pointerEvents: "none",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
    });
    blackCursor.id = "black-cursor";

    const whiteCursor = document.createElement("img");
    whiteCursor.src = logo_white;
    Object.assign(whiteCursor.style, {
      position: "fixed",
      width: "60px",
      height: "60px",
      pointerEvents: "none",
      zIndex: "10000",
      transform: "translate(-50%, -50%)",
      display: "none",
    });
    whiteCursor.id = "white-cursor";

    document.body.appendChild(blackCursor);
    document.body.appendChild(whiteCursor);

    const moveCursor = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      blackCursor.style.left = x;
      blackCursor.style.top = y;
      whiteCursor.style.left = x;
      whiteCursor.style.top = y;
    };

    const showWhiteCursor = () => {
      whiteCursor.style.display = "block";
      blackCursor.style.display = "none";
    };

    const hideWhiteCursor = () => {
      whiteCursor.style.display = "none";
      blackCursor.style.display = "block";
    };

    const updateLinkListeners = () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("mouseenter", showWhiteCursor);
        link.addEventListener("mouseleave", hideWhiteCursor);
      });
      return links;
    };

    const links = updateLinkListeners();

    document.addEventListener("mousemove", moveCursor);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";

      document.body.removeChild(blackCursor);
      document.body.removeChild(whiteCursor);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", showWhiteCursor);
        link.removeEventListener("mouseleave", hideWhiteCursor);
      });
    };
  }, [location.pathname]); // Re-run on route change

  return null;
}
