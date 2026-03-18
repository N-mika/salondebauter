import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp , FaFacebook } from "react-icons/fa";
import { name } from "../../data/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
      const message = encodeURIComponent(
      "Bonjour, je souhaite prendre rendez-vous au salon Chez Marie."
    );

  return (
    <footer className="bg-gradient-to-br flex items-center justify-center from-gray-900 to-gray-800 text-white">
      <div className="px-4 w-[90%] sm:px-6 lg:px-8 py-10">
        <div className="grid justify-between items-center md:grid-cols-3 gap-16">
          {/* About */}
          <div className="pb-5">
            <h3 className="text-2xl mb-4">Chez {name}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre salon de beauté à Fianarantsoa, spécialisé en coiffure tressée et soins des ongles.
              Nous mettons notre passion au service de votre beauté.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100091577755030"
                className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
              <a
                href={`https://wa.me/261321731859?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaWhatsapp  className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4">Coordonnées</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p>Fianarantsoa – Andrainjato</p>
                  <p>Cité Prefat F12</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p>+261 32 17 318 59 / +261 34 45 018 50</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p>marionesenestelina@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="items-end">
            <h3 className="text-xl mb-4">Horaires</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p>Lundi - Samedi</p>
                  <p className="text-sm">8h00 - 18h00</p>
                  <p className="mt-2">Dimanche</p>
                  <p className="text-sm">Sur rendez-vous</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 text-sm">
            © {currentYear} Chez Marie - Salon de Beauté. Fait avec{" "}
            <Heart className="w-4 h-4 text-red-400 fill-red-400" /> à Fianarantsoa, Madagascar
          </p>
          <p className="flex items-center justify-center gap-2 text-sm">
            Faite avec react par Michaël NANDRASANA chez Tieko informatique
          </p>
        </div>
      </div>
    </footer>
  );
}
