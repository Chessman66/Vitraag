import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Subcommittee() {
  const members = [
    { name: "Harshit Gupta", role: "Member", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
    { name: "Dhruval Shah", role: "Member", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop" },
    { name: "Miten Shah", role: "Member", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" },
    { name: "Chirag Doshi", role: "Member", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
    { name: "Rajesh Rathod", role: "Member", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2548&auto=format&fit=crop" },
    { name: "Pavan Prajapati", role: "Member", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" },
    { name: "Rohan Gupta", role: "Member", img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2574&auto=format&fit=crop" },
    { name: "Manish Jain", role: "Member", img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=2574&auto=format&fit=crop" },
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="Subcommittee Members" 
        breadcrumb={[{ name: "Subcommittee", to: "/subcommittee" }]}
        image="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"
      />

      <section className="py-24 px-4 text-center">
         <div className="max-w-4xl mx-auto mb-20 space-y-6">
            <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Dedicated Team</span>
            <h2 className="text-3xl md:text-6xl font-bold text-brand-primary italic font-serif">Subcommittee members</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
            <p className="text-sm md:text-base text-slate-500 leading-relaxed">
              Our subcommittee members handle the day-to-day coordination and execution of the Sangh's diverse range of spiritual and community projects.
            </p>
         </div>

         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {members.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="bg-white p-3 rounded-[2.5rem] shadow-xl border border-slate-50 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="pb-6">
                   <p className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Member</p>
                   <h4 className="text-xl font-bold text-brand-primary italic font-serif ">{member.name}</h4>
                </div>
              </motion.div>
            ))}
         </div>

         <div className="flex items-center justify-center gap-8 text-xs font-bold uppercase tracking-widest">
            <button className="flex items-center gap-2 text-slate-400 hover:text-brand-primary transition-colors">
               <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <div className="flex gap-4">
               {[1, 2, 3].map(n => (
                 <button key={n} className={cn("w-8 h-8 rounded-full flex items-center justify-center", n === 1 ? "bg-brand-primary text-white" : "text-slate-400 hover:text-brand-primary")}>
                   {n}
                 </button>
               ))}
            </div>
            <button className="flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors">
               Next <ChevronRight className="w-4 h-4" />
            </button>
         </div>
      </section>
    </div>
  );
}
