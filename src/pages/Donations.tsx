import PageHeader from "@/src/components/PageHeader";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Donations() {
  const causes = [
    { title: "Dev Dravya", raised: 52384, goal: 85000, img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop", desc: "For the maintenance and upliftment of our sacred temple and its holy artifacts." },
    { title: "VJSS Centre", raised: 82384, goal: 85000, img: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop", desc: "Supporting the building and operational costs of our community spiritual center." },
    { title: "Shubh Sarva Sadharan", raised: 52384, goal: 120000, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop", desc: "General funds used for various administrative and unforeseen community needs." },
    { title: "Pathshala / Kids Activities", raised: 52384, goal: 95000, img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop", desc: "Investing in the spiritual and cultural education of our younger generation." },
    { title: "Jeev Daya", raised: 42384, goal: 85000, img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop", desc: "Promoting non-violence by supporting bird/animal welfare and rescue programs." },
    { title: "Sadharmik Bhakti", raised: 62384, goal: 85000, img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop", desc: "Supporting and providing assistance to our fellow Sangh members in their time of need." },
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
       <PageHeader 
        title="Donations" 
        breadcrumb={[{ name: "Donations", to: "/donations" }]}
        image="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"
      />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Make a Donation</span>
            <h2 className="text-3xl md:text-6xl font-bold text-brand-primary italic font-serif">Donate Us To Help</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {causes.map((cause, i) => {
               const progress = (cause.raised / cause.goal) * 100;
               return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-50 group flex flex-col hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={cause.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={cause.title} />
                    <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors italic font-serif ">{cause.title}</h3>
                    <p className="text-sm text-slate-500 mb-10 flex-grow leading-relaxed">
                      {cause.desc}
                    </p>
                    
                    <div className="space-y-4">
                       <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-brand-secondary relative shadow-[0_0_15px_rgba(243,101,35,0.4)]"
                          />
                       </div>
                       <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                          <span className="text-brand-secondary">Raised: ${cause.raised.toLocaleString()}</span>
                          <span className="text-slate-400">Goal: ${cause.goal.toLocaleString()}</span>
                       </div>
                    </div>
                    
                    <button className="mt-10 w-full bg-brand-primary text-white hover:bg-brand-secondary py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/10 active:scale-95 group/btn">
                       <Heart className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                       Donate Now
                    </button>
                  </div>
                </motion.div>
               );
             })}
          </div>
        </div>
      </section>
    </div>
  );
}
