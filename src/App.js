import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/home/index";

function App() {
  return (
    <div className="snap-y">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
