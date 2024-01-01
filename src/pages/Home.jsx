import React, { useState } from "react";
import "./Home.css";
import video from "../assets/rocketNew.mp4";
import { Rocket } from "lucide-react";
import { Bot } from "lucide-react";
import Chat from "../components/Chat/Chat";

const Home = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="main">
      <video autoPlay muted loop>
        <source src={video} />
      </video>
      <div className="main-container">
        <div className="logo">
          <Rocket />
        </div>
        <div>
          <ul className="nav-list">
            <li className="list-item">Research Institutes</li>
            <li className="list-item">Courses</li>
            <li className="list-item">Selections</li>
            <li className="list-item">Our Team</li>
            <li className="list-item">Resources</li>
            <li className="list-item">Contact Us</li>
          </ul>
        </div>
        <button className="login">Login</button>
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
