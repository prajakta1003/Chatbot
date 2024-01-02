import React, { useState } from "react";
import "./Home.css";
import video from "../assets/rocketNew.mp4";
import { Menu, Rocket } from "lucide-react";
import { Bot } from "lucide-react";
import Chat from "../components/Chat/Chat";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="main">
      <video autoPlay muted loop>
        <source src={video} />
      </video>
      <div className="main-container">
        <div className="logo">
          <Rocket />
        </div>
        <div className="navbar">
          <div className="menu-toggle" onClick={toggleMenu} id="mobile-menu">
            <Menu color="white" />
          </div>
          <ul className={`nav-list ${showMenu ? "active" : ""}`} id="nav-list">
            <li className="list-item">Research Institutes</li>
            <li className="list-item">Courses</li>
            <li className="list-item">Selections</li>
            <li className="list-item">Our Team</li>
            <li className="list-item">Resources</li>
            <li className="list-item">Contact Us</li>
            <button className="login">Login</button>
          </ul>
        </div>
      </div>
      <div className="bottom-div">
        <h1>SciAstra</h1>
        <p>For the love of science</p>
      </div>
      <div onClick={() => setShowChat(!showChat)} className="chat">
        <Bot size={35} />
      </div>
      {showChat && (
        <div className="chatbot">
          <Chat />
        </div>
      )}
    </div>
  );
};

export default Home;
