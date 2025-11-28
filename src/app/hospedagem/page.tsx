"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, MapPin, Home, Phone, Info, Bed, Wifi, Car, Coffee, Utensils, Sun, Recycle, Star } from "lucide-react";

export default function HospedagemPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const hospedagens = [
    {
      id: 1,
      name: "Pousada Floresta Viva",
      description: "Pousada ecológica em meio à floresta, com bangalôs sustentáveis e vista para o rio. Energia 100% solar e práticas de permacultura.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/745920720.jpg?k=a8a4712f0b08ecea345c9a0743da442241e45667fbd2612bb9f0bdbf659bef0c&o=",
      location: "Margem do Rio Negro",
      rating: 4.8,
      price: "R$ 280",
      amenities: ["Energia Solar", "Reciclagem", "Gastronomia Local", "Wi-Fi", "Transporte"],
      sustainability: [
        "100% energia solar",
        "Sistema de captação de água da chuva",
        "Compostagem orgânica",
        "Materiais de construção locais"
      ]
    },
    {
      id: 2,
      name: "Lodge Amazônia Sustentável",
      description: "Lodge de luxo sustentável com arquitetura integrada à natureza. Certificado em turismo responsável e apoio às comunidades locais.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/390416753.jpg?k=8584a84639b01c0b78fad4b388d460fb9b1652ed49e00b47f7488d5987922a26&o=",
      location: "Anavilhanas",
      rating: 4.9,
      price: "R$ 450",
      amenities: ["Energia Solar", "Reciclagem", "Gastronomia Local", "Wi-Fi", "Transporte", "Restaurante"],
      sustainability: [
        "Certificação em turismo sustentável",
        "Apoio às comunidades ribeirinhas",
        "Preservação de 500 hectares de floresta",
        "Programa de educação ambiental"
      ]
    },
    {
      id: 3,
      name: "Pousada Raízes Amazônicas",
      description: "Hospedagem familiar com foco na cultura local e sustentabilidade. Oferece experiências autênticas com as comunidades ribeirinhas.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/52935243.jpg?k=a8100b08487e76938eadc61dd2c96c0d517affef16add35f60daf5a713c5a035&o=",
      location: "Comunidade do Catalão",
      rating: 4.7,
      price: "R$ 180",
      amenities: ["Gastronomia Local", "Reciclagem", "Transporte", "Experiências Culturais"],
      sustainability: [
        "Gestão familiar comunitária",
        "Ingredientes orgânicos locais",
        "Artesanato tradicional",
        "Preservação cultural"
      ]
    },
    {
      id: 4,
      name: "Eco Resort Presidente Figueiredo",
      description: "Resort ecológico próximo às cachoeiras, com trilhas privativas e spa natural. Arquitetura sustentável e baixo impacto ambiental.",
      image: "https://a0.muscache.com/im/pictures/72aaff61-c949-4acf-8c4c-a8d48ad7007d.jpg?im_w=960",
      location: "Presidente Figueiredo",
      rating: 4.6,
      price: "R$ 320",
      amenities: ["Energia Solar", "Wi-Fi", "Restaurante", "Spa", "Trilhas", "Transporte"],
      sustainability: [
        "Construção com madeira certificada",
        "Tratamento natural de efluentes",
        "Trilhas de baixo impacto",
        "Programa de reflorestamento"
      ]
    },
    {
      id: 5,
      name: "Pousada Águas Encontradas",
      description: "Localizada estrategicamente para observar o Encontro das Águas. Práticas sustentáveis e apoio à pesca artesanal local.",
      image: "https://www.fishingbraziladventures.com.br/storage/2024/10/11/681e54ce8e0ade24cec4cb9a353b06540f260092.webp",
      location: "Encontro das Águas",
      rating: 4.5,
      price: "R$ 220",
      amenities: ["Gastronomia Local", "Transporte", "Reciclagem", "Pesca Sustentável"],
      sustainability: [
        "Apoio à pesca artesanal",
        "Uso de produtos biodegradáveis",
        "Horta orgânica própria",
        "Educação ambiental para hóspedes"
      ]
    },
    {
      id: 6,
      name: "Lodge Floresta Encantada",
      description: "Lodge boutique com apenas 8 suítes, garantindo experiência exclusiva e mínimo impacto ambiental. Vista panorâmica da floresta.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635318699.jpg?k=61ba49ec0d29eab0a63db211277ca524ca1405be9ea31301c1de8e6341b10223&o=",
      location: "Reserva Ducke",
      rating: 4.9,
      price: "R$ 520",
      amenities: ["Energia Solar", "Wi-Fi", "Restaurante", "Spa", "Trilhas", "Transporte", "Observação de Fauna"],
      sustainability: [
        "Capacidade limitada para baixo impacto",
        "Pesquisa científica colaborativa",
        "Neutralização de carbono",
        "Preservação integral do entorno"
      ]
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Wi-Fi": return <Wifi className="h-4 w-4" />;
      case "Transporte": return <Car className="h-4 w-4" />;
      case "Restaurante": return <Utensils className="h-4 w-4" />;
      case "Energia Solar": return <Sun className="h-4 w-4" />;
      case "Reciclagem": return <Recycle className="h-4 w-4" />;
      case "Gastronomia Local": return <Coffee className="h-4 w-4" />;
      default: return <Leaf className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-emerald-800">ComunidadeViva</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                <Home className="inline h-4 w-4 mr-1" />
                Início
              </Link>
              <Link href="/destinos" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                <MapPin className="inline h-4 w-4 mr-1" />
                Passeios
              </Link>
              <Link href="/hospedagem" className="text-emerald-900 font-semibold border-b-2 border-emerald-600">
                <Bed className="inline h-4 w-4 mr-1" />
                Hospedagem
              </Link>
              <Link href="/sobre" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                <Info className="inline h-4 w-4 mr-1" />
                Sobre Manaus
              </Link>
              <Link href="/contato" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                <Phone className="inline h-4 w-4 mr-1" />
                Contato
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-emerald-700 hover:text-emerald-900 hover:bg-emerald-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-emerald-100">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  Início
                </Link>
                <Link href="/destinos" className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Passeios
                </Link>
                <Link href="/hospedagem" className="text-emerald-900 font-semibold flex items-center">
                  <Bed className="h-4 w-4 mr-2" />
                  Hospedagem
                </Link>
                <Link href="/sobre" className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  Sobre Manaus
                </Link>
                <Link href="/contato" className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Contato
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_mq_yNB5ODOaS4TE8Yuf7HMlcOOIoGwN3Q&s')"
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hospedagem Sustentável
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light">
            Durma em harmonia com a natureza amazônica
          </p>
        </div>
      </section>

      {/* Sustainability Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Turismo Responsável
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Todas as nossas hospedagens são certificadas em práticas sustentáveis, 
            contribuindo para a preservação da Amazônia e o desenvolvimento das comunidades locais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">Energia Limpa</h3>
            <p className="text-gray-600">
              Energia solar e fontes renováveis em todas as acomodações sustentáveis.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <Recycle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">Gestão de Resíduos</h3>
            <p className="text-gray-600">
              Programas de reciclagem, compostagem e redução do uso de plásticos.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">Gastronomia Local</h3>
            <p className="text-gray-600">
              Ingredientes regionais, orgânicos e apoio aos produtores locais.
            </p>
          </div>
        </div>
      </section>

      {/* Hospedagens Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Nossas Hospedagens Ecológicas
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Escolha entre pousadas familiares, lodges de luxo e resorts ecológicos, 
            todos comprometidos com a sustentabilidade e a preservação ambiental.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {hospedagens.map((hospedagem) => (
            <div key={hospedagem.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${hospedagem.image}')`
                  }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-semibold text-gray-800">{hospedagem.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-emerald-800">{hospedagem.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">{hospedagem.price}</div>
                    <div className="text-sm text-gray-500">por noite</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hospedagem.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {hospedagem.description}
                </p>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Comodidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospedagem.amenities.map((amenity, index) => (
                      <span key={index} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm flex items-center">
                        {getAmenityIcon(amenity)}
                        <span className="ml-1">{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sustainability Practices */}
                <div className="mb-6">
                  <h4 className="font-semibold text-emerald-800 mb-2">Práticas Sustentáveis:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {hospedagem.sustainability.map((practice, index) => (
                      <li key={index} className="flex items-center">
                        <Leaf className="h-3 w-3 text-emerald-600 mr-2 flex-shrink-0" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Link 
                    href="/contato"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors duration-300"
                  >
                    Reservar
                  </Link>
                  <Link 
                    href="/contato"
                    className="flex-1 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-full font-semibold text-center transition-colors duration-300"
                  >
                    Mais Info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Reserve sua estadia sustentável
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Faça parte da preservação da Amazônia escolhendo hospedagem responsável
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contato"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Fazer Reserva
            </Link>
            <Link 
              href="/destinos"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver Passeios
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">ComunidadeViva</span>
              </div>
              <p className="text-emerald-200">
                Turismo sustentável na Amazônia, preservando a natureza para as futuras gerações.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-emerald-200 hover:text-white transition-colors">Início</Link></li>
                <li><Link href="/destinos" className="text-emerald-200 hover:text-white transition-colors">Passeios</Link></li>
                <li><Link href="/hospedagem" className="text-emerald-200 hover:text-white transition-colors">Hospedagem</Link></li>
                <li><Link href="/sobre" className="text-emerald-200 hover:text-white transition-colors">Sobre Manaus</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hospedagem</h4>
              <ul className="space-y-2">
                <li><span className="text-emerald-200">Pousadas Ecológicas</span></li>
                <li><span className="text-emerald-200">Lodges Sustentáveis</span></li>
                <li><span className="text-emerald-200">Resorts Responsáveis</span></li>
                <li><span className="text-emerald-200">Hospedagem Comunitária</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="text-emerald-200">WhatsApp: (92) 99999-9999</li>
                <li className="text-emerald-200">Email: comunidadeviva@gmail.com</li>
                <li><Link href="/contato" className="text-emerald-200 hover:text-white transition-colors">Formulário de Contato</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-800 mt-8 pt-8 text-center">
            <p className="text-emerald-200">
              © 2024 ComunidadeViva. Todos os direitos reservados. Turismo sustentável na Amazônia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}