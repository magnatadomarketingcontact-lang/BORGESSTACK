import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MessageCircle, Instagram, Mail, Phone, Code2, TrendingUp, Smartphone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logoImage from "../../public/happy-nation-logo.png";

export default function Home() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("✓ Contato recebido com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        toast.error("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar o formulário.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background glow effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
              <img 
                src={logoImage} 
                alt="Happy Nation Store Logo"
                className="relative w-48 h-48 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              HAPPY NATION
            </span>
            <br />
            <span className="text-cyan-400 drop-shadow-lg">STORE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Acessórios Mobile • Gestão de Tráfego Pago • Desenvolvimento de Mini Sites
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 text-base font-bold"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 text-base font-bold"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explorar Serviços
            </Button>
          </div>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/558599177876?text=Olá%20Happy%20Nation!%20Gostaria%20de%20conhecer%20seus%20serviços"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-lg shadow-green-500/50 hover:scale-110 transition-transform z-50"
          >
            <MessageCircle size={28} />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all p-6 group">
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg group-hover:from-cyan-500/40 group-hover:to-cyan-600/40 transition-all">
                <Smartphone className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">Acessórios Mobile</h3>
              <p className="text-gray-300 leading-relaxed">
                Produtos premium para seu celular com qualidade garantida e preços competitivos.
              </p>
            </Card>

            {/* Service 2 */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/50 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all p-6 group">
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg group-hover:from-purple-500/40 group-hover:to-purple-600/40 transition-all">
                <TrendingUp className="text-purple-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400">Gestão de Tráfego Pago</h3>
              <p className="text-gray-300 leading-relaxed">
                Estratégias comprovadas para aumentar suas vendas com ROI máximo em Google Ads e Facebook.
              </p>
            </Card>

            {/* Service 3 */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/50 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transition-all p-6 group">
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-lg group-hover:from-pink-500/40 group-hover:to-pink-600/40 transition-all">
                <Code2 className="text-pink-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-pink-400">Mini Sites</h3>
              <p className="text-gray-300 leading-relaxed">
                Desenvolvimento rápido de sites otimizados para conversão e mobile-first design.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border-2 border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-black mb-2 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solicitar Orçamento
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-8">Preencha o formulário e nossa equipe entrará em contato</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-cyan-400 mb-2">Nome Completo *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  required
                  className="bg-gray-900/50 border-2 border-cyan-500/30 focus:border-cyan-400 text-white placeholder-gray-500 rounded-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-purple-400 mb-2">Telefone *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  required
                  className="bg-gray-900/50 border-2 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-500 rounded-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-pink-400 mb-2">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                  className="bg-gray-900/50 border-2 border-pink-500/30 focus:border-pink-400 text-white placeholder-gray-500 rounded-lg"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-cyan-400 mb-2">Qual serviço você está interessado? *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-900/50 border-2 border-cyan-500/30 focus:border-cyan-400 text-white rounded-lg p-3"
                >
                  <option value="">Selecione um serviço...</option>
                  <option value="Acessórios Mobile">Acessórios Mobile</option>
                  <option value="Gestão de Tráfego Pago">Gestão de Tráfego Pago</option>
                  <option value="Desenvolvimento de Mini Sites">Desenvolvimento de Mini Sites</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-purple-400 mb-2">Mensagem *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos mais sobre sua necessidade..."
                  required
                  className="bg-gray-900/50 border-2 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-500 rounded-lg min-h-32"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-lg py-6 shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  "Enviar Solicitação"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Contato</h3>
              <div className="space-y-3">
                <a href="tel:+558599177876" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone size={18} />
                  (85) 9 9177-8762
                </a>
                <a href="mailto:happynationstory@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail size={18} />
                  happynationstory@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/happynationstore" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/558599177876" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-bold text-pink-400 mb-4">Sobre</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Happy Nation Store - Sua solução completa em acessórios mobile, marketing digital e desenvolvimento web.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-cyan-500/20 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Happy Nation Store. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
