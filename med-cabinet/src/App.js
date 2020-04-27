import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login"
import NewAccount from './components/NewAccount'

function App() {
  return (
    <Router>
      <div className="App">
        <ProtectedRoute />
        <Login />
        <NewAccount />
      </div>
    </Router>
  );
}

export default App;
