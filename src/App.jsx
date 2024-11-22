import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import HomePage from "./pages/HomePage"
import IntroPage from "./pages/IntroPage";
import GamePage from "./pages/GamePage";

export const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </React.Fragment>
  );
};
export default App;