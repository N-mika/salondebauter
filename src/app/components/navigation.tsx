import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { name } from "../../data/data";
//@ts-ignore
import logo from '../../assets/logo.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href);

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
          
        }
      });
      
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Galerie" },
    { href: "#location", label: "Localisation" },
    { href: "#booking", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-center ${isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <div className="px-4 w-[90%] sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              {/* <Sparkles className="w-6 h-6 text-white" /> */}
              <img src={logo} alt="logo" className="rounded-full" />
            </div>
            <span className="text-xl text-foreground">Chez {name}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                // className="text-foreground hover:text-primary transition-colors relative group"
                className={`text-foreground hover:text-primary transition-colors relative group ${activeSection === link.href && 'text-primary'}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-1 bg-primary transition-all duration-300 ${activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </a>
            ))}
            <a
              href="#booking"
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Réserver
            </a>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all text-center shadow-md"
              >
                Réserver
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
