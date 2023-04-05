import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WithNavbar from "./layouts/WithNavbar";

import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";

import { MainContextProvider } from "./contexts/MainContext";
import Meeting from "./pages/Meeting";

function App() {
  return (
    <MainContextProvider>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/" element={<WithNavbar />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </MainContextProvider>
  );
}

export default App;
