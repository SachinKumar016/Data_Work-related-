import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import CategoriesSection from "./component/CategoriesSection";
import BudgetGrid from "./component/BudgetGrid";
import SearchBar from "./component/SearchBar";

import "./App.css";

function App() {
  const [currentAmount, setCurrentAmount] = useState(0);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Topbar currentAmount={currentAmount} />
        <CategoriesSection />
        <BudgetGrid />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
