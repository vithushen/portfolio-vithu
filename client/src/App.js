import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/portfolio-vithu" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 


