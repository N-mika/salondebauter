import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { GallerySection } from "./components/gallery-section";
import { LocationSection } from "./components/location-section";
import { BookingSection } from "./components/booking-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { Footer } from "./components/footer";
import { CatalogueMitaly } from "./components/catalogue";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div>
        <HeroSection />
        {/* <CatalogueMitaly /> */}
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <BookingSection />
      </div>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
