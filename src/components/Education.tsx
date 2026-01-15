import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology – Chemical Engineering",
    institution: "National Institute of Technology, Durgapur",
    period: "July 2016 – May 2020",
    description: "Graduated with a strong foundation in analytical thinking and problem-solving, skills that translate directly into UX/UI design methodology.",
  },
  {
    degree: "Higher Secondary – Science (Mathematics)",
    institution: "Jawahar Navodaya Vidyalaya, Pandhana, Khandwa",
    period: "July 2007 – May 2015",
    description: "Developed a strong analytical mindset and attention to detail through rigorous STEM education.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display uppercase tracking-widest text-sm">Foundation</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-3 flex-1">
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
