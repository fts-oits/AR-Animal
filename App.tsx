
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Home as HomeIcon, Info, Package, Image as ImageIcon, Users, Phone,
  ArrowRight, Mail, MapPin, PhoneCall, Facebook, Twitter, Linkedin, Instagram,
  ChevronRight, Search, Filter, Play, CheckCircle2, Award, Globe
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SearchModal from './components/SearchModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar onSearchClick={() => setIsSearchOpen(true)} />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
