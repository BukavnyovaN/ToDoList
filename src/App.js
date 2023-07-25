import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from ".//pages/Home";
import { About } from ".//pages/About";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/firebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="cotainer pt-4">
            <Alert />
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/about" Component={About} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
