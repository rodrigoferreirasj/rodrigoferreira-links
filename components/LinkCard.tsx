
import React, { useState } from 'react';
import { LinkItem } from '../types';

interface LinkCardProps {
  item: LinkItem;
}

export const LinkCard: React.FC<LinkCardProps> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  // Helper para renderizar a imagem ou fallback
  const renderSquareImage = (sizeClasses: string, roundedClasses: string = "rounded-xl") => {
    const isIcon = ['podcast', 'youtube', 'whatsapp'].includes(item.id) || item.type === 'tool';
    
    if (imgError || !item.image) {
      const iconName = item.id === 'whatsapp' ? 'chat' : 
                       item.badge === 'LIVRO' || item.badge === 'E-BOOK' ? 'auto_stories' :
                       item.type === 'tool' ? 'settings_suggest' : 'link';

      return (
        <div className={`${sizeClasses} ${roundedClasses} bg-white/5 shrink-0 shadow-lg border border-white/10 flex items-center justify-center`}>
          <span className="material-symbols-outlined text-white/20 text-2xl">
            {iconName}
          </span>
        </div>
      );
    }

    return (
      <div className={`relative shrink-0 group-hover:scale-105 transition-transform duration-300 ${sizeClasses} ${roundedClasses} ${isIcon ? 'bg-white/10' : 'bg-white/5'} shadow-lg border border-white/10 overflow-hidden flex items-center justify-center`}>
        <img 
          src={item.image} 
          alt={item.title}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`w-full h-full ${isIcon ? 'object-contain p-2.5' : 'object-cover'}`}
        />
      </div>
    );
  };

  // Layout para CARD GRANDE (Destaque Principal)
  if (item.type === 'large') {
    return (
      <a 
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center justify-between p-5 bg-card border ${item.highlight ? 'border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.15)]' : 'border-white/5'} hover:border-cta-primary/40 rounded-2xl transition-all shadow-xl`}
      >
        <div className="flex-1 pr-4">
          <span className={`inline-block text-[10px] font-bold text-white ${item.badgeColor} px-2 py-0.5 rounded-md uppercase tracking-wider mb-2`}>
            {item.badge}
          </span>
          <h3 className="text-white font-extrabold text-xl leading-tight mb-1">{item.title}</h3>
          <p className="text-white/60 text-sm leading-snug">{item.description}</p>
        </div>
        {renderSquareImage("w-16 h-16", "rounded-2xl")}
      </a>
    );
  }

  // Layout para CARD FERRAMENTA (Estilo Lista de Apps)
  if (item.type === 'tool') {
    return (
      <a 
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center p-3 bg-card border ${item.highlight ? 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'border-white/5'} hover:border-white/15 rounded-xl transition-all shadow-md`}
      >
        {renderSquareImage("w-12 h-12", "rounded-xl")}
        <div className="flex flex-col ml-4">
          <span className={`text-[9px] font-bold ${item.badgeColor} uppercase tracking-wider mb-0.5`}>
            {item.badge}
          </span>
          <h3 className="text-white font-bold text-sm leading-tight">{item.title}</h3>
          <p className="text-white/50 text-[11px] leading-snug">{item.description}</p>
        </div>
      </a>
    );
  }

  // Layout para LIVRO (Estilo Loja)
  if (item.type === 'book') {
    return (
      <div className="group flex flex-col h-full bg-card border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all hover:border-gold/30">
        <div className="relative aspect-[3/4] overflow-hidden">
          {renderSquareImage("w-full h-full", "rounded-none")}
        </div>
        
        <div className="p-5 flex flex-col flex-1 gap-4">
          <div className="flex-1">
            <h3 className="text-white font-black text-lg leading-tight mb-1">{item.title}</h3>
            <p className="text-white/60 text-xs leading-relaxed line-clamp-3">{item.description}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-auto">
            {item.amazonUrl && (
              <a 
                href={item.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black text-[10px] font-black rounded-xl transition-all uppercase tracking-tighter"
              >
                <span className="material-symbols-outlined text-sm">shopping_cart</span>
                Amazon
              </a>
            )}
            {item.uiclapUrl && (
              <a 
                href={item.uiclapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white hover:bg-white/90 text-black text-[10px] font-black rounded-xl transition-all uppercase tracking-tighter"
              >
                <span className="material-symbols-outlined text-sm">menu_book</span>
                UICLAP
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Layout PADRÃO (Medium / Small)
  return (
    <a 
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between p-4 bg-card border ${item.highlight ? 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'border-white/5'} hover:border-white/20 rounded-xl transition-all shadow-md overflow-hidden min-h-[88px]`}
    >
      <div className="flex flex-col justify-center flex-1 pr-4">
        <span className={`w-fit text-[10px] font-bold text-white ${item.badgeColor} px-2 py-0.5 rounded-md tracking-wider uppercase mb-2`}>
          {item.badge}
        </span>
        <h3 className="text-white font-bold text-base leading-tight mb-0.5">{item.title}</h3>
        <p className="text-white/60 text-xs leading-snug line-clamp-2">{item.description}</p>
      </div>
      {renderSquareImage("w-16 h-16", "rounded-xl")}
    </a>
  );
};
