import { 
  Zap, 
  TrendingUp, 
  Video, 
  Target, 
  Users, 
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
  Instagram
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("✅ Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: ""
        });
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setErrorMessage("❌ Erro ao enviar mensagem. Tente novamente.");
        setTimeout(() => setErrorMessage(""), 5000);
      }
    } catch (error) {
      setErrorMessage("❌ Erro ao enviar. Verifique sua conexão.");
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    {
      icon: Zap,
      title: "Tráfego Pago",
      description: "Campanhas estratégicas em Google Ads, Facebook Ads e Instagram Ads"
    },
    {
      icon: TrendingUp,
      title: "Tráfego Orgânico",
      description: "Estratégias de SEO e marketing de conteúdo de alta qualidade"
    },
    {
      icon: Video,
      title: "Vídeos com IA",
      description: "Criação de vídeos profissionais com inteligência artificial"
    },
    {
      icon: Target,
      title: "Estratégias Digitais",
      description: "Planejamento completo e execução de estratégias personalizadas"
    },
    {
      icon: Users,
      title: "Gestão de Redes",
      description: "Gerenciamento profissional das suas redes sociais"
    },
    {
      icon: Sparkles,
      title: "Marketing Odontológico",
      description: "Especialistas em marketing para clínicas odontológicas"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/5585991778762?text=Olá! Gostaria de saber mais sobre seus serviços."
        target="_blank"
        rel="noopener noreferrer"
        title="Contato via WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.75 5.41 2.177 7.707L2.129 22.06l8.159-2.702a9.874 9.874 0 004.746 1.194h.004c5.44 0 9.868-4.436 9.868-9.889 0-2.632-.704-5.108-2.04-7.238A9.882 9.882 0 0011.051 6.979z"/>
        </svg>
      </a>

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-black via-black to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
                  <g fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M50 10 L70 30 L70 70 Q50 85 30 70 L30 30 Z"/>
                    <path d="M50 20 L60 30 L60 60 Q50 70 40 60 L40 30 Z"/>
                    <circle cx="50" cy="35" r="3" fill="currentColor"/>
                  </g>
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              BORGES STACK<br/>BUSINESS
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Arquitetura Digital Estratégica | Marketing + Tecnologia + Segurança
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 border border-accent/50 hover:border-accent rounded-lg transition-all font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Orçamento
            </button>
            <button 
              className="border border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6 rounded-lg transition-all font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Soluções Estratégicas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="animate-on-scroll p-8 border border-border rounded-lg hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Solicite Seu Orçamento</h2>
          
          <div className="border border-border rounded-lg p-8 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Número de Telefone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Qual serviço você está interessado? *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Selecione um serviço...</option>
                  <option value="Tráfego Pago">Tráfego Pago</option>
                  <option value="Tráfego Orgânico">Tráfego Orgânico</option>
                  <option value="Vídeos com IA">Vídeos com IA</option>
                  <option value="Marketing Digital para Clínica Odontológica">Marketing Digital para Clínica Odontológica</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">O que está precisando na empresa? *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva suas necessidades e objetivos..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              {successMessage && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 rounded-lg transition-all disabled:opacity-50"
              >
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-accent">Contato</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+5585991778762" className="hover:text-accent transition">(85) 9 9177-8762</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:magnatadomarketingcontact@gmail.com" className="hover:text-accent transition">magnatadomarketingcontact@gmail.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-accent">Redes Sociais</h3>
              <a href="https://instagram.com/borgesstack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                <Instagram className="w-4 h-4" />
                @borgesstack
              </a>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-accent">Horário</h3>
              <p className="text-muted-foreground">Segunda à Sexta<br/>9:00 - 18:00</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© 2026 BORGES STACK BUSINESS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
