import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./Weather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WeatherApp />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;