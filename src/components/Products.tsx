import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const telecomProducts = [
  { 
    slug: "radios-portateis", 
    title: "Rádios Portáteis Digitais", 
    desc: "Comunicação tática segura e criptografada para operações em campo.", 
    img: "https://i.ibb.co/MxMLcbYL/4.jpg",
    items: [
      { slug: "motorola-r2", brand: "MOTOROLA", title: "MOTOTRBO R2", desc: "O MOTOTRBO R2 é um potente equipamento de última geração que unifica a durabilidade e a ergonomia para garantir um uso seguro e simples. Com um alcance superior, áudio configurável e uma integração perfeita, o R2 é um acréscimo confiável a um dia de trabalho ininterrupto.", img: "https://i.ibb.co/zHNcy72t/Produtos-ACN-3.png" },
      { slug: "motorola-r5", brand: "MOTOROLA", title: "MOTOTRBO R5", desc: "Comunicação confiável e robusta para operações contínuas.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-r7", brand: "MOTOROLA", title: "MOTOTRBO R7 (Com e Sem Tela)", desc: "Rádio digital portátil com áudio avançado e conectividade preparada para o futuro.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-r7-ex", brand: "MOTOROLA", title: "MOTOTRBO R7 EX", desc: "Intrinsecamente seguro para ambientes perigosos, com máxima performance.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-dgp-8000e-5000e", brand: "MOTOROLA", title: "DGP 8000e / DGP 5000e", desc: "Série de rádios portáteis com voz e dados integrados de alto desempenho.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-dgp-8050ex-8550ex", brand: "MOTOROLA", title: "DGP 8050 EX / DGP 8550 EX", desc: "Certificação ATEX para uso seguro em atmosferas explosivas.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-dtr720", brand: "MOTOROLA", title: "DTR 720", desc: "Comunicação digital on-site com cobertura ampliada e design fino.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-dgm-8000e-5000e", brand: "MOTOROLA", title: "DGM 8000e / DGM 5000e", desc: "Rádios móveis avançados para operações embarcadas inteligentes.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-dgm-8500e-5500e", brand: "MOTOROLA", title: "DGM 8500e / DGM 5500e", desc: "Soluções de rádio móvel digital para conectividade contínua em frotas.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-dem300", brand: "MOTOROLA", title: "DEM 300", desc: "Rádio móvel confiável com interface simples.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-dem400", brand: "MOTOROLA", title: "DEM 400", desc: "Comunicação móvel eficiente com visor alfanumérico.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-dem500", brand: "MOTOROLA", title: "DEM 500", desc: "Rádio digital e analógico escalável para o seu negócio.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-slr5100", brand: "MOTOROLA", title: "SLR 5100", desc: "Repetidora de alto desempenho e confiabilidade para a sua rede de rádio.", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-t210", brand: "MOTOROLA", title: "Talkabout T210", desc: "Comunicação clara para lazer e equipes leves.", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-t470", brand: "MOTOROLA", title: "Talkabout T470", desc: "Companheiro robusto e resistente a intempéries para aventuras extremas.", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" },
      { slug: "motorola-t600", brand: "MOTOROLA", title: "Talkabout T600", desc: "À prova d'água e flutuante, ideal para comunicação extrema e aquática.", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" },
      
      { slug: "caltta-dh410", brand: "CALTTA", title: "DH410", desc: "Rádio digital portátil de entrada, design ergonômico e comunicação clara.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "caltta-dh460", brand: "CALTTA", title: "DH460", desc: "Rádio portátil DMR com display e teclado completo para versatilidade superior.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "caltta-ph600", brand: "CALTTA", title: "PH600", desc: "Rádio portátil de missão crítica resistente a água e poeira.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "caltta-ph660", brand: "CALTTA", title: "PH660", desc: "Equipamento portátil DMR versátil com funcionalidades avançadas de dados e voz.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "caltta-ph690", brand: "CALTTA", title: "PH690", desc: "O rádio mais avançado da série PH com conectividade expandida e alta durabilidade.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "caltta-dm660", brand: "CALTTA", title: "DM660", desc: "Rádio móvel DMR com display e excelente qualidade de áudio embarcado.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "caltta-pm790", brand: "CALTTA", title: "PM790", desc: "Rádio móvel robusto de missão crítica projetado para resposta ágil.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "caltta-smartlink600", brand: "CALTTA", title: "SMARTLINK600", desc: "Sistema avançado para despacho e gerenciamento de comunicação de rádio.", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" },
      { slug: "caltta-pr900", brand: "CALTTA", title: "PR900", desc: "Repetidora DMR profissional de alto rendimento para infraestruturas de rede.", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" },

      { slug: "intelbras-rpd-8", brand: "INTELBRAS", title: "RPD 8", desc: "Rádio portátil digital padrão DMR com incrível resistência e clareza de som.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rpd-6s", brand: "INTELBRAS", title: "RPD 6 S", desc: "Compacto e robusto, excelente para rotinas de segurança e controle de acesso.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rpc-360s", brand: "INTELBRAS", title: "RPC 360s", desc: "Comunicação profissional com recursos avançados de criptografia e durabilidade.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rm-8", brand: "INTELBRAS", title: "RM 8", desc: "Rádio móvel digital DMR de alta potência para viaturas.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rep-25", brand: "INTELBRAS", title: "REP 25", desc: "Sistema repetidor de sinal padrão DMR para ampliar sua cobertura.", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rm-7000", brand: "INTELBRAS", title: "RM 7000", desc: "Rádio móvel veicular Intelbras com excelente custo-benefício.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rc-6-mini", brand: "INTELBRAS", title: "RC 6 MINI", desc: "Rádio comunicador incrivelmente discreto, leve e fácil de operar.", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rc-4002-g2", brand: "INTELBRAS", title: "RC 4002 G2", desc: "Rádio comunicador de longo alcance para aventuras e trabalhos exigentes.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rc-3002-g2", brand: "INTELBRAS", title: "RC 3002 G2", desc: "Rádio comunicador confiável, com foco em ergonomia e durabilidade.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { slug: "intelbras-rc-4102", brand: "INTELBRAS", title: "RC 4102", desc: "Excelente rádio FRS com múltiplas funcionalidades para uso misto.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "radios-moveis", 
    title: "Rádios Móveis Veiculares", 
    desc: "Instalação embarcada com alta potência de transmissão para viaturas.", 
    img: "https://i.ibb.co/fG80G5M2/3.jpg",
    items: [
      { slug: "radio-veicular-tx", title: "Rádio Veicular TX", desc: "Instalação otimizada para consoles de viaturas com display de alta visibilidade.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "sistemas-repetidoras", 
    title: "Sistemas de Repetidoras", 
    desc: "Ampliação de cobertura de sinal para redes extensas de comunicação.", 
    img: "https://i.ibb.co/hw0BtDz/Produtos-ACN-1.png",
    items: [
      { slug: "repetidora-r500", title: "Repetidora Base R500", desc: "Garante cobertura contínua e sem falhas em áreas de difícil acesso.", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "acessorios-audio", 
    title: "Acessórios de Áudio", 
    desc: "Fones e headsets táticos para forças de segurança.", 
    img: "https://i.ibb.co/3mW5GDbM/Produtos-ACN-2.png",
    items: [
      { slug: "headset-tatico", title: "Headset Tático P22", desc: "Comunicação clara com supressão de ruídos externos.", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "antenas-profissionais", 
    title: "Antenas Profissionais", 
    desc: "Antenas móveis e fixas projetadas para alto rendimento e durabilidade.", 
    img: "https://i.ibb.co/Fk8y7yC9/Produtos-ACN.png",
    items: [
      { slug: "antena-uhf-v2", title: "Antena UHF de Teto", desc: "Alta capacidade de recepção com resistência a impactos.", img: "https://images.unsplash.com/photo-1534080536767-f703db600109?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "locacao-comodato", 
    title: "Locação e Comodato", 
    desc: "Contratos flexíveis de locação com suporte técnico e atualização tecnológica.", 
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    items: []
  },
];

export const vehicleProducts = [
  { 
    slug: "adaptacao-caracterizada", 
    title: "Adaptação Caracterizada", 
    desc: "Adaptação completa de viaturas ostensivas com elementos visuais, tecnologia e proteção.", 
    img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "capota-fibra-aco", title: "Capota de fibra ou aço", desc: "Estruturas resistentes para as mais diversas aplicações operacionais.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "compartimento-caes-c", title: "Compartimento para transporte de cães", desc: "Acomodação segura e climatizada para os animais.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "compartimento-detidos-c", title: "Compartimento para transporte de detidos", desc: "Celulares e divisórias de segurança em resina e polímero.", img: "https://images.unsplash.com/photo-1555319888-0672e0b577de?q=80&w=800&auto=format&fit=crop" },
      { slug: "compartimento-materiais-c", title: "Compartimento para transporte de materiais", desc: "Soluções integradas de gaveteiros e baús de armazenamento tático.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "compartimento-menores-c", title: "Compartimento para transporte de menores infratores", desc: "Proteção e segurança conforme legislações vigentes.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "conjunto-sinalizador-c", title: "Conjunto sinalizador acústico e visual", desc: "Barras e sirenes de alta performance para identificação da força.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "envelopamento-c", title: "Envelopamento automotivo e/ou plotagem", desc: "Adesivação e fixação de identidades visuais de grau prismático.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "guincho-eletrico", title: "Guincho elétrico", desc: "Guinchos de grande capacidade para apoio tático off-road.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "parachoque-dianteiro", title: "Para choque de impulsão dianteiro", desc: "Estruturas tubulares maciças para proteção frontal do veículo.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "pintura-total-c", title: "Pintura total de veículo", desc: "Cores e texturas sob especificações legais precisas das polícias.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "protetor-traseiro", title: "Protetor de para choque traseiro", desc: "Blindagem e proteção da seção posterior dos veículos de resgate.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "radios-comunicacao-c", title: "Rádios de comunicação", desc: "Instalação embarcada com alta potência de transmissão.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "revestimentos-banco-piso-c", title: "Revestimentos de banco e piso", desc: "Revestimentos laváveis e impermeáveis de alto tráfego.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "sistema-cameras-escuta", title: "Sistema de câmeras e escuta ambiental", desc: "Monitoramento embarcado com múltiplas câmeras HD e armazenamento DVR.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "snorkel", title: "Snorkel", desc: "Soluções de escapamento elevado para cenários alagados.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "suporte-armas-longas", title: "Suporte de armas longas", desc: "Travas rápidas mecânicas e elétricas com segurança operacional.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "adaptacao-descaracterizada", 
    title: "Adaptação Descaracterizada", 
    desc: "Adaptação velada para veículos de inteligência militar e civil, mantendo a operação discreta.", 
    img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "sinalizador-interno", title: "Conjunto sinalizador acústico e visual interno", desc: "Estrobos disfarçados em faróis e LEDs em quebra-sois invisíveis até ativação.", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" },
      { slug: "compartimento-caes-d", title: "Compartimento para transporte de cães", desc: "Módulos portáteis modulares com climatização inteligente.", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" },
      { slug: "compartimento-detidos-d", title: "Compartimento para transporte de detidos", desc: "Adaptações dissimuladas mantendo a característica civil do interior.", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" },
      { slug: "compartimento-materiais-d", title: "Compartimento para transporte de materiais", desc: "Cofres e estruturas travadas sob bancos e painéis.", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" },
      { slug: "compartimento-menores-d", title: "Compartimento para transporte de menores infratores", desc: "Adaptações específicas discretas para transferências.", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" },
      { slug: "radios-comunicacao-d", title: "Rádios de comunicação", desc: "Microfones de lapela veiculares e consolas escamoteáveis.", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" },
      { slug: "revestimentos-banco-piso-d", title: "Revestimentos de banco e piso", desc: "Proteção discreta não perceptível garantindo longa duração.", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "motocicletas", 
    title: "Motocicletas", 
    desc: "Adaptação específica e de segurança de motos para patrulhamento, escolta e fiscalização.", 
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "sinalizador-moto", title: "Conjunto sinalizador acústico e visual", desc: "Flaches LED direcionais, mastros estrobos e sirenes compactas.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { slug: "protetor-motor", title: "Protetor de motor e carenagem", desc: "Gaiolas tubulares para garantir segurança do motociclista e da patrulha.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { slug: "bauleto", title: "Bauleto", desc: "Compartimentos laterais e traseiros rígidos com trancas eletromecânicas.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { slug: "antena-pipa", title: "Antena corta pipa", desc: "Equipamento obrigatório e tático para patrulhas urbanas.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { slug: "pintura-moto", title: "Pintura total motocicleta", desc: "Padronização visual e tratamentos anticorrosivos duradouros.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { slug: "envelopamento-moto", title: "Envelopamento e/ou plotagem", desc: "Sinalização retrorreflexiva padrão de rodovias e estradas.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { slug: "porta-tonfas", title: "Porta tonfas", desc: "Montagem aerodinâmica lateral para extração rápida da tonfa.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "projetos-especiais", 
    title: "Projetos Especiais", 
    desc: "Apenas Galeria de Fotos e Projetos finalizados", 
    img: "https://images.unsplash.com/photo-1586026500585-f5b211d21bf9?q=80&w=800&auto=format&fit=crop",
    isPhotoOnly: true,
    items: [
      { slug: "proj-1", img: "https://i.ibb.co/S4m37D56/Ford-Ranger-2.png" },
      { slug: "proj-2", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" },
      { slug: "proj-3", img: "https://images.unsplash.com/photo-1555319888-0672e0b577de?q=80&w=800&auto=format&fit=crop" },
      { slug: "proj-4", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" },
      { slug: "proj-5", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { slug: "proj-6", img: "https://images.unsplash.com/photo-1586026500585-f5b211d21bf9?q=80&w=800&auto=format&fit=crop" }
    ]
  }
];

export const mainCategories = [
  {
    slug: 'radiocomunicacao',
    title: 'Radiocomunicação',
    desc: 'Soluções avançadas em comunicação de rádio para operações críticas, abrangendo comunicação tática, móvel e infraestrutura.',
    img: 'https://i.ibb.co/S4fN5NQP/Whats-App-Image-2026-05-22-at-14-28-24.jpg',
    highlightColor: 'text-blue-700',
    items: telecomProducts
  },
  {
    slug: 'adaptacao-veicular',
    title: 'Adaptação Veicular',
    desc: 'Equipamentos e projetos de adaptação para viaturas e frotas de emergência, incluindo sinalização e acústica de alta performance.',
    img: 'https://i.ibb.co/S4m37D56/Ford-Ranger-2.png',
    highlightColor: 'text-green-700',
    items: vehicleProducts
  }
];

export default function Products() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Nossos Produtos</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas para operações críticas
          </h3>
          <p className="text-gray-600 text-lg">
            Da radiocomunicação ao implemento veicular: desenvolvemos e fornecemos tecnologia para quem não pode falhar operacionalmente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {mainCategories.map((category, idx) => (
            <motion.div 
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={`/produtos/${category.slug}`} className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={category.img} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="font-display text-3xl font-bold text-white drop-shadow-lg mb-2">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-gray-600 text-lg flex-grow mb-6">{category.desc}</p>
                  <span className={`mt-auto inline-flex items-center gap-2 font-semibold transition-colors ${category.highlightColor === 'text-blue-700' ? 'text-blue-600 group-hover:text-blue-800' : 'text-green-600 group-hover:text-green-800'}`}>
                    Explorar linha <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
