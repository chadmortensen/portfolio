
import { Shield, TrendingUp, Users, Award, Mountain } from "lucide-react";

const Leadership = () => {
  const principles = [
    {
      icon: Shield,
      title: "Transparency builds trust",
      description: "I lead with honesty and clarity — sharing context, being direct, and creating space for open conversations. Trust starts with being someone your team can count on."
    },
    {
      icon: TrendingUp,
      title: "Celebrate progress, not just outcomes",
      description: "Design is demanding — it's easy to skip the moments that matter. I make time to recognize great work, reflect on what we've learned, and keep morale high."
    },
    {
      icon: Users,
      title: "Diverse perspectives make better products",
      description: "I believe the best teams reflect a range of backgrounds and experiences. Diversity makes our work stronger, more inclusive, and more relevant."
    },
    {
      icon: Award,
      title: "Craft matters — and so does accountability",
      description: "I set a high bar for quality, while supporting accountability and growth. Our work should be effective, thoughtful — and something we're proud to stand behind."
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-mist relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <Mountain className="absolute top-10 right-1/4 text-forest-dark" size={56} />
        <Mountain className="absolute bottom-20 left-1/3 text-moss" size={48} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">My Leadership Style</h2>
          <p className="text-xl text-forest-medium max-w-3xl mx-auto">
            Leading design teams is about more than setting direction — it's about creating an environment where people can thrive, grow, and do their best work. Here's what I believe makes that possible:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white transition-all duration-300 shadow-lg border border-sage/20"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-sage/30 p-3 rounded-lg">
                  <principle.icon className="text-forest-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-dark mb-3">{principle.title}</h3>
                  <p className="text-forest-medium leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
