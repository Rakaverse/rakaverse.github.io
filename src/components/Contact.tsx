import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display uppercase tracking-widest text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:smile811raka@gmail.com" className="font-medium hover:text-primary transition-colors">
                    smile811raka@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+918250109690" className="font-medium hover:text-primary transition-colors">
                    +91 82501 09690
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a href="https://rakaverse.com" target="_blank" rel="noopener" className="font-medium hover:text-primary transition-colors">
                    rakaverse.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Ambala Cantt., Haryana, India</p>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 flex flex-col justify-center items-center text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Send className="w-10 h-10 text-primary" />
              </div>

              <h3 className="font-display font-bold text-2xl">Ready to Start?</h3>
              <p className="text-muted-foreground">
                Drop me a message and let's discuss how we can work together to bring your ideas to life.
              </p>
              <form action="https://send.pageclip.co/R0uQFRDK2qcHpx1GSB8aGUNvPw4eRwoV/Contact-Form" className="pageclip-form flex flex-col gap-4 w-full" method="post">
                <input type="email" name="email" value="roscoe@example.com" className="w-full bg-transparent border border-primary/20 rounded-xl p-4 h-12 text-white/50" />
                <input type="text" name="subject" value="A contact subject" className="w-full bg-transparent border border-primary/20 rounded-xl p-4 h-12 text-white/50" />
                <button type="submit" className="bg-button inline-flex items-center justify-center gap-2 whitespace-nowrap font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 hover:-translate-y-0.5 h-14 rounded-xl px-10 text-base w-full">
                  <Mail className="w-5 h-5" /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
