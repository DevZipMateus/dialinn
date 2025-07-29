
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
      imagem: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2088&auto=format&fit=crop',
      descricao: 'Vestido midi em tecido fluido, perfeito para ocasiões especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul Marinho', 'Vinho']
    },
    {
      id: 2,
      nome: 'Blusa Sophistique',
      categoria: 'blusas',
      preco: 'R$ 89,90',
      imagem: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070&auto=format&fit=crop',
      descricao: 'Blusa social em crepe com detalhes únicos',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Rosa', 'Nude']
    },
    {
      id: 3,
      nome: 'Conjunto Power',
      categoria: 'conjuntos',
      preco: 'R$ 249,90',
      imagem: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop',
      descricao: 'Conjunto blazer e calça para a mulher moderna',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Cinza', 'Bege']
    },
    {
      id: 4,
      nome: 'Saia Charm',
      categoria: 'saias',
      preco: 'R$ 119,90',
      imagem: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d86?q=80&w=2070&auto=format&fit=crop',
      descricao: 'Saia midi plissada com caimento perfeito',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Caramelo', 'Verde']
    },
    {
      id: 5,
      nome: 'Calça Comfort',
      categoria: 'calcas',
      preco: 'R$ 149,90',
      imagem: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070&auto=format&fit=crop',
      descricao: 'Calça de alfaiataria com cintura alta',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Marinho', 'Cinza']
    },
    {
      id: 6,
      nome: 'Vestido Grace',
      categoria: 'vestidos',
      preco: 'R$ 219,90',
      imagem: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2088&auto=format&fit=crop',
      descricao: 'Vestido longo para eventos especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Marsala', 'Preto', 'Azul']
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
