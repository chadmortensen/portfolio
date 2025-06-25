
import { ArrowLeft, Calendar, Users, TrendingUp, Target, Lightbulb, Award, Baby } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CaseStudy1 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A rapid revamp to the Walmart registry</h1>
          <p className="text-xl text-mist">Walmart</p>
          
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>1 quarter</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>6 people</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Executive Summary */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-forest-dark mb-6">Executive Summary</h2>
              <p className="text-lg text-forest-medium leading-relaxed">
                In 1 quarter; design, develop and launch an improved baby registry experience addressing 
                shortcomings of the previous registry tool. This comprehensive redesign focused on increasing 
                quality registry creations, improving curation and sharing capabilities, and ultimately helping 
                new parents with this major moment in life.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-sage/10 rounded-full p-8">
                <Baby className="text-sage" size={64} />
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="text-cedar" size={28} />
            <h2 className="text-3xl font-bold text-forest-dark">The Challenge</h2>
          </div>
          <div className="space-y-6 text-forest-medium">
            <p className="text-lg">
              In 1 quarter; design, develop and launch an improved baby registry experience addressing 
              shortcomings of the previous registry tool.
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-forest-dark mb-4">Our goals and success metrics</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <TrendingUp className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Increase quality registry creations (creations that lead to a first curation action)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Increase curation by 10%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Increase sharing by 20%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Increase purchase conversion by 25%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Helping new parents with this major moment in life</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assembling the Team */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Assembling the Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 text-forest-medium">
              <p>I had 1 staff designer available from my team but I knew in order to pull this off I would need to expand the team</p>
              <ul className="space-y-2">
                <li>• 6 weeks total allocated to design, from discovery to final deliverables</li>
                <li>• Bulk of work would be in the latter half of the quarter and we had the holiday season to account for</li>
              </ul>
            </div>
          </div>
        </section>

        {/* We Have a Team */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">We Have a Team!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-forest-medium">
              <p>
                After discussion and support from product and business partners I was able to convince design 
                leadership to shift some designers to our team and suggested utilizing a couple contractors 
                from our Columbian outsource team.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="Team assembled"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Ground the Team in Research */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Ground the Team in Research and Insights</h2>
          <div className="space-y-6 text-forest-medium">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  We had past research so let's not lose that in an effort to be efficient. Walmart registrant 
                  users have been asking for a greater level of control, guidance and trust within today's experience.
                </p>
                <p className="text-sm text-forest-light">(UXR usability findings Jun 2019) (VoC Feedback)</p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                  alt="Research insights"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-sage/10 rounded-lg p-6 space-y-4">
              <blockquote className="italic text-forest-dark">
                "I became so frustrated in making the registry through the app, that I quit. It is not intuitive 
                nor easy to navigate in order to add or change something."
              </blockquote>
              
              <p className="font-medium">
                Almost half of moms don't want any help creating a registry - they want to take ownership of 
                their list and pick items that are relevant to their person needs (GCIA Oct 2019)
              </p>
              
              <blockquote className="italic text-forest-dark">
                "It's not as user friendly as other registries I've used. It would be better if the registry 
                picks fell into the categories provided. That would make it much easier."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Create Design Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-forest-medium">
                Research backed design principles helped to focus the team
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="Design principles"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Ideation Workshop */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Ideation Workshop - How Might We</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80" 
                alt="Workshop ideation"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 text-forest-medium">
              <p>
                After planning the workshop with our staff designer I facilitated the group in generating a 
                list of potential areas of improvement within the experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-moss/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-forest-dark">8</div>
                  <div className="text-sm">Cross functional participants</div>
                </div>
                <div className="bg-sage/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-forest-dark">70+</div>
                  <div className="text-sm">Ideas / HMWs</div>
                </div>
                <div className="bg-cedar/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-forest-dark">11</div>
                  <div className="text-sm">Categories</div>
                </div>
                <div className="bg-forest-light/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-forest-dark">Top 3</div>
                  <div className="text-sm">Ranked categories</div>
                </div>
              </div>
              <p className="text-sm">Dot voting • Name and rank top 3 categories</p>
            </div>
          </div>
        </section>

        {/* Areas of Focus */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Design + Product + Business Aligned on Our Areas of Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                alt="Team alignment"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-sage/10 rounded-lg p-4">
                <h3 className="font-bold text-forest-dark mb-2">Improve Onboarding</h3>
                <p className="text-sm text-forest-medium">Pivot away from pre-population and manually pruning the pre-built registry. Create a 3-tier strategy for customization (no help → populated)</p>
              </div>
              
              <div className="bg-moss/10 rounded-lg p-4">
                <h3 className="font-bold text-forest-dark mb-2">Improve Curation and Management</h3>
                <p className="text-sm text-forest-medium">Continue to provide easy access for making my registry public and to share it with others. Provide additional guidance and control by offering relevant recommendations within the registry experience</p>
              </div>
              
              <div className="bg-cedar/10 rounded-lg p-4">
                <h3 className="font-bold text-forest-dark mb-2">Improve Gifting</h3>
                <p className="text-sm text-forest-medium">Allow Gift Givers to easily find products that are available to purchase and apply ecommerce best practices</p>
              </div>
              
              <div className="bg-forest-light/10 rounded-lg p-4">
                <h3 className="font-bold text-forest-dark mb-2">Improve Internal Processes</h3>
                <p className="text-sm text-forest-medium">Remove dependencies on engineering to support changes to pre-curated inventory</p>
              </div>
            </div>
          </div>
        </section>

        {/* Low to High Fidelity Design */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Low to High Fidelity Design</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-forest-medium">
              <p>
                Establishing a cadence of standups, reviews and critiques helped the team to continuously 
                receive direction and allowed me to help unblock moments of uncertainty.
              </p>
              <div className="bg-sage/10 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li>• Mon, Wed, Fri = Leadership Reviews</li>
                  <li>• Tue, Thur = Team Crit</li>
                  <li>• Daily standup = 15 min</li>
                </ul>
                <p className="text-xs text-forest-light mt-3">
                  Note: Later in the project we included product/engineering/design as part of reviews to reduce churn
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Design process"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Examples of Enhancements */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Examples of Enhancements</h2>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" 
              alt="Design enhancements"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-forest-medium mt-4">Key design improvements and feature enhancements implemented throughout the registry experience.</p>
          </div>
        </section>

        {/* Constant Prioritization */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-forest-dark mb-6">Constant Prioritization</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                alt="Prioritization process"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 text-forest-medium">
              <p>
                Partnered with my cross functional leaders (product, engineering) to constantly reassess the 
                scope and timelines, aggressively cutting and prioritizing features to fit the time allocated 
                for engineering.
              </p>
              <p>
                At times I needed to rally my partners and the teams to get them excited to build in features 
                that we thought would add delight and an extra layer of polish that was needed to build trust 
                with the customers of the product. So definitely some healthy negotiating.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="text-moss" size={28} />
            <h2 className="text-3xl font-bold text-forest-dark">Results</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="Results achieved"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-forest-dark mb-4">So, how did the team do?</h3>
                <p className="text-forest-medium">
                  Overall everyone was very proud of the accomplishment and the updated baby registry that was created. 
                  This version of the baby registry closer met the needs of the customer and ultimately met the business goals.
                </p>
              </div>
            </div>
            
            <div className="bg-sage/10 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-forest-dark mb-3">Goals</h4>
                  <div className="space-y-3 text-sm text-forest-medium">
                    <div>Increase quality registry creations (creations that lead to a first curation action)</div>
                    <div>Increase curation by 10%</div>
                    <div>Increase sharing by 20%</div>
                    <div>Increase purchase conversion by 25%</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-forest-dark mb-3">Results</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="text-sage" size={16} />
                      <span className="text-forest-dark font-medium">+28% vs. Last year</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="text-sage" size={16} />
                      <span className="text-forest-dark font-medium">70% edited within 3-7 days. +20% increase</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="text-sage" size={16} />
                      <span className="text-forest-dark font-medium">55% shared within 7 days. +8% increase</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <TrendingUp className="text-sage mt-0.5" size={16} />
                      <span className="text-forest-dark font-medium">GMV initially increased but then decreased starting in April possibly due to COVID</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recap of Learnings */}
        <section className="bg-sage/10 rounded-xl p-8 border border-sage/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-forest-dark mb-6">Recap of Learnings</h2>
              <div className="space-y-3 text-forest-medium">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Established goals and how we will measure success</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>High level estimates and sequencing the work</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Augment the team (1 design lead, 4 designers)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Build empathy, learn from past research</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Ideate and iterate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-sage mt-1 flex-shrink-0" size={16} />
                  <span>Constant partnership and prioritization to meet an aggressive timeline</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                alt="Key learnings"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy1;
