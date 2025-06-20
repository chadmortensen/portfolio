
import { Users, Lightbulb, Compass, Zap } from "lucide-react";

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
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Philosophy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My approach to leadership is built on fundamental principles that drive sustainable success and meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <philosophy.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{philosophy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
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
