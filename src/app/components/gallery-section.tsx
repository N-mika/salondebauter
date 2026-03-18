import { Sparkles } from "lucide-react";
import img2 from '../../assets/Image/img2.jpg';
import img3 from '../../assets/Image/img3.jpg';
import img4 from '../../assets/Image/img12.jpg';
import img5 from '../../assets/Image/img5.jpg';
import img6 from '../../assets/Image/img1.jpg';
import img7 from '../../assets/Image/img7.jpg';
import img8 from '../../assets/Image/img8.jpg';
import img9 from '../../assets/Image/img9.jpg';

const galleryImages = [
  {
    url: img2,
        alt: "Coiffure tressée africaine",
    category: "Tresses",
  },
  {
    url : img3,
    alt: "Manucure et pédicure",
    category: "Ongles",
  },
  {
    url : img4,
    alt: "Coiffure tressée élégante",
    category: "Tresses",
  },
  {
    url : img5,
    alt: "Nail art élégant",
    category: "Ongles",
  },
  {
    url : img7,
    alt: "Polish élégant",
    category: "Ongles",
  },
  {
    url : img6,
    alt: "Style de tresses africaines",
    category: "Tresses",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-10 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full mb-4 shadow-sm">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary uppercase tracking-wider text-sm">Galerie</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Nos réalisations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques exemples de nos créations en coiffure et nail art
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm mb-2">
                    {image.category}
                  </span>
                  <p className="text-white">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
