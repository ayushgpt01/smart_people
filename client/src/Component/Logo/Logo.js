import React from "react";
import Tilt from "react-parallax-tilt";
import pic from "./Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0" style={{ display: "flex", justifyContent: "flex-start" }}>
      <Tilt
        tiltReverse={true}
        className="tilt br2 shadow-2"
        style={{ width: 150, height: 150 }}
      >
        <div>
          <img alt="Logo" src={pic} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
