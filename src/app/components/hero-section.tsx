import { Sparkles } from "lucide-react";
//@ts-ignore
import Logo from '../../assets/logo.png'
//@ts-ignore
import img12 from '../../assets/Image/img12.jpg'
import { name } from "../../Data/data";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img12}
          alt="Beauty Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-rose-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col py-4 gap-8 md:flex-row ">
          <img src={Logo} alt="" className="w-[400px] opacity-80 rounded-2xl" />
          <div className="max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <span className="text-yellow-300 tracking-widest uppercase text-sm">Salon de Beauté</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
              Chez {name}
            </h1>

            <p className="text-xl sm:text-2xl text-pink-100 mb-8 leading-relaxed">
              Votre beauté, notre passion
            </p>

            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Découvrez nos services de coiffure tressée et de soins des ongles dans un cadre élégant et accueillant à Fianarantsoa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-all"
              >
                Nos services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
    </section>
  );
}
