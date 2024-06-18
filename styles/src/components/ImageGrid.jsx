import React from "react";
import "../styles/cubism.css"; // Import your CSS file

const ImageGrid = ({ images }) => {
  return (
    <div className="grid-container">
      {images.map((imageUrl, index) => (
        <div key={index} className="grid-item">
          <img src={imageUrl} alt={`Image ${index}`} className="image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
