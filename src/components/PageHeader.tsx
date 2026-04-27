import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { name: string; to: string }[];
  image?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb, image }: PageHeaderProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={image || "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop"} 
          className="w-full h-full object-cover brightness-50" 
          alt="Page Header Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1116] via-[#1A1116]/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight font-serif italic">
            {title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-white/80 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full w-fit mx-auto border border-white/10">
            <Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link>
            {breadcrumb?.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-1 h-1 bg-brand-secondary rounded-full" />
                <Link to={item.to} className={cn("hover:text-brand-secondary transition-colors", i === breadcrumb.length - 1 && "text-brand-secondary")}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-[-1px] left-0 right-0 h-24 bg-cream clip-path-slant" />
    </section>
  );
}
