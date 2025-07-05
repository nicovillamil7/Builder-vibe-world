
import Layout from "@/components/Layout";
import Hero from "@/components/es/Hero";
import ProductGrid from "@/components/es/ProductGrid";
import GoogleReviews from "@/components/GoogleReviews";
import TechnicalSEO from "@/components/TechnicalSEO";
import SEOHead from "@/components/SEOHead";
import {
  GoldButton,
  WhiteOutlineButton,
  PrimaryButton,
  OutlineButton,
} from "@/components/ui/custom-buttons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  Palette,
  Truck,
  Users,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";

const IndexES = () => {
  const features = [
    {
      icon: Calculator,
      title: "Precios al Por Mayor y Comerciales",
      description:
        "Descuentos por volumen desde 2,000 pies cuadrados, descuentos adicionales en 5,000 pies cuadrados. Plan de Pago Flexible. Recogida el Mismo Día",
      action: "Obtener Precios Comerciales",
      category: "contractors",
    },
    {
      icon: Palette,
      title: "Estilos Infinitos. Un Solo Showroom",
      description:
        "Explora una amplia gama de materiales y selecciones que varían en tamaño, diseño, calidad, aplicación en el mundo real, etc.",
      action: "Solicitar una Cita",
      category: "homeowners",
    },
  ];

  const contractorBenefits = [
    {
      icon: Calculator,
      title: "Precios Comerciales para Azulejos de Porcelana Miami",
      description: "Ahorra hasta 25% en pedidos al por mayor con términos de pago Net-30 flexibles para contratistas de pisos calificados",
    },
    {
      icon: Truck,
      title: "Entrega de Pisos Comerciales Miami",
      description: "Recogida el mismo día y entrega al día siguiente en todo el sur de Florida para contratistas de azulejos",
    },
    {
      icon: Users,
      title: "Soporte Experto para Instalación de Pisos",
      description: "15+ años sirviendo a contratistas de Miami con cálculos de materiales, especificaciones técnicas y soporte de proyectos",
    },
  ];

  const homeownerBenefits = [
    {
      icon: Palette,
      title: "Selección de Vinyl de Lujo y Piedra Natural",
      description:
        "Colección curada de pisos premium que los propietarios de Miami aman - desde vinyl de lujo resistente al agua hasta elegante travertino",
    },
    {
      icon: Award,
      title: "Diseño Personalizado de Deck de Piscina Miami",
      description:
        "Especializados en decks de piscina de travertino y piedra natural exterior - ve los materiales bajo la luz real del sur de Florida",
    },
    {
      icon: Shield,
      title: "Guía de Instalación de Pisos Residenciales",
      description:
        "Consulta experta en proyectos de instalación de pisos Miami con garantías del fabricante y soporte de diseño",
    },
  ];

  const contractorFaqs = [
    {
      question: "¿Qué descuentos por volumen ofrecen para contratistas de pisos de Miami?",
      answer:
        "Ofrecemos precios escalonados por volumen para contratistas de azulejos de porcelana Miami: 15% de descuento en pedidos de 5,000+ pies cuadrados, 20% de descuento en pedidos de 8,000+ pies cuadrados, y 25% de descuento en pedidos de 10,000+ pies cuadrados. Además términos de pago Net-30 para contratistas de pisos comerciales calificados con cuentas comerciales.",
    },
    {
      question: "¿Ofrecen entrega de pisos a sitios de trabajo en Miami?",
      answer:
        "¡Sí! Proporcionamos entrega directa a sitios de trabajo para proyectos de instalación de pisos Miami en todo el sur de Florida. Recogida el mismo día disponible en nuestro almacén de pisos Miami, y entrega programada de azulejos de porcelana, piedra natural, y vinyl de lujo para cumplir con tu cronograma de proyecto.",
    },
    {
      question: "¿Cuál es su tiempo de entrega para pedidos comerciales grandes?",
      answer:
        "La mayoría de materiales estándar están en stock para recogida inmediata. Pedidos especiales típicamente toman 1-2 semanas. Mantenemos grandes niveles de inventario específicamente para apoyar horarios de contratistas y necesidades urgentes de proyectos.",
    },
    {
      question: "¿Proporcionan cálculos de materiales y estimados?",
      answer:
        "¡Absolutamente! Nuestro equipo puede revisar planos y proporcionar cálculos detallados de materiales, precios y recomendaciones. También ofrecemos soporte técnico para especificaciones de productos y guía de selección de materiales.",
    },
    {
      question: "¿Qué términos de pago ofrecen a contratistas?",
      answer:
        "Ofrecemos términos Net-30 para contratistas establecidos con crédito aprobado. También aceptamos pagos en efectivo, cheque y tarjeta. Pedidos por volumen pueden calificar para términos de pago extendidos basados en el tamaño del proyecto.",
    },
    {
      question: "¿Pueden apoyar proyectos multi-fase?",
      answer:
        "Sí, sobresalimos en soporte de proyectos multi-fase con entregas escalonadas, gestión de inventario y combinación consistente de materiales a través de las fases del proyecto. Mantenemos registros detallados del proyecto para continuidad sin problemas.",
    },
  ];

  const designerFaqs = [
    {
      question: "¿Tienen un programa comercial para diseñadores de interiores?",
      answer:
        "¡Sí! Nuestro programa comercial ofrece descuentos para diseñadores, gestión de cuenta dedicada y acceso a nuestra biblioteca completa de muestras. También proporcionamos soporte de diseño y especificaciones técnicas para planificación de proyectos.",
    },
    {
      question: "¿Puedo obtener muestras de gran formato para presentaciones a clientes?",
      answer:
        '¡Absolutamente! Ofrecemos muestras de 12"x12" e incluso muestras de azulejos de tamaño completo para que los propietarios vean en su espacio real. Nuestra biblioteca de muestras incluye las últimas tendencias en porcelana, piedra natural y mosaicos personalizados.',
    },
    {
      question: "¿Ofrecen consulta de diseño personalizado?",
      answer:
        "Sí, nuestro equipo de diseño puede trabajar contigo en diseños personalizados, diseño de patrones y combinaciones de materiales. Proporcionamos renderizados 3D y especificaciones detalladas para ayudar a presentar conceptos a tus clientes.",
    },
    {
      question: "¿Cuál es su proceso para trabajo de mosaicos y patrones personalizados?",
      answer:
        "Nos especializamos en mosaicos y patrones personalizados. Proporciona tu concepto de diseño, y crearemos muestras, proporcionaremos dibujos técnicos y manejaremos la fabricación. El tiempo de entrega es típicamente 3-4 semanas para trabajo personalizado.",
    },
    {
      question: "¿Ofrecen educación continua o seminarios de diseño?",
      answer:
        "¡Sí! Organizamos seminarios de diseño trimestrales cubriendo nuevas tendencias, aplicaciones de materiales e innovaciones de productos. También ofrecemos créditos de educación continua AIA para arquitectos y diseñadores.",
    },
    {
      question:
        "¿Pueden apoyar proyectos residenciales de lujo con requisitos únicos?",
      answer:
        "¡Definitivamente! Nos especializamos en proyectos residenciales de alta gama con requisitos personalizados. Desde losas combinadas hasta diseños de mosaicos intrincados, tenemos la experiencia y recursos para aplicaciones de lujo.",
    },
  ];

  const generalFaqs = [
    {
      question: "¿Qué áreas de Florida sirven?",
      answer:
        "Servimos todo el sur de Florida, con recogida el mismo día disponible en nuestro showroom de Miami y entrega al día siguiente en todo el estado. Tenemos tarifas especiales de envío para pedidos al por mayor.",
    },
    {
      question: "¿Qué garantías están disponibles en sus productos?",
      answer:
        "Todos nuestros productos vienen con garantías del fabricante que varían por tipo de material y marca. La mayoría de garantías del fabricante van de 5-25 años, proporcionándote garantía de calidad directamente del fabricante.",
    },
    {
      question: "¿Qué tipos de piedra natural ofrecen?",
      answer:
        "Nos especializamos en piedra natural premium incluyendo travertino, mármol, piedra caliza, granito y pizarra. Nuestra selección de piedra natural incluye variedades domésticas e importadas, perfectas para decks de piscina, patios, pisos interiores y paredes de acento. Cada piedra es cuidadosamente seleccionada por durabilidad y belleza.",
    },
    {
      question: "¿Qué tipos de materiales de pisos manejan?",
      answer:
        "Manejamos una selección completa incluyendo azulejos de porcelana, piedra natural, vinyl de lujo, laminado, madera dura y mosaicos personalizados. Todos los materiales son obtenidos de fabricantes de primera y cumplen estándares de grado comercial.",
    },
    {
      question: "¿Puedo visitar su showroom para ver materiales?",
      answer:
        "¡Sí! Nuestro showroom de Miami está abierto Lun-Vie 7AM-4PM. Tenemos exhibiciones completas de todos nuestros materiales, y nuestro equipo puede proporcionar guía experta en selección de materiales para las necesidades específicas de tu proyecto.",
    },
    {
      question: "¿Ofrecen opciones de financiamiento?",
      answer:
        "Aceptamos varios métodos de pago incluyendo efectivo, cheque y pagos con tarjeta. Para contratistas, ofrecemos términos de pago Net-30 con crédito aprobado. Nos enfocamos en proporcionar precios competitivos y términos de pago flexibles en lugar de servicios de financiamiento.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Genesis Stone - Contratista de Pisos Miami y Proveedor de Azulejos | Precios Comerciales Disponibles"
        description="Proveedor premier de pisos Miami desde 2008. Precios comerciales para contratistas en azulejos de porcelana, piedra natural, decks de piscina de travertino, vinyl de lujo. Recogida el mismo día sur de Florida."
        keywords="pisos Miami, azulejos porcelana Miami, proveedor piedra natural Miami, decks piscina travertino sur Florida, instalación vinyl lujo, contratista pisos Miami, proveedor azulejos Miami"
        canonicalUrl="https://genesisstoneusa.com/es/"
      />
      <TechnicalSEO 
        pageType="website"
        images={[
          {
            url: "https://genesisstoneusa.com/placeholder.svg",
            alt: "Genesis Stone showroom pisos Miami",
            width: 1200,
            height: 630
          }
        ]}
      />

      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <ProductGrid />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por Qué Elegir Genesis Stone para Tu Proyecto de Pisos en Miami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premier <a href="/es/products" className="text-red-700 hover:text-red-800 font-medium underline" title="Productos de pisos Miami y proveedor de azulejos">proveedor de pisos Miami</a> sirviendo a contratistas y propietarios en todo el sur de Florida desde 2008. Especializado en azulejos de porcelana, piedra natural e instalación de vinyl de lujo.
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Ya seas un contratista buscando <a href="/es/wholesale" className="text-red-600 hover:text-red-700 underline font-medium">precios al por mayor</a> o un propietario buscando materiales premium, Genesis Stone & More ha sido el socio de pisos de confianza del sur de Florida desde 2008. Nuestro extenso inventario incluye azulejos de porcelana de gran formato, pisos de piedra natural, vinyl de lujo y elementos decorativos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Contractors */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] rounded-2xl mb-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Para Contratistas de Pisos Miami
                </h3>
                <p className="text-gray-600">Precios comerciales en proyectos de <a href="/es/wholesale" className="text-red-700 hover:text-red-800 font-medium underline">pisos comerciales Miami</a></p>
              </div>

              <div className="space-y-8">
                {contractorBenefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-[rgb(138,0,0)] group-hover:to-[rgb(120,0,0)] transition-all duration-300">
                        <benefit.icon className="h-7 w-7 text-red-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-h-[80px] flex flex-col">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed flex-1">
                          {benefit.description}
                        </p>
                        {index === 0 && (
                          <a href="/es/wholesale" className="text-red-700 hover:text-red-800 font-medium mt-2 inline-block" title="Precios comerciales contratista pisos comerciales Miami">
                            Obtener precios comerciales pisos Miami →
                          </a>
                        )}
                        {index === 1 && (
                          <a href="/es/contact" className="text-red-700 hover:text-red-800 font-medium mt-2 inline-block" title="Entrega y recogida pisos Miami">
                            Programar entrega pisos Miami →
                          </a>
                        )}
                        {index === 2 && (
                          <a href="/es/about" className="text-red-700 hover:text-red-800 font-medium mt-2 inline-block" title="Soporte experto instalación pisos Miami">
                            Conoce nuestros expertos en instalación de pisos →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Homeowners */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] rounded-2xl mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Para Propietarios
                </h3>
                <p className="text-gray-600">Opciones residenciales premium</p>
              </div>

              <div className="space-y-8">
                {homeownerBenefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-[rgb(138,0,0)] group-hover:to-[rgb(120,0,0)] transition-all duration-300">
                        <benefit.icon className="h-7 w-7 text-red-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-h-[80px] flex flex-col">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed flex-1">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-red-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <PrimaryButton>{feature.action}</PrimaryButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Tienes Preguntas? Tenemos Respuestas
            </h2>
            <p className="text-lg text-gray-600">
              Encuentra respuestas a las preguntas más comunes sobre nuestros productos,
              servicios y proceso de instalación.
            </p>
          </div>

          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="contractors">Para Contratistas</TabsTrigger>
              <TabsTrigger value="designers">Para Propietarios</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>

            <TabsContent value="contractors" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {contractorFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`contractor-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="designers" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {designerFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`designer-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="general" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ve Nuestro Trabajo en Acción
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proyectos reales mostrando la calidad y belleza de nuestras
              soluciones de pisos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Natural Stone Pool Deck - Strategic Link */}
            <a href="/es/products" className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Deck de piscina moderno con azulejos de porcelana de gran formato"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F37ad3adaf8fd4909968a7295164d4eb7)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">Pisos de Piedra Natural Miami</h4>
                <p className="text-sm opacity-90">Decks de Piscina y Espacios Exteriores</p>
              </div>
            </a>

            {/* Porcelain Tiles Link */}
            <a href="/es/products/porcelain" className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Sala de estar de lujo con pared de acento de mármol"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2Fe53984331f4746c9824532d42afd5c1f)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">Azulejos de Porcelana Miami</h4>
                <p className="text-sm opacity-90">Gran Formato y Opciones Premium</p>
              </div>
            </a>

            {/* Natural Stone Travertine Link */}
            <a href="/es/products" className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Área de piscina de piedra natural travertino con spa"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F415bcd7e0a704d01a11986e13ecabc3a)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">Pisos de Travertino Miami</h4>
                <p className="text-sm opacity-90">Decks de Piscina y Casas de Lujo</p>
              </div>
            </a>

            {/* Porcelain Interior Link */}
            <a href="/es/products/porcelain" className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1562113530-57ba2cea56c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Interior blanco moderno con porcelana pulida"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F5ca1a82e481b45e8b81cba03d3e6ad83?format=webp)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">Azulejos de Porcelana Gran Formato</h4>
                <p className="text-sm opacity-90">Diseño Limpio Contemporáneo</p>
              </div>
            </a>

            {/* Luxury Vinyl Plank Link */}
            <a href="/es/products/laminates" className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxjgw3ne4za9mheafx9wrc5_1750117973_img_1-531f33?format=webp&width=800"
                alt="Instalación profesional de pisos de vinyl de lujo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">Vinyl de Lujo Miami</h4>
                <p className="text-sm opacity-90">Instalación Profesional</p>
              </div>
            </a>

            {/* Mosaic Tiles Link */}
            <a href="/es/products/mosaics" className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxjhp2ee2fbej2h3a8ybwn6_1750118078_img_1-73caf1?format=webp&width=800"
                alt="Arte de mosaico de lujo en diseño de spa"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">Azulejos de Mosaico Miami</h4>
                <p className="text-sm opacity-90">Diseño Personalizado de Spa y Piscina</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[rgb(138,0,0)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ¿Listo para Comenzar?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <GoldButton size="lg" className="px-8 py-3">
              Obtener Precios Comerciales
            </GoldButton>
            <WhiteOutlineButton size="lg" className="px-8 py-3">
              Solicitar Muestras de Diseñador
            </WhiteOutlineButton>
          </div>
          <div className="flex items-center justify-center space-x-4 text-white/90">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Desde 2008
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              1,000+ Proyectos Florida
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              Garantía del Fabricante
            </Badge>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexES;
