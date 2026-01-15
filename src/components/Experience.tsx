import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Senior Manager",
    company: "Orientallabs Retail Services Pvt. Ltd.",
    location: "Ambala Cantt., Haryana",
    period: "April 2024 – Present",
    current: true,
    highlights: [
      "Leading UI/UX strategies and managing end-to-end digital design initiatives",
      "Ensuring brand consistency by directing graphic design workflows",
      "Improving user experience across all digital touchpoints",
    ],
  },
  {
    title: "Marketing Manager",
    company: "Orientallabs Retail Services Pvt. Ltd.",
    location: "Ambala Cantt., Haryana",
    period: "April 2022 – April 2024",
    current: false,
    highlights: [
      "Built visually compelling interfaces and creatives to drive brand growth",
      "Managed integrated marketing strategies across web, social, and digital platforms",
      "Collaborated with cross-functional teams to deliver impactful campaigns",
    ],
  },
  {
    title: "UI Designer",
    company: "Orientallabs Retail Services Pvt. Ltd.",
    location: "Kolkata, West Bengal",
    period: "July 2020 – April 2022",
    current: false,
    highlights: [
      "Designed clean, user-centric web and mobile interfaces for better usability",
      "Created catalogs/price lists and enhanced visual communication",
      "Collaborated with marketing teams to align design with business goals",
    ],
  },
];

const Experience = () => {
  return (
    <section id="work" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display uppercase tracking-widest text-sm">Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 md:-translate-x-1/2 -translate-x-1/2 md:translate-y-8" />
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="glass-card p-6 space-y-4 hover:border-primary/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-display font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
