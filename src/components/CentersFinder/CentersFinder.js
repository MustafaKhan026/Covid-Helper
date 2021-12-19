import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CenterCard from "../CenterCard";
import "./CentersFinder.css";

const CentersFinder = () => {
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const [areaPincode, setAreaPincode] = useState("");
  const [vaccCenters, setCenters] = useState([]);
  const [error, setError] = useState("");

  const getCenters = async () => {
    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${areaPincode}&date=${date}`
    )
      .then((res) => res.json())
      .then((data) => setCenters(data.centers))
      .catch((err) => {
        setError(err);
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    getCenters();
    console.log(vaccCenters);
  };

  const getPincode = (e) => {
    setAreaPincode(e.target.value);
  };
  useEffect(() => {
    getCenters();
  }, []);
  return (
    <div className="App">
      <div className="navigation">
        <nav>
          <ul>
            <li>Syptoms</li>
            <li>Diagnosis</li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="form__container">
        <form onSubmit={formSubmit}>
          <div className="form__label">
            <label>Find vaccine center</label>
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="Enter pincode...."
              value={areaPincode}
              onChange={getPincode}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="center__container">
        {vaccCenters && vaccCenters.length === 0 ? (
          <p>there was an error </p>
        ) : null}
        <div className="center__header">
          {vaccCenters && vaccCenters?.length !== 0 ? (
            <p> Found {vaccCenters?.length} centers</p>
          ) : null}
        </div>
        <div className="center__wrapper">
          {vaccCenters &&
            vaccCenters?.map((center) => {
              return <CenterCard center={center} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CentersFinder;
