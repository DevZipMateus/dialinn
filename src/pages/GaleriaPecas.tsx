import React, { useState } from 'react';
import { ArrowLeft, Filter, Search, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

interface Peca {
  id: number;
  nome: string;
  categoria: string;
  preco: string;
  imagem: string;
  descricao: string;
  tamanhos: string[];
  cores: string[];
}

const GaleriaPecas = () => {
  const navigate = useNavigate();
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todas');
  const [busca, setBusca] = useState<string>('');

  const pecas: Peca[] = [
    {
      id: 1,
      nome: 'Vestido Elegance',
      categoria: 'vestidos',
      preco: 'R$ 189,90',
      imagem: '/lovable-uploads/galeria/1002512835154927.jpeg',
      descricao: 'Vestido midi em tecido fluido, perfeito para ocasiões especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul Marinho', 'Vinho']
    },
    {
      id: 2,
      nome: 'Blusa Sophistique',
      categoria: 'blusas',
      preco: 'R$ 89,90',
      imagem: '/lovable-uploads/galeria/1038066235160988.jpeg',
      descricao: 'Blusa social em crepe com detalhes únicos',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Rosa', 'Nude']
    },
    {
      id: 3,
      nome: 'Conjunto Power',
      categoria: 'conjuntos',
      preco: 'R$ 249,90',
      imagem: '/lovable-uploads/galeria/1049792647143677.jpeg',
      descricao: 'Conjunto blazer e calça para a mulher moderna',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Cinza', 'Bege']
    },
    {
      id: 4,
      nome: 'Saia Charm',
      categoria: 'saias',
      preco: 'R$ 119,90',
      imagem: '/lovable-uploads/galeria/1056777893278555.jpeg',
      descricao: 'Saia midi plissada com caimento perfeito',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Caramelo', 'Verde']
    },
    {
      id: 5,
      nome: 'Calça Comfort',
      categoria: 'calcas',
      preco: 'R$ 149,90',
      imagem: '/lovable-uploads/galeria/1089543675937845.jpeg',
      descricao: 'Calça de alfaiataria com cintura alta',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Marinho', 'Cinza']
    },
    {
      id: 6,
      nome: 'Vestido Grace',
      categoria: 'vestidos',
      preco: 'R$ 219,90',
      imagem: '/lovable-uploads/galeria/1093633756076567.jpeg',
      descricao: 'Vestido longo para eventos especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Marsala', 'Preto', 'Azul']
    },
    {
      id: 7,
      nome: 'Blusa Premium',
      categoria: 'blusas',
      preco: 'R$ 129,90',
      imagem: '/lovable-uploads/galeria/1100497052019216.jpeg',
      descricao: 'Blusa premium com acabamento refinado',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Off White', 'Creme']
    },
    {
      id: 8,
      nome: 'Conjunto Luxo',
      categoria: 'conjuntos',
      preco: 'R$ 299,90',
      imagem: '/lovable-uploads/galeria/1102154001782910.jpeg',
      descricao: 'Conjunto executivo de alta qualidade',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul Marinho', 'Cinza Escuro']
    },
    {
      id: 9,
      nome: 'Saia Moderna',
      categoria: 'saias',
      preco: 'R$ 139,90',
      imagem: '/lovable-uploads/galeria/1126123402992097.jpeg',
      descricao: 'Saia moderna com design contemporâneo',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Nude', 'Terracota']
    },
    {
      id: 10,
      nome: 'Calça Elegante',
      categoria: 'calcas',
      preco: 'R$ 169,90',
      imagem: '/lovable-uploads/galeria/1202396691657745.jpeg',
      descricao: 'Calça elegante para ocasiões especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul', 'Vinho']
    },
    {
      id: 11,
      nome: 'Vestido Festa',
      categoria: 'vestidos',
      preco: 'R$ 259,90',
      imagem: '/lovable-uploads/galeria/1238623704243377.jpeg',
      descricao: 'Vestido perfeito para festas e eventos',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Dourado', 'Prata', 'Rose Gold']
    },
    {
      id: 12,
      nome: 'Blusa Casual',
      categoria: 'blusas',
      preco: 'R$ 79,90',
      imagem: '/lovable-uploads/galeria/1247813509891765.jpeg',
      descricao: 'Blusa casual para o dia a dia',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Listrado', 'Floral']
    },
    {
      id: 13,
      nome: 'Conjunto Verão',
      categoria: 'conjuntos',
      preco: 'R$ 199,90',
      imagem: '/lovable-uploads/galeria/1250929439639604.jpeg',
      descricao: 'Conjunto leve para os dias quentes',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Coral', 'Azul Claro']
    },
    {
      id: 14,
      nome: 'Saia Longa',
      categoria: 'saias',
      preco: 'R$ 159,90',
      imagem: '/lovable-uploads/galeria/1260948015769338.jpeg',
      descricao: 'Saia longa fluida e confortável',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Floral', 'Listrado', 'Liso']
    },
    {
      id: 15,
      nome: 'Calça Social',
      categoria: 'calcas',
      preco: 'R$ 189,90',
      imagem: '/lovable-uploads/galeria/1269112174870629.jpeg',
      descricao: 'Calça social de alta qualidade',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Cinza', 'Azul Marinho']
    }
  ];

  const categorias = [
    { key: 'todas', nome: 'Todas as Peças' },
    { key: 'vestidos', nome: 'Vestidos' },
    { key: 'blusas', nome: 'Blusas' },
    { key: 'conjuntos', nome: 'Conjuntos' },
    { key: 'saias', nome: 'Saias' },
    { key: 'calcas', nome: 'Calças' }
  ];

  const pecasFiltradas = pecas.filter(peca => {
    const matchCategoria = filtroCategoria === 'todas' || peca.categoria === filtroCategoria;
    const matchBusca = peca.nome.toLowerCase().includes(busca.toLowerCase()) ||
                      peca.descricao.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  const handleWhatsAppClick = (peca: Peca) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de mais informações sobre a peça:\n\n${peca.nome}\nPreço: ${peca.preco}\n\nPoderia me enviar mais detalhes?`
    );
    const whatsappNumber = "5562994518406";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gold-50 to-gold-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Início
            </button>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Galeria de <span className="text-gradient">Peças</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubra nossa coleção exclusiva de peças elegantes, 
              criadas especialmente para realçar sua beleza única.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Busca */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar peças..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
            </div>

            {/* Filtros de Categoria */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="text-gray-500 w-5 h-5" />
              {categorias.map((categoria) => (
                <button
                  key={categoria.key}
                  onClick={() => setFiltroCategoria(categoria.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filtroCategoria === categoria.key
                      ? 'bg-gold-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gold-100 hover:text-gold-700'
                  }`}
                >
                  {categoria.nome}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Peças */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pecasFiltradas.map((peca) => (
              <div
                key={peca.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={peca.imagem}
                    alt={peca.nome}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    {peca.nome}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {peca.descricao}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gold-600">
                      {peca.preco}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {peca.categoria.toUpperCase()}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-1">Tamanhos disponíveis:</p>
                    <div className="flex flex-wrap gap-1">
                      {peca.tamanhos.map((tamanho) => (
                        <span
                          key={tamanho}
                          className="px-2 py-1 bg-gold-100 text-gold-700 text-xs rounded"
                        >
                          {tamanho}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(peca)}
                    className="w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>

          {pecasFiltradas.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">
                Nenhuma peça encontrada com os filtros aplicados.
              </p>
              <button
                onClick={() => {
                  setFiltroCategoria('todas');
                  setBusca('');
                }}
                className="text-gold-600 hover:text-gold-700 font-medium"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GaleriaPecas;
