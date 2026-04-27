import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";
import { Clock, User as UserIcon, ArrowRight, Tag } from "lucide-react";

export default function Blogs() {
  const blogs = [
    {
      title: "The Essence of Navpad Oli",
      excerpt: "Understanding the spiritual significance of the nine paths of liberation in Jainism.",
      date: "Oct 12, 2024",
      author: "Pravin Shah",
      category: "Spiritual",
      img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"
    },
    {
      title: "Jainism and Modern Science",
      excerpt: "How ancient Jain concepts of atoms and multisidedness align with modern physics.",
      date: "Sep 28, 2024",
      author: "Dr. Ankit Mehta",
      category: "Philosophy",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop"
    },
    {
      title: "Practicing Ahimsa in Daily Life",
      excerpt: "Small steps towards a more compassionate and non-violent lifestyle in a busy city.",
      date: "Sep 15, 2024",
      author: "Meghna Doshi",
      category: "Lifestyle",
      img: "https://images.unsplash.com/photo-1544367567-002fcb03541f?q=80&w=2720&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
      <PageHeader 
        title="Vitraagvani Blogs" 
        breadcrumb={[{ name: "Blogs", to: "/blogs" }]}
        image="https://images.unsplash.com/photo-1544013511-fb06d15668b5?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <span className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Vitraagvani</span>
            <h2 className="text-4xl md:text-7xl font-bold text-brand-primary italic font-serif">Articles & Wisdom</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Featured Post */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-2 bg-white rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-50 group hover:shadow-brand-primary/10 transition-all duration-700"
            >
               <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto relative overflow-hidden">
                  <img src={blogs[0].img} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Featured" />
                  <div className="absolute top-10 left-10 bg-brand-secondary text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                     Featured Article
                  </div>
               </div>
               <div className="p-10 lg:p-20 flex-grow flex flex-col justify-center space-y-8">
                  <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                     <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {blogs[0].date}</span>
                     <span className="flex items-center gap-2"><UserIcon className="w-4 h-4" /> By {blogs[0].author}</span>
                  </div>
                  <h3 className="text-3xl md:text-6xl font-bold text-brand-primary italic font-serif leading-tight group-hover:text-brand-secondary transition-colors">
                     {blogs[0].title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-light">
                     {blogs[0].excerpt} Explore the deep roots of Shwetambar traditions through our latest Vitraagvani edition.
                  </p>
                  <button className="w-fit bg-brand-primary text-white px-12 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] shadow-xl hover:bg-brand-secondary transition-all active:scale-95 flex items-center gap-3">
                     Read Full Article <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </motion.div>

            {/* List Posts */}
            {blogs.slice(1).map((blog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-50 group flex flex-col sm:flex-row hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden">
                   <img src={blog.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={blog.title} />
                   <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 sm:p-12 flex-grow space-y-6">
                   <div className="flex items-center gap-4 text-[10px] font-bold text-brand-secondary uppercase tracking-[0.2em]">
                      <Tag className="w-4 h-4" /> {blog.category}
                   </div>
                   <h4 className="text-2xl font-bold text-brand-primary italic font-serif group-hover:text-brand-secondary transition-colors leading-tight">
                      {blog.title}
                   </h4>
                   <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 md:line-clamp-none">
                      {blog.excerpt}
                   </p>
                   <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{blog.date}</span>
                      <button className="text-brand-primary hover:text-brand-secondary transition-colors"><ArrowRight /></button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
