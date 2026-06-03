import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const telecomProducts = [
  { 
    slug: "radios-portateis", 
    title: "Rádios Portáteis Digitais", 
    desc: "Comunicação tática segura e criptografada para operações em campo.", 
    img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "motorola-r2", brand: "MOTOROLA", title: "MOTOTRBO R2", desc: "O MOTOTRBO R2 é um potente equipamento de última geração que unifica a durabilidade e a ergonomia para garantir um uso seguro e simples.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
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
    img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "radio-veicular-tx", title: "Rádio Veicular TX", desc: "Instalação otimizada para consoles de viaturas com display de alta visibilidade.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "sistemas-repetidoras", 
    title: "Sistemas de Repetidoras", 
    desc: "Ampliação de cobertura de sinal para redes extensas de comunicação.", 
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "repetidora-r500", title: "Repetidora Base R500", desc: "Garante cobertura contínua e sem falhas em áreas de difícil acesso.", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "acessorios-audio", 
    title: "Acessórios de Áudio", 
    desc: "Microfones de lapela, fones e headsets táticos para forças de segurança.", 
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "headset-tatico", title: "Headset Tático P22", desc: "Comunicação clara com supressão de ruídos externos.", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "antenas-profissionais", 
    title: "Antenas Profissionais", 
    desc: "Antenas móveis e fixas projetadas para alto rendimento e durabilidade.", 
    img: "https://images.unsplash.com/photo-1534080536767-f703db600109?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "antena-uhf-v2", title: "Antena UHF de Teto", desc: "Alta capacidade de recepção com resistência a impactos.", img: "https://images.unsplash.com/photo-1534080536767-f703db600109?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "locacao-comodato", 
    title: "Locação e Comodato", 
    desc: "Contratos flexíveis de locação com suporte técnico e atualização tecnológica.", 
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    items: []
  },
];

export const vehicleProducts = [
  { 
    slug: "sinalizadores-visuais", 
    title: "Sinalizadores Visuais (Giroflex)", 
    desc: "Sinalização acústica e visual em LED de alta intensidade para emergências.", 
    img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "barra-sinalizadora-led", title: "Barra Sinalizadora LED", desc: "Giroflex linear aerodinâmico em policarbonato ultrarresistente.", img: "https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "sistemas-acusticos", 
    title: "Sistemas Acústicos e Sirenes", 
    desc: "Sirenes de alta potência com controle inteligente para viaturas.", 
    img: "https://images.unsplash.com/photo-1626294713835-13f5d5bf6eb1?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "sirene-eletronica-100w", title: "Sirene Eletrônica 100W", desc: "Amplificador multiprogramável com tons de emergência.", img: "https://images.unsplash.com/photo-1626294713835-13f5d5bf6eb1?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "paineis-comando", 
    title: "Painéis de Comando", 
    desc: "Controle centralizado de luzes, sirenes e rádio em consoles ergonômicos.", 
    img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "painel-controle-central", title: "Painel de Controle Tátil", desc: "Display de controle inteligente para todos os dispositivos eletrônicos.", img: "https://images.unsplash.com/photo-1520638062993-9c8cfa2bdf9e?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "iluminacao-perimetral", 
    title: "Iluminação Perimetral", 
    desc: "Faróis de beco e iluminação auxiliar em LED para cenários noturnos.", 
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "farol-auxiliar-led", title: "Farol Auxiliar de Beco", desc: "Intensa luminosidade lateral para varreduras em áreas escuras.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "compartimentos-detidos", 
    title: "Compartimentos de Detidos", 
    desc: "Celulares e divisórias de segurança homologadas em polímero e aço.", 
    img: "https://images.unsplash.com/photo-1555319888-0672e0b577de?q=80&w=800&auto=format&fit=crop",
    items: [
      { slug: "cela-tecnopolimero-suv", title: "Cela Integrada para SUV", desc: "Cabine antivandalismo modelada com estrutura indeformável.", img: "https://images.unsplash.com/photo-1555319888-0672e0b577de?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  { 
    slug: "projetos-especiais", 
    title: "Projetos Especiais", 
    desc: "Adaptação customizada de ambulâncias, resgate e postos de comando.", 
    img: "https://images.unsplash.com/photo-1586026500585-f5b211d21bf9?q=80&w=800&auto=format&fit=crop",
    items: []
  },
];

export const mainCategories = [
  {
    slug: 'radiocomunicacao',
    title: 'Radiocomunicação',
    desc: 'Soluções avançadas em comunicação de rádio para operações críticas, abrangendo comunicação tática, móvel e infraestrutura.',
    img: 'https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop',
    highlightColor: 'text-blue-700',
    items: telecomProducts
  },
  {
    slug: 'adaptacao-veicular',
    title: 'Adaptação Veicular',
    desc: 'Equipamentos e projetos de adaptação para viaturas e frotas de emergência, incluindo sinalização e acústica de alta performance.',
    img: 'https://images.unsplash.com/photo-1587301669865-c38d21b777a8?q=80&w=800&auto=format&fit=crop',
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
