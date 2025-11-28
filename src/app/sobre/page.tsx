"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, MapPin, Home, Phone, Info, Bed, Clock, Users, Utensils, Building, Heart, TreePine } from "lucide-react";

export default function SobrePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const pontosTuristicos = [
    {
      name: "Teatro Amazonas",
      description: "Majestoso teatro de ópera inaugurado em 1896, símbolo da riqueza da época da borracha e patrimônio histórico de Manaus.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItXQfB5j8-6LfD5PctHdrPmiEJd73AW4HCQ&s",
      icon: <Building className="h-6 w-6" />
    },
    {
      name: "Mercado Municipal Adolpho Lisboa",
      description: "Mercado histórico inspirado no mercado de Les Halles de Paris, onde você encontra produtos típicos da região amazônica.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwOEN3rCvHmc0r1zXg0QZvAo_hqC6kkr-mQ&s",
      icon: <Utensils className="h-6 w-6" />
    },
    {
      name: "Porto de Manaus",
      description: "Portal de entrada para a Amazônia, onde embarcações de todos os tamanhos conectam comunidades ribeirinhas.",
      image: "https://portodemanaus.com.br/wp-content/uploads/2024/07/porto-manaus-2-1024x768.jpg",
      icon: <MapPin className="h-6 w-6" />
    }
  ];

  const pratosTipicos = [
    {
      name: "Tambaqui",
      description: "Peixe amazônico preparado de diversas formas, desde assado na brasa até em caldeirada.",
      image: "https://ro.agenciasebrae.com.br/wp-content/uploads/sites/22/2023/08/WhatsApp-Image-2023-08-17-at-20.34.34-1_p4145_cover_image_resized.jpeg"
    },
    {
      name: "Tucumã",
      description: "Fruto da palmeira, consumido com farinha de tapioca e muito apreciado pelos manauaras.",
      image: "https://proamazonia.com.br/wp-content/uploads/2024/05/Tucuma.jpg"
    },
    {
      name: "Pirarucu",
      description: "Conhecido como o bacalhau da Amazônia, preparado seco e salgado ou fresco.",
      image: "https://www.infoescola.com/wp-content/uploads/2010/06/pirarucu_757650421.jpg"
    },
    {
      name: "Açaí",
      description: "Consumido doce ou salgado, acompanhado de farinha de tapioca e peixe.",
      image: "https://fundacaocargill.org.br/wp-content/uploads/2023/07/acai-conheca-a-versatilidade-do-alimento-1.jpg"
    },
    {
      name: "Cupuaçu",
      description: "Fruto amazônico usado em sucos, sorvetes e doces, com sabor único e marcante.",
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/KOR3GJJBZREM5KECNNLAATBLLQ.jpeg"
    },
    {
      name: "Guaraná",
      description: "Fruto nativo da Amazônia, base da famosa bebida e com propriedades energéticas.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHsm8xZH3QlGp6BTJXapZdEiHFmqKG8ttag&s"
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
              <Link href="/destinos" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                <MapPin className="inline h-4 w-4 mr-1" />
                Passeios
              </Link>
              <Link href="/hospedagem" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                <Bed className="inline h-4 w-4 mr-1" />
                Hospedagem
              </Link>
              <Link href="/sobre" className="text-emerald-900 font-semibold border-b-2 border-emerald-600">
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
                <Link href="/sobre" className="text-emerald-900 font-semibold flex items-center">
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
            backgroundImage: "url('https://www.educacaonamao.com.br/wp-content/uploads/2019/04/Floresta-Amazonica2.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Sobre Manaus
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light">
            A capital da Amazônia e portal para a maior floresta tropical do mundo
          </p>
        </div>
      </section>

      {/* História de Manaus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              História e Origem
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Manaus, capital do estado do Amazonas, foi fundada em 1669 como Forte de São José da Barra do Rio Negro. 
                A cidade viveu seu período áureo durante o Ciclo da Borracha (1879-1912), quando se tornou uma das cidades 
                mais ricas do Brasil.
              </p>
              <p>
                Durante esse período, foram construídos monumentos icônicos como o Teatro Amazonas e o Mercado Municipal, 
                que hoje são símbolos da riqueza cultural e histórica da região. A cidade foi planejada para rivalizar 
                com as grandes capitais europeias da época.
              </p>
              <p>
                Hoje, Manaus é o principal centro urbano da Amazônia, com mais de 2 milhões de habitantes, 
                sendo o portal de entrada para explorar a maior biodiversidade do planeta de forma sustentável.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="h-48 bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: "url('https://b3577058.smushcdn.com/3577058/wp-content/uploads/2023/01/o-que-fazer-em-manaus-12-1-720x511.jpg?lossy=1&strip=0&webp=1')"
              }}
            ></div>
            <div 
              className="h-48 bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: "url('https://imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2014/04/10/281486/20140410170935191945a.jpg')"
              }}
            ></div>
            <div 
              className="h-48 bg-cover bg-center rounded-2xl col-span-2"
              style={{
                backgroundImage: "url('https://i0.wp.com/cabocloshousecolodge.com/wp-content/uploads/2022/07/manaus-teatro-amazonas-manaus.am_.gov_.br_-1.jpg?fit=1000%2C610&ssl=1')"
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Pontos Turísticos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Principais Pontos Turísticos
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Descubra os marcos históricos e culturais que fazem de Manaus uma cidade única na Amazônia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pontosTuristicos.map((ponto, index) => (
              <div key={index} className="bg-gradient-to-b from-emerald-50 to-teal-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${ponto.image}')`
                  }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      {ponto.icon}
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800">{ponto.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {ponto.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura e Tradições */}
<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="text-center mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
      Cultura Amazônica
    </h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
      A rica cultura de Manaus é uma mistura única de tradições indígenas,
      influências europeias e a sabedoria das comunidades ribeirinhas.
    </p>
  </div>

  {/* GRID COM IMAGENS */}
  <div className="grid lg:grid-cols-3 gap-10">

    {/* Card 1 - Povos Tradicionais */}
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
      <img
        src="https://www.amazonastur.am.gov.br/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-18-at-13.20.42.jpeg"
        alt="Povos Tradicionais"
        className="w-full h-56 object-cover"
      />

      <div className="p-8">
        <h3 className="text-2xl font-bold text-emerald-800 mb-4">
          Povos Tradicionais
        </h3>
        <p className="text-gray-600 leading-relaxed">
          As comunidades indígenas e ribeirinhas preservam conhecimentos
          ancestrais sobre plantas medicinais, pesca sustentável e artesanato,
          transmitidos de geração em geração.
        </p>
      </div>
    </div>

    {/* Card 2 - Festivais */}
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
      <img
        src="https://fringe.com.br/wp-content/uploads/2025/06/garantido-e-caprichoso-no-festival-de-parintins-15332_800x450.webp"
        alt="Festivais Amazônicos"
        className="w-full h-56 object-cover"
      />

      <div className="p-8">
        <h3 className="text-2xl font-bold text-emerald-800 mb-4">
          Festivais
        </h3>
        <p className="text-gray-600 leading-relaxed">
          O Festival de Parintins, festas juninas e celebrações regionais
          mostram a força cultural da Amazônia com música, dança e culinária.
        </p>
      </div>
    </div>

    {/* Card 3 - Artesanato */}
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
      <img
        src="https://www.agenciaamazonas.am.gov.br/wp-content/uploads/2025/01/ArtesanatoAM1-FotoJamilleSilva.jpg"
        alt="Artesanato Amazônico"
        className="w-full h-56 object-cover"
      />

      <div className="p-8">
        <h3 className="text-2xl font-bold text-emerald-800 mb-4">
          Artesanato
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Cerâmica marajoara, cestaria indígena e biojoias feitas de sementes
          amazônicas representam a criatividade sustentável da região.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* Gastronomia */}
      <section className="py-20 bg-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Gastronomia Amazônica
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Sabores únicos da floresta que contam a história e tradição dos povos amazônicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pratosTipicos.map((prato, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                
                {/* IMAGEM DO PRATO */}
                <img 
                  src={prato.image} 
                  alt={prato.name}
                  className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                />

                <h3 className="text-xl font-bold text-white mb-3">{prato.name}</h3>
                <p className="text-emerald-100 leading-relaxed">
                  {prato.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turismo Responsável */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <TreePine className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Turismo Responsável em Manaus
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nosso compromisso é promover um turismo que preserve a Amazônia e beneficie as comunidades locais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Respeito às Comunidades</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Valorização dos conhecimentos tradicionais e cultura local
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Geração de renda direta para famílias ribeirinhas
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Apoio a projetos de educação e saúde comunitária
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Preservação das tradições culturais amazônicas
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Preservação Ambiental</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Práticas de turismo de baixo impacto ambiental
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Educação ambiental para visitantes
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Contribuição para projetos de conservação
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Monitoramento da biodiversidade local
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Venha conhecer Manaus
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Descubra a capital da Amazônia e contribua para a preservação da maior floresta tropical do mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/destinos"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explorar Destinos
            </Link>
            <Link 
              href="/contato"
              className="bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Planejar Viagem
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
                <li><Link href="/sobre" className="text-emerald-200 hover:text-white transition-colors">Sobre</Link></li>
                <li><Link href="/contato" className="text-emerald-200 hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>Email: contato@ecomanaus.com</li>
                <li>Telefone: (92) 99999-9999</li>
                <li>Endereço: Manaus - AM</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
