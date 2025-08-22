import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";

import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
