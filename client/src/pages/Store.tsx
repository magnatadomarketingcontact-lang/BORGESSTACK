import { useState, useMemo } from 'react';
import { Search, ShoppingBag, Headphones, Zap, Shield, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { trpc } from '@/lib/trpc';
import CartDrawer from '@/components/CartDrawer';

const CATEGORIES = [
  { id: 'fones', name: 'Fones Bluetooth', icon: Headphones, color: 'from-cyan-500 to-blue-500' },
  { id: 'carregadores', name: 'Carregadores', icon: Zap, color: 'from-purple-500 to-pink-500' },
  { id: 'capinhas', name: 'Capinhas', icon: Shield, color: 'from-pink-500 to-rose-500' },
];

export default function Store() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Buscar produtos do banco de dados
  const { data: products = [], isLoading } = trpc.products.list.useQuery();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
      const matchesCategory = !selectedCategory || product.category.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, products]);

  const getCategoryIcon = (category: string) => {
    const cat = CATEGORIES.find(c => c.id === category.toLowerCase());
    return cat?.icon || ShoppingBag;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-cyan-500/30 bg-gradient-to-b from-black to-black/50 sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="w-8 h-8 text-cyan-400 glow-cyan" />
            <h1 className="text-3xl font-bold text-gradient-cyan">Loja Online</h1>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/60" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-black border-2 border-cyan-500/30 focus:border-cyan-500 text-white placeholder:text-gray-500 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-cyan-500/20 bg-black/50 backdrop-blur">
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    isSelected
                      ? `border-cyan-500 bg-gradient-to-r ${cat.color} bg-opacity-20 glow-cyan`
                      : 'border-cyan-500/30 bg-black hover:border-cyan-500/60'
                  }`}
                >
                  <Icon className="w-6 h-6 mb-2 mx-auto" />
                  <p className="font-semibold text-sm">{cat.name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container py-12">
        {isLoading ? (
          <div className="text-center py-12">
            <Loader2 className="w-12 h-12 mx-auto text-cyan-500 mb-4 animate-spin" />
            <p className="text-gray-400 text-lg">Carregando produtos...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-12 h-12 mx-auto text-cyan-500/30 mb-4" />
            <p className="text-gray-400 text-lg">Nenhum produto encontrado</p>
            <p className="text-gray-500 text-sm mt-2">Tente outra busca ou categoria</p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-sm text-cyan-400">
              {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const Icon = getCategoryIcon(product.category);
                const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
                
                return (
                  <Card
                    key={product.id}
                    className="bg-gradient-to-br from-black to-black/50 border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden group hover:glow-cyan"
                  >
                    {/* Product Image */}
                    <div className="h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                      {product.imageUrl ? (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                          <Icon className="w-16 h-16 text-cyan-400/40 group-hover:text-cyan-400/60 transition-colors" />
                        </>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                            {product.category}
                          </p>
                        </div>
                      </div>

                      {product.description && (
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      )}

                      {/* Price */}
                      <div className="h-8 bg-black/50 border border-cyan-500/20 rounded flex items-center justify-center mb-4">
                        <span className="text-lg font-bold text-cyan-400">
                          R$ {price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>

                      <Button
                        onClick={() => {
                          // Adicionar ao carrinho
                          const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                          const existingItem = cart.find((item: any) => item.id === product.id);
                          
                          if (existingItem) {
                            existingItem.quantity += 1;
                          } else {
                            cart.push({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              imageUrl: product.imageUrl,
                              quantity: 1,
                            });
                          }
                          
                          localStorage.setItem('cart', JSON.stringify(cart));
                          setIsCartOpen(true);
                          
                          // Toast de confirmação
                          const event = new CustomEvent('cartUpdated', { detail: { product: product.name } });
                          window.dispatchEvent(event);
                        }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold hover:from-cyan-600 hover:to-purple-600 transition-all"
                      >
                        Adicionar ao Carrinho
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Info Banner */}
      <div className="border-t border-cyan-500/20 bg-black/50 backdrop-blur">
        <div className="container py-8 text-center">
          <p className="text-gray-400 mb-2">
            Loja online com produtos selecionados
          </p>
          <p className="text-sm text-cyan-400">
            Acompanhe nossas redes sociais para novas adições
          </p>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
