
import { ArrowRight, Calendar, Users, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Digital Transformation Initiative",
      company: "Global Technology Company",
      duration: "18 months",
      teamSize: "45+ people",
      challenge: "The organization needed to modernize legacy systems and processes to remain competitive in a rapidly evolving market while maintaining operational continuity.",
      solution: "Led a comprehensive digital transformation strategy that included technology modernization, process optimization, and cultural change management.",
      results: [
        "Reduced operational costs by 35%",
        "Improved customer satisfaction scores by 40%",
        "Decreased time-to-market for new features by 50%",
        "Achieved 99.9% system uptime during transition"
      ],
      insights: "This project taught me the critical importance of change management and stakeholder communication in large-scale transformations. Success wasn't just about technology—it was about people."
    },
    {
      title: "Market Expansion Strategy",
      company: "Growing SaaS Company",
      duration: "12 months",
      teamSize: "25+ people",
      challenge: "A successful domestic company wanted to expand into international markets but lacked the framework, processes, and cultural understanding to do so effectively.",
      solution: "Developed and executed a comprehensive market entry strategy including market research, localization, partnership development, and team building.",
      results: [
        "Successfully launched in 3 new markets",
        "Generated $2.5M in international revenue",
        "Built local teams in key regions",
        "Established strategic partnerships with 8+ vendors"
      ],
      insights: "International expansion requires deep cultural sensitivity and local partnerships. The key was balancing global consistency with local adaptation."
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real challenges, strategic solutions, and measurable outcomes that demonstrate the impact of effective leadership.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{study.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-sm font-medium">{study.teamSize}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">{study.challenge}</p>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">The Solution</h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h4>
                    <ul className="space-y-3 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3">
                          <TrendingUp className="text-green-600 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Key Insights</h4>
                  <p className="text-gray-600 leading-relaxed italic">{study.insights}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Interested in learning more about these projects?</p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            <span>Let's Discuss</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
