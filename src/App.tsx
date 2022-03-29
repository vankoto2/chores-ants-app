import { Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import DailyTasks from "./components/DailyTasks";
import User from "./components/User";
import Score from "./components/Score";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/user" element={<User />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </div>
  );
}

export default App;
