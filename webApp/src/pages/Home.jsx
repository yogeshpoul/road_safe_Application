import React from "react";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import { About } from "./About.jsx";
import { Services } from "./Services.jsx";
import { Team } from "./Team.jsx";
import { Contact } from "./Contact.jsx";
import Footer from "../components/Layout/Footer.jsx";

// initialized on remote
export const Home = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <>
      <div className="bg-orange-400 fixed w-full z-10">
      <nav className="flex justify-between">
        <div className="pt-1.5 pl-2"><h1 className="text-3xl">ROADSAFE</h1></div>
        <div>
        <ul className='relative flex flex-col justify-start md:flex-row p-4'>
          <li className='px-5 text-base'>
            <button onClick={() => scrollToSection('home')} 
            onMouseOver={(e) => e.target.style.color = "white"}
            onMouseOut={(e) => e.target.style.color = "black"}>Home</button>
          </li>
          <li className='px-5'>
            <button onClick={() => scrollToSection('about')}
            onMouseOver={(e) => e.target.style.color = "white"}
            onMouseOut={(e) => e.target.style.color = "black"}>About</button>
          </li>
          <li className='px-5'>
            <button onClick={() => scrollToSection('services')}
            onMouseOver={(e) => e.target.style.color = "white"}
            onMouseOut={(e) => e.target.style.color = "black"}>Services</button>
          </li>
          <li className='px-5'>
            <button onClick={() => scrollToSection('team')}
            onMouseOver={(e) => e.target.style.color = "white"}
            onMouseOut={(e) => e.target.style.color = "black"}>Team</button>
          </li>
          <li className='px-5'>
            <button onClick={() => scrollToSection('contact')}
            onMouseOver={(e) => e.target.style.color = "white"}
            onMouseOut={(e) => e.target.style.color = "black"}>Contact</button>
          </li>
        </ul>
        </div>
      </nav>

      </div>
        <div id="home"
          className="home"
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <div className="headerContainer p-7 pt-20">
            <h3 className="text-5xl text-white">Welcome to</h3>
            <h1 className="text-5xl text-white font-bold">ROADSAFE</h1>
            <div
              className="buttonContainer"
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <Link to="/signin">
                <button
                  className="loginButton bg-orange-400"
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    color: "white",
                    // backgroundColor: "darkorange",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "black"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "orange"}
                >
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className="signupButton bg-orange-400"
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    color: "white",
                    // backgroundColor: "darkorange",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "black"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "orange"}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div id="about" className="pt-12 border-b-2 border-gray-700">
          <About />
        </div>

        <div id="services" className="p-12 border-b-2 border-gray-700">
          <Services />
        </div>
        

        <div id="team" className="p-50 border-b-2 border-gray-700">
          <Team />
        </div>

        <div id="contact" className="p-12 border-b-2 border-gray-700">
          <Contact />
        </div>

        <Footer/>

      </>
    </>
  );
};