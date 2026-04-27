import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";

export default function About() {
  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="About Us" 
        breadcrumb={[{ name: "About Us", to: "/about" }]}
      />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs">Welcome</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary leading-tight">Experience Vitraag at Jain Shwetambar Sangh</h2>
              <p className="text-slate-600 leading-relaxed italic text-lg">Vitraag Jain Shwetambar Sangh Inc., Sydney Australia</p>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  If India is a constellation of several religions, Jainism is the brightest stars amongst it. For the last two and a half millennium years, our Jain brothers and sisters have always been held the flag of Jain Shravan very high wherever they are in the world, and Sydney is not an exception. In spite of the din and bustle of Sydney, they managed to take out time to perform Pratikraman during Paryushan.
                </p>
                <p>
                  During the 2007 Paryushan, We decided to form an organization where all Jains can congregate and practice this wonderful religion. Since its inception, Vitraag has grown by loops and bounds organizing various religious activities and attracting members all along.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop" className="w-full h-full object-cover" />
                  </div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-lg relative">
                     <img src="https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-brand-primary/40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-xl">
                           <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                             ▶
                           </motion.div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white px-4 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center border border-brand-primary/10 shadow-sm">
               <span className="text-3xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-primary uppercase tracking-widest">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              The increasing enthusiasm and involvement of participants from our biannual Shashtra Pooja & monthly Samuh Samayik led us to organize our first mega event - a discourse by Munishree Jinchandraji (Bandhu Triputi). Soon after, Vitraag started the e-bulletin 'Vitraagvani', arranged group Ayambil Tap & Samuh Brathna which attracted devotees all across Sydney.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center border border-brand-primary/10 shadow-sm">
               <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-primary uppercase tracking-widest">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              It was decided to conduct Mahavir Janma Vanchan Mahotsav by displaying all the dreams (14 Swapnas) that occurred to Trishla Mata - the mother of Lord Mahavir. The function became memorable for its huge attendance, cultural programs and Swami Vatsalya - a first of its kind in Sydney.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
