"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, MapPin, Home, Phone, Info, Bed, Mail, MessageCircle, Clock, Send, User, Calendar } from "lucide-react";
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function ContatoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    destino: "",
    dataViagem: "",
    numeroPessoas: "",
    mensagem: ""
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    // Reset do formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      destino: "",
      dataViagem: "",
      numeroPessoas: "",
      mensagem: ""
    });
  };

  const destinos = [
    "Encontro das Águas",
    "Presidente Figueiredo",
    "Comunidades Ribeirinhas",
    "Observação de Botos",
    "Pesca Ecológica",
    "Trilhas na Floresta",
    "Anavilhanas",
    "Pacote Personalizado"
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
              <Link href="/sobre" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                <Info className="inline h-4 w-4 mr-1" />
                Sobre Manaus
              </Link>
              <Link href="/contato" className="text-emerald-900 font-semibold border-b-2 border-emerald-600">
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
                <Link href="/contato" className="text-emerald-900 font-semibold flex items-center">
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
            backgroundImage: "url('https://www.ipaam.am.gov.br/wp-content/uploads/2018/02/pescaria.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Contato & Agendamento
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light">
            Planeje sua aventura amazônica conosco
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-8">
              Entre em Contato
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">Telefone & WhatsApp</h3>
                  <p className="text-gray-600 mb-2">(92) 99999-9999</p>
                  <p className="text-sm text-gray-500">Atendimento de segunda a sábado, das 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">E-mail</h3>
                  <p className="text-gray-600 mb-2">comunidadeviva@gmail.com</p>
                  <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">Localização</h3>
                  <p className="text-gray-600 mb-2">Centro de Manaus, AM</p>
                  <p className="text-sm text-gray-500">Próximo ao Porto de Manaus</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600 mb-1">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600 mb-1">Sábado: 8h às 14h</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 space-y-4">
              <a 
                href="https://wa.me/5592999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Conversar no WhatsApp
              </a>
              
              <a 
                href="mailto:contato@ecomanaus.com"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                Enviar E-mail
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-800 mb-8">
              Agende seu Passeio
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="(92) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="numeroPessoas" className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de Pessoas
                  </label>
                  <select
                    id="numeroPessoas"
                    name="numeroPessoas"
                    value={formData.numeroPessoas}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="1">1 pessoa</option>
                    <option value="2">2 pessoas</option>
                    <option value="3-5">3 a 5 pessoas</option>
                    <option value="6-10">6 a 10 pessoas</option>
                    <option value="10+">Mais de 10 pessoas</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="destino" className="block text-sm font-semibold text-gray-700 mb-2">
                    Destino de Interesse
                  </label>
                  <select
                    id="destino"
                    name="destino"
                    value={formData.destino}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Selecione um destino</option>
                    {destinos.map((destino, index) => (
                      <option key={index} value={destino}>{destino}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="dataViagem" className="block text-sm font-semibold text-gray-700 mb-2">
                    Data Preferida
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      id="dataViagem"
                      name="dataViagem"
                      value={formData.dataViagem}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem Adicional
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Conte-nos mais sobre suas expectativas, necessidades especiais ou dúvidas..."
                ></textarea>
              </div>

              
            </form>
                      {/* Botões Rápidos de Contato */}
          <div className="mt-8 space-y-4">
            <a
              href="https://wa.me/5592999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center transition-colors duration-300"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Conversar no WhatsApp
            </a>

            <a
              href="mailto:contato@ecomanaus.com"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center transition-colors duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              Enviar E-mail
            </a>
          </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
        Nossa Localização
      </h2>
      <p className="text-lg text-gray-700">
        Estamos localizados no coração de Manaus, próximo aos principais pontos de embarque
      </p>
    </div>

    <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=69020-030&output=embed"
      ></iframe>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-700">
            Tire suas dúvidas sobre nossos passeios e serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">
              Qual a melhor época para visitar?
            </h3>
            <p className="text-gray-600">
              A Amazônia pode ser visitada o ano todo. A época seca (junho a novembro) é ideal para trilhas, 
              enquanto a época chuvosa (dezembro a maio) oferece navegação mais ampla pelos rios.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">
              Os passeios incluem alimentação?
            </h3>
            <p className="text-gray-600">
              Sim, nossos pacotes incluem refeições com ingredientes locais e orgânicos, 
              preparadas por comunidades ribeirinhas, proporcionando uma experiência gastronômica autêntica.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">
              É necessário algum preparo físico?
            </h3>
            <p className="text-gray-600">
              Oferecemos passeios para todos os níveis. Temos opções leves como navegação fluvial 
              e outras mais desafiadoras como trilhas longas. Informamos o nível de dificuldade de cada roteiro.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">
              Como funciona o transporte?
            </h3>
            <p className="text-gray-600">
              Incluímos transporte terrestre e fluvial em todos os pacotes. 
              Utilizamos embarcações seguras e veículos adequados para cada tipo de terreno amazônico.
            </p>
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
              <h4 className="text-lg font-semibold mb-4">Contato Rápido</h4>
              <ul className="space-y-2">
                <li><a href="https://wa.me/5592999999999" className="text-emerald-200 hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="mailto:contato@ecomanaus.com" className="text-emerald-200 hover:text-white transition-colors">E-mail</a></li>
                <li><span className="text-emerald-200">Telefone: (92) 99999-9999</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2">
                <li><span className="text-emerald-200">Instagram: ComunidadeViva</span></li>
                <li><span className="text-emerald-200">Facebook: Comunidade Viva</span></li>
                <li><span className="text-emerald-200">YouTube: Comunidade Viva</span></li>
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