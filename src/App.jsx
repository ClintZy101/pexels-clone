
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource-variable/montserrat";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Search />} />
        {/* <Route path="/product/:productId" element={<Product />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
