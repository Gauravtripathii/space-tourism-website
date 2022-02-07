import React from "react";
import moon_profile from '../media/destination/image-moon.png';

const Destination = () => {
  return (
    <div className="Dest">
      <h1>Pick your destination</h1>
      <div className="planet-card">
        <div className="desc">
          <h2>moon</h2>
          <p> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        </div>
        <div className="profile">
          <img src={moon_profile} alt="moon photo png" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
