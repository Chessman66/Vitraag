import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";

export default function About() {
  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="About Our Sangh" 
        breadcrumb={[{ name: "About Us", to: "/about" }]}
        image="https://images.unsplash.com/photo-1544013511-fb06d15668b5?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-3/5 space-y-10">
              <div className="space-y-4">
                <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Welcome to Vitraag</span>
                <h2 className="text-4xl md:text-7xl font-bold text-brand-primary italic font-serif leading-tight">Preserving Ancient Wisdom in Modern Sydney</h2>
                <div className="w-24 h-1 bg-brand-secondary rounded-full" />
              </div>
              
              <p className="text-brand-primary/80 leading-relaxed italic text-xl font-serif border-l-4 border-brand-secondary pl-8 py-2">
                "Where non-violence and compassion light the path for our community."
              </p>

              <div className="space-y-8 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Jainism, one of the world's most peaceful and ancient religions, remains a guiding light in the global constellation of spiritual paths. For over two millennia, the Jain community has upheld the values of truth, non-violence, and self-discipline, and Sydney is proud to be a vibrant part of this legacy.
                </p>
                <p>
                  Founded during the 2007 Paryushan, **Vitraag Jain Shwetambar Sangh** was born from a collective desire to create a sanctuary where devotees could congregate, practice, and celebrate our profound spiritual traditions. What started as small gatherings has blossomed into a thriving community that attracts members from across the continent.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 grid grid-cols-2 gap-6 relative">
               <div className="absolute -inset-10 bg-brand-primary/5 rounded-[5rem] -z-10 rotate-3" />
               <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="aspect-square bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl"
                  >
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop" className="w-full h-full object-cover" alt="Temple" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="aspect-[4/5] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl"
                  >
                    <img src="https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop" className="w-full h-full object-cover" alt="Spirituality" />
                  </motion.div>
               </div>
               <div className="space-y-6 pt-16">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="aspect-[4/5] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl"
                  >
                    <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop" className="w-full h-full object-cover" alt="Meditation" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="aspect-square bg-brand-primary rounded-[2.5rem] overflow-hidden shadow-2xl relative group"
                  >
                     <img src="https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Focus" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:bg-brand-secondary transition-colors">
                           <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                             ✨
                           </motion.div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-white px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-cream rounded-[2rem] flex items-center justify-center border border-brand-primary/10 shadow-xl">
               <span className="text-4xl">🕉️</span>
            </div>
            <h3 className="text-3xl font-bold text-brand-primary italic font-serif ">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              To be a beacon of spiritual growth for Jains in Australia, fostering a community where the profound teachings of Mahavira are practiced with devotion and translated into daily acts of compassion and mindfulness. We aim to bridge traditional values with the challenges of modern life.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-cream rounded-[2rem] flex items-center justify-center border border-brand-primary/10 shadow-xl">
               <span className="text-4xl">🙏</span>
            </div>
            <h3 className="text-3xl font-bold text-brand-primary italic font-serif ">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Our mission is to organize regular spiritual discourses, educational programs for children (Pathshala), and community welfare activities. We strive to maintain a sacred space that inspires collective worship and preserves the cultural heritage of the Shwetambar Jain tradition.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
