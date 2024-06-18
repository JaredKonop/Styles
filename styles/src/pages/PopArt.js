// 5. Pop Art Page
// - **Theme**: Popular culture, vibrant energy, and playful expression.
// - **Content Ideas**:
//   - **Pop Culture Reflections**: Share your thoughts on current trends, movies, music, or other pop culture phenomena.
//   - **Personal Favorites**: List and discuss your favorite pop culture icons, artworks, or moments.
//   - **Visual Elements**: Bright, high-contrast images and elements from pop culture (comic strips, advertisements).
//   - **Colors and Layout**: Bold, vibrant colors and dynamic layouts that mimic the feel of pop art.
//   - **Typography**: Bold, thick fonts that stand out.
import MyCarousel from "../components/MyCarousel";
import OwlImages from "../components/OwlCarousel";
import "../styles/popart.css";
import React from "react";

const PopArt = () => {
  return (
    <>
      <MyCarousel />
      <div className="pop-art-container">
        <h1>Pop Art</h1>
        <p>This is the Pop Art page.</p>
      </div>
      <OwlImages />
    </>
  );
};

export default PopArt;
