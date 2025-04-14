import React from "react";
import "./Style/Topbar.css";

const Topbar = ({ currentAmount }) => {
    return (
      <div className="topbar">
        <div className="topbar-header">
            <h3>Chat Name</h3>
            <h3>₹ {currentAmount.toString().padStart(2, "0")}</h3>
        </div>
      </div>
    );
  };

export default Topbar;
