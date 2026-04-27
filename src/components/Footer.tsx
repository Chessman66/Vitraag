import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1116] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
             <Link to="/" className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight leading-none text-white">
                vitraag
              </span>
              <span className="text-xs uppercase tracking-widest font-medium text-white/60">
                Jain Shwetambar Sangh
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Promoting the path of non-violence, truth, and spiritual growth through community events and religious practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-secondary">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link to="/activities" className="hover:text-brand-secondary transition-colors">Activities</Link></li>
              <li><Link to="/events" className="hover:text-brand-secondary transition-colors">Events</Link></li>
              <li><Link to="/donations" className="hover:text-brand-secondary transition-colors">Donations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-secondary">Connect</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
                <span>Arpit Shah 132 Gilba Road, Sydney, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
                <span>+61 1300 456 999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                <span>contact@vitraag.org.au</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-secondary">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Vitraag Jain Shwetambar Sangh Inc., Sydney Australia</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
