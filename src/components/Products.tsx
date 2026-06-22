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
      { 
        slug: "motorola-r2", 
        brand: "MOTOROLA", 
        title: "MOTOTRBO R2", 
        desc: "O MOTOTRBO R2 é um potente equipamento de última geração que unifica a durabilidade e a ergonomia para garantir um uso seguro e simples. Com um alcance superior, áudio configurável e uma integração perfeita, o R2 é um acréscimo confiável a um dia de trabalho ininterrupto.", 
        img: "https://i.ibb.co/zHNcy72t/Produtos-ACN-3.png",
        images: [
          "https://i.ibb.co/DHq9T7c6/5.jpg",
          "https://i.ibb.co/Sw6KHXPB/2.jpg",
          "https://i.ibb.co/k2cV7ycC/4.jpg",
          "https://i.ibb.co/b5NJ9qkg/7.jpg",
          "https://i.ibb.co/TqR2Tp2J/6.jpg",
          "https://i.ibb.co/7hxv0F5/8.jpg",
          "https://i.ibb.co/S4yrbbx1/3.jpg"
        ]
      },
      { 
        slug: "motorola-r5", 
        brand: "MOTOROLA", 
        title: "MOTOTRBO R5", 
        desc: `O MOTOTRBO R5 conecta as equipes, ajudando a aumentar a eficiência e a segurança com áudio alto e claro que elimina o ruído de fundo, além de indicações de status e controles intuitivos para que os colaboradores possam se concentrar em suas tarefas, tudo isso em um dispositivo resistente e compacto feito para durar.`, 
        img: "https://i.ibb.co/jkKXzsRH/10.jpg",
        images: [
          "https://i.ibb.co/jkKXzsRH/10.jpg",
          "https://i.ibb.co/7JYdc0yD/11.jpg",
          "https://i.ibb.co/23KVDzd7/12.jpg",
          "https://i.ibb.co/cXxnqtFr/13.jpg",
          "https://i.ibb.co/fWFj4Jz/14.jpg",
          "https://i.ibb.co/8nrztjVz/15.jpg",
          "https://i.ibb.co/gZ48KhVr/16.jpg"
        ]
      },
      { 
        slug: "motorola-r7", 
        brand: "MOTOROLA", 
        title: "MOTOTRBO R7 (Com e Sem Tela)", 
        desc: `R7 oferece capacidades de áudio revolucionárias em um dispositivo robusto. Seu processamento de áudio avançado garante que suas comunicações são altas e claras, enquanto seu design robusto está preparado para os ambientes mais hostis, e as opções avançadas de conectividade preparam o seu pessoal para o futuro.`, 
        img: "https://i.ibb.co/JWpGj047/18.jpg",
        images: [
          "https://i.ibb.co/JWpGj047/18.jpg",
          "https://i.ibb.co/tT3BRKPK/19.jpg",
          "https://i.ibb.co/4Z72sRGj/20.jpg",
          "https://i.ibb.co/JN5Wsq4/21.jpg",
          "https://i.ibb.co/G4W1Rh7n/22.jpg",
          "https://i.ibb.co/s974ySTq/23.jpg",
          "https://i.ibb.co/n8Zp9Fhw/24.jpg"
        ]
      },
      { 
        slug: "motorola-r7-ex", 
        brand: "MOTOROLA", 
        title: "MOTOTRBO R7 EX", 
        desc: `Os rádios portáteis MOTOTRBO R7Ex, com certificação ATEX, IECEx e INMETRO, oferecem comunicações de alta qualidade em ambientes potencialmente explosivos, permitindo que as equipes trabalhem com mais segurança. Com áudio alto e claro, além de uma série de recursos avançados, o R7Ex ajuda os trabalhadores a ouvir chamadas e compartilhar mensagens com mais clareza, melhorando o desempenho, aumentando a produtividade e reduzindo o tempo de inatividade.`, 
        img: "https://i.ibb.co/JWpGj047/18.jpg",
        images: [
          "https://i.ibb.co/JWpGj047/18.jpg",
          "https://i.ibb.co/tT3BRKPK/19.jpg",
          "https://i.ibb.co/4Z72sRGj/20.jpg",
          "https://i.ibb.co/JN5Wsq4/21.jpg",
          "https://i.ibb.co/G4W1Rh7n/22.jpg",
          "https://i.ibb.co/s974ySTq/23.jpg",
          "https://i.ibb.co/n8Zp9Fhw/24.jpg"
        ]
      },
      { 
        slug: "motorola-dgp-8000e-5000e", 
        brand: "MOTOROLA", 
        title: "DGP 8000e / DGP 5000e", 
        desc: `Esta evolução dinâmica dos rádios digitais bidirecionais MOTOTRBOTM ajuda você a melhorar sua conectividade, segurança e produtividade. A Série DGP™8000e/DGP™5000e foi projetada para o profissional qualificado que se nega a desistir. Com voz e dados de alto desempenho integrados e recursos avançados para um funcionamento eficiente, estes rádios de última geração oferecem níveis máximos de conectividade para sua organização.

Isto é o que estes rádios de última geração têm de novo:

Acelerômetro integrado para o recurso Trabalhador Acidentado opcional
Bluetooth® 4.0
Acompanhamento e localização em áreas internas
Wi-Fi integrado
Atualizações de software através de WiFi
Qualidade de áudio melhorada
Capacidade de ampliação melhorada 
Bateria de maior duração (até 29 horas)
Maior alcance (até 8%)
Maior resistência à água (IP68)
Os rádios da Série DGP™8000e/dgp™5000e incluem:
DGP 8050e
DGP 5050e
DGP 8550e
DGP 5550e`, 
        img: "https://i.ibb.co/jZDW0fDK/37.jpg",
        images: [
          "https://i.ibb.co/jZDW0fDK/37.jpg"
        ]
      },
      { slug: "motorola-dgp-8050ex-8550ex", brand: "MOTOROLA", title: "DGP 8050 EX / DGP 8550 EX", desc: "Certificação ATEX para uso seguro em atmosferas explosivas.", img: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=800&auto=format&fit=crop" },
      { 
        slug: "motorola-dtr720", 
        brand: "MOTOROLA", 
        title: "DTR 720", 
        desc: `Os rádios DTR720 da Motorola são agora mais confiáveis do que nunca. Permitem estabelecer comunicações privadas sem interferências para ajudar a sua equipe a manter o foco enquanto garantem a privacidade dase suas comunicações.

Com um design fino e resistente, o rádio digital bidirecional DTR720 possui classificação IP54 e funciona em 900 MHz. Visor colorido com gráfico completo e menu de navegação intuitivo que ajuda a localizar rapidamente todas as funções do rádio.  O DTR720 oferece opções flexíveis de comunicação, incluindo "chamada digital um para um" e "chamada digital um para vários". O DTR720 proporciona um excelente nível de cobertura, bateria de longa duração e qualidade de áudio digital; isto é, áudio forte em qualquer parte.`, 
        img: "https://i.ibb.co/twGWF1PK/39.jpg",
        images: [
          "https://i.ibb.co/twGWF1PK/39.jpg",
          "https://i.ibb.co/67334DFq/40.jpg",
          "https://i.ibb.co/chmg2GSK/41.jpg",
          "https://i.ibb.co/HDWXvWBd/42.jpg",
          "https://i.ibb.co/ycCtvnxk/43.jpg"
        ]
      },
      { 
        slug: "motorola-dgm-8000e-5000e", 
        brand: "MOTOROLA", 
        title: "DGM 8000e / DGM 5000e", 
        desc: `Esta evolução dinâmica dos rádios digitais bidirecionais MOTOTRBOTM ajuda você a melhorar sua conectividade, segurança e produtividade. A Série DGM™8000e/DGM™5000e foi projetada para o profissional qualificado que se recusa a desistir. Com voz e dados de alto desempenho integrados e recursos avançados para um funcionamento eficiente, estes rádios de última geração oferecem níveis máximos de conectividade para sua organização.

Isto é o que estes rádios de última geração têm de novo:

Wi-Fi integrado
Atualizações de software através de WiFi
Bluetooth® 4.0
Os rádios da Série DGM™8000e/DGM™5000e incluem:
DGM™8500e (alfanumérico)
DGM™5500e (alfanumérico)
DGM™8000e (numérico)
DGM™5000e (numérico)`, 
        img: "https://i.ibb.co/R46TPVLL/ACN-Produtos-Motorola-1.jpg",
        images: [
          "https://i.ibb.co/R46TPVLL/ACN-Produtos-Motorola-1.jpg"
        ]
      },
      { slug: "motorola-dgm-8500e-5500e", brand: "MOTOROLA", title: "DGM 8500e / DGM 5500e", desc: "Soluções de rádio móvel digital para conectividade contínua em frotas.", img: "https://images.unsplash.com/photo-1544256718-3b320d7718c9?q=80&w=800&auto=format&fit=crop" },
      { 
        slug: "motorola-dem300", 
        brand: "MOTOROLA", 
        title: "DEM 300", 
        desc: `Mantenha-se conectado a seus funcionários estejam eles entregando carga, despachando caminhões ou dirigindo um ônibus escolar. O rádio móvel MOTOTRBO DEM 300 é uma solução confiável e econômica para manter sua equipe em contato, assim eles podem se comunicar, coordenar e colaborar com máxima eficiência e segurança. O DEM 300 foi projetado para que o motorista possa se conectar em distrações. Esses rádios podem ser usados por motoristas de veículos comerciais durante a operação de seus veículos.

Esse rádio móvel analógico/digital oferece todos os benefícios da tecnologia mais recente – desde qualidade de áudio superior a cobertura mais ampla. Ele é também compatível com funções de negócios essenciais avançadas do MOTOTRBO, tais como interrupção de transmissão (somente decodificação) para priorizar comunicações importantes.

O modelo somente analógico do DEM 300 permite a você atualizar para o modelo digital com um simples pacote de software quando lhe for conveniente. O DEM 300 é fácil de usar e fornece comunicação nítida para máxima eficiência da sua operação. A Motorola também oferece o Rádio Móvel MOTOTRBO DEM 300 com visor alfanumérico.`, 
        img: "https://i.ibb.co/GGZ8V58/45.jpg",
        images: [
          "https://i.ibb.co/GGZ8V58/45.jpg"
        ]
      },
      { 
        slug: "motorola-dem400", 
        brand: "MOTOROLA", 
        title: "DEM 400", 
        desc: `Mantenha-se conectado a seus funcionários estejam eles entregando carga, despachando caminhões ou dirigindo um ônibus escolar. O rádio móvel MOTOTRBO DEM 400 é uma solução confiável e econômica para manter sua equipe em contato, assim eles podem se comunicar, coordenar e colaborar com máxima eficiência e segurança. O DEM 400 foi projetado para que o motorista possa se conectar em distrações. Esses rádios podem ser usados por motoristas de veículos comerciais durante a operação de seus veículos.

Esse rádio móvel analógico/digital oferece todos os benefícios da tecnologia mais recente – desde qualidade de áudio superior a cobertura mais ampla. Ele é também compatível com funções de negócios essenciais avançadas do MOTOTRBO, tais como interrupção de transmissão (somente decodificação) para priorizar comunicações importantes.

O modelo somente analógico do DEM 400 permite a você atualizar para o modelo digital com um simples pacote de software quando lhe for conveniente. O DEM 400 é fácil de usar e fornece comunicação nítida para máxima eficiência da sua operação. A Motorola também oferece o Rádio Móvel MOTOTRBO DEM 400 com visor alfanumérico.`, 
        img: "https://i.ibb.co/WWtXbhnV/47.jpg",
        images: [
          "https://i.ibb.co/WWtXbhnV/47.jpg"
        ]
      },
      { 
        slug: "motorola-dem500", 
        brand: "MOTOROLA", 
        title: "DEM 500", 
        desc: `O poder da comunicação digital está agora ao seu alcance. Os rádios móveis MOTOTRBO DEM 500 são compactos e compatíveis. Assim, os trabalhadores podem ficar conectados, quer estejam recolhendo a carga ou transportando passageiros. Como parte da família de rádios da MOTOTRBO, o DEM 500 oferece o melhor em tecnologia de rádio digital, com recursos como a capacidade integrada de sistemas de voz, o dobro da capacidade de chamadas, e comunicações de voz mais claras. Com o recurso inteligente de áudio, os motoristas não precisam ajustar o volume do rádio para evitar a perda de uma chamada, já que o rádio monitora o ruído de fundo e ajusta-se automaticamente.

Para aqueles que operam no analógico, o DEM 500 permite que você atualize para o digital no seu próprio ritmo e orçamento, com escalabilidade simples para adicionar funções e recursos. Este rádio também é compatível com os recursos avançados do MOTOTRBO empresarial, tais como a transmissão com interrupção para priorizar a comunicação crítica.

Para a compatibilidade de sistemas de voz digital acessíveis, o MOTOTRBO DEM 500 realiza o trabalho com clareza e facilidade.`, 
        img: "https://i.ibb.co/JjsRnGhw/49.jpg",
        images: [
          "https://i.ibb.co/JjsRnGhw/49.jpg"
        ]
      },
      { 
        slug: "motorola-slr5100", 
        brand: "MOTOROLA", 
        title: "SLR 5100", 
        desc: `Para que seu negócio tenha sucesso, você precisa que as comunicações de dados e voz sejam confiáveis e cheguem a todos os setores de suas operações.

A repetidora MOTOTRBO SLR 5100 oferece um serviço de alto desempenho e confiabilidade de rádio bidirecional com todos os recursos que você precisa para se conectar ao seu local de trabalho, seja no campo ou no chão de fábrica.Com seu fator de forma elegante e baixo consumo de energia, o MOTOTRBO
SLR 5100 foi projetado para ter baixo custo de propriedade. E com um grande avanço na tecnologia, ela representa a próxima geração de repetidoras como alicerce do sistema de rádio bidirecional profissional MOTOTRBO.

Se você precisa da simplicidade de um sistema convencional de único local ou da potência dos recursos de entroncamento do Capacity Plus, Linked Capacity Plus ou Connect Plus, a repetidora SLR 5100 fornece todo o poder do rádio digital bidirecional para sua força de trabalho.

Para confirmar a disponibilidade em seu país, por favor contate seu representante da Motorola.`, 
        img: "https://i.ibb.co/7dk0ySL2/51.jpg",
        images: [
          "https://i.ibb.co/7dk0ySL2/51.jpg",
          "https://i.ibb.co/rKVmNTvq/52.jpg",
          "https://i.ibb.co/vCSSdHW5/53.jpg",
          "https://i.ibb.co/tjVR0gq/54.jpg",
          "https://i.ibb.co/bjW5hDd0/55.jpg",
          "https://i.ibb.co/bj07L3J9/56.jpg",
          "https://i.ibb.co/NPcTYh0/57.jpg",
          "https://i.ibb.co/TB1RLz26/58.jpg",
          "https://i.ibb.co/XZhrTt4X/59.jpg"
        ]
      },
      { 
        slug: "motorola-t210", 
        brand: "MOTOROLA", 
        title: "Talkabout T210", 
        desc: `Resistente e estiloso, o rádio bidirecional TALKABOUT T210 é a melhor maneira de se manter conectado durante as atividades ao ar livre.  Em casa, em um camping, em um festival ou simplesmente durante uma caminhada, o TALKABOUT T210 mantém você em contato. 

Possui um botão de emparelhamento simplificado que facilita a configuração, e carregamento USB para maior praticidade. Além disso, atende aos requisitos da FRS para uso sem licença e inclui recursos chave como visor retroiluminado, 26 canais e até 32 km (20) de alcance* com chamadas sem custo. 

* Dependendo das condições e do terreno`, 
        img: "https://i.ibb.co/PnyVKvm/61.jpg",
        images: [
          "https://i.ibb.co/PnyVKvm/61.jpg",
          "https://i.ibb.co/DfZ22jbh/62.jpg",
          "https://i.ibb.co/5h7YC6Bg/63.jpg",
          "https://i.ibb.co/WWsg4ZGN/64.jpg",
          "https://i.ibb.co/DH7wMrsV/65.jpg",
          "https://i.ibb.co/DfMzJhZV/66.jpg"
        ]
      },
      { 
        slug: "motorola-t470", 
        brand: "MOTOROLA", 
        title: "Talkabout T470", 
        desc: `O TALKABOUT T470 é o companheiro de viagens que você precisa. Com classifição IPX4, o T470 é resistente às intempéries e suporta todo tipo de ambientes hostis. A lanterna LED integrada permite chegar até onde você quer, mesmo em plena escuridão. 

(Somente EUA e Canadá) E com o Carregamento Silencioso, o T470 ainda receberá alertas meteorológicos/de emergências da Administração Nacional Oceânica e Atmosférica (NOAA), mantendo as chamadas silenciosas durante o carregamento.

Com um alcance de até 55 quilômetros* / (T470BR) 35 quilômetros* / (T470CO) 56 quilômetros* e a liberdade de communication sem fio, o T470 não demorará suas tarefas.`, 
        img: "https://i.ibb.co/DPTs2F5G/68.jpg",
        images: [
          "https://i.ibb.co/DPTs2F5G/68.jpg",
          "https://i.ibb.co/DDH38KVz/69.jpg"
        ]
      },
      { 
        slug: "motorola-t600", 
        brand: "MOTOROLA", 
        title: "Talkabout T600", 
        desc: `Esteja conectado durante suas aventuras mais radicais ao ar livre

Com design robusto, totalmente submersível*, com recursos de segurança e um alcance de 35 km, o T600BR H2O mantém você conectado e protegido durante suas atividades radicais ao ar livre.

O T600BR H2O vem equipado com os melhores recursos de rádio, incluindo a capacidade de flutuar* e uma lanterna que se ativa com a água. A lanterna também inclui um LED vermelho para favorecer a visão noturna.

Com estes recursos excepcionais, você tem a certeza de que o T600BR H2O o acompanhará em suas aventuras mais radicais, na terra ou no mar, proporcionando comunicações confiáveis. 

Que tipo de alcance posso esperar de meus rádios? O alcance indicado para as comunicações é calculado em condições ideais, com linha de visada livre. O alcance real poderá variar dependendo do terreno e das condições ambientais, e costuma ser inferior ao máximo possível. O seu alcance real estará limitado por vários fatores, como por exemplo, o terreno, as condições climáticas, as obstruções e a interferência eletromagnética.`, 
        img: "https://i.ibb.co/Q32T4VNm/71.jpg",
        images: [
          "https://i.ibb.co/Q32T4VNm/71.jpg",
          "https://i.ibb.co/KxQTGLyy/72.jpg",
          "https://i.ibb.co/C3bb1v0X/73.jpg",
          "https://i.ibb.co/fV59wHpP/74.jpg",
          "https://i.ibb.co/zTK5c1MJ/75.jpg",
          "https://i.ibb.co/RTWjdgpy/76.jpg",
          "https://i.ibb.co/67G9bcP7/77.jpg"
        ]
      },
      
      { 
        slug: "caltta-dh410", 
        brand: "CALTTA", 
        title: "DH410", 
        desc: "A nova geração de rádios digitais da série DH4 conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/4ZMTbrnt/DH410.jpg",
        images: ["https://i.ibb.co/4ZMTbrnt/DH410.jpg"]
      },
      { 
        slug: "caltta-dh460", 
        brand: "CALTTA", 
        title: "DH460", 
        desc: "A nova geração de rádios digitais da série DH4 conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/6cyV7g5m/DH460.jpg",
        images: ["https://i.ibb.co/6cyV7g5m/DH460.jpg"]
      },
      { 
        slug: "caltta-ph600", 
        brand: "CALTTA", 
        title: "PH600", 
        desc: "A nova geração de rádios digitais da série PH6 conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/jk3Chsyt/PH600.jpg",
        images: ["https://i.ibb.co/jk3Chsyt/PH600.jpg"]
      },
      { 
        slug: "caltta-ph660", 
        brand: "CALTTA", 
        title: "PH660", 
        desc: "Equipamento portátil DMR versátil com funcionalidades avançadas de dados e voz.", 
        img: "https://i.ibb.co/bRvMd9L0/PH660.jpg",
        images: ["https://i.ibb.co/bRvMd9L0/PH660.jpg"]
      },
      { 
        slug: "caltta-ph690", 
        brand: "CALTTA", 
        title: "PH690", 
        desc: "A nova geração de rádios digitais da série PH6 conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/yc50v2Tm/PH690.jpg",
        images: ["https://i.ibb.co/yc50v2Tm/PH690.jpg"]
      },
      { 
        slug: "caltta-dm660", 
        brand: "CALTTA", 
        title: "DM660", 
        desc: "O rádio DM660 apresenta um design moderno e diferenciado, é compacto, com excelente cobertura e desempenho de Voz. Possui certificação IP54 e MIL-STD-810H, adequado para várias atividades ao ar livre e qualificado para todos os tipos de ambientes com trabalhos rigorosos.", 
        img: "https://i.ibb.co/pBkt5gCS/DM660.jpg",
        images: ["https://i.ibb.co/pBkt5gCS/DM660.jpg"]
      },
      { 
        slug: "caltta-pm790", 
        brand: "CALTTA", 
        title: "PM790", 
        desc: "A nova geração de rádios digitais compactos da série PM790 conta com recursos versáteis, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/ycMj10J0/PM790.jpg",
        images: ["https://i.ibb.co/ycMj10J0/PM790.jpg"]
      },
      { 
        slug: "caltta-smartlink600", 
        brand: "CALTTA", 
        title: "SMARTLINK600", 
        desc: "A nova geração de rádios digitais das REPETIDORAS conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/BK2q3K4f/Smartlink600.jpg",
        images: ["https://i.ibb.co/BK2q3K4f/Smartlink600.jpg"]
      },
      { 
        slug: "caltta-pr900", 
        brand: "CALTTA", 
        title: "PR900", 
        desc: "A PR900 é uma repetidora digital profissional com funções potentes e uma configuração conveniente, com mais facilidade de programação atendendo a altos requisitos dos usuários. Solução essencial para os mais variados cenários e aplicações profissionais.", 
        img: "https://i.ibb.co/6JnbNQQP/PR900.jpg",
        images: ["https://i.ibb.co/6JnbNQQP/PR900.jpg"]
      },

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
    img: 'https://i.ibb.co/rK3N6JSm/Design-sem-nome-4.jpg',
    highlightColor: 'text-blue-700',
    items: telecomProducts
  },
  {
    slug: 'adaptacao-veicular',
    title: 'Adaptação Veicular',
    desc: 'Equipamentos e projetos de adaptação para viaturas e frotas de emergência, incluindo sinalização e acústica de alta performance.',
    img: 'https://i.ibb.co/Mx7f1vD6/fotocarro.jpg',
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
