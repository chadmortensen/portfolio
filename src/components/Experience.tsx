
import { Briefcase, Calendar, TreePine } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Leadership Role",
      company: "Current Company",
      period: "2020 - Present",
      description: "Leading strategic initiatives and driving organizational transformation. Responsible for [key responsibilities and achievements].",
      achievements: [
        "Increased team productivity by X%",
        "Led successful implementation of [major project]",
        "Developed and mentored X+ team members"
      ]
    },
    {
      title: "Previous Leadership Role",
      company: "Previous Company",
      period: "2017 - 2020",
      description: "Spearheaded cross-functional teams and delivered critical business outcomes. Focused on [key areas of responsibility].",
      achievements: [
        "Delivered $X million in cost savings",
        "Implemented new processes that improved efficiency by X%",
        "Built high-performing teams across multiple departments"
      ]
    },
    {
      title: "Mid-Level Position",
      company: "Earlier Company",
      period: "2014 - 2017",
      description: "Developed expertise in [key areas] while contributing to strategic projects and team development initiatives.",
      achievements: [
        "Successfully managed X major projects",
        "Recognized for outstanding performance",
        "Contributed to X% revenue growth"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <TreePine className="absolute top-20 left-10 text-forest-dark" size={40} />
        <TreePine className="absolute bottom-40 right-20 text-moss" size={36} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">Experience</h2>
          <p className="text-xl text-forest-medium max-w-3xl mx-auto">
            A journey of growth, leadership, and meaningful impact across diverse industries and challenges.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage/20 hover:border-sage/40"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="bg-sage/20 p-3 rounded-lg">
                    <Briefcase className="text-forest-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-dark">{experience.title}</h3>
                    <p className="text-lg text-moss font-medium">{experience.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-forest-medium">
                  <Calendar size={16} />
                  <span className="font-medium">{experience.period}</span>
                </div>
              </div>
              
              <p className="text-forest-medium mb-6 leading-relaxed">{experience.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold text-forest-dark mb-3">Key Achievements</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-forest-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
