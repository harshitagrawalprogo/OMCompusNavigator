import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Camera, Building, Utensils, Dumbbell, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const mediaItems = [
  {
    id: 1,
    type: "image",
    category: "Campus",
    icon: Building,
    title: "Main Building",
    description: "The iconic administrative block",
    url: "https://th.bing.com/th/id/OIP.D6hJv5k_Nz7Yx9nQZMF0yQHaCe?w=333&h=116&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
  },
  {
    id: 2,
    type: "image",
    category: "Labs",
    icon: Camera,
    title: "Computer Labs",
    description: "State-of-the-art facilities",
    url: "data:image/webp;base64,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",
  },
  {
    id: 3,
    type: "image",
    category: "Library",
    icon: Building,
    title: "Central Library",
    description: "Knowledge hub with thousands of books",
    url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    type: "image",
    category: "Canteen",
    icon: Utensils,
    title: "Food Court",
    description: "Delicious meals for everyone",
    url: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    type: "image",
    category: "Sports",
    icon: Dumbbell,
    title: "Sports Complex",
    description: "World-class sports facilities",
    url: "https://images.unsplash.com/photo-1461896836934- voices-of-a-morning-sky?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    type: "image",
    category: "Campus",
    icon: Camera,
    title: "Green Gardens",
    description: "Beautiful landscaped gardens",
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop",
  },
];

const categories = ["All", "Campus", "Labs", "Library", "Canteen", "Sports"];

const MediaShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<
    (typeof mediaItems)[0] | null
  >(null);

  const filteredMedia =
    activeCategory === "All"
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
            Explore the vibrant life at MSRIT through our curated collection of
            images and videos
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
              variant={activeCategory === category ? "default" : "glass"}
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
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    {item.type === "video" ? (
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
