import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="navigation">
            <nav>
              <ul>
                <Link to="/symptoms" style={{ textDecoration: "none" }}>
                  <li>Symptoms</li>
                </Link>
                <Link to="/diagnosis" style={{ textDecoration: "none" }}>
                  <li>Diagnosis</li>
                </Link>
                <Link to="/centers" style={{ textDecoration: "none" }}>
                  <li>Vaccine Centers</li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="svg-name">
            <h4 className="hero__heading">COVIDHELPER</h4>
          </div>
          <div className="info-box-container">
            <div className="info-box">
              <p className="info-text">Get all the necessary info on Covid19</p>
            </div>
          </div>
        </header>
        <div className="main">
          <div className="about-section">
            <div className="about-section-text-box">
              <p className="about-section-text">
                <b>Coronavirus</b> disease 2019 (COVID-19) is a contagious
                disease caused by severe <br />
                acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first
                known case was identified in <b>Wuhan, China</b>, in December
                2019. The disease has since spread worldwide leading to an
                ongoing pandemic. <br />
                <br />
                Symptopms of COVID-19 are variable, but often include{" "}
                <b>
                  fever, cough, headache,fatigue, <br /> breathing difficulties,
                  and loss of smell and taste.
                </b>
                <br />
                COVID-19 transmits when people breathe in air contaminated by
                droplets and small airborne particles containing the virus. The
                risk of breathing these in is highest when people are in close
                proximity, but they can be inhaled over linger distances,
                prticularly indoors. Transmission can also occur is splashed or
                sprayed with contaminated fluids in the eyes, nose or mouth, and
                rarely, via contaminated surfaces.
                <br />
                With this website we are going to help people to better
                understand the symptoms of <b>COVID-19</b> and how to{" "}
                <b>Diagnose</b> those symptoms
              </p>
            </div>
          </div>
          <div className="image-section">
            <div className="image-section-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
