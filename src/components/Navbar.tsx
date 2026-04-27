import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { cn } from "@/src/lib/utils";

const NavLink = ({ to, children, dropdownItems }: { to: string; children: React.ReactNode; dropdownItems?: { name: string; to: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div 
      className="relative group"
      onMouseEnter={() => dropdownItems && setIsOpen(true)}
      onMouseLeave={() => dropdownItems && setIsOpen(false)}
    >
      <Link
        to={to}
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
          isActive ? "text-brand-primary" : "text-slate-600 hover:text-brand-primary"
        )}
      >
        {children}
        {dropdownItems && <ChevronDown className="w-4 h-4" />}
      </Link>
      
      {dropdownItems && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 w-48 py-2 mt-0 bg-white shadow-xl rounded-lg border border-slate-100 z-50 overflow-hidden"
            >
              {dropdownItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 text-xs text-slate-700 hover:bg-cream hover:text-brand-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className={cn(
                "text-2xl font-bold tracking-tight leading-none",
                isScrolled ? "text-brand-primary" : "text-white"
              )}>
                vitraag
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-widest font-medium opacity-80",
                isScrolled ? "text-slate-600" : "text-white"
              )}>
                Jain Shwetambar Sangh
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink 
              to="/about" 
              dropdownItems={[
                { name: "About Sangh", to: "/about" },
                { name: "Management Committee", to: "/management" },
                { name: "Subcommittee Members", to: "/subcommittee" },
                { name: "Photo Gallery", to: "/gallery" }
              ]}
            >
              About Us
            </NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/donations"
              className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
            {localStorage.getItem("isVitraagLoggedIn") === "true" ? (
              <Link 
                to="/profile"
                className={cn(
                  "p-2 rounded-full border transition-all flex items-center gap-2 px-3",
                  isScrolled ? "border-slate-200 text-slate-600 hover:bg-cream" : "border-white/20 text-white hover:bg-white/10"
                )}
              >
                <div className="w-6 h-6 rounded-full bg-brand-secondary flex items-center justify-center text-[10px] text-white font-bold">AS</div>
                <span className="text-xs font-bold">Profile</span>
              </Link>
            ) : (
              <Link 
                to="/login"
                className={cn(
                  "p-2 rounded-full border transition-all",
                  isScrolled ? "border-slate-200 text-slate-600 hover:bg-cream" : "border-white/20 text-white hover:bg-white/10"
                )}
              >
                <User className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-current"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 text-slate-600 font-bold hover:text-brand-primary">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 text-slate-600 font-bold hover:text-brand-primary">About Us</Link>
              <Link to="/activities" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 text-slate-600 font-bold hover:text-brand-primary">Activities</Link>
              <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 text-slate-600 font-bold hover:text-brand-primary">Events</Link>
              <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 text-slate-600 font-bold hover:text-brand-primary">Blogs</Link>
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 text-slate-600 font-bold hover:text-brand-primary">Gallery</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block p-3 text-slate-600 font-bold hover:text-brand-primary">Contact Us</Link>
              <div className="pt-4 flex flex-col gap-3">
                 <Link to="/donations" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-accent text-white p-4 rounded-2xl text-center font-bold">Donate Now</Link>
                 <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-cream text-brand-primary p-4 rounded-2xl text-center font-bold">Member Login</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
