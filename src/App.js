import React, { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
export const GlobalContext = React.createContext({});

function App() {
  const exampleData = [];
  // Fill in initial data with random integers in range 1 - 10
  for (let i = 0; i < 7; i++) {
    let num = Math.floor(Math.random() * 10) + 1;
    exampleData.push(num);
  }
  const [dataSet, setDataSet] = useState(exampleData);

  return (
    <GlobalContext.Provider value={{ dataSet, setDataSet }}>
      <NavBar />
    </GlobalContext.Provider>
  );
}

export default App;
