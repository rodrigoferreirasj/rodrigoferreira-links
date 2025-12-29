import React, { useState, useEffect } from 'react';
import { SECTIONS } from './constants';
import { LinkCard } from './components/LinkCard';
import { LeadModal } from './components/LeadModal';

const App: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("https://i.ibb.co/gbtRmLVc/Avatar.png");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Abre o modal após um pequeno delay para suavidade
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleImgError = () => {
    const fallbackUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop';
    if (imgSrc !== fallbackUrl) {
      setImgSrc(fallbackUrl);
    }
  };

  const socialLinks = [
    { 
      id: 'site',
      icon: 'language', 
      color: 'hover:text-gold', 
      label: 'Site Oficial', 
      url: 'https://www.pontosfortes.com.br' 
    },
    { 
      id: 'phone',
      icon: 'call', 
      color: 'hover:text-cta-primary', 
      label: 'Telefone', 
      url: 'tel:+5519993157872' 
    },
    { 
      id: 'email',
      icon: 'mail', 
      color: 'hover:text-white', 
      label: 'E-mail', 
      url: 'mailto:rodrigo@pontosfortes.com.br' 
    },
    { 
      id: 'linkedin',
      icon: 'linkedin', 
      color: 'hover:text-[#0A66C2]', 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/rodrigoferreiratd',
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    { 
      id: 'instagram',
      icon: 'instagram', 
      color: 'hover:text-[#E1306C]', 
      label: 'Instagram', 
      url: 'https://www.instagram.com/rodrigoferreiratd',
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    }
  ];

  return (
    <div className="bg-gradient-to-b from-main via-main to-deep min-h-screen text-white/90 pb-24 antialiased selection:bg-gold/30">
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        adminEmail="rodrigo@pontosfortes.com.br"
      />

      <div className="max-w-md mx-auto px-5 pt-12 flex flex-col gap-8 w-full relative">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-5">
          <div className="relative group">
            <div className="w-48 h-48 rounded-full border-2 border-gold/30 p-1.5 transition-transform group-hover:scale-105 duration-500 overflow-hidden shadow-2xl bg-card flex items-center justify-center">
              <img 
                src={imgSrc} 
                alt="Rodrígo Fêrreira"
                className="block w-full h-full object-cover object-top rounded-full bg-main"
                onError={handleImgError}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-black tracking-tight text-white">Rodrígo Fêrreira</h1>
            <p className="text-white/80 text-sm font-semibold">Treinador de Vendas e Liderança | Coach de Pontos Fortes</p>
            <p className="text-white/50 text-[11px] leading-relaxed max-w-[280px] mx-auto uppercase tracking-widest font-medium">Descubra seu próprio universo e atinja o sucesso.</p>
          </div>

          <div className="flex items-center justify-center gap-3 w-full mt-2">
            {socialLinks.map((soc) => (
              <a 
                key={soc.id}
                href={soc.url}
                target={soc.url.startsWith('http') ? "_blank" : undefined}
                rel={soc.url.startsWith('http') ? "noopener noreferrer" : undefined}
                aria-label={soc.label}
                className="group flex items-center justify-center w-11 h-11 rounded-full bg-card hover:bg-white/10 transition-all border border-white/5 shadow-xl"
              >
                <div className={`transition-colors duration-300 text-white/60 ${soc.color} flex items-center justify-center`}>
                  {soc.svg ? (
                    soc.svg
                  ) : (
                    <span className="material-symbols-outlined text-xl">
                      {soc.icon}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </header>

        {/* Featured Actions */}
        <section className="flex flex-col gap-4">
          <LinkCard 
            item={{
              id: "whatsapp",
              badge: "WHATSAPP",
              badgeColor: "bg-green-600",
              title: "Atendimento Direto",
              description: "Tire dúvidas ou solicite orçamentos agora",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
              url: "https://wa.me/message/MSEY7GX6C4W7I1",
              type: "large"
            }}
          />
          
          <div className="grid grid-cols-1 gap-4">
             <LinkCard 
              item={{
                id: "agenda",
                badge: "AGENDAMENTO",
                badgeColor: "bg-badge-contact",
                title: "Marcar Reunião",
                description: "Escolha o melhor horário na minha agenda",
                image: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png",
                url: "https://pontosfortes.com.br/agenda/",
                type: "medium"
              }}
            />
            <LinkCard 
              item={{
                id: "newsletter",
                badge: "NEWSLETTER",
                badgeColor: "bg-badge-podcast",
                title: "Conteúdo por E-mail",
                description: "Receba insights semanais diretamente",
                image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
                url: "https://news.pontosfortes.com.br",
                type: "medium"
              }}
            />
          </div>
        </section>

        {/* Separator */}
        <div className="py-2 text-center">
          <p className="text-sm font-medium text-white/40 italic">Explore conteúdos e ferramentas gratuitas</p>
        </div>

        {/* Dynamic Sections */}
        {SECTIONS.map((section, sIdx) => (
          <section key={sIdx} className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-1 mb-1">
              <span className="w-1 h-4 rounded-full bg-gold"></span>
              <h4 className="text-xs font-bold text-gold uppercase tracking-widest">{section.title}</h4>
            </div>
            
            <div className="flex flex-col gap-3">
              {section.items.map((item) => (
                <LinkCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}

        {/* Mission Statement */}
        <section className="pt-4">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-card to-[#1a1827] border border-gold/10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <span className="material-symbols-outlined text-gold text-5xl mb-6">volunteer_activism</span>
            <p className="text-[10px] font-black text-gold tracking-[0.2em] uppercase mb-5">Minha Missão</p>
            <p className="text-white text-2xl font-black leading-tight mb-4">Revelar o extraordinário em cada pessoa</p>
            <p className="text-white/60 text-sm leading-relaxed font-medium">Traduzir o complexo em clareza prática e transformar autoconhecimento em movimento.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 opacity-40 pb-10">
          <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 Rodrígo Fêrreira. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;