import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Specials from "./pages/Specials/Specials";
import Reserve from "./pages/Reserve/Reserve";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import supabase from "./library/supabase";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
