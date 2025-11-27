import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        {/* 
          IMPORTANT: Download the Instagram Reel video first:
          1. Go to https://saveclip.app/en/instagram-reels-video-download
          2. Paste this URL: https://www.instagram.com/reel/DGQgcOCzhNo/
          3. Download the video
          4. Place it in /public/assets/ folder as 'hero-video.mp4'
          5. Then uncomment the video tag below
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm text-white border border-white/20">
            Explore M.S. Ramaiah Institute of Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white drop-shadow-lg">WELCOME TO</span>
          <br />
          <span className="text-white drop-shadow-lg">MSRIT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg max-w-3xl mx-auto mb-4"
        >
          Explore the campus, facilities, and student life through an
          interactive digital guide.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-white/90 drop-shadow-lg mb-10"
        >
          Navigate departments, labs, clubs, and events with ease.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#media">
              Start Exploring
              <ChevronDown className="w-5 h-5 ml-1 animate-bounce" />
            </a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="#tour">Virtual Tour</a>
          </Button>
        </motion.div>

        {/* Glass Card Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: "60+", label: "Years of Legacy" },
            { value: "15K+", label: "Students" },
            { value: "500+", label: "Faculty" },
            { value: "200+", label: "Acres of Campus" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
