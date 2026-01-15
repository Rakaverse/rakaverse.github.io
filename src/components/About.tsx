import { motion } from "framer-motion";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import work1 from "@/assets/img-work1.png";
import work2 from "@/assets/img-work2.png";
import work3 from "@/assets/img-work3.png";
import work4 from "@/assets/img-work4.png";
import { useRef } from "react";

const About = () => {

  const splideRef = useRef(null);

  // Fix: Access the internal 'splide' instance
  const nextSlide = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('>');
    }
  };

  const prevSlide = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('<');
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <span className="text-primary font-display uppercase tracking-widest text-sm">About Me</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Designing the <span className="text-gradient">Future</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Creative and detail-oriented <span className="text-foreground font-medium">Senior Manager</span> with 5+ years of experience
            in UI/UX design, marketing strategy, and brand communication. Skilled in building high-impact
            digital experiences, leading design teams, and managing end-to-end creative projects.
            <br />Strong blend of <span className="text-primary">design thinking</span>, <span className="text-accent">visual storytelling</span>,
            and technical expertise.
          </p>

          <Splide aria-label="My Favorite Images"
            className="text-primary text-center"
            ref={splideRef}
            hasTrack={false}
            options={{
              type: 'loop',
              arrows: false,
              pagination: false,
              rewind: true,
              gap: '1rem',
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              perPage: 4,
              breakpoints: {
                640: { perPage: 1 },
                768: { perPage: 2 },
              }
            }}>
            <SplideTrack>
              <SplideSlide>
                <img src={work1} alt="Image 1" className="mx-auto" />
                <h4 className="mt-2 font-bold text-center">Brand Website</h4>
              </SplideSlide>
              <SplideSlide>
                <img src={work2} alt="Image 2" className="mx-auto" />
                <h4 className="mt-2 font-bold text-center">Logo Design</h4>
              </SplideSlide>
              <SplideSlide>
                <img src={work3} alt="Image 2" className="mx-auto" />
                <h4 className="mt-2 font-bold text-center">UI Design</h4>
              </SplideSlide>
              <SplideSlide>
                <img src={work4} alt="Image 2" className="mx-auto" />
                <h4 className="mt-2 font-bold text-center">Product Catalog</h4>
              </SplideSlide>
            </SplideTrack>

            <div className="flex justify-center relative lg:absolute max-w-none lg:w-[calc(100%+100px)] lg:top-[100px] lg:left-[-50px] lg:justify-between items-center gap-4 mt-8 lg:mt-0 lg:-translate-y-1/2">
              <button
                onClick={prevSlide}
                className="bg-primary/10 hover:bg-primary/20 text-primary rounded-2xl p-3 transition-all active:scale-95 flex items-center justify-center"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="bg-primary/10 hover:bg-primary/20 text-primary rounded-2xl p-3 transition-all active:scale-95 flex items-center justify-center"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </Splide>
          {/* Stats Grid */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center gap-6 lg:pt-8"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
