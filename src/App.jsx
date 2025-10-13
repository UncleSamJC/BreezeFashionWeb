import { Routes, Route } from "react-router-dom";
import { colors } from "./lib/designTokens";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{ backgroundColor: colors.background.page }}
      className="min-h-screen"
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
