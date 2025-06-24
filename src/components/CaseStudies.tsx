
import { ArrowRight, Calendar, Users, TrendingUp, TreeDeciduous } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation Initiative",
      company: "Global Technology Company",
      duration: "18 months",
      teamSize: "45+ people",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      challenge: "The organization needed to modernize legacy systems and processes to remain competitive in a rapidly evolving market while maintaining operational continuity.",
      solution: "Led a comprehensive digital transformation strategy that included technology modernization, process optimization, and cultural change management.",
      results: [
        "Reduced operational costs by 35%",
        "Improved customer satisfaction scores by 40%",
        "Decreased time-to-market for new features by 50%",
        "Achieved 99.9% system uptime during transition"
      ],
      insights: "This project taught me the critical importance of change management and stakeholder communication in large-scale transformations. Success wasn't just about technology—it was about people.",
      route: "/case-study-1"
    },
    {
      id: 2,
      title: "Market Expansion Strategy",
      company: "Growing SaaS Company",
      duration: "12 months",
      teamSize: "25+ people",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      challenge: "A successful domestic company wanted to expand into international markets but lacked the framework, processes, and cultural understanding to do so effectively.",
      solution: "Developed and executed a comprehensive market entry strategy including market research, localization, partnership development, and team building.",
      results: [
        "Successfully launched in 3 new markets",
        "Generated $2.5M in international revenue",
        "Built local teams in key regions",
        "Established strategic partnerships with 8+ vendors"
      ],
      insights: "International expansion requires deep cultural sensitivity and local partnerships. The key was balancing global consistency with local adaptation.",
      route: "/case-study-2"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-mist relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <TreeDeciduous className="absolute top-10 left-10 text-forest-dark" size={52} />
        <TreeDeciduous className="absolute bottom-20 right-20 text-moss" size={48} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">Case Studies</h2>
          <p className="text-xl text-forest-medium max-w-3xl mx-auto">
            Real challenges, strategic solutions, and measurable outcomes that demonstrate the impact of effective leadership.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-sage/30">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-forest-dark mb-2">{study.title}</h3>
                      <p className="text-lg text-moss font-medium">{study.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
                      <div className="flex items-center space-x-2 text-forest-medium">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-forest-medium">
                        <Users size={16} />
                        <span className="text-sm font-medium">{study.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-xl font-bold text-forest-dark mb-4">The Challenge</h4>
                      <p className="text-forest-medium leading-relaxed mb-6">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-forest-dark mb-4">Results Achieved</h4>
                      <ul className="space-y-3">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-3">
                            <TrendingUp className="text-sage mt-1 flex-shrink-0" size={16} />
                            <span className="text-forest-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => navigate(study.route)}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-forest-dark text-white rounded-lg hover:bg-forest-medium transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
