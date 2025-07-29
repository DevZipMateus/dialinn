import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ArrowLeft, Filter, Search, Heart, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import OptimizedGalleryImage from '../components/OptimizedGalleryImage';
import OptimizedVideoCarousel from '../components/OptimizedVideoCarousel';

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
  const [imagemErros, setImagemErros] = useState<Set<number>>(new Set());
  const [debugMode, setDebugMode] = useState(false);

  // Debug information
  useEffect(() => {
    if (debugMode) {
      console.log('=== GALLERY DEBUG MODE ENABLED ===');
      console.log('Total pieces:', pecas.length);
      console.log('Filtered pieces:', pecasFiltradas.length);
      console.log('Image errors:', Array.from(imagemErros));
      console.log('Current URL:', window.location.href);
      console.log('Base URL:', window.location.origin);
    }
  }, [debugMode, imagemErros]);

  const pecas: Peca[] = [
    {
      id: 1,
      nome: 'Vestido Elegante Rosa',
      categoria: 'vestidos',
      preco: 'R$ 189,90',
      imagem: '/lovable-uploads/galeria/595012070155187.jpeg',
      descricao: 'Vestido midi em tecido fluido, perfeito para ocasiões especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Rosa', 'Preto', 'Azul']
    },
    {
      id: 2,
      nome: 'Conjunto Executivo',
      categoria: 'conjuntos',
      preco: 'R$ 249,90',
      imagem: '/lovable-uploads/galeria/611830828639877.jpeg',
      descricao: 'Conjunto blazer e calça para a mulher moderna',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Marinho', 'Cinza']
    },
    {
      id: 3,
      nome: 'Blusa Social Premium',
      categoria: 'blusas',
      preco: 'R$ 129,90',
      imagem: '/lovable-uploads/galeria/656056254173424.jpeg',
      descricao: 'Blusa social em crepe com detalhes únicos',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Rosa', 'Nude']
    },
    {
      id: 4,
      nome: 'Vestido Festa Dourado',
      categoria: 'vestidos',
      preco: 'R$ 259,90',
      imagem: '/lovable-uploads/galeria/673514409065395.jpeg',
      descricao: 'Vestido perfeito para festas e eventos especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Dourado', 'Prata', 'Rose Gold']
    },
    {
      id: 5,
      nome: 'Calça Alfaiataria',
      categoria: 'calcas',
      preco: 'R$ 149,90',
      imagem: '/lovable-uploads/galeria/683387854776260.jpeg',
      descricao: 'Calça de alfaiataria com cintura alta',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Marinho', 'Cinza']
    },
    {
      id: 6,
      nome: 'Saia Midi Elegante',
      categoria: 'saias',
      preco: 'R$ 119,90',
      imagem: '/lovable-uploads/galeria/703869159331200.jpeg',
      descricao: 'Saia midi plissada com caimento perfeito',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Caramelo', 'Verde']
    },
    {
      id: 7,
      nome: 'Blusa Casual Chic',
      categoria: 'blusas',
      preco: 'R$ 89,90',
      imagem: '/lovable-uploads/galeria/711996638497079.jpeg',
      descricao: 'Blusa casual para o dia a dia com estilo',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Listrado', 'Floral']
    },
    {
      id: 8,
      nome: 'Conjunto Verão',
      categoria: 'conjuntos',
      preco: 'R$ 199,90',
      imagem: '/lovable-uploads/galeria/722563677357129.jpeg',
      descricao: 'Conjunto leve para os dias quentes',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Coral', 'Azul Claro']
    },
    {
      id: 9,
      nome: 'Vestido Longo Elegante',
      categoria: 'vestidos',
      preco: 'R$ 219,90',
      imagem: '/lovable-uploads/galeria/725605296929145.jpeg',
      descricao: 'Vestido longo para eventos especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Marsala', 'Preto', 'Azul']
    },
    {
      id: 10,
      nome: 'Saia Plissada',
      categoria: 'saias',
      preco: 'R$ 139,90',
      imagem: '/lovable-uploads/galeria/727078570122692.jpeg',
      descricao: 'Saia plissada moderna com design contemporâneo',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Nude', 'Terracota']
    },
    {
      id: 11,
      nome: 'Blusa Sofisticada',
      categoria: 'blusas',
      preco: 'R$ 109,90',
      imagem: '/lovable-uploads/galeria/739245238702349.jpeg',
      descricao: 'Blusa sofisticada com acabamento refinado',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Off White', 'Creme']
    },
    {
      id: 12,
      nome: 'Calça Social Premium',
      categoria: 'calcas',
      preco: 'R$ 169,90',
      imagem: '/lovable-uploads/galeria/740202325265066.jpeg',
      descricao: 'Calça social de alta qualidade',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Cinza', 'Azul Marinho']
    },
    {
      id: 13,
      nome: 'Vestido Cocktail',
      categoria: 'vestidos',
      preco: 'R$ 199,90',
      imagem: '/lovable-uploads/galeria/744764928137543.jpeg',
      descricao: 'Vestido perfeito para cocktails e eventos',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Vinho', 'Azul']
    },
    {
      id: 14,
      nome: 'Conjunto Executivo Luxo',
      categoria: 'conjuntos',
      preco: 'R$ 299,90',
      imagem: '/lovable-uploads/galeria/749625090785807.jpeg',
      descricao: 'Conjunto executivo de alta qualidade',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul Marinho', 'Cinza Escuro']
    },
    {
      id: 15,
      nome: 'Saia Moderna Chic',
      categoria: 'saias',
      preco: 'R$ 129,90',
      imagem: '/lovable-uploads/galeria/753423803847560.jpeg',
      descricao: 'Saia moderna com design contemporâneo',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Nude', 'Bege']
    },
    {
      id: 16,
      nome: 'Vestido Elegance Premium',
      categoria: 'vestidos',
      preco: 'R$ 239,90',
      imagem: '/lovable-uploads/galeria/1002512835154927.jpeg',
      descricao: 'Vestido premium com acabamento sofisticado',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul Marinho', 'Vinho']
    },
    {
      id: 17,
      nome: 'Blusa Sophistique',
      categoria: 'blusas',
      preco: 'R$ 99,90',
      imagem: '/lovable-uploads/galeria/1038066235160988.jpeg',
      descricao: 'Blusa social em crepe com detalhes únicos',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Rosa', 'Nude']
    },
    {
      id: 18,
      nome: 'Conjunto Power Woman',
      categoria: 'conjuntos',
      preco: 'R$ 279,90',
      imagem: '/lovable-uploads/galeria/1049792647143677.jpeg',
      descricao: 'Conjunto blazer e calça para a mulher moderna',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Cinza', 'Bege']
    },
    {
      id: 19,
      nome: 'Saia Charm Collection',
      categoria: 'saias',
      preco: 'R$ 119,90',
      imagem: '/lovable-uploads/galeria/1056777893278555.jpeg',
      descricao: 'Saia midi plissada com caimento perfeito',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Caramelo', 'Verde']
    },
    {
      id: 20,
      nome: 'Calça Comfort Elegante',
      categoria: 'calcas',
      preco: 'R$ 159,90',
      imagem: '/lovable-uploads/galeria/1089543675937845.jpeg',
      descricao: 'Calça de alfaiataria com cintura alta',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Marinho', 'Cinza']
    },
    {
      id: 21,
      nome: 'Vestido Grace Luxo',
      categoria: 'vestidos',
      preco: 'R$ 249,90',
      imagem: '/lovable-uploads/galeria/1093633756076567.jpeg',
      descricao: 'Vestido longo para eventos especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Marsala', 'Preto', 'Azul']
    },
    {
      id: 22,
      nome: 'Blusa Premium Collection',
      categoria: 'blusas',
      preco: 'R$ 139,90',
      imagem: '/lovable-uploads/galeria/1100497052019216.jpeg',
      descricao: 'Blusa premium com acabamento refinado',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Off White', 'Creme']
    },
    {
      id: 23,
      nome: 'Conjunto Luxo Executivo',
      categoria: 'conjuntos',
      preco: 'R$ 319,90',
      imagem: '/lovable-uploads/galeria/1102154001782910.jpeg',
      descricao: 'Conjunto executivo de alta qualidade',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul Marinho', 'Cinza Escuro']
    },
    {
      id: 24,
      nome: 'Saia Moderna Trend',
      categoria: 'saias',
      preco: 'R$ 149,90',
      imagem: '/lovable-uploads/galeria/1126123402992097.jpeg',
      descricao: 'Saia moderna com design contemporâneo',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Nude', 'Terracota']
    },
    {
      id: 25,
      nome: 'Calça Elegante Premium',
      categoria: 'calcas',
      preco: 'R$ 179,90',
      imagem: '/lovable-uploads/galeria/1202396691657745.jpeg',
      descricao: 'Calça elegante para ocasiões especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul', 'Vinho']
    },
    {
      id: 26,
      nome: 'Vestido Festa Glamour',
      categoria: 'vestidos',
      preco: 'R$ 289,90',
      imagem: '/lovable-uploads/galeria/1238623704243377.jpeg',
      descricao: 'Vestido perfeito para festas e eventos glamourosos',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Dourado', 'Prata', 'Rose Gold']
    },
    {
      id: 27,
      nome: 'Blusa Casual Elegante',
      categoria: 'blusas',
      preco: 'R$ 89,90',
      imagem: '/lovable-uploads/galeria/1247813509891765.jpeg',
      descricao: 'Blusa casual para o dia a dia com elegância',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Listrado', 'Floral']
    },
    {
      id: 28,
      nome: 'Conjunto Verão Chic',
      categoria: 'conjuntos',
      preco: 'R$ 219,90',
      imagem: '/lovable-uploads/galeria/1250929439639604.jpeg',
      descricao: 'Conjunto leve e elegante para os dias quentes',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Coral', 'Azul Claro']
    },
    {
      id: 29,
      nome: 'Saia Longa Fluida',
      categoria: 'saias',
      preco: 'R$ 169,90',
      imagem: '/lovable-uploads/galeria/1260948015769338.jpeg',
      descricao: 'Saia longa fluida e confortável para todas as ocasiões',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Floral', 'Listrado', 'Liso']
    },
    {
      id: 30,
      nome: 'Calça Social Luxo',
      categoria: 'calcas',
      preco: 'R$ 199,90',
      imagem: '/lovable-uploads/galeria/1269112174870629.jpeg',
      descricao: 'Calça social de luxo com acabamento impecável',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Cinza', 'Azul Marinho']
    },
    {
      id: 31,
      nome: 'Vestido Sofisticado',
      categoria: 'vestidos',
      preco: 'R$ 229,90',
      imagem: '/lovable-uploads/galeria/1274861080746622.jpeg',
      descricao: 'Vestido sofisticado para ocasiões especiais',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Vinho', 'Azul Marinho']
    },
    {
      id: 32,
      nome: 'Blusa Contemporânea',
      categoria: 'blusas',
      preco: 'R$ 119,90',
      imagem: '/lovable-uploads/galeria/1285765286670369.jpeg',
      descricao: 'Blusa com design contemporâneo e elegante',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Branco', 'Nude', 'Rosa']
    },
    {
      id: 33,
      nome: 'Conjunto Moderno',
      categoria: 'conjuntos',
      preco: 'R$ 259,90',
      imagem: '/lovable-uploads/galeria/1290165589390123.jpeg',
      descricao: 'Conjunto moderno para a mulher contemporânea',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Cinza', 'Marinho']
    },
    {
      id: 34,
      nome: 'Saia Elegante Premium',
      categoria: 'saias',
      preco: 'R$ 139,90',
      imagem: '/lovable-uploads/galeria/1294211942418697.jpeg',
      descricao: 'Saia elegante com acabamento premium',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Caramelo', 'Verde']
    },
    {
      id: 35,
      nome: 'Calça Moderna Style',
      categoria: 'calcas',
      preco: 'R$ 169,90',
      imagem: '/lovable-uploads/galeria/1300282408333796.jpeg',
      descricao: 'Calça moderna com estilo único',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Azul', 'Cinza']
    },
    {
      id: 36,
      nome: 'Vestido Glamour Night',
      categoria: 'vestidos',
      preco: 'R$ 279,90',
      imagem: '/lovable-uploads/galeria/1300915994720990.jpeg',
      descricao: 'Vestido glamouroso para eventos noturnos',
      tamanhos: ['P', 'M', 'G', 'GG', 'G3', 'G4', 'G5'],
      cores: ['Preto', 'Dourado', 'Prata']
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

  // Memoized filtered results
  const pecasFiltradas = useMemo(() => {
    return pecas.filter(peca => {
      const matchCategoria = filtroCategoria === 'todas' || peca.categoria === filtroCategoria;
      const matchBusca = peca.nome.toLowerCase().includes(busca.toLowerCase()) ||
                        peca.descricao.toLowerCase().includes(busca.toLowerCase());
      return matchCategoria && matchBusca;
    });
  }, [filtroCategoria, busca, pecas]);

  const handleWhatsAppClick = useCallback((peca: Peca) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de mais informações sobre a peça:\n\n${peca.nome}\nPreço: ${peca.preco}\n\nPoderia me enviar mais detalhes?`
    );
    const whatsappNumber = "5562994518406";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  }, []);

  const handleImageError = useCallback((pecaId: number) => {
    console.log(`Image error for piece ID: ${pecaId}`);
    setImagemErros(prev => new Set(prev).add(pecaId));
  }, []);

  const refreshPage = () => {
    console.log('Refreshing page...');
    window.location.reload();
  };

  const clearFilters = useCallback(() => {
    setFiltroCategoria('todas');
    setBusca('');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Debug Panel (only visible in development) */}
      {(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && (
        <div className="fixed top-20 right-4 z-50 bg-black text-white p-3 rounded text-xs">
          <button
            onClick={() => setDebugMode(!debugMode)}
            className="mb-2 px-2 py-1 bg-blue-600 rounded text-white"
          >
            Debug: {debugMode ? 'ON' : 'OFF'}
          </button>
          <br />
          <button
            onClick={refreshPage}
            className="px-2 py-1 bg-green-600 rounded text-white flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
          {debugMode && (
            <div className="mt-2 text-xs">
              <div>Total: {pecas.length}</div>
              <div>Filtered: {pecasFiltradas.length}</div>
              <div>Errors: {imagemErros.size}</div>
            </div>
          )}
        </div>
      )}
      
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
            {pecasFiltradas.map((peca, index) => (
              <div
                key={peca.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <OptimizedGalleryImage
                    src={peca.imagem}
                    alt={peca.nome}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(peca.id)}
                    priority={index < 8} // Prioritize first 8 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="p-6">
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
                onClick={clearFilters}
                className="text-gold-600 hover:text-gold-700 font-medium"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Optimized Video Carousel Section */}
      <OptimizedVideoCarousel />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GaleriaPecas;
