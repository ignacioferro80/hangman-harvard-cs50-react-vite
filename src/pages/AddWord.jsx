import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addWord.css";
import vector from "../assets/vector.png";
import NotAvailable from "../components/NotAvailable.jsx";

const AddWord = ({ darkMode, secretWordList, setWordList }) => {
    const navigate = useNavigate();

    const [textInput, setTextInput] = useState("");
    const [notAvailable, setNotAvailable] = useState(false);

    const regex = /^[a-zA-Z]*$/;

    const saveWordWritten = () => {
        if(textInput==""){
            setNotAvailable(true);
            return
        }

        else if(!regex.test(textInput)) {
            setNotAvailable(true);
            return
        }
    
        else if(secretWordList.includes(textInput)){
            setNotAvailable(true);
            return
        }
    
        else {
            setWordList([...secretWordList, textInput]);
        }
        setTextInput("");
    }

    const handleInputChange = (event) => {
        setTextInput(event.target.value.toLowerCase());
    }

    return (
        <div className={`addWordPage ${darkMode ? "night" : ""}`}>

            <form>
                <input className={`insertTextForm ${darkMode ? "night" : ""}`} value={textInput} onChange={handleInputChange} type="text" maxLength="8" placeholder="Insert word here"/>
            </form>
            <div className="warning">
                <img className="warning-logo" src={vector}/>
                <p className="warning-text">Only lowercase words with 8 letters max.</p>
            </div>
            <div>
                <button className={`save-button ${darkMode ? "night" : ""}`} onClick={() => saveWordWritten()} >Save</button>
                <button className={`begin-button ${darkMode ? "night" : ""}`} onClick={() => navigate("/game")} >Begin</button>
                <button className={`go-home-button ${darkMode ? "night" : ""}`} onClick={() => navigate("/")} >Go home</button>
            </div>

            {notAvailable && textInput==="" && <NotAvailable text={"Write a word to be used in the game!"} setNotAvailable={setNotAvailable} />}
            {notAvailable && secretWordList.includes(textInput) && <NotAvailable text={"Write something else! That word is already on the list"} setNotAvailable={setNotAvailable} />}
            {notAvailable && !regex.test(textInput) && <NotAvailable text={"Remember using only letters!"} setNotAvailable={setNotAvailable} />}

        </div>
    );

}

export default AddWord;