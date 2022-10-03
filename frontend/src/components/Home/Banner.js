import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>
            A place to{" "}
            <span
              onClick={() => {
                console.log("clicked");
                setOpen(!open);
              }}
              className="getter"
              id="get-part"
            >
              get
            </span>
          </span>
          <input
            id="search-box"
            value={props.searchVal}
            onChange={props.stateSearch}
            placeholder="What is it that you truly desire?"
            style={{
              display: open ? "inline-block" : "none",
              marginLeft: "5px",
            }}
          ></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
