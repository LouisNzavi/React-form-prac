import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MyForm from "./components/MyForm.jsx";
import LoginForm from "./components/LoginForm.js";
import Profile from "./components/Profile";
import MyForm from "./components/MyForm";
import ErrorPage from "./components/ErrorPage.js";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          {/* <MyForm /> */}
          {/* <LoginForm /> */}
        </div>
        <Routes>
          <Route path="/" exact />
          <Route path="/login" element={<LoginForm />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/contact" element={<MyForm />} exact />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
