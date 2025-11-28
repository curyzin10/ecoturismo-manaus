"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, MapPin, Home, Phone, Info, Bed } from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-emerald-800">ComunidadeViva</span>
            </div>

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
                <Link href="/destinos" className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center">
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://t3.ftcdn.net/jpg/10/42/60/56/360_F_1042605634_GsdRpAjAkFudiSCCZfODidP0Pp0WnbRB.jpg"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Viva o ecoturismo em Manaus
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light">
            A natureza te espera!
          </p>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubra a majestosa Floresta Amazônica através de experiências sustentáveis que preservam nossa biodiversidade única.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/destinos"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explorar Destinos
            </Link>
            <Link 
              href="/contato"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Agendar Passeio
            </Link>
          </div>
        </div>
      </section>

      {/* About Ecotourism Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Ecoturismo Responsável
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            O ecoturismo é mais que uma viagem - é um compromisso com a preservação da Amazônia. 
            Cada passeio contribui diretamente para a conservação da floresta e o desenvolvimento 
            sustentável das comunidades locais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">Preservação</h3>
            <p className="text-gray-600">
              Contribua para a conservação da biodiversidade amazônica através do turismo consciente.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">Comunidades</h3>
            <p className="text-gray-600">
              Apoie as comunidades ribeirinhas e conheça a cultura tradicional amazônica.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">Sustentabilidade</h3>
            <p className="text-gray-600">
              Hospedagem ecológica e práticas sustentáveis em todos os nossos roteiros.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore a Amazônia
            </h2>
            <p className="text-xl text-emerald-100">
              Escolha sua próxima aventura sustentável
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/destinos"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passeios</h3>
              <p className="text-emerald-100">Encontro das Águas, trilhas e muito mais</p>
            </Link>

            <Link 
              href="/hospedagem"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Bed className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hospedagem</h3>
              <p className="text-emerald-100">Pousadas ecológicas e sustentáveis</p>
            </Link>

            <Link 
              href="/sobre"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Info className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sobre Manaus</h3>
              <p className="text-emerald-100">História, cultura e gastronomia</p>
            </Link>

            <Link 
              href="/contato"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contato</h3>
              <p className="text-emerald-100">Agende seu passeio conosco</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Destinos Imperdíveis
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça alguns dos principais atrativos do ecoturismo em Manaus e região
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://f.i.uol.com.br/fotografia/2024/08/15/172375259266be60906d74e_1723752592_3x2_rt.jpg')"
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Encontro das Águas</h3>
              <p className="text-gray-600 mb-4">
                Fenômeno natural único onde as águas dos rios Negro e Solimões se encontram sem se misturar.
              </p>
              <Link 
                href="/destinos"
                className="text-emerald-600 hover:text-emerald-800 font-semibold transition-colors"
              >
                Saiba mais →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url(https://www.aventuraspelonossomundo.com.br/wp-content/uploads/2021/08/Caverna-do-Maroaga-Presidente-Figueiredo-2.jpg"
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Presidente Figueiredo</h3>
              <p className="text-gray-600 mb-4">
                Trilhas ecológicas e cachoeiras cristalinas em meio à exuberante floresta amazônica.
              </p>
              <Link 
                href="/destinos"
                className="text-emerald-600 hover:text-emerald-800 font-semibold transition-colors"
              >
                Saiba mais →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://arquidiocesedemanaus.org.br/wp-content/uploads/2019/07/cats.jpg')"
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Comunidades Ribeirinhas</h3>
              <p className="text-gray-600 mb-4">
                Vivência autêntica com as comunidades tradicionais da Amazônia e sua rica cultura.
              </p>
              <Link 
                href="/destinos"
                className="text-emerald-600 hover:text-emerald-800 font-semibold transition-colors"
              >
                Saiba mais →
              </Link>
            </div>
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