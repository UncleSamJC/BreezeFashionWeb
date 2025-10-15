import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { colors } from "./lib/designTokens";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      style={{ backgroundColor: colors.background.page }}
      className="min-h-screen"
    >
      {!isAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
