import { motion } from "framer-motion";
import { 
  Palette, 
  Smartphone, 
  Package, 
  Layers, 
  PenTool, 
  BookOpen, 
  Video, 
  Camera, 
  Music 
} from "lucide-react";

const skills = [
  { icon: Palette, name: "UI/UX Design", description: "Creating intuitive user experiences" },
  { icon: Smartphone, name: "Web & Mobile Design", description: "Responsive digital interfaces" },
  { icon: Package, name: "Packaging Design", description: "Product visual identity" },
  { icon: Layers, name: "Prototyping", description: "Interactive mockups & flows" },
  { icon: PenTool, name: "Graphic Design", description: "Visual communication" },
  { icon: BookOpen, name: "Catalogs & Price Lists", description: "Print & digital layouts" },
  { icon: Video, name: "Video Editing", description: "Motion graphics & editing" },
  { icon: Camera, name: "Photography", description: "Product & lifestyle shots" },
  { icon: Music, name: "Sound Editing", description: "Audio post-production" },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display uppercase tracking-widest text-sm">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            Core <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="glass-card p-6 group cursor-pointer hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
