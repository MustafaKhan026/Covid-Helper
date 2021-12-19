import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CentersFinder from "./components/CentersFinder/CentersFinder";
import HomePage from "./components/Homepage/HomePage";
import DiagnosisPage from "./components/Diagnosispage/Diagnosispage";
import Symptomspage from "./components/Symotiomspage/SymptomsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/centers" element={<CentersFinder />}></Route>
        <Route path="/diagnosis" element={<DiagnosisPage />}></Route>
        <Route path="/symptoms" element={<Symptomspage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
