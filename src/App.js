import "./App.css";
import Noticias from "./pages/Noticias";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/news" element={<Noticias />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
      {/* <Counter/>
    <Noticias/> */}
    </div>
  );
}

export default App;
