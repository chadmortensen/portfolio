
import { ArrowLeft, Calendar, Users, TrendingUp, Target, Lightbulb, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudy1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-mist">
      {/* Header */}
      <div className="bg-forest-dark text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center space-x-2 text-sage hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Transformation Initiative</h1>
          <p className="text-xl text-mist">Global Technology Company</p>
          
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>18 months</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>45+ people</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Executive Summary */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Executive Summary</h2>
          <p className="text-lg text-forest-medium leading-relaxed">
            Led a comprehensive digital transformation for a global technology company, modernizing legacy systems 
            while maintaining operational continuity. The initiative resulted in significant cost savings, improved 
            customer satisfaction, and enhanced market competitiveness through strategic technology adoption and 
            cultural change management.
          </p>
        </section>

        {/* The Challenge */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="text-cedar" size={28} />
            <h2 className="text-3xl font-bold text-forest-dark">The Challenge</h2>
          </div>
          <div className="space-y-4 text-forest-medium">
            <p>
              The organization was facing mounting pressure from competitors who were leveraging modern technologies 
              to deliver superior customer experiences and operational efficiency. Key challenges included:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Legacy systems that were expensive to maintain and difficult to scale</li>
              <li>Disconnected processes that created inefficiencies and data silos</li>
              <li>Outdated customer-facing applications affecting user experience</li>
              <li>Resistance to change from teams comfortable with existing workflows</li>
              <li>Need to maintain business continuity during the transformation</li>
            </ul>
          </div>
        </section>

        {/* The Solution */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="text-sage" size={28} />
            <h2 className="text-3xl font-bold text-forest-dark">The Solution</h2>
          </div>
          <div className="space-y-6 text-forest-medium">
            <p>
              I developed and executed a comprehensive transformation strategy that balanced innovation with 
              operational stability:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-sage/10 rounded-lg p-6">
                <h3 className="font-bold text-forest-dark mb-3">Technology Modernization</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Cloud migration strategy with phased approach</li>
                  <li>• API-first architecture implementation</li>
                  <li>• Modern development frameworks adoption</li>
                  <li>• Automated testing and deployment pipelines</li>
                </ul>
              </div>
              
              <div className="bg-moss/10 rounded-lg p-6">
                <h3 className="font-bold text-forest-dark mb-3">Process Optimization</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Cross-functional team restructuring</li>
                  <li>• Agile methodology implementation</li>
                  <li>• Data integration and analytics platform</li>
                  <li>• Customer journey mapping and optimization</li>
                </ul>
              </div>
              
              <div className="bg-cedar/10 rounded-lg p-6">
                <h3 className="font-bold text-forest-dark mb-3">Change Management</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Comprehensive training programs</li>
                  <li>• Change champion network</li>
                  <li>• Regular communication and feedback loops</li>
                  <li>• Incentive alignment with transformation goals</li>
                </ul>
              </div>
              
              <div className="bg-forest-light/10 rounded-lg p-6">
                <h3 className="font-bold text-forest-dark mb-3">Risk Mitigation</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Parallel system operations during transition</li>
                  <li>• Rollback procedures for critical systems</li>
                  <li>• Continuous monitoring and health checks</li>
                  <li>• Stakeholder communication protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="text-moss" size={28} />
            <h2 className="text-3xl font-bold text-forest-dark">Results Achieved</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-forest-dark mb-4">Quantitative Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-sage" size={20} />
                  <span className="text-forest-medium">Reduced operational costs by 35%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-sage" size={20} />
                  <span className="text-forest-medium">Improved customer satisfaction scores by 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-sage" size={20} />
                  <span className="text-forest-medium">Decreased time-to-market for new features by 50%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-sage" size={20} />
                  <span className="text-forest-medium">Achieved 99.9% system uptime during transition</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-forest-dark mb-4">Qualitative Impact</h3>
              <ul className="space-y-3 text-forest-medium">
                <li>• Enhanced team collaboration and cross-functional communication</li>
                <li>• Improved decision-making through better data accessibility</li>
                <li>• Increased employee satisfaction and engagement</li>
                <li>• Strengthened competitive position in the market</li>
                <li>• Created foundation for future innovation and growth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="bg-sage/10 rounded-xl p-8 border border-sage/20">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Key Insights & Lessons Learned</h2>
          <div className="space-y-4 text-forest-medium">
            <p className="italic text-lg">
              "This project taught me the critical importance of change management and stakeholder communication 
              in large-scale transformations. Success wasn't just about technology—it was about people."
            </p>
            <div className="space-y-3">
              <p><strong>Cultural Change is Paramount:</strong> Technical excellence means nothing without buy-in from the people who use the systems daily.</p>
              <p><strong>Communication Overcommunication:</strong> Regular, transparent updates build trust and reduce resistance to change.</p>
              <p><strong>Incremental Wins Matter:</strong> Celebrating small victories along the way maintains momentum and team morale.</p>
              <p><strong>Risk Mitigation is Investment:</strong> Time spent on contingency planning pays dividends when unexpected challenges arise.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy1;
