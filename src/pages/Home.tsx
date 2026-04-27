import { motion } from "motion/react";
import { Play, Calendar, Users, Heart, ArrowRight, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const Hero = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop" 
        alt="Temple Background" 
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/40 via-transparent to-cream" />
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-serif text-white text-2xl md:text-4xl mb-6 leading-relaxed italic">
          "It is better to win over self than to<br className="hidden md:block" /> win over a million enemies"
        </h2>
        <div className="w-24 h-0.5 bg-brand-secondary mx-auto mb-8" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-secondary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-secondary/90 transition-all flex items-center gap-2 mx-auto"
        >
          Join with us
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const cards = [
    { title: "About Sangh", desc: "A brief history and vision of our community.", icon: <Users className="w-6 h-6 text-white" />, color: "bg-brand-primary" },
    { title: "Pratishtha", desc: "Learn about the sacred consecration ceremonies.", icon: <Heart className="w-6 h-6 text-brand-primary" />, color: "bg-white" },
    { title: "Pathshala", desc: "Spiritual education programs for all ages.", icon: <Calendar className="w-6 h-6 text-brand-primary" />, color: "bg-white" },
  ];

  return (
    <section className="py-24 px-4 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Welcome</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">Experience Vitraag at Jain Shwetambar Sangh</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Founded with a vision to unite the Jain community in Sydney, our Sangh focuses on spiritual growth, community service, and traditional values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-10 rounded-2xl shadow-xl flex flex-col items-center text-center group cursor-pointer transition-all hover:-translate-y-2",
                card.color === "bg-brand-primary" ? "text-white" : "text-brand-primary"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110",
                card.color === "bg-brand-primary" ? "bg-white/10" : "bg-cream border border-brand-primary"
              )}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className={cn("text-sm leading-relaxed mb-6", card.color === "bg-brand-primary" ? "text-white/70" : "text-slate-600")}>
                {card.desc}
              </p>
              <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramSection = () => {
  const programs = [
    { title: "The Yoga Program", desc: "A holistic approach to mental and physical well-being through Jain principles.", img: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop" },
    { title: "Sahaj Samadhi Meditation", desc: "A journey into silence and inner peace.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop" },
    { title: "Advanced Meditation Program", desc: "For those looking to deepen their spiritual practice.", img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-4 block">Programs</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">Meditation, Yoga, Retreats & More...</h2>
        </div>

        <div className="space-y-32">
          {programs.map((prog, i) => (
            <div key={i} className={cn("flex flex-col gap-12 items-center", i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row")}>
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary/10 rounded-full -z-10" />
              </div>
              <div className="w-full md:w-1/2 space-y-6 md:px-12">
                <div className="w-12 h-1 bg-brand-secondary mb-4" />
                <h3 className="text-2xl md:text-4xl font-bold text-brand-primary">{prog.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {prog.desc} our programs are designed to help you find balance in the modern world while staying true to the ancient wisdom of Jainism.
                </p>
                <button className="text-brand-secondary font-bold uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 group">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MemberSection = () => {
  const members = [
    { name: "Arpit Shah", role: "President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
    { name: "Yesh Chopra", role: "Vice President", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop" },
    { name: "Himesh Doshi", role: "Treasurer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" },
    { name: "Bhavin Shah", role: "Secretary", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-4 block">Team</span>
        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-16 italic font-serif">Sangh members's</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-6 relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold text-brand-primary mb-1">{member.name}</h4>
              <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DonationBanner = () => (
  <section className="py-20 px-4 bg-brand-accent">
    <div className="max-w-7xl mx-auto text-center text-white space-y-8">
      <h2 className="text-3xl md:text-5xl font-bold">How to make donations?</h2>
      <p className="text-white/80 max-w-2xl mx-auto">
        Your contributions help us maintain our spiritual centers and support community welfare programs.
      </p>
      <Link to="/donations" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-accent transition-all uppercase tracking-widest text-xs">
        View All Causes
      </Link>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      
      {/* Video/Featured Section - matching Image 18/20 */}
      <section className="relative h-[600px] w-full group cursor-pointer overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop" 
          className="w-full h-full object-cover brightness-[0.4] transition-transform duration-[10s] group-hover:scale-105" 
          alt="Featured Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-brand-primary/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
           <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center shadow-2xl mb-8 border-4 border-white/20"
           >
             <Play className="w-10 h-10 text-white fill-white ml-1" />
           </motion.div>
           
           <div className="max-w-3xl space-y-4">
             <span className="bg-brand-secondary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-white inline-block mb-4">
               Featured
             </span>
             <h3 className="text-3xl md:text-6xl font-bold text-white leading-tight italic font-serif">
               "We are a Hindu that believe in Jain"
             </h3>
           </div>
        </div>
      </section>

      <ProgramSection />
      
      {/* Upcoming Events Mock - matching Image 1/2 */}
      <section className="py-24 bg-cream px-4 relative">
         <div className="absolute top-0 left-0 w-full h-64 bg-white -z-10" />
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-brand-secondary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Mark your calendar</span>
               <h2 className="text-3xl md:text-5xl font-bold text-brand-primary italic font-serif underline decoration-brand-secondary/30 underline-offset-8">
                 Upcoming Events and Workshops
               </h2>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Mahavir Swami Bhagwan Janm Kalyanak", date: "Nov 15, 2024 @ 10:00 AM", desc: "A celebration of the birth kalyanak of Lord Mahavira with puja and spiritual discourses." },
                { title: "VJSS Volunteer Anumodna", date: "Dec 05, 2024 @ 06:00 PM", desc: "Expressing gratitude to our dedicated volunteers who support the Sangh's activities year-round." },
                { title: "Samuh Samayik & Pratikraman", date: "Dec 20, 2024 @ 07:00 AM", desc: "Join us for a collective spiritual practice focusing on self-reflection and purification." }
              ].map((event, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:border-brand-secondary/30 transition-all group"
                >
                   <div className="w-full md:w-2/5 aspect-[16/10] md:aspect-auto relative overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        alt={event.title}
                      />
                      <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
                   </div>
                   <div className="p-8 md:p-10 flex-grow flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-brand-secondary text-[10px] font-bold uppercase tracking-widest mb-4">
                         <div className="w-8 h-[1px] bg-brand-secondary" />
                         <span className="flex items-center gap-2">
                           <Clock className="w-3.5 h-3.5" />
                           {event.date}
                         </span>
                      </div>
                      <h4 className="text-2xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors italic font-serif">
                        {event.title}
                      </h4>
                      <p className="text-sm text-slate-500 mb-8 leading-relaxed line-clamp-2">
                        {event.desc}
                      </p>
                      <button className="w-fit bg-brand-primary text-white px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-secondary transition-all shadow-lg hover:shadow-brand-secondary/20 shadow-brand-primary/10 active:scale-95">
                        Join Now
                      </button>
                   </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Link to="/events" className="group inline-flex items-center gap-3 bg-white text-brand-primary hover:bg-brand-primary hover:text-white px-10 py-4 rounded-full text-[10px] font-bold transition-all uppercase tracking-[0.3em] shadow-xl">
                View All Events
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
         </div>
      </section>

      {/* Membership Registration Teaser - matching Image 11/20 background style */}
      <section className="relative py-32 px-4 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop" 
            alt="Sangh Background" 
            className="w-full h-full object-cover brightness-[0.2] transition-transform duration-[15s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="max-w-2xl space-y-8">
              <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-xs">Join our family</span>
              <h2 className="text-4xl md:text-7xl font-bold text-white italic font-serif leading-tight">
                Vitraag New Member Registration
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Become a part of our vibrant community. Stay connected, participate in events, and contribute to the Sangh's mission.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                 <Link to="/register" className="bg-brand-secondary text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs shadow-xl shadow-brand-secondary/20 hover:-translate-y-1 transition-all active:scale-95">
                    Register Now
                 </Link>
                 <Link to="/login" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-brand-primary transition-all active:scale-95">
                    Member Login
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <MemberSection />
      
      {/* Donation Progress Section - matching Image 1 */}
      <section className="py-32 bg-white px-4">
         <div className="max-w-5xl mx-auto text-center mb-20 space-y-4">
            <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.4em] block">Make a Difference</span>
            <h2 className="text-3xl md:text-6xl font-bold text-brand-primary italic font-serif">Donate Us To Help</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
         </div>
         
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
            {[
              { title: "Protecting Children", goal: 25000, raised: 18500, img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop" },
              { title: "Donate Food", goal: 15000, raised: 9200, img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop" },
              { title: "Fund Forest", goal: 50000, raised: 12400, img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop" }
            ].map((cause, i) => {
              const progress = (cause.raised / cause.goal) * 100;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-cream rounded-[2.5rem] overflow-hidden shadow-xl group border border-slate-100"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={cause.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={cause.title} />
                    <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-10">
                    <h4 className="text-2xl font-bold text-brand-primary mb-6 italic font-serif ">{cause.title}</h4>
                    <div className="w-full h-2 bg-slate-200 rounded-full mb-4 overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-brand-secondary shadow-[0_0_10px_rgba(243,101,35,0.4)]"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                      <span className="text-brand-secondary">Raised: ${cause.raised.toLocaleString()}</span>
                      <span className="text-brand-primary">Goal: ${cause.goal.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
         </div>
      </section>

      <DonationBanner />
    </div>
  );
}
