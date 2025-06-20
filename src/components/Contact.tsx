import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss how we can work together to drive exceptional results? 
            I'd love to hear about your challenges and explore potential opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:your.email@example.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-gray-300">LinkedIn</p>
                  <a href="#" className="text-white font-medium hover:text-blue-400 transition-colors">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+1234567890" className="text-white font-medium hover:text-blue-400 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white font-medium">Your City, State</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Let's discuss..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 [Your Name]. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
