import React from "react";
import { Link } from "react-router-dom";

const Diagnosispage = () => {
  return (
    <div>
      <div className="navigation">
        <nav>
          <ul>
            <Link to="/symptoms" style={{ textDecoration: "none" }}>
              <li>Symptoms</li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>home</li>
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

export default Diagnosispage;
