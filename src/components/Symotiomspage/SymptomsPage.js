import React from "react";
import { Link } from "react-router-dom";
import "./Symptoms.css";

const SymptomsPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="navigation">
          <nav>
            <ul>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>home</li>
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
        <div className="banner"></div>
        <div className="info__wrapper">
          <h2>Symptoms : </h2>
          <div className="info__container">
            <div className="box">
              <p>
                COVID-19 affects different people in different ways. Most
                infected people will develop mild to moderate illness and
                recover without hospitalization. People with COVID-19 have had a
                wide range of symptoms reported – ranging from mild symptoms to
                severe illness. Symptoms may appear 2-14 days after exposure to
                the virus. Anyone can have mild to severe symptoms. People with
                these symptoms may have COVID-19:
              </p>
            </div>
            <div className="symptoms">
              <div className="symptoms__box">
                <h4>Most common symptoms :</h4>
                <ol>
                  <li>Fever</li>
                  <li>Cough</li>
                  <li>Tiredness</li>
                  <li>Loss of taste or smell</li>
                </ol>
                <h4>Less common symptoms :</h4>
                <ol>
                  <li>Sore throat</li>
                  <li>Headache</li>
                  <li>Aches and pains</li>
                  <li>Diarrhoea</li>
                  <li>A rash on skin, or discolouration of fingers or toes</li>
                  <li>Red or irritated eyes</li>
                </ol>
              </div>
              <div className="symptoms__box_2">
                <h4>Serious symptoms:</h4>
                <ol>
                  <li>Difficulty breathing or shortness of breath</li>
                  <li>Loss of speech or mobility, or confusion</li>
                  <li>Chest pain</li>
                </ol>
              </div>
            </div>
            <div className="seek__attention">
              <p>
                Seek immediate medical attention if you have serious symptoms.
                Always call before visiting your doctor or health facility.
                People with mild symptoms who are otherwise healthy should
                manage their symptoms at home. On average it takes 5–6 days from
                when someone is infected with the virus for symptoms to show,
                however it can take up to 14 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SymptomsPage;
