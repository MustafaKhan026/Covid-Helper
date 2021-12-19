import React from "react";
import { Link } from "react-router-dom";

const SymptomsPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default SymptomsPage;
