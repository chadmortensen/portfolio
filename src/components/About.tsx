
import { TreeDeciduous } from "lucide-react";

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

        <div className="space-y-12">
          {/* Background Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sage/20">
              <img 
                src="/placeholder.svg?height=200&width=300" 
                alt="Professional workspace with laptop" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-forest-dark mb-2">Background</h3>
              <p className="text-forest-medium leading-relaxed">I'm a product design leader with 25+ years of experience turning complex problems into meaningful outcomes — by guiding teams, shaping culture, and building thoughtful, scalable design solutions across eCommerce, health tech, and omnichannel platforms.</p>
            </div>
          </div>

          {/* Passion Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sage/20">
              <img 
                src="/placeholder.svg?height=200&width=300" 
                alt="Collaborative design process" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-forest-dark mb-2">Passion</h3>
              <p className="text-forest-medium leading-relaxed">
                I believe great design starts with empathy, scales with systems thinking, and succeeds through collaboration. Whether leading design at Brightside Health, Etsy, or Walmart, I focus on aligning teams around clear goals, supporting individual growth, and delivering thoughtful, high-impact experiences.
              </p>
            </div>
          </div>

          {/* Outside of Work Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sage/20">
              <img 
                src="/placeholder.svg?height=200&width=300" 
                alt="Rural landscape with mountains and trees" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-forest-dark mb-2">Outside of Work</h3>
              <p className="text-forest-medium leading-relaxed">
                I'm a dad of two, a fan of quiet weekends on our 20-acre rural property, and married to a pastry chef who runs a local cooking school. Food, friends, and meaningful conversations are my happy place.
                <br />
                Also, I have a framed picture of Yoda in a three-piece suit hanging in my office. Interpret that however you'd like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
