
import { TrendingUp, Shield, Rocket, Star } from "lucide-react";

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
    <section id="value" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Value I Bring</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizations partner with me to unlock their potential and achieve breakthrough results through strategic leadership and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {valueProps.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-lg">
                  <value.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Measurable Impact</h3>
            <p className="text-lg text-gray-600">Results that demonstrate the value of strategic leadership</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">[X]%</div>
              <p className="text-gray-600">Revenue Growth</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">[X]%</div>
              <p className="text-gray-600">Efficiency Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">[X]%</div>
              <p className="text-gray-600">Team Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">$[X]M</div>
              <p className="text-gray-600">Cost Savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
