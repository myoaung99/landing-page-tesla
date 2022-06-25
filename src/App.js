import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/containers/home";

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
