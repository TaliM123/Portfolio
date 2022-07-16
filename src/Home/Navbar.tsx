import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flexrow navbar">
        <h3>
          <b>PORTFOLIO</b>
        </h3>
        <div className="flexrow">
          <h4>ABOUT</h4>
          <h4>WORK</h4>
          <h4>CONTACT</h4>
          <div className="icon">
            <img src="./images/github.png" alt="" />
            <img src="./images/discord.png" alt="" />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
