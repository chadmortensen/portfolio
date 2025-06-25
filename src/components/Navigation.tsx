
import { useState, useEffect } from "react";
import { Menu, X, TreePine } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#leadership", label: "Leadership" },
    { href: "#value", label: "Value" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-sage/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TreePine className={`transition-colors duration-300 ${
              isScrolled ? "text-forest-dark" : "text-white"
            }`} size={24} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-forest-dark" : "text-white"
            }`}>Chad Mortensen</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button 
                key={item.href} 
                onClick={() => scrollToSection(item.href)} 
                className={`font-medium relative group transition-colors duration-300 ${
                  isScrolled 
                    ? "text-forest-medium hover:text-forest-dark" 
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? "bg-sage" : "bg-white"
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-forest-dark" : "text-white"
            }`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sage/30">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map(item => (
                <button 
                  key={item.href} 
                  onClick={() => scrollToSection(item.href)} 
                  className={`text-left font-medium py-2 transition-colors duration-200 ${
                    isScrolled 
                      ? "text-forest-medium hover:text-forest-dark" 
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
