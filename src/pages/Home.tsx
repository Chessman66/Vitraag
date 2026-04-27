import { motion } from "motion/react";
import { Play, Calendar, Users, Heart, ArrowRight, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
        src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop" 
        alt="Temple Background" 
        className="w-full h-full object-cover brightness-[0.3]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/40 via-transparent to-brand-primary/80" />
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        <span className="text-brand-secondary font-bold uppercase tracking-[0.5em] text-[10px]">Vitraag Jain Shwetambar Sangh</span>
        <h1 className="text-5xl md:text-8xl font-bold text-white italic font-serif leading-tight">
          Ahimsa Parmo Dharma
        </h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
        <p className="text-white/80 text-lg md:text-2xl font-light italic font-serif max-w-2xl mx-auto">
          "Where non-violence is the ultimate path to peace and liberation."
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <Link to="/about" className="bg-brand-secondary text-white px-10 py-5 rounded-[2rem] font-bold uppercase tracking-[0.3em] text-[10px] hover:shadow-2xl hover:shadow-brand-secondary/40 transition-all flex items-center gap-3 group active:scale-95 shadow-xl">
          Explore Our Heritage
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link to="/events" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-[2rem] font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-brand-primary transition-all active:scale-95">
          Upcoming Events
        </Link>
      </motion.div>
    </div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
       <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
       <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll Down</span>
    </motion.div>
  </section>
);

