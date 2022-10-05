import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="pos">
      <div className="pos1 ">
        <span>
          <Link to="/home">Home</Link>
        </span>
        <span className="ml">
          <Link to="/exit">Exit</Link>
        </span>
        <span className="ml">
          <Link to="/fetch">Fetch</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
