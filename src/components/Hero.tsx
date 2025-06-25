
import { ArrowDown } from "lucide-react";
import { TreePine, Mountain } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=3648&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-15">
        <Mountain className="absolute bottom-40 left-1/4 text-emerald-light animate-float" size={40} style={{
        animationDelay: '4s'
      }} />
        <TreePine className="absolute bottom-60 right-1/3 text-emerald-medium" size={24} style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Hello, I'm
            <span className="block bg-gradient-to-r from-emerald-medium to-emerald-light bg-clip-text text-yellow-300">Chad Mortensen</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-center text-slate-100 md:text-2xl">
            I'm a product design leader with 25+ years of experience turning complex problems into meaningful outcomes — by guiding teams, shaping culture, and building thoughtful, scalable design solutions across eCommerce, health tech, and omnichannel platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={scrollToAbout} className="px-8 py-3 bg-forest-dark text-white rounded-lg hover:bg-forest-medium transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn About Me
            </button>
            <button onClick={() => document.querySelector("#case-studies")?.scrollIntoView({
            behavior: "smooth"
          })} className="px-8 py-3 border-2 border-emerald-medium text-white rounded-lg hover:bg-emerald-medium hover:text-forest-dark transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View My Work
            </button>
          </div>
        </div>
        
        <button onClick={scrollToAbout} className="animate-bounce text-cream hover:text-emerald-light transition-colors duration-200">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
