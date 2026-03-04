import { useState } from "react";

export default function Home() {
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5585991778762"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.201-3.68-.965.984 3.595-.235.374a9.86 9.86 0 001.455 5.92 9.88 9.88 0 007.581 3.986h.005c2.917 0 5.649-1.201 7.652-3.369l.36-.355 3.595.984-.96-3.68.374-.235a9.87 9.87 0 00-1.457-5.92 9.879 9.879 0 00-7.589-3.983z"/></svg>
      </a>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">BORGES STACK BUSINESS</h1>
          <img src="/borges-logo.webp" alt="Logo" className="w-40 h-40 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Arquitetura Digital Estratégica | Marketing + Tecnologia + Segurança
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition"
          >
            Solicitar Orçamento
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Soluções Estratégicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tráfego Pago", desc: "Campanhas estratégicas em Google Ads, Facebook Ads e Instagram Ads" },
              { title: "Tráfego Orgânico", desc: "Estratégias de SEO e marketing de conteúdo de alta qualidade" },
              { title: "Vídeos com IA", desc: "Criação de vídeos profissionais com inteligência artificial" },
              { title: "Estratégias Digitais", desc: "Planejamento completo e execução de estratégias personalizadas" },
              { title: "Gestão de Redes", desc: "Gerenciamento profissional das suas redes sociais" },
              { title: "Marketing Odontológico", desc: "Especialistas em marketing para clínicas odontológicas" }
            ].map((service, i) => (
              <div key={i} className="bg-black p-6 rounded-lg border border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-500 mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-black px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Solicite Seu Orçamento</h2>

          {successMessage && (
            <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded text-green-300">
              ✓ {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-900 border border-red-500 rounded text-red-300">
              ✗ {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg border border-yellow-500">
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Nome Completo *</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">Número de Telefone *</label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">Email *</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">Qual serviço você está interessado? *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white"
              >
                <option value="">Selecione um serviço...</option>
                <option value="Tráfego Pago">Tráfego Pago</option>
                <option value="Tráfego Orgânico">Tráfego Orgânico</option>
                <option value="Vídeos com IA">Vídeos com IA</option>
                <option value="Marketing Digital para Clínica Odontológica">Marketing Digital para Clínica Odontológica</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">O que está precisando na empresa? *</label>
              <textarea
                placeholder="Descreva suas necessidades e objetivos..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white min-h-32"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 text-black font-bold py-3 rounded-lg transition"
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-yellow-500 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-yellow-500 mb-4">Contato</h4>
              <a href="tel:+5585991778762" className="text-gray-300 hover:text-yellow-500 block mb-2">(85) 9 9177-8762</a>
              <a href="mailto:magnatadomarketingcontact@gmail.com" className="text-gray-300 hover:text-yellow-500 block">magnatadomarketingcontact@gmail.com</a>
            </div>
            <div>
              <h4 className="text-lg font-bold text-yellow-500 mb-4">Redes Sociais</h4>
              <a href="https://instagram.com/borgesstack" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500">@borgesstack</a>
            </div>
            <div>
              <h4 className="text-lg font-bold text-yellow-500 mb-4">Horário</h4>
              <p className="text-gray-300">Segunda a Sexta<br />9:00 - 18:00</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
            <p>&copy; 2026 BORGES STACK BUSINESS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
