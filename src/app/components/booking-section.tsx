import { useState } from "react";
import { MessageCircle, Send, Calendar, User, Mail, Phone } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mlgpoeqp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Demande envoyée!", {
          description: "Nous vous contacterons bientôt pour confirmer votre rendez-vous.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });
      }
    } catch (e){
      toast.error("Une erreur s'est produit!", {
        description: "Vueillier ressayer.",
      });
    }
  }
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour, je souhaite prendre rendez-vous au salon Chez Marie."
    );
    // Replace with actual WhatsApp number
    window.open(`https://wa.me/261326454167?text=${message}`, "_blank");
  };

  return (
    <section id="booking" className="py-10 md:px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/50 via-white to-accent/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full mb-4 shadow-sm">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-primary uppercase tracking-wider text-sm">Réservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Prenez rendez-vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réservez votre créneau et profitez de nos services dans les meilleures conditions
          </p>
        </div>

        <div className=" w-full flex items-center justify-center">

          {/* Contact Form */}
          <Card className="p-8 md:w-3/4 rounded-3xl shadow-xl border-2 border-border">
            <h3 className="text-2xl text-foreground mb-6">Formulaire de contact</h3>
            <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
              <div className="space-y-5 grid lg:grid-cols-2 gap-4 px-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-primary" />
                    Nom complet
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-2 border-zinc-600 py-6"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-2 border-zinc-600 py-6"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+261 XX XX XXX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl border-2 border-zinc-600 py-6"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="mb-2 block">Service souhaité</Label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full  px-4 py-3 rounded-xl border-2 border-zinc-600 bg-input-background focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="tresse">Tresse classique</option>
                    <option value="nate">Naté collé</option>
                    <option value="taly">Taly roa</option>
                    <option value="manucure">Manucure</option>
                    <option value="pedicure">Pédicure</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="date" className="mb-2 block">Date préférée</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="rounded-xl border-2 border-zinc-600 py-6"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    placeholder="Des précisions particulières ?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border-2 min-h-[100px] resize-none border-zinc-600 py-6"
                  />
                </div>

              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer la demande
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
