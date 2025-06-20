
import { User, Heart, Target, TreeDeciduous } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-mist relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <TreeDeciduous className="absolute top-10 right-10 text-forest-dark" size={48} />
        <TreeDeciduous className="absolute bottom-20 left-20 text-moss" size={56} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">About Me</h2>
          <p className="text-xl text-forest-medium max-w-3xl mx-auto">
            Passionate about building teams, driving innovation, and creating lasting impact through strategic leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-sage/20 p-3 rounded-lg">
                <User className="text-forest-dark" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forest-dark mb-2">Background</h3>
                <p className="text-forest-medium leading-relaxed">With 25+ years in product design and over a decade in leadership, I’ve guided teams through growth and change at companies like Etsy and Walmart—shaping strategy, mentoring leaders, and aligning cross-functional teams. At Etsy, I led design for Fulfillment, Search, and Ads; at Walmart, I drove key eCommerce initiatives, including reimagining grocery pickup during the pandemic. Across every role, I’ve remained committed to crafting thoughtful, human-centered experiences and building teams empowered to do their best work.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-moss/20 p-3 rounded-lg">
                <Heart className="text-forest-dark" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forest-dark mb-2">Passion</h3>
                <p className="text-forest-medium leading-relaxed">
                  I'm driven by the opportunity to develop people, solve complex challenges, 
                  and create environments where innovation thrives. Nothing energizes me more 
                  than seeing teams exceed their own expectations and achieve breakthrough results.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-sage/30 p-3 rounded-lg">
                <Target className="text-forest-dark" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forest-dark mb-2">Mission</h3>
                <p className="text-forest-medium leading-relaxed">
                  To empower organizations and individuals to reach their full potential through 
                  authentic leadership, strategic thinking, and a relentless focus on sustainable growth 
                  and positive impact.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sage/20">
            <h3 className="text-2xl font-bold text-forest-dark mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-sage/20 pb-2">
                <span className="text-forest-medium">Years of Experience</span>
                <span className="font-semibold text-forest-dark">[X] years</span>
              </div>
              <div className="flex justify-between border-b border-sage/20 pb-2">
                <span className="text-forest-medium">Teams Led</span>
                <span className="font-semibold text-forest-dark">[X]+ people</span>
              </div>
              <div className="flex justify-between border-b border-sage/20 pb-2">
                <span className="text-forest-medium">Projects Delivered</span>
                <span className="font-semibold text-forest-dark">[X]+ projects</span>
              </div>
              <div className="flex justify-between">
                <span className="text-forest-medium">Favorite Quote</span>
                <span className="font-semibold text-forest-dark text-right">"[Your quote]"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
