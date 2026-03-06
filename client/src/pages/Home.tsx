import { useEffect, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao enviar mensagem. Tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      title: "Tráfego Pago",
      description: "Campanhas estratégicas em Google Ads, Facebook Ads e Instagram Ads que geram resultados reais e mensuráveis para o seu negócio.",
      features: ["ROI Otimizado", "Segmentação Precisa", "Análise de Dados"]
    },
    {
      title: "Tráfego Orgânico",
      description: "Estratégias de SEO e marketing de conteúdo que posicionam sua marca no topo dos resultados de busca de forma natural e duradoura.",
      features: ["SEO Avançado", "Conteúdo Estratégico", "Crescimento Sustentável"]
    },
    {
      title: "Vídeos com IA",
      description: "Criação de vídeos profissionais utilizando inteligência artificial de última geração para maximizar o engajamento do seu público.",
      features: ["Roteiros Automáticos", "Edição Inteligente", "Publicação Otimizada"]
    },
    {
      title: "Estratégia Digital",
      description: "Planejamento completo de presença digital que integra todas as plataformas e canais para máximo impacto e conversão.",
      features: ["Análise Competitiva", "Planejamento Estratégico", "Implementação Executiva"]
    },
    {
      title: "Gestão de Redes",
      description: "Gerenciamento profissional de suas redes sociais com conteúdo estratégico, engajamento e crescimento de comunidade.",
      features: ["Criação de Conteúdo", "Gestão de Comunidade", "Relatórios Mensais"]
    },
    {
      title: "Consultoria",
      description: "Consultoria especializada em transformação digital e estratégia de marketing para empresas que querem escalar rapidamente.",
      features: ["Análise Profunda", "Recomendações Práticas", "Suporte Contínuo"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 animate-bounce">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl">🐉</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              BORGES STACK BUSINESS
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Arquitetura Digital Estratégica
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Marketing + Tecnologia + Segurança | Transformando negócios através de estratégias digitais robustas e inovadoras
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold rounded-lg transition-all"
              >
                Explorar Serviços
              </button>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5585991778762?text=Olá%20BORGES%20STACK%20BUSINESS%2C%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20serviços"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
            >
              💬 Fale conosco no WhatsApp
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="animate-on-scroll bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:shadow-2xl hover:shadow-yellow-400/20"
                >
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400">
                        <span className="text-yellow-400">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Entre em Contato
            </h2>

            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-yellow-400/20">
              <div className="mb-6">
                <label className="block text-yellow-400 font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-yellow-400 font-semibold mb-2">Telefone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  placeholder="(85) 99177-8762"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-yellow-400 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-yellow-400 font-semibold mb-2">Serviço de Interesse</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-yellow-400 font-semibold mb-2">Mensagem</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 h-32 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-500 text-black font-bold rounded-lg transition-all transform hover:scale-105"
              >
                {loading ? "Enviando..." : "Enviar Solicitação"}
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-700 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-yellow-400 font-bold mb-4">Contato</h3>
                <p className="text-gray-400">📱 (85) 99177-8762</p>
                <p className="text-gray-400">📧 magnatadomarketingcontact@gmail.com</p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-bold mb-4">Redes Sociais</h3>
                <a href="https://instagram.com/borgesstack" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">
                  📷 @borgesstack
                </a>
              </div>
              <div>
                <h3 className="text-yellow-400 font-bold mb-4">Horário</h3>
                <p className="text-gray-400">Seg - Sex: 09:00 - 18:00</p>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center text-gray-500">
              <p>&copy; 2026 BORGES STACK BUSINESS. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
