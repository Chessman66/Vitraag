import { useState } from "react";
import PageHeader from "@/src/components/PageHeader";
import { Search, Calendar as CalendarIcon, List, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Events() {
  const [view, setView] = useState<"list" | "month" | "day">("list");
  
  const events = [
    { title: "Mahavir Swami Bhagwan Janm Kalyanak", date: "April 03, 2024", time: "8:00 AM - 5:00 PM", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop", desc: "A celebration of the birth kalyanak of Lord Mahavira with puja and spiritual discourses." },
    { title: "Shakrastva Abhishek & Samuh Ayambil", date: "May 08, 2024", time: "7:00 AM - 12:00 PM", img: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop", desc: "Participate in the auspicious Abhishek and community breakfast programs." },
    { title: "VJSS Volunteer Anumodna", date: "June 18, 2024", time: "5:00 PM - 8:00 PM", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop", desc: "Expressing gratitude to our dedicated volunteers who support the Sangh's activities." },
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="Upcoming Events" 
        breadcrumb={[{ name: "Events", to: "/events" }]}
        image="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"
      />

      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-2xl p-4 md:p-8 flex flex-col lg:flex-row gap-6 items-center justify-between border border-white/40 backdrop-blur-md">
           <div className="relative w-full lg:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search for events..." 
                className="w-full pl-14 pr-6 py-4 bg-cream rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white"
              />
           </div>
           
           <div className="flex bg-cream p-1.5 rounded-2xl w-full lg:w-auto">
             {(["list", "month", "day"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={cn(
                    "flex-1 lg:flex-none px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all",
                    view === v ? "bg-brand-secondary text-white shadow-xl" : "text-slate-400 hover:text-brand-primary"
                  )}
                >
                  {v}
                </button>
             ))}
           </div>
        </div>

        <div className="pt-16">
          {view === "list" ? (
             <div className="grid grid-cols-1 gap-10">
                {events.map((event, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-50 group hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="w-full lg:w-2/5 min-h-[300px] relative overflow-hidden">
                      <img src={event.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={event.title} />
                      <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-10 lg:p-16 flex-grow flex flex-col justify-center">
                       <div className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 mb-6">
                          <span className="w-10 h-[1px] bg-brand-secondary" />
                          {event.date}
                       </div>
                       <h3 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 group-hover:text-brand-secondary transition-colors italic font-serif leading-tight">
                        {event.title}
                       </h3>
                       <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold mb-8 bg-cream w-fit px-4 py-2 rounded-full">
                          <Clock className="w-4 h-4 text-brand-secondary" />
                          <span>{event.time}</span>
                       </div>
                       <p className="text-sm md:text-base text-slate-500 mb-10 leading-relaxed max-w-xl">
                          {event.desc} Join us with your family and friends for this spiritually uplifting experience.
                       </p>
                       <button className="w-fit bg-brand-primary text-white px-10 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg hover:bg-brand-secondary hover:shadow-brand-secondary/20 transition-all active:scale-95">
                          View Details
                       </button>
                    </div>
                  </motion.div>
                ))}
             </div>
          ) : view === "month" ? (
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-50 overflow-x-auto">
              <div className="flex items-center justify-between mb-8 min-w-[600px]">
                 <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-cream rounded-full transition-colors"><ChevronLeft /></button>
                    <button className="bg-brand-accent text-white px-4 py-2 rounded-lg text-xs font-bold">Today</button>
                    <button className="p-2 hover:bg-cream rounded-full transition-colors"><ChevronRight /></button>
                    <span className="text-xl font-bold text-brand-primary ml-4">April 2024</span>
                 </div>
              </div>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-100">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                      <th key={d} className="pb-4 text-xs font-bold uppercase text-slate-400 tracking-widest text-left px-4">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, r) => (
                    <tr key={r} className="border-b border-slate-50 last:border-0">
                      {[...Array(7)].map((_, c) => {
                        const day = r * 7 + c + 1;
                        const isToday = day === 3;
                        return (
                          <td key={c} className={cn("h-32 p-4 align-top border-r border-slate-50 last:border-0 hover:bg-cream/50 transition-colors", isToday && "bg-cream/30")}>
                            <span className={cn("inline-block w-8 h-8 leading-8 text-center rounded-full text-xs font-bold", isToday ? "bg-brand-secondary text-white" : "text-slate-400")}>
                              {day > 31 ? day - 31 : day}
                            </span>
                            {day === 3 && <div className="mt-2 text-[10px] bg-brand-primary/10 text-brand-primary p-2 rounded-lg leading-tight font-medium">Mahavir Janm Kalyanak</div>}
                            {day === 10 && <div className="mt-2 text-[10px] bg-brand-accent/10 text-brand-accent p-2 rounded-lg leading-tight font-medium">Samayik</div>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-slate-50">
               <CalendarIcon className="w-16 h-16 text-slate-200 mx-auto mb-6" />
               <h3 className="text-xl font-bold text-slate-400">Day View is currently under maintenance.</h3>
               <p className="text-slate-400 text-sm mt-2">Please check our Month or List view for full schedules.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
