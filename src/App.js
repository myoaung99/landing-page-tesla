import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/home";
import ModelS from "./containers/modal-s";
import Layout from "./components/layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/model-s" element={<ModelS />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
