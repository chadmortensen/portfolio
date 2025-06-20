
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

        <div className="flex justify-center">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
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
