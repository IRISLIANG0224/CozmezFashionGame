import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import HomePage from "./pages/HomePage"

export const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
};
export default App;