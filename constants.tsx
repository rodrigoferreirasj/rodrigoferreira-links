
import { Section } from './types';

export const SECTIONS: Section[] = [
  {
    title: "CONTEÚDO & AUTORIDADE",
    items: [
      {
        id: "podcast",
        badge: "PODCAST",
        badgeColor: "bg-badge-podcast",
        title: "Talentos para o Sucesso (TPS)",
        description: "Vendas, liderança e pontos fortes na prática (inclui “5 em 5” e “3 Ideias”)",
        image: "https://i.ibb.co/G4c7CRhd/Logo-2025-Logo-03-cone.png",
        url: "https://open.spotify.com/show/0nHQUpa8Wqw6ee7X3i7sOM",
        type: 'medium'
      },
      {
        id: "blog",
        badge: "BLOG",
        badgeColor: "bg-badge-content",
        title: "Conteúdo Exclusivo",
        description: "Artigos e reflexões para performance profissional",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=250&h=250&auto=format&fit=crop",
        url: "https://www.pontosfortes.com.br/blog",
        type: 'medium'
      },
      {
        id: "youtube",
        badge: "VÍDEOS",
        badgeColor: "bg-badge-content",
        title: "Canal no YouTube",
        description: "Insights aplicáveis sobre vendas e liderança",
        image: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        url: "https://www.youtube.com/@pontosfortes",
        type: 'medium'
      }
    ]
  },
  {
    title: "SERVIÇOS PREMIUM",
    items: [
      {
        id: "treinamentos",
        badge: "TREINAMENTOS",
        badgeColor: "bg-badge-training",
        title: "Treinamentos Corporativos",
        description: "Vendas · Liderança · Pontos Fortes · Gestão do Tempo",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=250&h=250&auto=format&fit=crop",
        url: "https://wa.me/message/MSEY7GX6C4W7I1",
        type: 'medium'
      },
      {
        id: "mentoria",
        badge: "MENTORIA",
        badgeColor: "bg-badge-training",
        title: "Mentorias Estratégicas",
        description: "Acompanhamento focado em resultado",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=250&h=250&auto=format&fit=crop",
        url: "https://wa.me/message/MSEY7GX6C4W7I1",
        type: 'medium'
      },
      {
        id: "coaching",
        badge: "COACHING",
        badgeColor: "bg-badge-training",
        title: "Coaching de Pontos Fortes",
        description: "Desenvolvimento profundo e individualizado",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=250&h=250&auto=format&fit=crop",
        url: "https://wa.me/message/MSEY7GX6C4W7I1",
        type: 'medium'
      }
    ]
  },
  {
    title: "DIAGNÓSTICOS & ASSESSMENTS",
    items: [
      {
        id: "sales_assessment",
        badge: "DIAGNÓSTICO",
        badgeColor: "bg-badge-training",
        title: "Assessment de Vendas",
        description: "Diagnóstico prático para performance comercial",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=250&h=250&auto=format&fit=crop",
        url: "#",
        type: 'medium'
      },
      {
        id: "leadership_assessment",
        badge: "DIAGNÓSTICO",
        badgeColor: "bg-badge-training",
        title: "Assessment de Liderança",
        description: "Clareza sobre estilo, impacto e desenvolvimento",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=250&h=250&auto=format&fit=crop",
        url: "https://radarlideranca.vercel.app/",
        type: 'medium'
      }
    ]
  },
  {
    title: "MATERIAIS",
    items: [
      {
        id: "book_commodities",
        badge: "LIVRO",
        badgeColor: "bg-badge-clients",
        title: "Commodities: como ter sucesso vendendo",
        description: "Aplicação prática no dia a dia comercial",
        image: "https://i.ibb.co/k2dPYgyy/4f83172a-4be5-4a30-9665-5a5389ad66cf.jpg",
        url: "https://loja.uiclap.com/titulo/ua48810",
        type: 'medium'
      },
      {
        id: "ebook_digital",
        badge: "E-BOOK",
        badgeColor: "bg-badge-content",
        title: "Commodities: 10 dicas práticas para vender",
        description: "Um ebook essencial para todo vendedor",
        image: "https://i.ibb.co/svTnCb8J/Capa-Livro-Commodities-v03-c-pia-small.png",
        url: "https://subscribepage.io/commodities",
        type: 'medium'
      }
    ]
  },
  {
    title: "FERRAMENTAS & APPS",
    items: [
      {
        id: "tool_values",
        badge: "FERRAMENTA",
        badgeColor: "text-badge-tool",
        title: "Ferramenta de Valores",
        description: "Descubra o que guia suas decisões",
        image: "https://cdn-icons-png.flaticon.com/512/1162/1162499.png",
        url: "https://pontosfortes-valores.netlify.app",
        type: 'tool'
      },
      {
        id: "tool_tki",
        badge: "FERRAMENTA",
        badgeColor: "text-badge-tool",
        title: "Teste de Conflitos (TKI)",
        description: "Entenda como você reage a conflitos",
        image: "https://cdn-icons-png.flaticon.com/512/4112/4112613.png",
        url: "https://assessment-tki.vercel.app/",
        type: 'tool'
      },
      {
        id: "tool_listening",
        badge: "TEORIA U",
        badgeColor: "text-badge-tool",
        title: "Teste de Escuta Ativa",
        description: "Avalie sua capacidade de ouvir de verdade",
        image: "https://cdn-icons-png.flaticon.com/512/3232/3232333.png",
        url: "https://escuta-ativa-pontosfortes.vercel.app/",
        type: 'tool'
      },
      {
        id: "tool_comm",
        badge: "Pulse+",
        badgeColor: "text-badge-tool",
        title: "Estilo & Qualidade da Comunicação",
        description: "Avalie seu impacto e clareza ao se comunicar",
        image: "https://cdn-icons-png.flaticon.com/512/2352/2352167.png",
        url: "https://pulseplus-pontosfortes.vercel.app/",
        type: 'tool'
      },
      {
        id: "tool_triade",
        badge: "Cronos+",
        badgeColor: "text-badge-tool",
        title: "Tríade do Tempo",
        description: "Diagnóstico de gestão do tempo e produtividade",
        image: "https://cdn-icons-png.flaticon.com/512/3563/3563456.png",
        url: "https://cronosplus.vercel.app",
        type: 'tool'
      },
      {
        id: "tool_wellbeing",
        badge: "WELLBEING COMPASS",
        badgeColor: "text-badge-tool",
        title: "Roda da Vida",
        description: "Roda da vida + 5 elementos do bem-estar",
        image: "https://cdn-icons-png.flaticon.com/512/2950/2950137.png",
        url: "https://wellbeingcompass.vercel.app",
        type: 'tool'
      },
      {
        id: "tool_sales_plan",
        badge: "SALES ACTION PLAN",
        badgeColor: "text-badge-tool",
        title: "PDI de Vendas Baseado em Pontos Fortes",
        description: "Crie seu plano de ação de vendas",
        image: "https://cdn-icons-png.flaticon.com/512/3222/3222672.png",
        url: "https://sales-action-plan-pontosfortes.vercel.app",
        type: 'tool'
      }
    ]
  }
];
