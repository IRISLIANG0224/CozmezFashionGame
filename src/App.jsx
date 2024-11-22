import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstPage from "./pages/FirstPage";

export const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </React.Fragment>
  );
};
export default App;