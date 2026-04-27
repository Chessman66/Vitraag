import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";
import { BookOpen, Users, Heart, Star, Sparkles, Sun } from "lucide-react";

export default function Activities() {
  const activities = [
    { 
      title: "Pathshala", 
      desc: "Weekly religious classes for children aged 5-15, focusing on Jain stories, mantras, and ethical living.",
      icon: <BookOpen className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
    },
    { 
      title: "Samuh Samayik", 
      desc: "Community meditation sessions held once a month to practice equanimity and introspection.",
      icon: <Users className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop"
    },
    { 
      title: "Jeev Daya", 
      desc: "Animal welfare initiatives including bird feeding and supporting rescue shelters across the region.",
      icon: <Heart className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop"
    },
    { 
      title: "Snatra Puja", 
      desc: "A devotional ritual celebrating the birth and purity of the Tirthankaras through songs and rituals.",
      icon: <Sun className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop"
    },
    { 
      title: "Yoga & Wellness", 
      desc: "Physical and mental wellness classes integrating Jain principles of mindfulness and non-violence.",
      icon: <Sparkles className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop"
    },
    { 
      title: "Youth Group", 
      desc: "Engaging our youth through discussions, retreats, and social service projects.",
      icon: <Star className="w-8 h-8" />,
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="Our Activities" 
        breadcrumb={[{ name: "Activities", to: "/activities" }]}
        image="https://images.unsplash.com/photo-1544013511-fb06d15668b5?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px]">What we do</span>
            <h2 className="text-4xl md:text-7xl font-bold text-brand-primary italic font-serif">Community & Spirit</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Vitraag Sangh provides a platform for various religious, educational, and social activities that help in the holistic growth of our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {activities.map((act, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-50 group hover:-translate-y-4 transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                   <img src={act.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={act.title} />
                   <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
                   <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-secondary shadow-lg">
                      {act.icon}
                   </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold text-brand-primary mb-4 italic font-serif ">{act.title}</h3>
                   <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">{act.desc}</p>
                   <button className="text-[10px] font-bold text-brand-secondary uppercase tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all w-fit">
                      Read More <span>→</span>
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
