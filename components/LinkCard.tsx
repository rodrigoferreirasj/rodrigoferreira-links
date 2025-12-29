
import React from 'react';
import { LinkItem } from '../types';

interface LinkCardProps {
  item: LinkItem;
}

export const LinkCard: React.FC<LinkCardProps> = ({ item }) => {
  // Helper para renderizar a imagem quadrada
  const renderSquareImage = (sizeClasses: string, roundedClasses: string = "rounded-xl") => {
    // Identifica se o item é um ícone/logo (geralmente com fundo transparente ou marca específica)
    const isIcon = ['podcast', 'youtube', 'whatsapp'].includes(item.id) || item.type === 'tool';
    
    return (
      <div 
        className={`${sizeClasses} ${roundedClasses} ${isIcon ? 'bg-white/10' : 'bg-white/5'} shrink-0 shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden bg-center bg-no-repeat`} 
        style={{ 
          backgroundImage: `url('${item.image}')`,
          backgroundSize: isIcon ? '70%' : 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
    );
  };

  // Layout para CARD GRANDE (Destaque Principal)
  if (item.type === 'large') {
    return (
      <a 
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between p-5 bg-card border border-white/5 hover:border-cta-primary/40 rounded-2xl transition-all shadow-xl"
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
        className="group flex items-center p-3 bg-card border border-white/5 hover:border-white/15 rounded-xl transition-all shadow-md"
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

  // Layout PADRÃO (Medium / Small)
  return (
    <a 
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 bg-card border border-white/5 hover:border-white/20 rounded-xl transition-all shadow-md overflow-hidden min-h-[88px]"
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
