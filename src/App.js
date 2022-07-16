import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("./containers/home"));
const ModelS = lazy(() => import("./containers/modal-s/index"));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            Loading...<p></p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/model-s" element={<ModelS />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
