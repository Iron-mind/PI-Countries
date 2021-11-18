import React from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
        <h1 className="title"> Countries Web </h1>
      <div className="landingImg">
        
        <Link to="/home" style={{ textDecoration: 'none' }} >
        <button className="btn-home">  Go to Home </button>
        </Link> 
        
      </div>
    </div>
  );
}
