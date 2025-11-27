import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Building2, 
  Utensils, 
  FlaskConical, 
  Trophy, 
  Mic2, 
  Users, 
  MapPin,
  ExternalLink,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    id: 1,
    name: 'Central Library',
    description: 'Extensive collection of books, journals, and digital resources',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    mapUrl: 'https://www.google.com/maps/search/MSRIT+Library+Bangalore',
    suggested: true,
  },
  {
    id: 2,
    name: 'All Departments',
    description: 'CSE, ECE, ISE, ME, Civil and more branches',
    icon: Building2,
    color: 'from-violet-500 to-purple-500',
    mapUrl: 'https://www.google.com/maps/search/MSRIT+Engineering+Departments+Bangalore',
    suggested: true,
  },
  {
    id: 3,
    name: 'Food Courts',
    description: 'Multiple canteens serving diverse cuisines',
    icon: Utensils,
    color: 'from-orange-500 to-amber-500',
    mapUrl: 'https://www.google.com/maps/search/MSRIT+Canteen+Bangalore',
    suggested: true,
  },
  {
    id: 4,
    name: 'Research Labs',
    description: 'Advanced laboratories for practical learning',
    icon: FlaskConical,
    color: 'from-emerald-500 to-teal-500',
    mapUrl: 'https://www.google.com/maps/search/MSRIT+Labs+Bangalore',
    suggested: false,
  },
  {
    id: 5,
    name: 'Sports Complex',
    description: 'Cricket, basketball, football, and indoor games',
    icon: Trophy,
    color: 'from-red-500 to-rose-500',
    mapUrl: 'https://www.google.com/maps/search/MSRIT+Sports+Ground+Bangalore',
    suggested: false,
  },
  {
    id: 6,
    name: 'Auditorium',
    description: 'State-of-the-art venue for events and seminars',
    icon: Mic2,
    color: 'from-pink-500 to-fuchsia-500',
    mapUrl: 'https://www.google.com/maps/search/MSRIT+Auditorium+Bangalore',
    suggested: false,
  },
  {
    id: 7,
    name: 'Admin Block',
    description: 'Administrative offices and student services',
    icon: Users,
    color: 'from-indigo-500 to-blue-500',
    mapUrl: 'https://www.google.com/maps/search/MSRIT+Admin+Block+Bangalore',
    suggested: false,
  },
];

const NavigationSection = () => {
  const suggestedPlaces = locations.filter((loc) => loc.suggested);

  return (
    <section id="navigation" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card text-sm text-primary mb-4">
            <MapPin className="w-4 h-4" />
            Smart Navigation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Navigate the Campus <span className="gradient-text">Effortlessly</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find your way around MSRIT with our interactive location cards. Click to open in Google Maps.
          </p>
        </motion.div>

        {/* Suggested Places */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-semibold">Most Suggested Places</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {suggestedPlaces.map((location, index) => (
              <motion.a
                key={location.id}
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card-hover p-5 flex items-center gap-4 group gradient-border"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${location.color} flex items-center justify-center shrink-0 shadow-lg`}>
                  <location.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {location.name}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-1">{location.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* All Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.a
              key={location.id}
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card-hover p-6 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${location.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                <location.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {location.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {location.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <MapPin className="w-4 h-4" />
                Open in Maps
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;
