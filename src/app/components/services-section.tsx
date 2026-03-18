import { Sparkles, Crown } from "lucide-react";
import { Card } from "./ui/card";
import { FaDownload } from "react-icons/fa";

const services = [
  {
    category: "Coiffure Tressée",
    icon: Crown,
    items: [
      { name: "Tresse classique / Simple Maventy ", price: "5000Ar" },
      { name: "Tresse classique / Simple antonina", price: "7000Ar" },
      { name: "Tresse classique / Simple Madinika", price: "10000Ar" },
      { name: "Tresse avec Meche", price: "10000Ar" },
      { name: "Naté collé", price: "10000Ar" },
      { name: "Taly roa", price: "10000Ar" },
      // { name: "Tresses box braids", price: "10 000 Ar" },
    ],
  },
  {
    category: "Soins des Ongles",
    icon: Sparkles,
    items: [
      { name: "Manucure couleur unique", price: "5000Ar" },
      { name: "Manucure avec deco", price: "7000Ar" },
      { name: "Pédicure couleur unique", price: "10000Ar" },
      { name: "Pédicure avec deco", price: "10000Ar" },
    ],
  },
];

export function ServicesSection() {

  const handlDownload = () => {

  }
  return (
    <section id="services" className="py-20 px-4 flex items-center justify-center sm:px-6 lg:px-8 bg-white">
      <div className="w-[90%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-6 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary uppercase tracking-wider text-sm">Nos Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Des prestations de qualité
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services beauté, réalisés avec soin et expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary/30 bg-gradient-to-br from-white to-secondary/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl text-foreground">{service.category}</h3>
                </div>

                <div className="space-y-4">
                  {service.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                    >
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-primary px-4 py-1 bg-primary/10 rounded-full">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center md:flex-row flex-col flex items-center justify-center">
          <p className="text-muted-foreground md:flex-row flex-col flex items-center gap-2">
            <span>* Les prix peuvent varier selon la longueur et la complexité</span>
            <a
              href="/catalogue_chez_mitaly.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <FaDownload></FaDownload> <span>Telecharger le catalogue</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
