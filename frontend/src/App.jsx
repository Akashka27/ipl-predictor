import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0f172a] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict/:id" element={<Prediction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
