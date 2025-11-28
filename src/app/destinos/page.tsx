"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, MapPin, Home, Phone, Info, Bed, Camera, Fish, Waves, TreePine, Users, Mountain } from "lucide-react";

export default function DestinosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const destinos = [
    {
      id: 1,
      title: "Encontro das Águas",
      description: "Fenômeno natural único onde as águas dos rios Negro e Solimões correm lado a lado por quilômetros sem se misturar, criando um espetáculo visual impressionante.",
      image: "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/35464b3be0044f5a8a689a425b5247a6.jpg",
      duration: "4-6 horas",
      difficulty: "Fácil",
      highlights: ["Passeio de barco", "Observação da fauna", "Fotografia"],
      icon: <Waves className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Presidente Figueiredo",
      description: "Conhecido como a 'Terra das Cachoeiras', oferece mais de 100 quedas d'água, trilhas ecológicas e cavernas em meio à floresta preservada.",
      image: "https://www.aventuraspelonossomundo.com.br/wp-content/uploads/2021/08/Caverna-do-Maroaga-Presidente-Figueiredo-2.jpg",
      duration: "1-2 dias",
      difficulty: "Moderado",
      highlights: ["Cachoeiras", "Trilhas ecológicas", "Cavernas"],
      icon: <Mountain className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Comunidades Ribeirinhas",
      description: "Vivência autêntica com as comunidades tradicionais da Amazônia, conhecendo seus costumes, artesanato e modo de vida sustentável.",
      image: "https://arquidiocesedemanaus.org.br/wp-content/uploads/2019/07/cats.jpg",
      duration: "1-3 dias",
      difficulty: "Fácil",
      highlights: ["Cultura local", "Artesanato", "Gastronomia típica"],
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Observação de Botos",
      description: "Encontro mágico com os botos-cor-de-rosa em seu habitat natural, uma experiência única de conexão com a vida aquática amazônica.",
      image: "https://www.penaestrada.blog.br/wp-content/uploads/2025/02/nadar-com-botos-01.jpg",
      duration: "3-4 horas",
      difficulty: "Fácil",
      highlights: ["Botos-cor-de-rosa", "Vida aquática", "Interação responsável"],
      icon: <Fish className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Pesca Ecológica",
      description: "Pesca sustentável de piranhas e outros peixes amazônicos, sempre com práticas de pesque-e-solte para preservação das espécies.",
      image: "https://manausjungletours.com/wp-content/uploads/2024/09/WhatsApp-Image-2018-10-26-at-14.35.14.jpeg",
      duration: "4-5 horas",
      difficulty: "Fácil",
      highlights: ["Pesca sustentável", "Peixes amazônicos", "Pesque-e-solte"],
      icon: <Fish className="h-6 w-6" />
    },
    {
      id: 6,
      title: "Trilhas na Floresta",
      description: "Caminhadas guiadas pela floresta amazônica, descobrindo plantas medicinais, árvores centenárias e a rica biodiversidade local.",
      image: "https://www.amazonasemais.com.br/wp-content/uploads/2017/11/musa-2.jpg",
      duration: "2-6 horas",
      difficulty: "Moderado a Difícil",
      highlights: ["Biodiversidade", "Plantas medicinais", "Árvores centenárias"],
      icon: <TreePine className="h-6 w-6" />
    }
  ];

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
              <Link href="/destinos" className="text-emerald-900 font-semibold border-b-2 border-emerald-600">
                <MapPin className="inline h-4 w-4 mr-1" />
                Passeios
              </Link>
              <Link href="/hospedagem" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
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
                <Link href="/destinos" className="text-emerald-900 font-semibold flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Passeios
                </Link>
                <Link href="/hospedagem" className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center">
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
            backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c3/ca/59/cachoeira-natal-2.jpg?w=900&h=500&s=1')"
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Destinos & Passeios
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light">
            Explore a Amazônia de forma sustentável e responsável
          </p>
        </div>
      </section>

      {/* Destinos Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Principais Roteiros Ecológicos
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Cada passeio é cuidadosamente planejado para oferecer experiências únicas 
            enquanto preserva o meio ambiente e beneficia as comunidades locais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {destinos.map((destino) => (
            <div key={destino.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div 
                    className="h-64 md:h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${destino.image}')`
                    }}
                  ></div>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      {destino.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-800">{destino.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destino.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <span><strong>Duração:</strong> {destino.duration}</span>
                      <span><strong>Dificuldade:</strong> {destino.difficulty}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-emerald-800 mb-2">Destaques:</h4>
                      <div className="flex flex-wrap gap-2">
                        {destino.highlights.map((highlight, index) => (
                          <span key={index} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="/contato"
                    className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Saiba mais
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
            Pronto para sua aventura amazônica?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Entre em contato conosco e planeje seu roteiro personalizado de ecoturismo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contato"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Agendar Passeio
            </Link>
            <Link 
              href="/hospedagem"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver Hospedagem
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
              <h4 className="text-lg font-semibold mb-4">Destinos</h4>
              <ul className="space-y-2">
                <li><span className="text-emerald-200">Encontro das Águas</span></li>
                <li><span className="text-emerald-200">Presidente Figueiredo</span></li>
                <li><span className="text-emerald-200">Anavilhanas</span></li>
                <li><span className="text-emerald-200">Comunidades Ribeirinhas</span></li>
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
              © 2024 EcoManaus. Todos os direitos reservados. Turismo sustentável na Amazônia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}