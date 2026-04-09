import { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = '5585991778762';
const PIX_DISCOUNT_PERCENT = 10;

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('');

  // Carregar carrinho do LocalStorage
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem('cart');
        const savedName = localStorage.getItem('customerName');
        
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
        if (savedName) {
          setCustomerName(savedName);
        }
      } catch (e) {
        console.error('Erro ao carregar carrinho:', e);
      }
    };

    loadCart();

    // Monitorar eventos de atualização do carrinho
    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('storage', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('storage', handleCartUpdate);
    };
  }, [isOpen]);

  // Salvar carrinho no LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Salvar nome do cliente
  useEffect(() => {
    localStorage.setItem('customerName', customerName);
  }, [customerName]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculos
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + (price * item.quantity);
  }, 0);

  const pixDiscount = subtotal * (PIX_DISCOUNT_PERCENT / 100);
  const total = subtotal - pixDiscount;

  // Gerar mensagem WhatsApp
  const generateWhatsAppMessage = () => {
    let message = '🛍️ *Pedido Happy Nation Store*\n\n';

    if (customerName.trim()) {
      message += `👤 *Cliente:* ${customerName}\n\n`;
    }

    message += '*📦 Produtos:*\n';
    cartItems.forEach(item => {
      const itemTotal = (parseFloat(item.price) * item.quantity).toFixed(2);
      message += `• ${item.name}\n`;
      message += `  Qtd: ${item.quantity} x R$ ${item.price} = R$ ${itemTotal}\n`;
    });

    message += `\n*💰 Valores:*\n`;
    message += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    message += `Desconto PIX (-10%): -R$ ${pixDiscount.toFixed(2)}\n`;
    message += `*Total: R$ ${total.toFixed(2)}*\n\n`;
    message += `Gostaria de confirmar este pedido! 🎉`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    if (cartItems.length === 0) {
      alert('Adicione produtos ao carrinho antes de finalizar!');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-gradient-to-b from-slate-900 to-black border-l border-slate-700 shadow-2xl z-50 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white">Carrinho</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Customer Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Seu nome (opcional)
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Digite seu nome..."
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Products */}
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">Carrinho vazio</p>
              <p className="text-sm text-gray-500 mt-1">Adicione produtos para começar!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-3 hover:border-slate-600 transition-colors"
                >
                  {/* Image and Info */}
                  <div className="flex gap-3 mb-3">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg bg-slate-700"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-cyan-400 font-bold mt-1">R$ {item.price}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-slate-700 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-slate-600 rounded transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-300" />
                      </button>
                      <span className="w-8 text-center text-white font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-slate-600 rounded transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-300" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="sticky bottom-0 bg-gradient-to-t from-black to-slate-900 border-t border-slate-700 p-4 space-y-3">
            {/* Values */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-400">
                <span>Desconto PIX (-10%):</span>
                <span>-R$ {pixDiscount.toFixed(2)}</span>
              </div>
              <div className="border-t border-slate-700 pt-2 flex justify-between text-lg font-bold text-white">
                <span>Total:</span>
                <span className="text-cyan-400">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.258-1.02 1.022-1.756 2.119-2.259 3.357-.506 1.238-.759 2.553-.761 4.242v.004c.003 1.645.29 3.263.845 4.745.556 1.482 1.357 2.794 2.354 3.853 1.002 1.069 2.314 1.922 3.808 2.465 1.514.552 3.083.827 4.653.827.339 0 .677-.013 1.015-.038 1.99-.15 3.806-.767 5.195-1.824 1.378-1.047 2.33-2.424 2.8-4.004.47-1.58.513-3.295.128-4.905-.385-1.61-1.178-3.032-2.32-4.104-1.142-1.072-2.611-1.822-4.216-2.17-1.596-.348-3.222-.338-4.779.03zm0 0" />
              </svg>
              Finalizar via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
