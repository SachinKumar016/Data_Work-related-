import React from "react";
import "./Style/BudgetGrid.css";

const BudgetGrid = () => {
  return (
    <div className="budget-grid">
      <div className="grid-body">
        {[...Array(8)].map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="cell">x</div>
            <div className="cell">{rowIndex === 2 ? "x" : "x"}</div>
            <div className="cell">x</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BudgetGrid;