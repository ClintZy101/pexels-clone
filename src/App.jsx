
import "@fontsource-variable/montserrat";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:productId" element={<Product />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