const Features = () => {
  const cards = [
    { title: "Sacred Heritage", desc: "A brief history and vision of our community, rooted in ancient Shwetambar traditions.", icon: "🕉️", color: "bg-brand-primary" },
    { title: "Pratishtha", desc: "Learn about the sacred consecration ceremonies and our beautiful temple architecture.", icon: "🏛️", color: "bg-white" },
    { title: "Pathshala", desc: "Spiritual education programs for children and adults to preserve our cultural legacy.", icon: "📚", color: "bg-white" },
  ];

  return (
    <section className="py-32 px-4 bg-cream relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.4em] block">Our Offerings</span>
          <h2 className="text-4xl md:text-7xl font-bold text-brand-primary italic font-serif">Experience Vitraag</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-light">
            Founded with a vision to unite the Jain community in Sydney, our Sangh focuses on spiritual growth, community service, and traditional values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-12 rounded-[3rem] shadow-2xl flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-4 border border-transparent",
                card.color === "bg-brand-primary" ? "bg-brand-primary text-white" : "bg-white text-brand-primary border-slate-50"
              )}
            >
              <div className={cn(
                "w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-xl transition-transform group-hover:rotate-3 group-hover:scale-110",
                card.color === "bg-brand-primary" ? "bg-white/10" : "bg-cream"
              )}>
                <span className="text-4xl">{card.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 italic font-serif">{card.title}</h3>
              <p className={cn("text-sm leading-relaxed mb-8 font-medium", card.color === "bg-brand-primary" ? "text-white/60" : "text-slate-500")}>
                {card.desc}
              </p>
              <Link to="/about" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramSection = () => {
  const programs = [
    { title: "The Yoga Program", desc: "A holistic approach to mental and physical well-being through Jain principles of mindfulness.", img: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop", icon: "🧘" },
    { title: "Sahaj Samadhi Meditation", desc: "A journey into silence and inner peace, following the path of the Tirthankaras.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop", icon: "✨" },
    { title: "Advanced Retreats", desc: "For those looking to deepen their spiritual practice in a tranquil environment.", img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop", icon: "🏔️" },
  ];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32 space-y-6">
          <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.4em] block">Our Programs</span>
          <h2 className="text-4xl md:text-7xl font-bold text-brand-primary italic font-serif">Meditation & More</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
        </div>

        <div className="space-y-48">
          {programs.map((prog, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn("flex flex-col gap-20 items-center", i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row")}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[16/10] overflow-hidden rounded-[3rem] shadow-2xl relative z-10">
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                  <div className="absolute inset-0 bg-brand-primary/5" />
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-secondary/5 rounded-full blur-2xl -z-10" />
                <div className={cn("absolute -bottom-10 w-64 h-64 bg-cream rounded-[3rem] -z-10", i % 2 === 1 ? "-left-10" : "-right-10")} />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-10 lg:px-12">
                <div className="flex items-center gap-6">
                   <span className="text-5xl">{prog.icon}</span>
                   <div className="w-12 h-[1px] bg-brand-secondary" />
                </div>
                <h3 className="text-3xl md:text-6xl font-bold text-brand-primary italic font-serif leading-tight">{prog.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-lg font-medium">
                  {prog.desc} our programs are designed to help you find balance in the modern world while staying true to the ancient wisdom of Jainism.
                </p>
                <div className="grid grid-cols-2 gap-8 py-4">
                   <div className="space-y-2">
                      <p className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest">Duration</p>
                      <p className="text-sm font-bold text-brand-primary italic font-serif">Variable</p>
                   </div>
                   <div className="space-y-2">
                      <p className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest">Location</p>
                      <p className="text-sm font-bold text-brand-primary italic font-serif">Sangh Centre</p>
                   </div>
                </div>
                <button className="bg-brand-primary text-white px-10 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-brand-secondary transition-all active:scale-95 group">
                   Schedule a Visit
                </button>
              </div>
            </motion.div>
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
    <section className="py-40 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="space-y-6 mb-24">
          <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.4em] block">Our Leadership</span>
          <h2 className="text-4xl md:text-7xl font-bold text-brand-primary italic font-serif">Management Committee</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-3 rounded-[3rem] shadow-2xl border border-slate-50 group hover:-translate-y-4 transition-all duration-500"
            >
              <div className="mb-8 relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-lg">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="pb-10 px-6">
                 <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">{member.role}</span>
                 <h4 className="text-2xl font-bold text-brand-primary italic font-serif ">{member.name}</h4>
              </div>
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
          src="https://images.unsplash.com/photo-1544013511-fb06d15668b5?q=80&w=2670&auto=format&fit=crop" 
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
            
            <div className="space-y-8">
              {[
                { title: "Mahavir Swami Bhagwan Janm Kalyanak", date: "Nov 15, 2024 @ 10:00 AM", desc: "A celebration of the birth kalyanak of Lord Mahavira with puja and spiritual discourses.", img: "https://images.unsplash.com/photo-1603566024194-e578453488f7?q=80&w=2670&auto=format&fit=crop" },
                { title: "VJSS Volunteer Anumodna", date: "Dec 05, 2024 @ 06:00 PM", desc: "Expressing gratitude to our dedicated volunteers who support the Sangh's activities year-round.", img: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop" },
                { title: "Samuh Samayik & Pratikraman", date: "Dec 20, 2024 @ 07:00 AM", desc: "Join us for a collective spiritual practice focusing on self-reflection and purification.", img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop" }
              ].map((event, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 hover:border-brand-secondary/30 transition-all group"
                >
                   <div className="w-full md:w-2/5 aspect-[16/10] md:aspect-auto relative overflow-hidden">
                      <img 
                        src={event.img} 
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

      {/* Gallery Section - Life at Sangh */}
      <section className="py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
              <div className="space-y-6">
                 <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Moments</span>
                 <h2 className="text-4xl md:text-6xl font-bold text-brand-primary italic font-serif">Life at the Sangh</h2>
                 <div className="w-24 h-1 bg-brand-secondary rounded-full" />
              </div>
              <Link to="/gallery" className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em] hover:text-brand-secondary transition-colors underline underline-offset-8">Explore All Photos</Link>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop", span: "row-span-2 col-span-2" },
                { img: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop", span: "col-span-1" },
                { img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop", span: "col-span-1" },
                { img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2636&auto=format&fit=crop", span: "col-span-2" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  className={cn("rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-pointer", item.span)}
                >
                   <img src={item.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Gallery" />
                   <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-3xl">✨</span>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
      {/* Donation Progress Section */}
      <section className="py-32 bg-white flex flex-col space-y-20">
         <div className="max-w-5xl mx-auto text-center space-y-4">
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
