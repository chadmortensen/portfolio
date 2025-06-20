
import { Briefcase, Calendar } from "lucide-react";

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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth, leadership, and meaningful impact across diverse industries and challenges.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{experience.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar size={16} />
                  <span className="font-medium">{experience.period}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{experience.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
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
