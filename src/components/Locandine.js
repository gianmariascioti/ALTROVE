import React from "react";

const Locandine = ({
  img1,
  img2,
  alt1 = "Image 1",
  alt2 = "Image 2",
  gap = "20px",
}) => {
  const containerStyle = {
    display: "flex",
    width: "100%",
    gap: gap,
    marginBottom: "100px",
  };

  const imageStyle = {
    width: "calc(50% - " + gap + ")",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      {img1 && <img src={img1} alt={alt1} style={imageStyle} />}
      {img2 && <img src={img2} alt={alt2} style={imageStyle} />}
    </div>
  );
};

export default Locandine;
