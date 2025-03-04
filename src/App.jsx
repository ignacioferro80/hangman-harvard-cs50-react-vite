import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import AddWord from "./pages/AddWord";
import "../src/styles/app.css";

const App = () => {

  const [secretWordList, setWordList] = useState(["always", "language", "search", "straight", "student", "complete", "university"]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />

        <Route path="/game" element={<Game darkMode={darkMode} secretWordList={secretWordList}/>} />

        <Route path="/addWord" element={<AddWord darkMode={darkMode} secretWordList={secretWordList} setWordList={setWordList}/>} />

      </Routes>
    </Router>
  );
}
export default App;