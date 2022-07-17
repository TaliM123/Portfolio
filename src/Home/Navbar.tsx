import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="flexrow navbartext">
          <h3>
            <b>PORTFOLIO</b>
          </h3>
          <div className="flexrow navlink">
            <Link to="about" spy={true} smooth={true}>
              <h4>ABOUT</h4>
            </Link>
            <Link to="work" spy={true} smooth={true}>
              <h4>WORK</h4>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              <h4>CONTACT</h4>
            </Link>
          </div>
          <img
            src={show ? "./images/close.png" : "./images/menu.png"}
            onClick={() => setShow(!show)}
            alt=""
          />
        </div>
        <div className={show ? "responsive-nav show" : "responsive-nav block"}>
          <Link to="about" spy={true} smooth={true}>
            <h4>ABOUT</h4>
          </Link>
          <Link to="work" spy={true} smooth={true}>
            <h4>WORK</h4>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <h4>CONTACT</h4>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
