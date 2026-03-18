import { MapPin, Clock, Phone } from "lucide-react";
import { Card } from "./ui/card";

export function LocationSection() {
  return (
    <section id="location" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-6 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary uppercase tracking-wider text-sm">Localisation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Où nous trouver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venez nous rendre visite dans notre salon à Fianarantsoa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2">Adresse</h3>
                  <p className="text-foreground/80">Fianarantsoa – Andrainjato</p>
                  <p className="text-foreground/80">Cité Prefat F12</p>
                  <p className="text-foreground/80">Chez Marie</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-foreground/80">
                    <p>Lundi - Samedi: 8h00 - 18h00</p>
                    <p>Dimanche: Sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 rounded-3xl shadow-lg border-2 border-border bg-gradient-to-br from-primary/5 to-accent/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2">Contact</h3>
                  <p className="text-foreground/80 mb-4">
                    Pour toute question ou information, n'hésitez pas à nous contacter
                  </p>
                  <a
                    href="#booking"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-[500px] bg-gradient-to-br from-secondary to-accent/20 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="relative z-10 text-center p-8">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl text-foreground mb-2">Fianarantsoa</h3>
              <p className="text-foreground/70 mb-4">Andrainjato, Cité Prefat F12</p>
              <p className="text-sm text-muted-foreground">
                (Carte interactive disponible prochainement)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
