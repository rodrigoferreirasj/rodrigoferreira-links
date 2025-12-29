import React, { useState } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  adminEmail: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, adminEmail }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    cargo: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  if (!isOpen) return null;

  // Máscara inteligente para WhatsApp
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    
    if (input.startsWith('+')) {
      // Formato Internacional: apenas números após o +
      const internationalValue = '+' + input.slice(1).replace(/\D/g, '').slice(0, 15);
      setFormData({ ...formData, whatsapp: internationalValue });
    } else {
      // Formato Nacional (BR): (XX) XXXXX-XXXX
      const value = input.replace(/\D/g, '').slice(0, 11);
      let formatted = value;
      if (value.length > 0) {
        formatted = `(${value.slice(0, 2)}`;
        if (value.length > 2) {
          formatted += `) ${value.slice(2, 7)}`;
          if (value.length > 7) {
            formatted += `-${value.slice(7, 11)}`;
          }
        }
      }
      setFormData({ ...formData, whatsapp: formatted });
    }
  };

  const handleSaveContact = () => {
    // Dados completos do Rodrígo para o VCard com Foto e Social Links
    const photoUrl = "https://i.ibb.co/gbtRmLVc/Avatar.png";
    const whatsappLink = "https://wa.me/message/MSEY7GX6C4W7I1";

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Rodrígo Fêrreira
N:Fêrreira;Rodrígo;;;
ORG:Pontos Fortes Coaching e Treinamentos
TITLE:Coach e Palestrante
PHOTO;VALUE=URI;TYPE=PNG:${photoUrl}
TEL;TYPE=CELL,VOICE;VALUE=uri:tel:+5519993157872
EMAIL;TYPE=PREF,INTERNET:rodrigo@pontosfortes.com.br
URL;TYPE=WORK:https://www.pontosfortes.com.br
URL;TYPE=AGENDA:https://pontosfortes.com.br/agenda/
URL;TYPE=NEWSLETTER:https://news.pontosfortes.com.br
URL;TYPE=BLOG:https://www.pontosfortes.com.br/blog
URL;TYPE=WHATSAPP:${whatsappLink}
X-SOCIALPROFILE;TYPE=INSTAGRAM:https://www.instagram.com/rodrigoferreiratd
X-SOCIALPROFILE;TYPE=LINKEDIN:https://www.linkedin.com/in/rodrigoferreiratd
X-SOCIALPROFILE;TYPE=YOUTUBE:https://www.youtube.com/@pontosfortes
X-SOCIALPROFILE;TYPE=SPOTIFY:https://open.spotify.com/show/0nHQUpa8Wqw6ee7X3i7sOM
NOTE:Treinador de Vendas e Liderança | Pontos Fortes.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Rodrigo_Ferreira_Pontos_Fortes.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/mnjqllrj`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _to: adminEmail,
          _subject: `NOVO LEAD: ${formData.nome} (${formData.empresa})`
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
        }, 2500);
      } else {
        const body = `Dados do Lead:%0D%0A- Nome: ${formData.nome}%0D%0A- Email: ${formData.email}%0D%0A- WhatsApp: ${formData.whatsapp}%0D%0A- Empresa: ${formData.empresa}%0D%0A- Cargo: ${formData.cargo}`;
        window.location.href = `mailto:${adminEmail}?subject=Captura de Lead - Linktree&body=${body}`;
        onClose();
      }
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      setStatus('idle');
      alert("Ocorreu um problema ao enviar. Por favor, tente novamente.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 animate-in fade-in duration-500">
      <div className="absolute inset-0 bg-main/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-card border border-gold/20 rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-main/40 text-white/50 hover:text-white hover:bg-main/60 transition-all z-10 group"
        >
          <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">close</span>
        </button>

        <div className="p-8 overflow-y-auto">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                <span className="material-symbols-outlined text-5xl">verified</span>
              </div>
              <h2 className="text-2xl font-black text-white mb-3">Enviado com Sucesso!</h2>
              <p className="text-white/60 leading-relaxed">Seus dados foram encaminhados ao Rodrígo.</p>
            </div>
          ) : (
            <>
              <header className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 text-gold rounded-2xl flex items-center justify-center mx-auto mb-5 border border-gold/20 shadow-inner">
                  <span className="material-symbols-outlined text-3xl">share_reviews</span>
                </div>
                <h2 className="text-2xl font-black text-white mb-2 leading-tight">Vamos nos Conectar?</h2>
                <p className="text-white/50 text-sm font-medium">Salve meu contato ou deixe os seus abaixo.</p>
              </header>

              <button 
                onClick={handleSaveContact}
                className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-white text-main font-black py-4.5 rounded-2xl mb-8 transition-all active:scale-[0.97] shadow-xl shadow-gold/10 group"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">contact_emergency</span>
                Salvar Contato do Rodrígo
              </button>

              <div className="relative mb-8 text-center flex items-center justify-center">
                <div className="absolute w-full h-px bg-white/10"></div>
                <span className="relative bg-card px-4 text-[11px] font-bold text-white/60 text-center leading-tight">
                  Agora que salvou meu contato, envie seus dados para mim
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gold/80 uppercase tracking-widest ml-1">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: João Silva"
                      className="bg-main/30 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/40 focus:bg-main/50 transition-all"
                      value={formData.nome}
                      onChange={e => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gold/80 uppercase tracking-widest ml-1">E-mail</label>
                      <input 
                        required
                        type="email" 
                        placeholder="seu@email.com"
                        className="bg-main/30 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/40 focus:bg-main/50 transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gold/80 uppercase tracking-widest ml-1">WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="(00) 00000-0000 ou +00..."
                        className="bg-main/30 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/40 focus:bg-main/50 transition-all"
                        value={formData.whatsapp}
                        onChange={handleWhatsAppChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gold/80 uppercase tracking-widest ml-1">Empresa</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Nome da organização"
                        className="bg-main/30 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/40 focus:bg-main/50 transition-all"
                        value={formData.empresa}
                        onChange={e => setFormData({...formData, empresa: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gold/80 uppercase tracking-widest ml-1">Cargo</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ex: Diretor"
                        className="bg-main/30 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-gold/40 focus:bg-main/50 transition-all"
                        value={formData.cargo}
                        onChange={e => setFormData({...formData, cargo: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-6 bg-cta-primary hover:bg-cta-primary/90 text-main font-black py-4.5 rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-[0.97] shadow-xl"
                >
                  {status === 'sending' ? (
                    <span className="w-6 h-6 border-3 border-main/30 border-t-main rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>ENVIAR MEUS DADOS</span>
                      <span className="material-symbols-outlined text-xl">rocket_launch</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};