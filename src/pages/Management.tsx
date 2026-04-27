import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";
import { User } from "lucide-react";

export default function Management() {
  const members = [
    { name: "Arpit Shah", role: "President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
    { name: "Yesh Chopra", role: "Vice President", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop" },
    { name: "Himesh Doshi", role: "Treasurer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" },
    { name: "Bhavin Shah", role: "Secretary", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="Management Committee" 
        breadcrumb={[{ name: "Committee", to: "/management" }]}
        image="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"
      />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-6 max-w-3xl mx-auto mb-20">
            <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Leadership</span>
            <h2 className="text-3xl md:text-6xl font-bold text-brand-primary italic font-serif">Current Management Committee</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
              The MSJS Management Committee includes a dedicated team of devotees who tirelessly invest their time and effort into upholding the values of Jainism.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {members.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-3 rounded-[2.5rem] shadow-xl group cursor-pointer border border-slate-50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                  <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s] group-hover:scale-105" alt={member.name} />
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="pb-8 px-4">
                  <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">{member.role}</span>
                  <h4 className="text-2xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors italic font-serif">{member.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
