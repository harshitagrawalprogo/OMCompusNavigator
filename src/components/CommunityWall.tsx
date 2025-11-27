import { motion } from "framer-motion";
import { Award, Heart, MessageCircle, Share2 } from "lucide-react";

const wallItems = [
  {
    id: 1,
    type: "achievement",
    title: "Hackathon Winners",
    description: "Team Phoenix won Smart India Hackathon 2024",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&auto=format&fit=crop",
    likes: 234,
    comments: 45,
    size: "large",
  },
  {
    id: 2,
    type: "event",
    title: "Tech Fest Utsav",
    description: "Annual technical festival celebrations",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop",
    likes: 189,
    comments: 32,
    size: "medium",
  },
  {
    id: 3,
    type: "student",
    title: "Placement Star",
    description: "Highlights of recent student placements",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop",
    likes: 456,
    comments: 78,
    size: "small",
  },
  {
    id: 4,
    type: "event",
    title: "Cultural Night",
    description: "Campus cultural performances and activities",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&auto=format&fit=crop",
    likes: 312,
    comments: 56,
    size: "medium",
  },
  {
    id: 5,
    type: "alumni",
    title: "Alumni Meet 2024",
    description: "Alumni networking and interactions",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop",
    likes: 278,
    comments: 41,
    size: "small",
  },
  {
    id: 6,
    type: "achievement",
    title: "Research Excellence",
    description: "Publication in an international conference",
    image:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&auto=format&fit=crop",
    likes: 167,
    comments: 23,
    size: "large",
  },
  {
    id: 7,
    type: "sports",
    title: "VTU Champions",
    description: "Cricket team wins VTU tournament",
    image:
      "https://images.unsplash.com/photo-1461896836934-eca7d59e3a29?w=400&auto=format&fit=crop",
    likes: 389,
    comments: 67,
    size: "medium",
  },
  {
    id: 8,
    type: "event",
    title: "Startup Expo",
    description: "Student projects and products on display",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&auto=format&fit=crop",
    likes: 234,
    comments: 38,
    size: "small",
  },
];

const CommunityWall = () => {
  return (
    <section id="wall" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

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
            <Award className="w-4 h-4" />
            <span>Community</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Where the <span className="gradient-text">MSRITians</span> Are
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A snapshot of campus achievements, events, and student activities.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {wallItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group"
            >
              {/* Image */}
              <div className="glass-card-hover overflow-hidden">
                <div
                  className={`relative overflow-hidden ${
                    item.size === "large"
                      ? "aspect-[3/4]"
                      : item.size === "medium"
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass-card text-xs font-medium text-primary capitalize">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  {/* Social Actions */}
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{item.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{item.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-accent transition-colors ml-auto">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityWall;
