import PageHeader from "@/src/components/PageHeader";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="Contact Us" 
        breadcrumb={[{ name: "Get In Touch", to: "/contact" }]}
        image="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"
      />

      <section className="py-24 px-4 -mt-24 relative z-20">
         <div className="max-w-7xl mx-auto">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
               {[
                 { icon: <Mail className="w-6 h-6" />, label: "Send Email", value: "Email Address", detail: "contact@vitraag.org.au" },
                 { icon: <Phone className="w-6 h-6" />, label: "Call Us Now", value: "Phone Number", detail: "+61 1300 456 999" },
                 { icon: <MapPin className="w-6 h-6" />, label: "Find Us Here", value: "Location", detail: "Sydney, NSW, Australia" },
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-12 rounded-[2.5rem] shadow-xl flex flex-col items-center text-center border border-slate-50 hover:-translate-y-2 transition-all duration-500"
                 >
                    <div className="w-20 h-20 rounded-3xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                       {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary mb-3">{item.label}</span>
                    <h4 className="text-2xl font-bold text-brand-primary mb-3 italic font-serif ">{item.value}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.detail}</p>
                 </motion.div>
               ))}
            </div>

            {/* Form & Map */}
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-50 flex flex-col lg:flex-row">
               <div className="w-full lg:w-3/5 p-10 lg:p-24 space-y-12">
                  <div className="space-y-6">
                    <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Support</span>
                    <h2 className="text-3xl md:text-6xl font-bold text-brand-primary italic font-serif leading-tight">Leave a message</h2>
                    <div className="w-20 h-1 bg-brand-secondary rounded-full" />
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">Have any questions about our activities or programs? Don't hesitate to reach out to us. We usually respond within 24 hours.</p>
                  </div>
                  
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-4">Full Name</label>
                           <input type="text" placeholder="e.g. John Doe" className="w-full px-8 py-5 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-4">Email Address</label>
                           <input type="email" placeholder="e.g. john@example.com" className="w-full px-8 py-5 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
                        </div>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-4">Subject</label>
                           <input type="text" placeholder="What is this about?" className="w-full px-8 py-5 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-4">Phone Number</label>
                           <input type="tel" placeholder="e.g. +61 400 000 000" className="w-full px-8 py-5 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-4">Message</label>
                        <textarea rows={6} placeholder="Write your message here..." className="w-full px-8 py-5 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white resize-none"></textarea>
                     </div>
                     
                     <button className="w-full bg-brand-primary text-white py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary hover:shadow-brand-secondary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:scale-95 group">
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send Message Now
                     </button>
                  </form>
               </div>
               <div className="w-full lg:w-2/5 min-h-[500px] bg-slate-100 relative">
                  <iframe 
                    title="Map Location"
                    className="absolute inset-0 w-full h-full grayscale opacity-60 contrast-125"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106037.94098906967!2d151.102717!3d-33.847355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017cf4a810f130!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1714242175000!5m2!1sen!2sin"
                    loading="lazy"
                  ></iframe>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
