
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource-variable/montserrat";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SinglePhoto from "./pages/SinglePhoto";
import SingleVideo from "./pages/SingleVideo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/photo/:id" element={<SinglePhoto />} />
        <Route path="/video/:id" element={<SingleVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
