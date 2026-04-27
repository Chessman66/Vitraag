import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";

export default function Auth({ type = "login" }: { type?: "login" | "register" }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop" 
          alt="Temple Background" 
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 to-[#1A1116]/80" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl px-4"
      >
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-white/10">
          <div className="text-center mb-12 space-y-4">
            <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-xs">Membership</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary font-serif italic">
              {type === "login" ? "Vitraag member login" : "Join the Community"}
            </h2>
            <p className="text-slate-500 text-sm">
              {type === "login" ? "Enter your registered mobile number & password to login" : "Fill in the details below to register as a new member"}
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate("/"); }}>
            {type === "register" && (
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
            )}
            
            <div className="flex gap-4">
              <div className="w-24 px-4 py-4 bg-cream rounded-2xl flex items-center justify-center text-sm font-bold text-brand-primary border border-transparent select-none">
                🇦🇺 +61
              </div>
              <input type="tel" placeholder="Mobile number" className="flex-grow px-6 py-4 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
            </div>
            
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                className="w-full px-6 py-4 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-primary transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {type === "login" && (
              <div className="text-right">
                <Link to="/forgot-password" size-12 className="text-xs font-bold text-brand-secondary hover:underline">Forgot Password?</Link>
              </div>
            )}

            <button className="w-full bg-brand-secondary text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-xl shadow-brand-secondary/30 hover:shadow-2xl hover:shadow-brand-secondary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group active:scale-95">
              {type === "login" ? "Login" : "Register Now"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center pt-4 border-t border-slate-100 mt-8">
              <p className="text-xs text-slate-500 font-medium">
                {type === "login" ? "Not a member yet? " : "Already have an account? "}
                <Link to={type === "login" ? "/register" : "/login"} className="text-brand-secondary font-bold hover:underline">
                  {type === "login" ? "Sign up" : "Login here"}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
