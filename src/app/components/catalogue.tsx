import { Phone } from "lucide-react";

export function CatalogueMitaly() {
  const tresse = [
    { name: "Simple maventy", price: "5.000 Ar" },
    { name: "Simple antonina", price: "7.000 Ar" },
    { name: "Simple madinika", price: "10.000 Ar" },
    { name: "Avec modèle complexe", price: "10.000 Ar" },
    { name: "Avec mèche", price: "10.000 Ar" },
    { name: "Naté collé", price: "10.000 Ar" },
    { name: "Taly roa", price: "10.000 Ar" },
  ];

  const onglerie = [
    { name: "Manucure couleur unique", price: "5.000 Ar" },
    { name: "Manucure avec déco", price: "7.000 Ar" },
    { name: "Pédicure couleur unique", price: "7.000 Ar" },
    { name: "Pédicure avec déco", price: "8.000 Ar" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-5 flex justify-center">
      <div className="w-full max-w-md space-y-5">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Chez Mitaly
          </h1>
          <p className="text-sm text-gray-500">
            Mitaly Mora – Andrainjato, Fianarantsoa
          </p>
        </div>

        {/* Card Tresse */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-3">💇‍♀️ Tresse (Taly)</h2>

          <div className="space-y-2">
            {tresse.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm"
              >
                <span className="text-gray-700">{item.name}</span>
                <span className="font-semibold text-pink-600">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Onglerie */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-3">💅 Onglerie</h2>

          <div className="space-y-2">
            {onglerie.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm"
              >
                <span className="text-gray-700">{item.name}</span>
                <span className="font-semibold text-pink-600">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center text-gray-600 italic text-sm">
          <p>Inona no afaka ataonay ho anao ?</p>
          <p>Nous sommes là pour sublimer votre beauté ✨</p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-400 text-white rounded-2xl p-5 shadow-lg">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Phone size={18} /> Contact rapide
          </h3>

          <div className="space-y-1 text-sm">
            <p>032 17 318 59</p>
            <p>034 45 018 59</p>
          </div>

          {/* Bouton */}
          <button className="mt-4 w-full bg-white text-pink-600 font-semibold py-2 rounded-full hover:bg-gray-100 transition">
            Appeler
          </button>
        </div>

      </div>
    </div>
  );
}