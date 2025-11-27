import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, Building, Utensils, Dumbbell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mediaItems = [
  {
    id: 1,
    type: 'image',
    category: 'Campus',
    icon: Building,
    title: 'Main Building',
    description: 'The iconic administrative block',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    type: 'image',
    category: 'Labs',
    icon: Camera,
    title: 'Computer Labs',
    description: 'State-of-the-art facilities',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    type: 'image',
    category: 'Library',
    icon: Building,
    title: 'Central Library',
    description: 'Knowledge hub with thousands of books',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    type: 'image',
    category: 'Canteen',
    icon: Utensils,
    title: 'Food Court',
    description: 'Delicious meals for everyone',
    url: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    type: 'image',
    category: 'Sports',
    icon: Dumbbell,
    title: 'Sports Complex',
    description: 'World-class sports facilities',
    url: 'https://images.unsplash.com/photo-1461896836934- voices-of-a-morning-sky?w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    type: 'image',
    category: 'Campus',
    icon: Camera,
    title: 'Green Gardens',
    description: 'Beautiful landscaped gardens',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop',
  },
];

const categories = ['All', 'Campus', 'Labs', 'Library', 'Canteen', 'Sports'];

const MediaShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState<typeof mediaItems[0] | null>(null);

  const filteredMedia = activeCategory === 'All'
    ? mediaItems
    : mediaItems.filter((item) => item.category === activeCategory);

  return (
    <section id="media" className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card text-sm text-primary mb-4">
            Campus Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience Our <span className="gradient-text">Campus</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore the vibrant life at MSRIT through our curated collection of images and videos
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'glass'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card-hover">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    {item.type === 'video' ? (
                      <Play className="w-6 h-6 text-primary ml-1" />
                    ) : (
                      <Camera className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedMedia.url}
              alt={selectedMedia.title}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MediaShowcase;
