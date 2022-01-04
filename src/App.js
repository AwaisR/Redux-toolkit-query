import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Table from "./Table";
import Users from "./User";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Table />} />

        <Route path="/user/:id" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
