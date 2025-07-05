
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { getReliableImageUrl } from "@/utils/imageUtils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton } from "@/components/ui/custom-buttons";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductGridES = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: "grout",
      name: "Lechadas Profesionales",
      description: "Soluciones de lechada de alta calidad para instalaciones de azulejos y piedra",
      image: getReliableImageUrl("groutCollection"),
      category: "Materiales de Instalación",
      badge: "Resistente al Agua",
      link: "/es/products/grout"
    },
    {
      id: "laminates", 
      name: "Pisos Laminados de Lujo",
      description: "Opciones premium de pisos laminados para proyectos residenciales y comerciales",
      image: getReliableImageUrl("laminateCollection"),
      category: "Pisos",
      badge: "Instalación Fácil",
      link: "/es/products/laminates"
    },
    {
      id: "metalTrims",
      name: "Perfiles y Bordes Metálicos", 
      description: "Perfiles metálicos profesionales y soluciones de borde para instalaciones de azulejos",
      image: getReliableImageUrl("metalTrimCollection"),
      category: "Accesorios",
      badge: "Grado Comercial",
      link: "/es/products/metalTrims"
    },
    {
      id: "mortarMix",
      name: "Mezclas de Mortero Profesional",
      description: "Soluciones de mezcla de mortero de alto rendimiento para instalación de azulejos y piedra",
      image: getReliableImageUrl("mortarMixCollection"),
      category: "Materiales de Instalación",
      badge: "Secado Rápido",
      link: "/es/products/mortarMix"
    },
    {
      id: "mosaics",
      name: "Azulejos de Mosaico",
      description: "Azulejos de mosaico impresionantes para aplicaciones decorativas y funcionales",
      image: getReliableImageUrl("mosaicCollection"),
      category: "Azulejos Decorativos",
      badge: "Diseño Personalizado",
      link: "/es/products/mosaics"
    },
    {
      id: "naturalStone",
      name: "Piedra Natural",
      description: "Productos de piedra natural premium incluyendo mármol, granito y travertino",
      image: getReliableImageUrl("naturalStoneCollection"),
      category: "Piedra Natural",
      badge: "Premium",
      link: "/es/products/naturalStone"
    },
    {
      id: "porcelain",
      name: "Azulejos de Porcelana",
      description: "Azulejos de porcelana de alta calidad para aplicaciones residenciales y comerciales",
      image: getReliableImageUrl("porcelainCollection"),
      category: "Azulejos",
      badge: "Durabilidad Superior",
      link: "/es/products/porcelain"
    },
    {
      id: "wallPanels",
      name: "Paneles de Pared",
      description: "Sistemas modernos de paneles de pared para aplicaciones interiores y exteriores",
      image: getReliableImageUrl("wallPanelCollection"),
      category: "Revestimientos",
      badge: "Fácil Instalación",
      link: "/es/products/wallPanels"
    }
  ];

  // Generate structured data for products
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "category": product.category,
        "brand": {
          "@type": "Brand",
          "name": "Genesis Stone"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "seller": {
            "@type": "Organization",
            "name": "Genesis Stone"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "150"
        }
      }
    }))
  };

  const getItemWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 280 : 320; // Mobile vs desktop
    }
    return 320;
  };

  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : 3; // 1 item on mobile, 3 on desktop
    }
    return 3;
  };

  const itemWidth = getItemWidth();
  const visibleItems = getVisibleItems();
  const maxIndex = Math.max(0, products.length - visibleItems);

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      </Helmet>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nuestra Selección
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explora nuestra colección de materiales de pisos, cuidadosamente 
            seleccionados para contratistas, diseñadores y propietarios en todo el sur de Florida.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge 
                  className="absolute top-4 left-4 bg-red-600 text-white border-0 shadow-lg"
                >
                  {product.badge}
                </Badge>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <PrimaryButton 
                    size="sm" 
                    className="w-full bg-white text-red-600 hover:bg-red-50 border-0 shadow-lg"
                    onClick={() => window.location.href = product.link}
                  >
                    Ver Detalles
                  </PrimaryButton>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 text-xs border-red-200 text-red-700">
                  {product.category}
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * itemWidth}px)`,
                width: `${products.length * itemWidth}px`
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 px-4" style={{ width: itemWidth }}>
                  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Badge 
                        className="absolute top-4 left-4 bg-red-600 text-white border-0 shadow-lg"
                      >
                        {product.badge}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                        <PrimaryButton 
                          size="sm" 
                          className="w-full bg-white text-red-600 hover:bg-red-50 border-0 shadow-lg"
                          onClick={() => window.location.href = product.link}
                        >
                          Ver Detalles
                        </PrimaryButton>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3 text-xs border-red-200 text-red-700">
                        {product.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-red-600 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-16">
          <PrimaryButton 
            size="lg" 
            className="px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => window.location.href = '/es/products'}
          >
            Ver Todos los Productos
          </PrimaryButton>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductGridES;
