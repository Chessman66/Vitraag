/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

// Pages
import Home from "@/src/pages/Home";
import About from "@/src/pages/About";
import Management from "@/src/pages/Management";
import Subcommittee from "@/src/pages/Subcommittee";
import Events from "@/src/pages/Events";
import Activities from "@/src/pages/Activities";
import Blogs from "@/src/pages/Blogs";
import Gallery from "@/src/pages/Gallery";
import Donations from "@/src/pages/Donations";
import Contact from "@/src/pages/Contact";
import Auth from "@/src/pages/Auth";
import Profile from "@/src/pages/Profile";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />
            <Route path="/subcommittee" element={<Subcommittee />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Auth type="login" />} />
            <Route path="/register" element={<Auth type="register" />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}



