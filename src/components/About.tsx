
import { User, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about building teams, driving innovation, and creating lasting impact through strategic leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Background</h3>
                <p className="text-gray-600 leading-relaxed">
                  With over [X] years of experience in [your field], I've had the privilege of 
                  leading diverse teams and driving transformational change across multiple organizations. 
                  My journey has taken me from [early career] to [current role], where I've consistently 
                  delivered results that matter.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Heart className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm driven by the opportunity to develop people, solve complex challenges, 
                  and create environments where innovation thrives. Nothing energizes me more 
                  than seeing teams exceed their own expectations and achieve breakthrough results.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Target className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower organizations and individuals to reach their full potential through 
                  authentic leadership, strategic thinking, and a relentless focus on sustainable growth 
                  and positive impact.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Years of Experience</span>
                <span className="font-semibold text-gray-900">[X] years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Teams Led</span>
                <span className="font-semibold text-gray-900">[X]+ people</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Projects Delivered</span>
                <span className="font-semibold text-gray-900">[X]+ projects</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Favorite Quote</span>
                <span className="font-semibold text-gray-900 text-right">"[Your quote]"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
