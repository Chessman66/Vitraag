import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";

export default function Gallery() {
  const photos = [
    { url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop", title: "Temple Prayer Hall", category: "Traditional" },
    { url: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop", title: "Monthly Samayik", category: "Meditation" },
    { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop", title: "Morning Yoga Session", category: "Activities" },
    { url: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop", title: "Cultural Program", category: "Events" },
    { url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop", title: "Pathshala Kids", category: "Educational" },
    { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop", title: "Youth Retreat", category: "Community" },
    { url: "https://images.unsplash.com/photo-1544013511-fb06d15668b5?q=80&w=2670&auto=format&fit=crop", title: "Temple Consecration", category: "Traditional" },
    { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop", title: "Community Service", category: "Jeev Daya" },
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="Sansthan Gallery" 
        breadcrumb={[{ name: "Gallery", to: "/gallery" }]}
        image="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"
      />

      <section className="py-32 px-4 mt-[-100px] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-4 rounded-[3rem] shadow-2xl mb-16 flex flex-wrap justify-center gap-4 border border-white/20 backdrop-blur-md">
             {["All", "Traditional", "Meditation", "Educational", "Events", "Community"].map((cat) => (
               <button key={cat} className="px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-cream hover:text-brand-primary transition-all active:scale-95">
                 {cat}
               </button>
             ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
            {photos.map((photo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="break-inside-avoid relative group rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-50 cursor-pointer"
              >
                 <img src={photo.url} className="w-full h-auto transition-transform duration-[2s] group-hover:scale-105" alt={photo.title} />
                 <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center text-white">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{photo.category}</span>
                    <h4 className="text-2xl font-bold italic font-serif leading-tight">{photo.title}</h4>
                    <div className="w-12 h-[1px] bg-white/40 my-6" />
                    <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all text-xl">+</button>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
