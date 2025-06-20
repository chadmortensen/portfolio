
import { Users, Lightbulb, Compass, Zap, Mountain } from "lucide-react";

const Leadership = () => {
  const philosophies = [
    {
      icon: Users,
      title: "People First",
      description: "Great results come from empowered, motivated people. I believe in investing in individuals, creating psychological safety, and fostering an environment where everyone can do their best work."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "In a rapidly changing world, the ability to learn and adapt is crucial. I promote a culture of curiosity, experimentation, and continuous improvement at both individual and organizational levels."
    },
    {
      icon: Compass,
      title: "Purpose-Driven Leadership",
      description: "Clear vision and strong values guide every decision. I believe in connecting daily work to meaningful outcomes and ensuring everyone understands how they contribute to the bigger picture."
    },
    {
      icon: Zap,
      title: "Decisive Action",
      description: "Great leaders make informed decisions quickly and execute with conviction. I balance thorough analysis with the need for speed, always keeping momentum while managing risk effectively."
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
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">Leadership Philosophy</h2>
          <p className="text-xl text-forest-medium max-w-3xl mx-auto">
            My approach to leadership is built on fundamental principles that drive sustainable success and meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white transition-all duration-300 shadow-lg border border-sage/20"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-sage/30 p-3 rounded-lg">
                  <philosophy.icon className="text-forest-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-dark mb-3">{philosophy.title}</h3>
                  <p className="text-forest-medium leading-relaxed">{philosophy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="forest-gradient rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">My Leadership Commitment</h3>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            "I commit to leading with authenticity, creating conditions for others to thrive, 
            and building organizations that deliver exceptional results while making a positive impact on the world. 
            Every decision I make is guided by these principles and a deep respect for the people I have the privilege to lead."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
