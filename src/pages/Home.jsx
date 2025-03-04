import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useEffect } from "react";
import lightBackground from "../assets/blurry-gradient-haikei.png";
import nightBackground from "../assets/blurry-gradient-haikei-night.png";

const Home = ({ darkMode, setDarkMode }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.style.setProperty("--background-image", `url(${nightBackground})`);
        } else {
            document.documentElement.style.setProperty("--background-image",  `url(${lightBackground})`);
        }
    }, [darkMode]);

    const goGamePage = () => {
        navigate("/game");
    }

    const goAddWordPage = () => {
        navigate("/addWord");
    }

    return (
        <div>
            <div className={`homePage ${darkMode ? "night" : ""}`}>
                <div className={`description ${darkMode ? "night" : ""}`}>
                    <p className={`title ${darkMode ? "night" : ""}`}>Hangman game</p>
                    <p className={`text ${darkMode ? "night" : ""}`}>Test your word knowledge and imagination with this classic game!</p>
                </div>
                <div className="buttons">
                    <button onClick={() => goGamePage()} className={`start-button ${darkMode ? "night" : ""}`}>Start</button>
                    <button onClick={() => goAddWordPage()} className={`add-word-button ${darkMode ? "night" : ""}`}>Add a new word</button>
                </div>

                <p className="rodapie">by <a href="https://www.linkedin.com/in/ignacio-ferro/">Ignacio Ferro</a></p>
            </div>
            <div className="toggle-container">
                <img src={sun} alt="sun" className={`sun ${!darkMode ? "selected" : ""}`} />
                <button className={`toggle-btn ${darkMode ? "toggled" : ""}`} onClick={() => setDarkMode(!darkMode)}>
                    <div className="thumb"></div>
                </button>
                <img src={moon} alt="moon" className={`moon ${darkMode ? "selected" : ""}`} />
            </div>
        </div>
    );

}

export default Home;