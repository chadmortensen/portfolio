
import { Mail, Linkedin, Phone, MapPin, TreePine } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-forest-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <TreePine className="absolute top-20 left-20 text-sage" size={60} />
        <TreePine className="absolute bottom-40 right-40 text-moss" size={52} />
        <TreePine className="absolute top-1/2 left-1/3 text-sage" size={44} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-sage max-w-3xl mx-auto">
            Ready to discuss how we can work together to drive exceptional results? 
            I'd love to hear about your challenges and explore potential opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-sage p-3 rounded-lg">
                  <Mail size={24} className="text-forest-dark" />
                </div>
                <div>
                  <p className="text-sage">Email</p>
                  <a href="mailto:your.email@example.com" className="text-white font-medium hover:text-sage transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage p-3 rounded-lg">
                  <Linkedin size={24} className="text-forest-dark" />
                </div>
                <div>
                  <p className="text-sage">LinkedIn</p>
                  <a href="#" className="text-white font-medium hover:text-sage transition-colors">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage p-3 rounded-lg">
                  <Phone size={24} className="text-forest-dark" />
                </div>
                <div>
                  <p className="text-sage">Phone</p>
                  <a href="tel:+1234567890" className="text-white font-medium hover:text-sage transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage p-3 rounded-lg">
                  <MapPin size={24} className="text-forest-dark" />
                </div>
                <div>
                  <p className="text-sage">Location</p>
                  <p className="text-white font-medium">Your City, State</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-forest-medium/50 backdrop-blur-sm rounded-xl p-8 border border-sage/20">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sage mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-forest-light/50 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-white placeholder-sage/70"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sage mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-forest-light/50 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-white placeholder-sage/70"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sage mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-forest-light/50 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-white placeholder-sage/70"
                  placeholder="Let's discuss..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-forest-light/50 border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent text-white placeholder-sage/70"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-sage text-forest-dark rounded-lg hover:bg-sage/90 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-forest-medium">
          <p className="text-sage">
            © 2024 [Your Name]. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
