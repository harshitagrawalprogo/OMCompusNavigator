import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Maximize2, Minimize2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VirtualTour = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section
      id="tour"
      className={`relative ${
        isFullscreen ? 'fixed inset-0 z-50 bg-background' : 'py-20 lg:py-32'
      }`}
    >
      {!isFullscreen && (
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card text-sm text-accent mb-4">
              <Globe className="w-4 h-4" />
              Immersive Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Explore MSRIT in <span className="gradient-text">360°</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Take a virtual walk through our campus with our immersive 360° tour experience
            </p>
          </motion.div>
        </div>
      )}

      {/* Tour Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`relative ${
          isFullscreen
            ? 'w-full h-full'
            : 'container mx-auto px-4'
        }`}
      >
        <div
          className={`relative rounded-3xl overflow-hidden shadow-neon ${
            isFullscreen ? 'w-full h-full rounded-none' : 'aspect-video'
          }`}
        >
          {/* Loading State */}
          {!isLoaded && (
            <div className="absolute inset-0 glass-card flex flex-col items-center justify-center z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary mb-4"
              />
              <p className="text-muted-foreground">Loading Virtual Tour...</p>
            </div>
          )}

          {/* 360 Tour Iframe */}
          <iframe
            src="https://www.easytourz.com/index.php/BT-EmabedTour/DEMO/87002a26d035a1f7"
            className="w-full h-full border-0"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
            title="MSRIT 360° Virtual Tour"
          />

          {/* Fullscreen Toggle */}
          <Button
            variant="glass"
            size="icon"
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 z-20"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* CTA Below Tour */}
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button variant="hero" size="lg" onClick={toggleFullscreen}>
              <Play className="w-5 h-5 mr-2" />
              Enter Fullscreen Tour
            </Button>
            <p className="text-sm text-muted-foreground">
              Use your mouse or touch to explore the campus in 360°
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default VirtualTour;
