// 3. Cubism Page
// - **Theme**: Multiple perspectives and abstract views of life.
// - **Content Ideas**:
//   - **Multiple Angles**: Write about a single event or topic from multiple perspectives or angles.
//   - **Visual Elements**: Use geometric shapes, fragmented images, and layered graphics to illustrate your points.
//   - **Colors and Layout**: Abstract background patterns with overlapping sections.
//   - **Typography**: Bold, angular fonts that complement the geometric design.

import React from "react";
import ImageGrid from "../components/ImageGrid";
import img1 from "../assets/beachguy.jpg";
import img2 from "../assets/computerguy.jpg";

const Cubism = () => {
  const images = [
    img1,
    img2,
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1>Cubism</h1>
      <p>This is the Cubism page.</p>
      <ImageGrid images={images} />
    </div>
  );
};

export default Cubism;
