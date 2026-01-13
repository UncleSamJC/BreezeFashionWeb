import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { colors } from "./lib/designTokens";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    // 如果有 hash（锚点），滚动到对应元素
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // 没有 hash，滚动到顶部
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div
      style={{ backgroundColor: colors.background.page }}
      className="min-h-screen"
    >
      {!isAdminRoute && <NavBar />}
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </PageTransition>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
