
import { TrendingUp, Shield, Rocket, Star, River } from "lucide-react";

const Value = () => {
  const valueProps = [
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description: "I bring a proven track record of identifying opportunities, developing comprehensive strategies, and executing plans that drive sustainable growth and competitive advantage."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "My approach balances innovation with prudent risk management, ensuring organizations can pursue ambitious goals while protecting against potential pitfalls."
    },
    {
      icon: Rocket,
      title: "Operational Excellence",
      description: "I excel at optimizing processes, implementing best practices, and creating systems that scale efficiently while maintaining quality and team satisfaction."
    },
    {
      icon: Star,
      title: "Culture Development",
      description: "I specialize in building high-performance cultures where talent thrives, collaboration flourishes, and teams consistently exceed expectations."
    }
  ];

  return (
    <section id="value" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <River className="absolute top-20 left-1/4 text-forest-dark" size={44} />
        <River className="absolute bottom-40 right-1/3 text-moss" size={40} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">Value I Bring</h2>
          <p className="text-xl text-forest-medium max-w-3xl mx-auto">
            Organizations partner with me to unlock their potential and achieve breakthrough results through strategic leadership and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {valueProps.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage/20 hover:border-sage/40 group"
            >
              <div className="flex items-start space-x-4">
                <div className="nature-accent p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-dark mb-3">{value.title}</h3>
                  <p className="text-forest-medium leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-sage/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-forest-dark mb-4">Measurable Impact</h3>
            <p className="text-lg text-forest-medium">Results that demonstrate the value of strategic leadership</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-moss mb-2">[X]%</div>
              <p className="text-forest-medium">Revenue Growth</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest-medium mb-2">[X]%</div>
              <p className="text-forest-medium">Efficiency Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sage mb-2">[X]%</div>
              <p className="text-forest-medium">Team Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cedar mb-2">$[X]M</div>
              <p className="text-forest-medium">Cost Savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
