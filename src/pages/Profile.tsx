import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";
import { User, Mail, Phone, Calendar, Heart, Settings, LogOut, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  
  // Mock user data
  const user = {
    name: "Arpit Shah",
    email: "arpit.shah@example.com",
    phone: "+61 400 000 000",
    memberSince: "Jan 2024",
    membershipId: "VJS-2024-0892",
    totalDonated: 1250,
  };

  const handleLogout = () => {
    localStorage.removeItem("isVitraagLoggedIn");
    navigate("/login");
  };

  const activities = [
    { title: "Mahavir Janm Kalyanak", date: "April 03", status: "Registered" },
    { title: "Monthly Samayik", date: "April 15", status: "Attending" },
    { title: "Dev Dravya Donation", date: "March 12", amount: "$500" },
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="Member Profile" 
        breadcrumb={[{ name: "Profile", to: "/profile" }]}
        image="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"
      />

      <section className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar / Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-50 text-center"
            >
              <div className="w-32 h-32 bg-brand-primary/5 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-cream relative">
                <User className="w-16 h-16 text-brand-primary" />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary italic font-serif ">{user.name}</h3>
              <p className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Active Member</p>
              
              <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                 <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">ID</p>
                    <p className="text-xs font-bold text-brand-primary">#0892</p>
                 </div>
                 <div className="text-center border-l border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Joined</p>
                    <p className="text-xs font-bold text-brand-primary">2024</p>
                 </div>
              </div>

              <div className="mt-10 space-y-4">
                 <button className="w-full flex items-center justify-between p-4 bg-cream rounded-2xl text-xs font-bold text-brand-primary hover:bg-brand-primary hover:text-white transition-all group">
                    <span className="flex items-center gap-3">
                       <Settings className="w-4 h-4" /> Account Settings
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                 </button>
                 <button 
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between p-4 bg-red-50 rounded-2xl text-xs font-bold text-red-600 hover:bg-red-600 hover:text-white transition-all group"
                 >
                    <span className="flex items-center gap-3">
                       <LogOut className="w-4 h-4" /> Logout
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                 </button>
              </div>
            </motion.div>

            <div className="bg-brand-primary rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
               <Heart className="w-10 h-10 text-brand-secondary mb-6" />
               <h4 className="text-xl font-bold mb-2 italic font-serif">Total Contributions</h4>
               <p className="text-4xl font-bold text-white mb-4">${user.totalDonated}</p>
               <p className="text-white/60 text-xs leading-relaxed">Thank you for your generous support towards the Sangh's mission of spreading Jainism values.</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Details */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-50"
            >
               <h4 className="text-xl font-bold text-brand-primary mb-8 italic font-serif underline decoration-brand-secondary/30 underline-offset-8">Personal Information</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Email Address
                     </label>
                     <p className="text-sm font-semibold text-slate-700">{user.email}</p>
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Phone className="w-3 h-3" /> Mobile Number
                     </label>
                     <p className="text-sm font-semibold text-slate-700">{user.phone}</p>
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> Member Since
                     </label>
                     <p className="text-sm font-semibold text-slate-700">{user.memberSince}</p>
                  </div>
               </div>
            </motion.div>

            {/* Activities */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-50"
            >
               <div className="flex items-center justify-between mb-8">
                  <h4 className="text-xl font-bold text-brand-primary italic font-serif">Recent Activity</h4>
                  <button className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest hover:underline">View All</button>
               </div>
               
               <div className="space-y-4">
                  {activities.map((act, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-cream rounded-2xl border border-brand-primary/5 hover:border-brand-secondary/30 transition-all group">
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-secondary shadow-sm">
                             <Calendar className="w-5 h-5" />
                          </div>
                          <div>
                             <h5 className="text-sm font-bold text-brand-primary mb-1">{act.title}</h5>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{act.date}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-white rounded-full text-[10px] font-bold text-brand-primary border border-slate-100 shadow-sm">
                             {act.status || act.amount}
                          </span>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>

            {/* Spiritual Progress - New Thematic Section */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-50"
            >
               <h4 className="text-xl font-bold text-brand-primary mb-8 italic font-serif">My Vows & Progress</h4>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: "Samayik", progress: 12, total: 30, color: "bg-brand-primary" },
                    { label: "Ayambil", progress: 4, total: 9, color: "bg-brand-secondary" },
                    { label: "Pathshala", progress: 18, total: 20, color: "bg-brand-accent" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4 p-6 bg-cream rounded-2xl">
                       <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">{item.label}</p>
                       <div className="h-2 bg-white rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.progress / item.total) * 100}%` }}
                            className={cn("h-full rounded-full", item.color)}
                          />
                       </div>
                       <p className="text-xs font-bold text-slate-500">{item.progress} / {item.total} completed</p>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
