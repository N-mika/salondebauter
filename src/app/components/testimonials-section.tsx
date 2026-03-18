import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "RAFARA Mela",
    service: "Tresses box braids",
    rating: 5,
    text: "Service exceptionnel ! Marie est une vraie professionnelle. Mes tresses sont magnifiques et tiennent parfaitement. Je recommande vivement !",
    date: "Il y a 4 semaines",
  },
  {
    name: "Tahiry RM",
    service: "Manucure gel",
    rating: 5,
    text: "Très satisfaite de ma manucure. Le salon est propre, accueillant et les prix sont très raisonnables. Je reviendrai sans hésiter !",
    date: "Il y a 1 mois",
  },
  {
    name: "Ornela",
    service: "Naté collé",
    rating: 5,
    text: "Un accueil chaleureux et un travail soigné. Marie prend son temps pour faire un travail parfait. C'est mon salon préféré à Fianarantsoa.",
    date: "Il y a 3 semaines",
  },
  {
    name: "Elisca",
    service: "Pédicure spa",
    rating: 5,
    text: "Moment de détente absolue ! Le soin pédicure est très relaxant et mes pieds n'ont jamais été aussi beaux. Merci Marie !",
    date: "Il y a 2 mois",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-6 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary uppercase tracking-wider text-sm">Témoignages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Ce que disent nos clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les avis de nos clientes satisfaites
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-border relative overflow-hidden"
            >
              {/* Decorative Quote */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div>
                  <p className="text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Vous aussi, partagez votre expérience avec nous !
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
