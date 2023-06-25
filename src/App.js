import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './features/Home/Home';
import TodoApp from './features/Todo/Todo';
import NavBar from "./app/layout/NavBar";
import Footer from "./app/layout/Footer";
import Preloader from "./app/layout/Pre";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 120);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
