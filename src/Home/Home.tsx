import React, { useState } from "react";

function Home() {
  const [position, setPosition] = useState(false);

  const mainSlider = [
    {
      background: "url(./images/project1.webp)",
    },
    {
      background:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(./images/project2.jpg)",
    },
  ];

  return (
    <>
      <div className="about flexrow" id="about">
        <img src="./images/taulantmerlaku-aboutus.jpg" alt="" />
        <div>
          <h3>ABOUT</h3>
          <h1>Developer</h1>
          <p>
            I'm Taulant, a passionate Web Developer. I am experienced in
            developing Web Applications using React, Typescript and .Net Core.
          </p>
        </div>
      </div>
      <div className="work font1" id="work">
        <header className="tcenter">
          <h2>WORK</h2>
          <h1 className="font2">Take a look at my Projects</h1>
        </header>
        <main style={mainSlider[position ? 1 : 0]}>
          {position ? (
            <>
              <h4>March 2022</h4>
              <h1 className="font2">SHOP CLOTHING STORE</h1>
              <p>
                This Website is a Shop Clothing Site built with simple HTML,
                CSS, JS and PHP. Users can Register, Login and add Products to
                their Cart.
              </p>
              <div className="work-link flexrow">
                <a
                  href="http://shopclothingexpress.rf.gd/?i=1"
                  style={{ color: "white" }}
                >
                  <p>Website</p>
                </a>
                <a
                  href="https://github.com/TaliM123/Website_E-commerce"
                  style={{ color: "white" }}
                >
                  <p>Source Code</p>
                </a>
              </div>
            </>
          ) : (
            <>
              <h4>July 2022</h4>
              <h1 className="font2">GYM MANAGEMENT SYSTEM</h1>
              <p>
                This Web Application is built with React, Typescript and .Net
                Core. It has some really useful features like Nutrition - Daily
                Calories Calculator, Weekly Workout Program and a List of
                Excercises for new Gym Members to look at.
              </p>
              <div className="work-link flexrow">
                <a
                  href="https://gym-managment-system.herokuapp.com/"
                  style={{ color: "white" }}
                >
                  <p>Website</p>
                </a>
              </div>
            </>
          )}
          <hr />
          <img
            src="./images/right-arrow.png"
            className="right-arrow"
            alt="next"
            onClick={() => setPosition(!position)}
          />
          <img
            src="./images/left-arrow.png"
            className="left-arrow"
            alt="prev"
            onClick={() => setPosition(!position)}
          />
        </main>
      </div>
      <div className="contact flexrow font1" id="contact">
        <div className="contact-text">
          <h3>CONTACT</h3>
          <h1 className="font2">Interested in my Work ?</h1>
          <p>
            If you are interested in any of my projects send me an email or
            contact me in my other social media platforms.
          </p>
          <div className="email flexrow">
            <img src="./images/mail.png" alt="" />
            <p>taulantmerlaku02@gmail.com</p>
          </div>
        </div>
        <div className="contat-img">
          <a href="https://discordapp.com/users/996434304106254408/">
            <img src="./images/discord.png" alt="" />
          </a>
          <a href="https://github.com/TaliM123">
            <img src="./images/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/taulantmerlaku/">
            <img src="./images/instagram.png" alt="" />
          </a>
          <a href="https://www.facebook.com/tau1L.1">
            <img src="./images/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
