// GameSection.js
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/OwlCarousel.css"; // Assuming you move the CSS to this file

const OwlImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const games = [
    {
      title: "Dota 2",
      description:
        "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      imageUrl:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    },
    {
      title: "The Witcher 3",
      description:
        "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      imageUrl:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
    },
    {
      title: "RDR 2",
      description:
        "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      imageUrl:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
    },
    {
      title: "PUBG Mobile",
      description:
        "PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      imageUrl:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
    },
    {
      title: "Fortnite",
      description:
        "Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      imageUrl:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
    },
    {
      title: "Far Cry 5",
      description:
        "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      imageUrl:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg",
    },
  ];

  return (
    <section className="game-section">
      <h2 className="line-title">trending games</h2>
      <Carousel
        className="custom-carousel"
        showThumbs={false}
        onChange={setActiveIndex}
        selectedItem={activeIndex}
        centerMode
        centerSlidePercentage={33} // Adjust this to fit your design
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        dynamicHeight
      >
        {games.map((game, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${game.imageUrl})` }}
          >
            <div className="item-desc">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default OwlImages;
