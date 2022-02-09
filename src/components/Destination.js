import React from "react";
import moon_profile from "../media/destination/image-moon.png";
import mars_profile from "../media/destination/image-mars.png";
import europa_profile from "../media/destination/image-europa.png";
import titan_profile from "../media/destination/image-titan.png";

const Destination = () => {
  return (
    <div className="Dest">
      <h1>Pick your destination</h1>
      <div className="planet-card">
        <div className="desc">
          <h2>moon</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
        <div className="profile">
          <img src={moon_profile} alt="moon photo png" />
        </div>
      </div>

      <div className="planet-card">
        <div className="profile">
          <img src={mars_profile} alt="mars photo png" />
        </div>
        <div className="desc">
          <h2>mars</h2>
          <p>
            {" "}
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!.
          </p>
        </div>
      </div>

      <div className="planet-card">
        <div className="desc">
          <h2>europa</h2>
          <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
          </p>
        </div>
        <div className="profile">
          <img src={europa_profile} alt="europa photo png" />
        </div>
      </div>

      <div className="planet-card">
        <div className="profile">
          <img src={titan_profile} alt="titan photo png" />
        </div>
        <div className="desc">
          <h2>titan</h2>
          <p>
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
