import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Music, 
  Camera, 
  Lightbulb, 
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const clubs = [
  {
    id: 1,
    name: 'Coding Club',
    tagline: 'Code. Create. Innovate.',
    description: 'Join hackathons, coding competitions, and build amazing projects with fellow developers.',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
    bgAccent: 'bg-cyan-500/10',
  },
  {
    id: 2,
    name: 'Design Club',
    tagline: 'Design the Future.',
    description: 'Explore UI/UX, graphic design, and visual storytelling with creative minds.',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    bgAccent: 'bg-pink-500/10',
  },
  {
    id: 3,
    name: 'Music Club',
    tagline: 'Feel the Rhythm.',
    description: 'From classical to rock, express yourself through music and perform on stage.',
    icon: Music,
    color: 'from-violet-500 to-purple-600',
    bgAccent: 'bg-violet-500/10',
  },
  {
    id: 4,
    name: 'Photography Club',
    tagline: 'Capture the Moment.',
    description: 'Learn photography, photo editing, and showcase your best shots at exhibitions.',
    icon: Camera,
    color: 'from-amber-500 to-orange-600',
    bgAccent: 'bg-amber-500/10',
  },
  {
    id: 5,
    name: 'Innovation Club',
    tagline: 'Ideas that Matter.',
    description: 'Turn your ideas into reality through entrepreneurship and startup incubation.',
    icon: Lightbulb,
    color: 'from-emerald-500 to-teal-600',
    bgAccent: 'bg-emerald-500/10',
  },
  {
    id: 6,
    name: 'Social Club',
    tagline: 'Connect. Impact. Change.',
    description: 'Make a difference through community service and social awareness campaigns.',
    icon: Users,
    color: 'from-red-500 to-rose-600',
    bgAccent: 'bg-red-500/10',
  },
];

const ClubsSection = () => {
  return (
    <section id="clubs" className="py-20 lg:py-32 section-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card text-sm text-accent mb-4">
            <Sparkles className="w-4 h-4" />
            Student Life
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Clubs of MSRIT – <span className="gradient-text">Explore Your Passion</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover vibrant communities where you can learn, grow, and create lifelong memories
          </p>
        </motion.div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`glass-card-hover h-full p-6 relative overflow-hidden`}>
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${club.bgAccent} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${club.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <club.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {club.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">{club.tagline}</p>
                  <p className="text-muted-foreground mb-5 line-clamp-2">
                    {club.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:bg-transparent"
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            Explore All Clubs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClubsSection;
