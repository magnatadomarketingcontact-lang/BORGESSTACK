import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    
    if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.message) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      const data = await response.json();
      setSuccessMessage(data.message || "Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (error) {
      setErrorMessage("Erro ao enviar mensagem. Tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Tráfego Pago",
      description: "Campanhas estratégicas em Google Ads, Facebook Ads e Instagram Ads que geram resultados reais e mensuráveis para o seu negócio.",
      features: ["ROI Otimizado", "Segmentação Precisa", "Análise de Dados"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Tráfego Orgânico",
      description: "Estratégias de SEO e marketing de conteúdo que posicionam sua marca no topo dos resultados de busca de forma natural e duradoura.",
      features: ["SEO Avançado", "Conteúdo Estratégico", "Crescimento Sustentável"]
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Vídeos com IA",
      description: "Criação de vídeos profissionais utilizando inteligência artificial de última geração para maximizar o engajamento do seu público.",
      features: ["Tecnologia IA", "Alta Qualidade", "Produção Rápida"]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Estratégias Digitais",
      description: "Planejamento completo e execução de estratégias digitais personalizadas que transformam sua presença online em resultados concretos.",
      features: ["Planejamento 360°", "Análise de Mercado", "Execução Precisa"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Gestão de Redes",
      description: "Gerenciamento profissional das suas redes sociais com conteúdo estratégico que engaja, converte e fideliza sua audiência.",
      features: ["Conteúdo Criativo", "Engajamento Real", "Crescimento Orgânico"]
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Marketing Odontológico",
      description: "Especialistas em marketing digital para clínicas odontológicas. Atraímos mais pacientes e fortalecemos sua autoridade no mercado.",
      features: ["Foco em Resultados", "Captação de Pacientes", "Autoridade Digital"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/5585991778762"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform whatsapp-pulse"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.201-3.68-.965.984 3.595-.235.374a9.86 9.86 0 001.455 5.92 9.88 9.88 0 007.581 3.986h.005c2.917 0 5.649-1.201 7.652-3.369l.36-.355 3.595.984-.96-3.68.374-.235a9.87 9.87 0 00-1.457-5.92 9.879 9.879 0 00-7.589-3.983z"/></svg>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-silver tracking-widest">
            BORGES STACK<br />BUSINESS
          </h1>
          <div className="mb-8 flex justify-center">
            <img src="/borges-logo.webp" alt="Borges Stack Business Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg glow-silver" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Arquitetura Digital Estratégica | Marketing + Tecnologia + Segurança
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground glow-silver text-lg px-8 py-6 border border-accent/50 hover:border-accent rounded-lg transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Orçamento
            </button>
            <button 
              className="border border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6 hover:glow-subtle rounded-lg transition-all"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-silver tracking-wide">
            Soluções Estratégicas
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto font-light">
            Serviços integrados de marketing digital, desenvolvimento e segurança
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="animate-on-scroll bg-card border border-glow hover:border-accent transition-all duration-300 hover:glow-subtle group"
              >
                <CardContent className="p-8">
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-silver">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient-silver">Tráfego Pago de Alta Performance</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Desenvolvemos campanhas de tráfego pago altamente segmentadas e otimizadas para maximizar seu retorno sobre investimento. Utilizamos as melhores práticas do mercado e análise de dados em tempo real para garantir que cada centavo investido gere resultados mensuráveis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa expertise abrange Google Ads, Facebook Ads, Instagram Ads e outras plataformas, sempre com foco em conversão e crescimento sustentável do seu negócio.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden glow-gold">
              <img 
                src="/traffic-paid.jpg" 
                alt="Tráfego Pago" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative h-80 rounded-lg overflow-hidden glow-gold">
              <img 
                src="/traffic-organic.jpg" 
                alt="Tráfego Orgânico" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gradient-silver">Tráfego Orgânico Estratégico</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Construímos uma presença digital sólida e duradoura através de estratégias de SEO avançadas e marketing de conteúdo de alta qualidade. Nosso objetivo é posicionar sua marca no topo dos resultados de busca, gerando tráfego qualificado de forma orgânica e sustentável.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Combinamos técnicas de otimização on-page, off-page e criação de conteúdo relevante para construir autoridade digital e atrair seu público ideal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient-silver">Criação de Vídeos com Inteligência Artificial</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Utilizamos tecnologia de ponta em inteligência artificial para criar vídeos profissionais, envolventes e de alta qualidade em tempo recorde. Nossa solução permite produzir conteúdo visual impactante que captura a atenção do seu público e impulsiona o engajamento.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Do roteiro à edição final, nossa equipe combina criatividade humana com o poder da IA para entregar vídeos que convertem e fortalecem sua marca no ambiente digital.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden glow-gold">
              <img 
                src="/ai-video.jpg" 
                alt="Vídeos com IA" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dental Marketing Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gradient-silver text-center">Especialistas em Marketing Digital para Clínica Odontológica</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed text-center">
              Somos especialistas em marketing digital para o setor odontológico. Entendemos as particularidades do mercado e desenvolvemos estratégias específicas para atrair mais pacientes, fortalecer sua autoridade e aumentar a visibilidade da sua clínica.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Nossa abordagem combina captação de leads qualificados, gestão de reputação online, marketing de conteúdo especializado e campanhas de tráfego pago direcionadas para transformar sua clínica em referência na região.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-silver tracking-wide">
            Solicite Seu Orçamento
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg font-light">
            Preencha o formulário e nossa equipe entrará em contato para estruturar sua estratégia
          </p>

          {successMessage && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500 rounded-md text-green-400">
              ✓ {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-md text-red-400">
              ✗ {errorMessage}
            </div>
          )}

          <div className="bg-card border border-glow p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-glow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Número de Telefone *</label>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-glow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-glow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Qual serviço você está interessado? *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-glow rounded-md text-foreground"
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
                  <Textarea
                    placeholder="Descreva suas necessidades e objetivos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-glow min-h-32"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glow-silver border border-accent/50 hover:border-accent py-3 px-4 rounded-md font-medium transition disabled:opacity-50"
                >
                  {isLoading ? "Enviando..." : "Enviar Solicitação"}
                </button>
              </form>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-glow py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-gradient-silver mb-4">Contato</h4>
              <div className="space-y-2">
                <a href="tel:+5585991778762" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                  <Phone className="w-4 h-4" />
                  (85) 9 9177-8762
                </a>
                <a href="mailto:magnatadomarketingcontact@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                  <Mail className="w-4 h-4" />
                  magnatadomarketingcontact@gmail.com
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gradient-silver mb-4">Redes Sociais</h4>
              <a href="https://instagram.com/borgesstack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                <Instagram className="w-4 h-4" />
                @borgesstack
              </a>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gradient-silver mb-4">Horário</h4>
              <p className="text-muted-foreground">Segunda a Sexta<br />9:00 - 18:00</p>
            </div>
          </div>

          <div className="border-t border-glow pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 BORGES STACK BUSINESS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
