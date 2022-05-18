import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieDescription from "./components/movieDescription/MovieDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
