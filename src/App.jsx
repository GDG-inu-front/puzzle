import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./mainScreen/MainScreen";
import PuzzleScreen from "./puzzleScreen/PuzzleScreen";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/puzzle" element={<PuzzleScreen />} />
            </Routes>
        </Router>
    )
}

export default App;