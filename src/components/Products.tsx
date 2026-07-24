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
          "https://i.ibb.co/Sw6KHXPB/2.jpg",
          "https://i.ibb.co/DHq9T7c6/5.jpg",
          "https://i.ibb.co/k2cV7ycC/4.jpg",
          "https://i.ibb.co/b5NJ9qkg/7.jpg",
          "https://i.ibb.co/TqR2Tp2J/6.jpg",
          "https://i.ibb.co/7hxv0F5/8.jpg",
          "https://i.ibb.co/S4yrbbx1/3.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQDzAnX3CKK_R6nbErzhKmHDAWvXZZEbpz71SQOxsR0aeME?e=erdaLO"
      },
      {
        slug: "motorola-vx-80",
        brand: "MOTOROLA",
        title: "RÁDIO PORTÁTIL Vx-80 UHF/VHF",
        desc: "O rádio VX-80 é uma ferramenta de comunicação rentável projetada para usuários iniciantes e de nível intermediário. Trata-se de um rádio portátil com todos os recursos necessários para garantir uma comunicação confiável a um preço acessível. Unicamente modelos não CE.",
        img: "https://i.ibb.co/rRfF2tsw/modelo01.png",
        images: [
          "https://i.ibb.co/rRfF2tsw/modelo01.png"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQACUkv7OA20RLOLuDd_1pw0Acc1cv_TlRv9-CGTMbJo0RI?e=eP2Qs9"
      },
      {
        slug: "motorola-dep-250",
        brand: "MOTOROLA",
        title: "RÁDIO PORTÁTIL MOTOTRBO DEP 250",
        desc: `O rádio MOTOTRBO DEP 250 será sua nova opção. Esta série pode melhorar a eficiência da comunicação e é fácil de usar. Trata-se de um rádio prático projetado e fabricado para profissionais.

Experimente a comunicação de voz digital MOTOTRBO. Hoje, milhares de usuários confiam em sua excelente qualidade de voz e desempenho. Isso permite que sua empresa reduza efetivamente as despesas operacionais enquanto mantém uma maior produtividade.

O rádio MOTOTRBO DEP 250 é fácil de usar e de atualizar com os sistemas analógicos existentes. Se sua empresa está pensando em migrar para um sistema digital, esses novos rádios digitais são compatíveis com os modos analógico e digital. A compatibilidade dos acessórios de audio permite aproveitar seu estoque anterior, ajudando a proteger ainda mais seu investimento.

Em ambientes com altos requisitos de equipamentos ou longas horas de trabalho, os rádios digitais têm melhor desempenho do que os analógicos e podem garantir uma comunicação de voz clara.

O rádio MOTOTRBO DEP 250 oferece os benefícios da tecnologia digital: no modo digital, 40% mais tempo de conversação, capacidade de voz dupla com largura de banda de 12.5kHz e melhor desempenho de áudio do que os equipamentos analógicos. Seu rádio MOTOTRBO fornecerá uma comunicação de voz mais clara em todas as chamadas, eliminando o ruído estático e de fundo do modelo analógico.`,
        img: "https://i.ibb.co/KzqjRBtH/modelo-02.png",
        images: [
          "https://i.ibb.co/KzqjRBtH/modelo-02.png"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBV6FXP-eCrTo_K-uYAkKhnAQ4f00yQBCJnA1_KPqhs_GQ?e=r20r2f",
        accessoriesCatalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBVVSR3mse4TI5oCwEbmMBuAX1pbWJ_QhQT-T14kS2UHoo?e=BgNYDH"
      },
      {
        slug: "motorola-curve",
        brand: "MOTOROLA",
        title: "Curve Rádio Bidirecional",
        desc: `Rádio empresarial

O Curve combina uma operação de rádio simples e intuitiva com funções avançadas que ajudam a sua equipe a se manter em contato enquanto continuarem produtivos e concentrados em seu trabalho. Criado para os negócios, desenvolvido para durar.`,
        img: "https://i.ibb.co/b5qBg7Qt/modelo-03-1.png",
        images: [
          "https://i.ibb.co/b5qBg7Qt/modelo-03-1.png",
          "https://i.ibb.co/WWwnXHKL/modelo-03-2.png",
          "https://i.ibb.co/PZLvKHsL/modelo-03-3.png",
          "https://i.ibb.co/m5GR1TjY/modelo-03-4.png",
          "https://i.ibb.co/7dkX293h/modelo-03-5.png",
          "https://i.ibb.co/FqsQFkzH/modelo-03-6.png"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQA1Bjt0oo2MQ6y0_cGszk2tAcTZCCSOpWRhAFB8JV6jRZs?e=QtOXjC"
      },
      {
        slug: "motorola-mag-one-d8",
        brand: "MOTOROLA",
        title: "Mag One D8 - Rádio Portátil de duas vias",
        desc: `Leve, poderoso e econômico, com o suporte DMR II

O rádio D8 é compatível com as comunicações analógicas para um Push-to-talk por voz simples. Também suporta o padrão de comunicações Digital Mobile Radio (DMR II), para conexões de voz claras e livres de estática, mesmo no limite da cobertura do seu rádio.`,
        img: "https://i.ibb.co/tM266nZ4/modelo-04.png",
        images: [
          "https://i.ibb.co/tM266nZ4/modelo-04.png"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAMamIS2YstSbJWuUSpsIPfAQn7AizRHhFKzqnTNIri00A?e=c9ABo7"
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
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQC5v1E2iZZZQo4YjTwcH4okAakqXRMRQ7VBsaLJfCv1HnE?e=MbAP7B",
        accessoriesCatalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAi3nQrN7E4QrdkFzLTcDU0AV6DKiwJDmOhgB3bTmui10w?e=ikKhvr"
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
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAYilpiNAeUTJ74-vP3qhW6AQsDBRZ6-eSlhhgpRobaF6s?e=41VcdS",
        accessoriesCatalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBnyicBzqSrTZJrOxg8c8uuAZvg4BHe7d3nNI1hDwOD7so?e=bgo8J7"
      },
      { 
        slug: "motorola-r7-ex", 
        brand: "MOTOROLA", 
        title: "MOTOTRBO R7 EX", 
        desc: `Os rádios portáteis MOTOTRBO R7Ex, com certificação ATEX, IECEx e INMETRO, oferecem comunicações de alta qualidade em ambientes potencialmente explosivos, permitindo que as equipes trabalhem com mais segurança. Com áudio alto e claro, além de uma série de recursos avançados, o R7Ex ajuda os trabalhadores a ouvir chamadas e compartilhar mensagens com mais clareza, melhorando o desempenho, aumentando a produtividade e reduzindo o tempo de inatividade.`, 
        img: "https://i.ibb.co/PGfBJJYw/2.jpg",
        images: [
          "https://i.ibb.co/PGfBJJYw/2.jpg",
          "https://i.ibb.co/RGS5w4Sq/3.jpg",
          "https://i.ibb.co/C5J7wPvg/4.jpg",
          "https://i.ibb.co/Md1sJQ1/5.jpg",
          "https://i.ibb.co/tF2FX7g/6.jpg",
          "https://i.ibb.co/CKpWwFYK/7.jpg",
          "https://i.ibb.co/HTRLBp9k/8.jpg",
          "https://i.ibb.co/mVcrSpqG/9.jpg",
          "https://i.ibb.co/4wJtT9RM/10.jpg",
          "https://i.ibb.co/4g0VWbpq/11.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQB_frPgmQ6hRZExLjjL8v1gAfwPJ55hvYqqXdCqQATJI7w?e=NcxomD"
      },
      { 
        slug: "motorola-dgp-8050ex-8550ex", 
        brand: "MOTOROLA", 
        title: "DGP 8050 EX / DGP 8550 EX", 
        desc: `Estes terminais portáteis de alto rendimento contam com o nível mais alto de certificação grupal contra gás explosivo ATEX/INMETRO. Ideal para tarefas arriscadas em ambientes altamente barulhentos, longos turnos de trabalho, condições climáticas adversas e situações perigosas, inclusive a presença de pó combustível, químicos explosivos, escapamentos de gás, hidrocarburetos inflamáveis, etc.

Obtenha todos os benefícios da tecnologia digital
MOTOTRBO, como maior capacidade, melhor qualidade de áudio e bateria de longa duração. Além de rádios e acessórios intrinsecamente seguros, com certificação ATEX/INMETRO.

DGP8050EX - Modelo sem tela resistente e fácil
de usar

DGP8550EX - Incorpora teclado completo e tela colorida de grandes dimensões para acesso a funções avançadas como mensagem de texto e identificador de chamadas`, 
        img: "https://i.ibb.co/27HQ0RfH/Motorola-DGP.png",
        images: ["https://i.ibb.co/27HQ0RfH/Motorola-DGP.png"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBsGdUwray3R6Ggx6Xkto0NAciY-x1wkBnQITOU2m7b_4A?e=egdX83"
      },
      { 
        slug: "motorola-dtr720", 
        brand: "MOTOROLA", 
        title: "DTR 720", 
        desc: `Os rádios DTR720 da Motorola são agora mais confiáveis do que nunca. Permitem estabelecer comunicações privadas sem interferências para ajudar a sua equipe a manter o foco enquanto garantem a privacidade dase suas comunicações.

Com um design fino e resistente, o rádio digital bidirecional DTR720 possui classificação IP54 e funciona em 900 MHz. Visor colorido com gráfico completo e menu de navegação intuitivo que ajuda a localizar rapidamente todas as funções do rádio.  O DTR720 oferece opções flexíveis de comunicação, incluindo "chamada digital um para um" e "chamada digital um para vários". O DTR720 proporciona um excelente nível de cobertura, bateria de longa duração e qualidade de áudio digital; isto é, áudio forte em qualquer parte.`, 
        img: "https://i.ibb.co/Rpz56wJ9/Intelbras-radios-6.jpg",
        images: [
          "https://i.ibb.co/Rpz56wJ9/Intelbras-radios-6.jpg",
          "https://i.ibb.co/twGWF1PK/39.jpg",
          "https://i.ibb.co/67334DFq/40.jpg",
          "https://i.ibb.co/chmg2GSK/41.jpg",
          "https://i.ibb.co/HDWXvWBd/42.jpg",
          "https://i.ibb.co/ycCtvnxk/43.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQDsL_f3xsRGQ4IRdLr7s-JqASk3rNPZQ5JnIHnLEMpt5Ts?e=EfOf5D"
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
        img: "https://i.ibb.co/WqpXt5Q/Intelbras-radios-5.jpg",
        images: [
          "https://i.ibb.co/WqpXt5Q/Intelbras-radios-5.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAd9xtYdzg6SbXZzPLFZO7KAdQRkpABlCW6_T76vI17ASE?e=yZtz0e",
        accessoriesCatalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQA5iD93u2fkQYUWwenUfz8cAWX1DoEYtBAtOgzAoSK8w54?e=nScN3H"
      },
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
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBVMBNeNFkbTrh_6_af-qYnAZapcOqgSlti3DLREDIQceo?e=2rPRCE",
        accessoriesCatalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAPQYN9BFPITZEuBP_E_790AYhMFUq9f-Nq7pgKrIeLszs?e=v94W8F"
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
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBVMBNeNFkbTrh_6_af-qYnAZapcOqgSlti3DLREDIQceo?e=a6xqVR",
        accessoriesCatalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAPQYN9BFPITZEuBP_E_790Ad-zIMRHACRk8vBGxRUdWQU?e=bIbqvk"
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
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQABQNCxGe6gSZDIy7XQUXKnAYLjU1XsbnO6Q4ZJt_hqjVg?e=C3eMmc",
        accessoriesCatalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAPQYN9BFPITZEuBP_E_790Ad-zIMRHACRk8vBGxRUdWQU?e=bIbqvk"
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
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQDuWbI5IV9mTZTno4CI8bNPAQfukQmFj0Ys7pObjfJTfAw?e=G5avKa"
      },
      { 
        slug: "motorola-t210", 
        brand: "MOTOROLA", 
        title: "Talkabout T210BR", 
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
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQC_txDEQRoPRo0oX9RLjTlzAeDxJAlMlc_rqsXWzZjThtI?e=I8jeBe"
      },
      { 
        slug: "motorola-t470", 
        brand: "MOTOROLA", 
        title: "Talkabout T470BR", 
        desc: `O TALKABOUT T470 é o companheiro de viagens que você precisa. Com classifição IPX4, o T470 é resistente às intempéries e suporta todo tipo de ambientes hostis. A lanterna LED integrada permite chegar até onde você quer, mesmo em plena escuridão. 

(Somente EUA e Canadá) E com o Carregamento Silencioso, o T470 ainda receberá alertas meteorológicos/de emergências da Administração Nacional Oceânica e Atmosférica (NOAA), mantendo as chamadas silenciosas durante o carregamento.

Com um alcance de até 55 quilômetros* / (T470BR) 35 quilômetros* / (T470CO) 56 quilômetros* e a liberdade de communication sem fio, o T470 não demorará suas tarefas.`, 
        img: "https://i.ibb.co/DPTs2F5G/68.jpg",
        images: [
          "https://i.ibb.co/DPTs2F5G/68.jpg",
          "https://i.ibb.co/DDH38KVz/69.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQACCvluJgVcS4IuM0Btd3bGAdLhQpUWN2odTuxIfg5A-OU?e=KofKuy"
      },
      { 
        slug: "motorola-t600", 
        brand: "MOTOROLA", 
        title: "Talkabout T600BR", 
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
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAgJuxUGJDASbhf1gX_wwVNASwOffXLtU-HL6JAbmM5JAg?e=64pda5"
      },
      {
        slug: "motorola-apx-8000xe",
        brand: "MOTOROLA",
        title: "Rádio portátil APX™ 8000XE habilitado para todas as bandas",
        desc: `A nossa experiência de trabalho em conjunto com bombeiros de todo o mundo levou-nos a projetar a Série APX™ XE, um portfólio seguro, simples e eficiente de rádios e acessórios ultra resistentes e ergonomicamente avançados. 

Os bombeiros queriam contar com recursos tão extremos quanto os da Série APX XE, incluindo um visor de maior tamanho, botões de controle grandes e a possibilidade de se comunicar com municípios vizinhos utilizando uma solução de rádio habilitada para todas as bandas. O APX 8000XE combina não só essas características, mas também a integração de Wi-Fi para maior flexibilidade de programação. 

O APX 8000XE redefine o conceito de comunicações de missão crítica com um rádio ultra duradouro que combina interoperabilidade ilimitada, excelente qualidade de áudio e conectividade Wi-Fi segura. Com um seletor de canal dedicado e sua capacidade para suportar temperaturas de até 260˚C (500˚F), o microfone alto-falante remoto APX XE500 é o companheiro perfeito para o APX 8000XE. Combinados, o rádio portátil APX 8000XE habilitado para todas as bandas e o microfone alto-falante remoto XE500 criam uma solução de missão crítica incomparável, projetada para a segurança das pessoas em ambientes extremos.`,
        img: "https://i.ibb.co/XrPfD9P6/1.jpg",
        images: [
          "https://i.ibb.co/XrPfD9P6/1.jpg",
          "https://i.ibb.co/1Sc3ksf/2.jpg",
          "https://i.ibb.co/1fWRStHR/3.jpg",
          "https://i.ibb.co/CKYDbpS5/4.jpg",
          "https://i.ibb.co/zWVTr56R/5.jpg",
          "https://i.ibb.co/T9RtkJj/6.jpg"
        ]
      },
      {
        slug: "motorola-apx-8000",
        brand: "MOTOROLA",
        title: "Rádio portátil multifaixas APX™ 8000",
        desc: `Mobilidade ilimitada. Desempenho incondicional. 
Com 4 bandas de RF e acesso multimodos ao sistema, o APX8000 não apresenta limites de interoperabilidade. Em ambientes barulhentos, durante uma ventania, com sussurros ou aos gritos, não importa: o Mecanismo Adaptativo de Áudio e o alto-falante ultra-alto garantem clareza a todas as conversas. Com acesso Wi-Fi, o APX 8000 pode receber rapidamente novos recursos de codeplug, firmware e software a fim de reconfigurar a frota de rádios facilmente, além de garantir que os usuários não sofram qualquer interrupção no serviço. Com design intuitivo e familiar, o compacto APX 8000 é sempre confortável de usar, tanto para segurá-lo quanto no suporte para cinto.`,
        img: "https://i.ibb.co/bRGn5BQv/1.jpg",
        images: [
          "https://i.ibb.co/bRGn5BQv/1.jpg",
          "https://i.ibb.co/dJLG84Ph/2.jpg",
          "https://i.ibb.co/W4QrPXDf/3.jpg",
          "https://i.ibb.co/bnxnN4Z/4.jpg",
          "https://i.ibb.co/6RBr6skq/5.jpg"
        ]
      },
      {
        slug: "motorola-apx-900",
        brand: "MOTOROLA",
        title: "Rádio Portátil P25 de Banda Única APX™ 900",
        desc: `Comunicação essencial. Serviço excepcional.
Pelo que nos diz, você adora nossos rádios APX. Diz que o desenho especialmente projetado para a segurança pública faz deles os dispositivos ideais para agentes de segurança no mundo todo. Mas pediram-nos um rádio P25 mais focado na eficiência do dia-a-dia do que na segurança de missão crítica. Por isso, respondemos com o APX900.

O APX 900 foi desenvolvido para obras públicas, serviços governamentais e organizações educacionais que precisam de uma comunicação essencial a um preço acessível. Oferece importantes recursos essenciais, com um design focado na eficiência, incluindo a conexão sem fio Bluetooth®.  

Um ótimo rádio exige um ótimo suporte, por isso também estamos apresentando o Device Management Services para sua frota APX. Independentemente de você precisar de um serviço de manutenção contínua abrangente ou simplesmente de uma assistência ocasional com um apoio no aprovisionamento, temos o pacote de serviços ideal para você. Obterá o nível de suporte necessário para comunicações confiáveis e estáveis em toda a sua organização. 

Com o Device Management Services para APX e APX 900, você obtém um nível de conexão no qual pode confiar. Agora, mais do que nunca.`,
        img: "https://i.ibb.co/0jTXMM8N/1.jpg",
        images: [
          "https://i.ibb.co/0jTXMM8N/1.jpg",
          "https://i.ibb.co/9H7t5TTC/2.jpg",
          "https://i.ibb.co/d0KZdMqY/3.jpg",
          "https://i.ibb.co/gZSC9tLg/4.jpg"
        ]
      },
      {
        slug: "motorola-apx-6000xe",
        brand: "MOTOROLA",
        title: "Rádio portátil APX™ 6000XE P25 aprimorado",
        desc: `Trabalhando junto aos bombeiros no mundo todo, redefinimos a segurança com a nova série de rádios APX Extreme, uma combinação de avançada funcionalidade, ergonomia e durabilidade para uso mais seguro, fácil e eficiente.

Desde o primeiro dia, o rádio portátil bidirecional APX 6000XE P25 tem satisfeito as expectativas mais exigentes das agências. Proporciona desempenho confiável em uma solução de banda única sem comprometer o tamanho nem as funções requeridas para atividades de rotina ou de emergências extremas. Atualmente, na medida em que as necessidades do pessoal de segurança pública aumentam, evolucionamos o APX 6000XE para que seja compatível com as tecnologias mais recentes como Wi-Fi, mecanismo de áudio adaptativo e tecnologia sem fio Bluetooth® 4.0.`,
        img: "https://i.ibb.co/39xYNT5n/1.jpg",
        images: [
          "https://i.ibb.co/39xYNT5n/1.jpg",
          "https://i.ibb.co/7xhV7LdL/2.jpg",
          "https://i.ibb.co/HfLf78ky/3.jpg",
          "https://i.ibb.co/zH8v7c1n/4.jpg",
          "https://i.ibb.co/BHTV2VJk/5.jpg",
          "https://i.ibb.co/9mgx5zt3/6.jpg"
        ]
      },
      {
        slug: "motorola-apx-5000",
        brand: "MOTOROLA",
        title: "Rádio portátil APX™ 5000 P25 aprimorado",
        desc: `Desde o início, o rádio portátil de banda única APX 5000 P25 tem oferecido a famosa resistência e confiabilidade APX, sem comprometer o tamanho nem os recursos necessários para atividades de rotina e emergências extremas. Agora, conforme a crescente necessidade de agentes de segurança pública, estamos desenvolvendo o APX 5000 para suportar novas tecnologias como Wi-Fi, mecanismo adaptativo de áudio e a tecnologia sem fio Bluetooth® 4.0. Esses avanços ajudam a aprimorar o tempo de resposta e a eficiência operacional de agências de segurança pública e, ao mesmo tempo, aumenta a segurança de pessoas e das comunidades.`,
        img: "https://i.ibb.co/ymfZM4gm/1.jpg",
        images: [
          "https://i.ibb.co/ymfZM4gm/1.jpg",
          "https://i.ibb.co/nMDqcTDc/2.jpg",
          "https://i.ibb.co/wN6tMLPg/3.jpg",
          "https://i.ibb.co/sdY42My3/4.jpg",
          "https://i.ibb.co/MD6RgDYp/5.jpg",
          "https://i.ibb.co/HphK3bMJ/6.jpg"
        ]
      },
      {
        slug: "motorola-apx-2000",
        brand: "MOTOROLA",
        title: "Rádio portátil APX™ 2000 P25",
        desc: `O APX 2000 oferece todos os benefícios da tecnologia P25 no menor P25 de fase 2 portátil do setor. Fácil de usar, muito resistente, um valor difícil de bater, conecta desde usuários de trabalhos públicos, concessionárias e de segurança pública local até socorristas para comunicações rápidas e interoperáveis. Durável o suficiente para suportar poeira, calor, choques e submersão, o APX 2000 é certificado IP67 e MIL-STD. É embalado com recursos importantes para ajudar a manter você seguro, como rede sem fio de missão crítica, supressão de ruído com 2 microfones, localização externa por GPS e criptografia AES.`,
        img: "https://i.ibb.co/XxcrTKXq/1.jpg",
        images: [
          "https://i.ibb.co/XxcrTKXq/1.jpg",
          "https://i.ibb.co/XZGVdm5P/2.jpg",
          "https://i.ibb.co/PssPd3vZ/3.jpg",
          "https://i.ibb.co/JRmNfdcj/4.jpg",
          "https://i.ibb.co/w81Pbph/5.jpg",
          "https://i.ibb.co/rR5wcYTz/6.jpg"
        ]
      },
      {
        slug: "motorola-apx-n50",
        brand: "MOTOROLA",
        title: "Rádio bidirecional portátil APX N50 de banda única P25",
        desc: `Simples, confiável e seguro.

O APX N50 é um rádio de formato fino, mas resistente, projetado para oferecer segurança e confiança na comunicação entre socorristas, equipes de suporte e administração da segurança pública que trabalham em campo.`,
        img: "https://i.ibb.co/nq0KxNvW/1.png",
        images: [
          "https://i.ibb.co/nq0KxNvW/1.png",
          "https://i.ibb.co/8gJBD95t/2.png",
          "https://i.ibb.co/4wbbmZYq/3.png",
          "https://i.ibb.co/C55kZbnP/4.png",
          "https://i.ibb.co/KSXYQRV/5.png"
        ]
      },
      {
        slug: "motorola-srx-2200",
        brand: "MOTOROLA",
        title: "Rádio de combate SRX 2200 aprimorado",
        desc: `A apresentação do rádio portátil bidirecional SRX 2200 P25 combinou nossa comprovada experiência com rádios dentro do esquadrão (IISR) e com o rádio de combate resistente projetado para fornecer comunicações seguras quando nossas tropas mais precisam.

O SRX 2200 de banda única tem oferecido a famosa resistência e confiabilidade APX™, sem comprometer o tamanho nem os recursos necessários para missões de rotina e para os adversários mais perigosos. Agora, conforme a crescente necessidade da equipe tática e de base, desenvolvemos o SRX 2200 para suportar novas tecnologias como Wi-Fi, motor de áudio adaptativo e tecnologia sem fio Bluetooth® 4.0. Esses rádios indispensáveis fornecem uma grande cobertura, aprimoram as comunicações de voz entre esquadrões e mantém a segurança geral da nossa equipe militar.`,
        img: "https://i.ibb.co/j9XhWy6q/1.jpg",
        images: [
          "https://i.ibb.co/j9XhWy6q/1.jpg",
          "https://i.ibb.co/mrmr2Nh5/2.jpg",
          "https://i.ibb.co/p6cRq4cQ/3.jpg",
          "https://i.ibb.co/X64sLKG/4.jpg",
          "https://i.ibb.co/4BZBmMw/5.jpg"
        ]
      },
      
      { 
        slug: "caltta-dh410", 
        brand: "CALTTA", 
        title: "DH410", 
        desc: "A nova geração de rádios digitais da série DH4 conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/4ZMTbrnt/DH410.jpg",
        images: ["https://i.ibb.co/4ZMTbrnt/DH410.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQDEt_EfQxdDTKuNUe59wIyUASZTIRlJGz_GjrEJP7ua0XE?e=sIObuZ"
      },
      { 
        slug: "caltta-dh460", 
        brand: "CALTTA", 
        title: "DH460", 
        desc: "A nova geração de rádios digitais da série DH4 conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/6cyV7g5m/DH460.jpg",
        images: ["https://i.ibb.co/6cyV7g5m/DH460.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQARHRykDAltR7xpXV5tnKkAASO_S-BHBYdAlBd9o1_WDx8?e=QiZ92P"
      },
      { 
        slug: "caltta-ph600", 
        brand: "CALTTA", 
        title: "PH600", 
        desc: "A nova geração de rádios digitais da série PH6 conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/jk3Chsyt/PH600.jpg",
        images: ["https://i.ibb.co/jk3Chsyt/PH600.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQCwbZPS5krySa_U-PvBPAwzARZt_ufzRhsS4VqjxRe6Gbw?e=GvUM89"
      },
      { 
        slug: "caltta-ph660", 
        brand: "CALTTA", 
        title: "PH660", 
        desc: "Equipamento portátil DMR versátil com funcionalidades avançadas de dados e voz.", 
        img: "https://i.ibb.co/bRvMd9L0/PH660.jpg",
        images: ["https://i.ibb.co/bRvMd9L0/PH660.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQDECMYSUYVeT5YXC05-ZoghAW97FTQ_ebm0eEXva0NTV0Q?e=xEFaMW"
      },
      { 
        slug: "caltta-ph690", 
        brand: "CALTTA", 
        title: "PH690", 
        desc: "A nova geração de rádios digitais da série PH6 conta com recursos versáteis e compactos, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/yc50v2Tm/PH690.jpg",
        images: ["https://i.ibb.co/yc50v2Tm/PH690.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQB1QbEAMWB0RK3HPg2HDCtxAYKJcLkaPwPqF7DA-EVJhQw?e=NTs3PX"
      },
      { 
        slug: "caltta-dm660", 
        brand: "CALTTA", 
        title: "DM660", 
        desc: "O rádio DM660 apresenta um design moderno e diferenciado, é compacto, com excelente cobertura e desempenho de Voz. Possui certificação IP54 e MIL-STD-810H, adequado para várias atividades ao ar livre e qualificado para todos os tipos de ambientes com trabalhos rigorosos.", 
        img: "https://i.ibb.co/pBkt5gCS/DM660.jpg",
        images: ["https://i.ibb.co/pBkt5gCS/DM660.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQA8NlbxbkjRTK1TIpvIj4fgAQePXPDtuobHVfD20kXxOlQ?e=eJnYri"
      },
      { 
        slug: "caltta-pm790", 
        brand: "CALTTA", 
        title: "PM790", 
        desc: "A nova geração de rádios digitais compactos da série PM790 conta com recursos versáteis, colabora para que usuários empresariais aprimorarem a eficiência do trabalho a um custo bem mais acessível.", 
        img: "https://i.ibb.co/ycMj10J0/PM790.jpg",
        images: ["https://i.ibb.co/ycMj10J0/PM790.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBEce7TLg0SRb1VXsUWZJwqAQYKLAoETcyEArD_fh2hT3A?e=Kd3KQ5"
      },
      { 
        slug: "caltta-pr900", 
        brand: "CALTTA", 
        title: "PR900", 
        desc: "A PR900 é uma repetidora digital profissional com funções potentes e uma configuração conveniente, com mais facilidade de programação atendendo a altos requisitos dos usuários. Solução essencial para os mais variados cenários e aplicações profissionais.", 
        img: "https://i.ibb.co/6JnbNQQP/PR900.jpg",
        images: ["https://i.ibb.co/6JnbNQQP/PR900.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBtn3oc2_t9R6nGpHE8HQ25AbFc3oDVTwVahLEHWfhJnO4?e=IaSaOh"
      },

      { 
        slug: "intelbras-rpd-8", 
        brand: "INTELBRAS", 
        title: "RPD 8", 
        desc: "O RPD 8 é um rádio que possui características essenciais para proporcionar uma comunicação eficiente em diversas situações. Sua durabilidade é garantida pela proteção IP54 e padrões militares MIL-STD G, o que o torna resistente a poeira, umidade e impactos. Além disso, oferece uma qualidade de áudio excepcional, garantindo clareza nas comunicações. Com sua robustez e alto desempenho, o RPD 8 é a escolha ideal para profissionais que procuram um rádio confiável como ferramenta de trabalho.", 
        img: "https://i.ibb.co/ccYZfvMC/Intelbras-radios.jpg",
        images: ["https://i.ibb.co/ccYZfvMC/Intelbras-radios.jpg"],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQDrFM-Vg09TRoMmVzDy8xZHAcgjG58qvTm64KJDBPGOEuE?e=Jsx2pg"
      },
      { 
        slug: "intelbras-rpd-6s", 
        brand: "INTELBRAS", 
        title: "RPD 6 S", 
        desc: "O RPD 6 S é um radiocomunicador profissional que assegura comunicação eficiente. Com design moderno, é ideal para shoppings, eventos e outros grandes espaços.", 
        img: "https://i.ibb.co/qZcj9hT/25.jpg",
        images: [
          "https://i.ibb.co/qZcj9hT/25.jpg",
          "https://i.ibb.co/VcW4DCWv/26.jpg",
          "https://i.ibb.co/NgDCX9wF/27.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQB-Xejr-8IoRZOCxZxlfIWiAdKDQQNHPa2dV07JPy73R5o?e=uHq8DO"
      },
      { 
        slug: "intelbras-rpc-360s", 
        brand: "INTELBRAS", 
        title: "RPC 360s", 
        desc: "Comunicação e conectividade em tempo real, com cobertura ilimitada via rede GSM/3G/4G/LTE e plataformas de gerenciamento online.", 
        img: "https://i.ibb.co/bRjvx0MH/20.jpg",
        images: [
          "https://i.ibb.co/bRjvx0MH/20.jpg",
          "https://i.ibb.co/qM9KZcHD/21.jpg",
          "https://i.ibb.co/3mG6vdm1/22.jpg",
          "https://i.ibb.co/zhPcFz4r/23.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQCE0RzkWJDnSITLYIj6V9E3AcaybQQ040jzHNc5_dxO7eQ?e=TmkRkP"
      },
      { 
        slug: "intelbras-rm-8", 
        brand: "INTELBRAS", 
        title: "RM 8", 
        desc: "Conectividade que eleva suas operações à um nível superior de qualidade nas comunicações de longa distância digitais e analógicas.", 
        img: "https://i.ibb.co/xSb9dtb1/29.jpg",
        images: [
          "https://i.ibb.co/xSb9dtb1/29.jpg",
          "https://i.ibb.co/5xvVK7dK/30.jpg",
          "https://i.ibb.co/Kpws5qpk/31.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBz-Ssw014jSpzW6Tu86_XhAZsw-RQ3yFISyYI6i4e_1pU?e=6cCkli"
      },
      { 
        slug: "intelbras-rep-25", 
        brand: "INTELBRAS", 
        title: "REP 25", 
        desc: "Mais alcance e confiabilidade nas comunicações por voz, digitais e analógicas.", 
        img: "https://i.ibb.co/v6Q6cM56/34.jpg",
        images: [
          "https://i.ibb.co/v6Q6cM56/34.jpg",
          "https://i.ibb.co/vCBcDLyd/35.jpg",
          "https://i.ibb.co/j9MVKRxc/36.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQClwmBoCB6QRbqzysvjBMT3AR71DTi6NsICujcAbNdHFms?e=4vhu6o"
      },
      { 
        slug: "intelbras-rm-7000", 
        brand: "INTELBRAS", 
        title: "RM 7000", 
        desc: "Mantenha sua equipe conectada com uma comunicação de resposta ágil, segura e de longo alcance.", 
        img: "https://i.ibb.co/HT4j040S/38.jpg",
        images: [
          "https://i.ibb.co/HT4j040S/38.jpg",
          "https://i.ibb.co/j9VtDSd8/39.jpg",
          "https://i.ibb.co/fGTgDWCQ/40.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAcozjc2h0LR7l4TONBKWlaAUBtGIavH4vF-dcUAy1zQ6M?e=KCs4MT"
      },
      { 
        slug: "intelbras-rc-6-mini", 
        brand: "INTELBRAS", 
        title: "RC 6 MINI", 
        desc: "Ideal para ambientes internos, o rádio comunicador RC 6 Mini oferece uma comunicação confiável, unindo tecnologia avançada, custo-benefício e praticidade...", 
        img: "https://i.ibb.co/cS0Qj8w9/3.jpg",
        images: [
          "https://i.ibb.co/cS0Qj8w9/3.jpg",
          "https://i.ibb.co/B5sdB7Xt/4.jpg",
          "https://i.ibb.co/HLHPxn1G/5.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBnywByWaoUR72JUADcYEPKAUHzq729CogIuEqhufdwdXw?e=9hR9S3"
      },
      { 
        slug: "intelbras-rc-4002-g2", 
        brand: "INTELBRAS", 
        title: "RC 4002 G2", 
        desc: "A nova linha RC 4002, com recarga rápida e lanterna, traz liberdade e mobilidade para suas tarefas diárias de forma prática e eficiente.", 
        img: "https://i.ibb.co/Jj2nCptb/7.jpg",
        images: [
          "https://i.ibb.co/Jj2nCptb/7.jpg",
          "https://i.ibb.co/C3qLvDNR/8.jpg",
          "https://i.ibb.co/V4vX4R5/9.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQAU9dfdkQkRSYa8T_Ek5tonAcb8lrm130PNevLFJRyHywk?e=ZHTc30"
      },
      { 
        slug: "intelbras-rc-3002-g2", 
        brand: "INTELBRAS", 
        title: "RC 3002 G2", 
        desc: "Comunicação eficaz sem fio, com agilidade e qualidade. Design leve e compacto para garantir ergonomia e conforto no manuseio.", 
        img: "https://i.ibb.co/sd06Xtnn/11.jpg",
        images: [
          "https://i.ibb.co/sd06Xtnn/11.jpg",
          "https://i.ibb.co/LDK73DkJ/12.jpg",
          "https://i.ibb.co/Y7vrC1n4/13.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQDfVxsiTmjpSZr3UQovPX7UAZHQgIKGQlF1kA4I4Vnfz08?e=dqdUyQ"
      },
      { 
        slug: "intelbras-rc-4102", 
        brand: "INTELBRAS", 
        title: "RC 4102", 
        desc: "Um aliado para comunicação objetiva, ágil e sem fios. Com display luminoso, lanterna, proteção IP67 à prova d’água e poeira.", 
        img: "https://i.ibb.co/qMYTZB2b/15.jpg",
        images: [
          "https://i.ibb.co/qMYTZB2b/15.jpg",
          "https://i.ibb.co/tMLDkx6d/16.jpg",
          "https://i.ibb.co/bgrRj7ty/17.jpg",
          "https://i.ibb.co/ksjRQTBD/18.jpg"
        ],
        catalogUrl: "https://1drv.ms/b/c/f1d40cb152adb3dd/IQBaBBtBE_eYQ5Q1yPK8mfXLAV0dp2ntFoi1-CK8WwMkmO4?e=mDG5Bv"
      }
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
    carouselImages: [
      "https://i.ibb.co/8n1SW1MK/Caracterizadas-14.jpg",
      "https://i.ibb.co/Z1xsQyjB/Caracterizadas-1.jpg",
      "https://i.ibb.co/Fkm928y6/Caracterizadas-1.jpg",
      "https://i.ibb.co/35cVh5dv/Caracterizadas-2.jpg",
      "https://i.ibb.co/qMCLVDKR/Caracterizadas-2.jpg",
      "https://i.ibb.co/ZptDC1gw/Caracterizadas-3.jpg",
      "https://i.ibb.co/V0SZVMdR/Caracterizadas-3.jpg",
      "https://i.ibb.co/SX9hsZv9/Caracterizadas-4.jpg",
      "https://i.ibb.co/Zk8Zqdb/Caracterizadas-5.jpg",
      "https://i.ibb.co/rf3GqF4r/Caracterizadas-6.jpg",
      "https://i.ibb.co/xPRfYjq/Caracterizadas-7.jpg",
      "https://i.ibb.co/C3W4FVYH/Caracterizadas-8.jpg",
      "https://i.ibb.co/7mrG4g3/Caracterizadas-9.jpg",
      "https://i.ibb.co/vCp3zNKk/Caracterizadas-10.jpg",
      "https://i.ibb.co/W4wNpnqY/Caracterizadas-11.jpg",
      "https://i.ibb.co/YBR6hZDd/Caracterizadas-12.jpg",
      "https://i.ibb.co/TJH59px/Caracterizadas-13.jpg",
      "https://i.ibb.co/j9x8zwnQ/Caracterizadas-15.jpg",
      "https://i.ibb.co/LhHcbC9n/Caracterizadas-16.jpg",
      "https://i.ibb.co/Q4t4Znw/Caracterizadas-17.jpg",
      "https://i.ibb.co/1fZdrLjQ/Caracterizadas-18.jpg",
      "https://i.ibb.co/1YHzg938/Caracterizadas-19.jpg",
      "https://i.ibb.co/tw6P5wQQ/Caracterizadas-20.jpg",
      "https://i.ibb.co/zh80kMqd/Caracterizadas-21.jpg",
      "https://i.ibb.co/hJkfBmkp/Caracterizadas-22.jpg",
      "https://i.ibb.co/p6MB4kYz/Caracterizadas-23.jpg",
      "https://i.ibb.co/hJBJTcC1/Caracterizadas-24.jpg",
      "https://i.ibb.co/FLWSbvZ3/Caracterizadas-25.jpg",
      "https://i.ibb.co/F45rfFbZ/Caracterizadas-26.jpg",
      "https://i.ibb.co/vxb8vZ9K/Caracterizadas-27.jpg",
      "https://i.ibb.co/1JtkSDVg/Caracterizadas-28.jpg",
      "https://i.ibb.co/RGQZKPrp/Caracterizadas-29.jpg",
      "https://i.ibb.co/rRJF2rg1/Caracterizadas-30.jpg",
      "https://i.ibb.co/yrZfnnp/Caracterizadas-31.jpg",
      "https://i.ibb.co/b5bH0GLf/Caracterizadas-32.jpg",
      "https://i.ibb.co/vvPxCSjy/Caracterizadas-33.jpg"
    ],
    listItems: [
      "Capota de fibra ou aço",
      "Compartimento para transporte de cães",
      "Compartimento para transporte de detidos",
      "Compartimento para transporte de materiais",
      "Compartimento para transporte de menores infratores",
      "Conjunto sinalizador acústico e visual",
      "Envelopamento automotivo e/ou plotagem",
      "Guincho elétrico",
      "Para-choque de impulsão dianteiro",
      "Pintura total de veículo",
      "Protetor de para-choque traseiro",
      "Rádios de comunicação",
      "Revestimentos de banco e piso",
      "Sistema de câmeras e escuta ambiental",
      "Snorkel",
      "Suporte de armas longas"
    ],
    items: []
  },
  { 
    slug: "adaptacao-descaracterizada", 
    title: "Adaptação Descaracterizada", 
    desc: "Adaptação velada para veículos de inteligência militar e civil, mantendo a operação discreta.", 
    carouselImages: [
      "https://i.ibb.co/gMK4zSWg/Descaracterizadas-1.png",
      "https://i.ibb.co/BWMT1d8/Descaracterizadas-1.jpg",
      "https://i.ibb.co/8gHFk97n/Descaracterizadas-2.jpg",
      "https://i.ibb.co/dJcBY9bd/Descaracterizadas-2.jpg",
      "https://i.ibb.co/xScXrK2z/Descaracterizadas-3.jpg",
      "https://i.ibb.co/C3Y1ymVV/Descaracterizadas-3.jpg",
      "https://i.ibb.co/RT6Rdz3j/Descaracterizadas-4.jpg"
    ],
    listItems: [
      "Conjunto sinalizador acústico e visual interno",
      "Compartimento para transporte de cães",
      "Compartimento para transporte de detidos",
      "Compartimento para transporte de materiais",
      "Compartimento para transporte de menores infratores",
      "Rádios de comunicação",
      "Revestimentos de banco e piso"
    ],
    items: []
  },
  { 
    slug: "motocicletas", 
    title: "Motocicletas", 
    desc: "Adaptação específica e de segurança de motos para patrulhamento, escolta e fiscalização.", 
    carouselImages: [
      "https://i.ibb.co/21yNH7p8/Motos-11.jpg",
      "https://i.ibb.co/VY8dnp3f/Motos-1.jpg",
      "https://i.ibb.co/6c2cthDz/Motos-2.jpg",
      "https://i.ibb.co/QvJRWKy7/Motos-3.jpg",
      "https://i.ibb.co/G4jjfcps/Motos-4.jpg",
      "https://i.ibb.co/TDWfRZnY/Motos-5.jpg",
      "https://i.ibb.co/TNMXCjK/Motos-6.jpg",
      "https://i.ibb.co/23y8N5Kh/Motos-7.jpg",
      "https://i.ibb.co/YFXXG4B1/Motos-8.jpg",
      "https://i.ibb.co/q3kwQtZL/Motos-9.jpg",
      "https://i.ibb.co/Df9kc39N/Motos-10.jpg"
    ],
    listItems: [
      "Conjunto sinalizador acústico e visual",
      "Protetor de motor e carenagem",
      "Bauleto",
      "Antena corta pipa",
      "Pintura total motocicleta",
      "Envelopamento e/ou plotagem",
      "Porta tonfas"
    ],
    items: []
  },
  { 
    slug: "projetos-especiais", 
    title: "Projetos Especiais", 
    desc: "Desenvolvemos projetos especiais sob medida para atender demandas específicas de cada cliente. Do planejamento à entrega, cada projeto é pensado com precisão, equipamentos certificados e instalação especializada para garantir máxima eficiência operacional.", 
    isPhotoOnly: true,
    carouselImages: [
      "https://i.ibb.co/BHSQBwfk/Projetos-especiais-19.jpg",
      "https://i.ibb.co/NnYDVPtf/Projetos-especiais-1.jpg",
      "https://i.ibb.co/84SSDcHh/Projetos-especiais-2.jpg",
      "https://i.ibb.co/twt5gK0C/Projetos-especiais-3.jpg",
      "https://i.ibb.co/dwx4ZP7c/Projetos-especiais-4.jpg",
      "https://i.ibb.co/xtrXGPfx/Projetos-especiais-5.jpg",
      "https://i.ibb.co/qYJc39yr/Projetos-especiais-6.jpg",
      "https://i.ibb.co/bRR3gfJm/Projetos-especiais-7.jpg",
      "https://i.ibb.co/PzFWrh7m/Projetos-especiais-8.jpg",
      "https://i.ibb.co/B2rMVXH4/Projetos-especiais-9.jpg",
      "https://i.ibb.co/wFXT2kW1/Projetos-especiais-10.jpg",
      "https://i.ibb.co/cKQgWCwx/Projetos-especiais-11.jpg",
      "https://i.ibb.co/Q4Bg4C6/Projetos-especiais-12.jpg",
      "https://i.ibb.co/HDfH4tX7/Projetos-especiais-13.jpg",
      "https://i.ibb.co/hR7Nk8Yr/Projetos-especiais-14.jpg",
      "https://i.ibb.co/RJwG1St/Projetos-especiais-15.jpg",
      "https://i.ibb.co/gZm7SnvD/Projetos-especiais-16.jpg",
      "https://i.ibb.co/GvbSWyq7/Projetos-especiais-17.jpg",
      "https://i.ibb.co/RkMyrCLD/Projetos-especiais-18.jpg",
      "https://i.ibb.co/Zzxyw12B/Projetos-especiais-20.jpg"
    ],
    items: []
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
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Nossos Produtos</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas para operações críticas.
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
