import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WithNavbar from "./layouts/WithNavbar";

import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";

import { MainContextProvider } from "./contexts/MainContext";

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Router>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<WithNavbar />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </MainContextProvider>
    </div>
  );
}

export default App;
