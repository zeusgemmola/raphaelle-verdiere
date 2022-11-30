import React from "react";
import "./App.css";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

import Convertisseur from "./pages/ConvertisseurPage";
import ErrorPage from "./pages/ErrorPage";
import AppBar from "./components/AppBar/AppBar";

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Convertisseur />} />
          <Route path="/error404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error404" />} />
        </Routes>
      </BrowserRouter>
    </main>
  </div>
);

export default App;
