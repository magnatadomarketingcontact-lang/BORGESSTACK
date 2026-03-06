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
      features: ["Tecnologia IA", "Alta Qualidade", "Produção Rápida"]
    },
    {
      title: "Estratégias Digitais",
      description: "Planejamento completo e execução de estratégias digitais personalizadas que transformam sua presença online em resultados concretos.",
      features: ["Planejamento 360°", "Análise de Mercado", "Execução Precisa"]
    },
    {
      title: "Gestão de Redes",
      description: "Gerenciamento profissional das suas redes sociais com conteúdo estratégico que engaja, converte e fideliza sua audiência.",
      features: ["Conteúdo Criativo", "Engajamento Real", "Crescimento Orgânico"]
    },
    {
      title: "Consultoria Digital",
      description: "Consultoria especializada em transformação digital e estratégia de marketing para empresas que querem escalar rapidamente.",
      features: ["Foco em Resultados", "Análise Profunda", "Suporte Contínuo"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/5585991778762"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.201-3.68-.965.984 3.595-.235.374a9.86 9.86 0 001.455 5.92 9.88 9.88 0 007.581 3.986h.005c2.917 0 5.649-1.201 7.652-3.369l.36-.355 3.595.984-.96-3.68.374-.235a9.87 9.87 0 00-1.457-5.92 9.879 9.879 0 00-7.589-3.983z"/></svg>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-black to-slate-900">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 tracking-widest">
            BORGES STACK<br />BUSINESS
          </h1>
          
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <span className="text-8xl">🐉</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-4 font-light">
            Arquitetura Digital Estratégica
          </p>
          
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 tracking-wide">
            Soluções Estratégicas
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto font-light">
            Serviços integrados de marketing digital, desenvolvimento e segurança
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
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
      <footer className="border-t border-slate-700 py-12 px-4 bg-slate-900/50">
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
  );
}
