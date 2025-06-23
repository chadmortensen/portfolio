
import { Briefcase, Calendar, TreePine } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Director of Product Design",
      company: "Brightside Health",
      period: "Aug 2023 - June 2025",
      location: "Portland, OR",
      description: "Led product design for a fast-scaling mental health platform, defining strategy and processes for both member and clinician experiences in a regulated, high-complexity domain.",
      achievements: [
        "Introduced AI-assisted tools into clinical and design workflows, improving clinician efficiency and unlocking new opportunities for personalized care delivery",
        "Partnered cross-functionally with product, engineering, and clinical leadership to align design strategy with care quality and business goals",
        "Fostered a data-informed, human-centered design culture, integrating experimentation and outcomes tracking",
        "Managed and mentored a team of senior designers, clarifying growth paths and elevating design leadership within squads"
      ]
    },
    {
      title: "Director of Product Design - Fulfillment, Search & Ads",
      company: "Etsy",
      period: "May 2021 - March 2023",
      location: "Portland, OR",
      description: "Led a team of 3 senior managers and 13 designers across three mission-critical product groups, shaping experiences for millions of buyers and sellers.",
      achievements: [
        "Defined and drove long-term design strategies aligned to company OKRs, directly contributing to improvements in seller performance and buyer satisfaction",
        "Helped squads exceed GMV and revenue goals by aligning design outcomes with key business metrics",
        "Built and scaled design leadership, hiring senior talent and implementing performance frameworks",
        "Owned team budget and cultural initiatives, advocating for investment in collaboration and recognition"
      ]
    },
    {
      title: "Associate Director - Fulfillment & Grocery Delivery",
      company: "Walmart",
      period: "Feb 2020 - April 2021",
      location: "Portland, OR",
      description: "Led product design for Walmart's fulfillment experiences across web and mobile, including grocery and general merchandise delivery and pickup.",
      achievements: [
        "Responded swiftly to COVID-era challenges, rapidly redesigning critical customer and store-facing workflows",
        "Spearheaded the re-platforming of the grocery pickup and delivery experience, improving usability",
        "Partnered with product and business leads on roadmap prioritization, resourcing, and long-term strategy"
      ]
    },
    {
      title: "Practice Area Head - Routine Consumables & Fashion",
      company: "Walmart",
      period: "Oct 2016 - Feb 2020",
      location: "Portland, OR",
      description: "Led cross-functional design teams focused on high-frequency consumables, registry experiences, and fashion vertical transformation.",
      achievements: [
        "Conducted data-driven discovery and executed complete rebuild of Walmart's baby registry product",
        "Directed design strategy for Walmart.com's fashion vertical, transforming customer discovery and shopping",
        "Operated as lean startup within Walmart, using customer insights and rapid experimentation",
        "Aligned user mental models with innovative design approaches to increase relevance and conversion"
      ]
    },
    {
      title: "Sr. Manager - Mobile Apps",
      company: "Sam's Club",
      period: "Oct 2013 - Oct 2016",
      location: "Portland, OR",
      description: "Managed UX for Sam's Club iOS/Android apps, in-store digital tools, and B2B features while building and scaling a multidisciplinary design team.",
      achievements: [
        "Built and scaled a multidisciplinary team of visual, UX, and content designers",
        "Drove service design initiatives connecting physical retail with digital experiences across multiple channels",
        "Advocated for and applied behavioral science, research, and design thinking methods to improve member experiences"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-sage/20 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <TreePine className="absolute top-20 left-10 text-forest-dark" size={40} />
        <TreePine className="absolute bottom-40 right-20 text-moss" size={36} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6">Experience</h2>
          <p className="text-xl text-forest-medium max-w-3xl mx-auto">
            25+ years of design leadership across health tech, eCommerce, and retail, driving meaningful outcomes through human-centered design.
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
                    <p className="text-sm text-forest-medium">{experience.location}</p>
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
