window.FOOTBALL_LEVEL_SETS = [
  ["ronaldo","messi","neymar","mbappe","salah","modric","haaland"],
  ["saka","foden","pedri","gavi","yamal","son","kane"],
  ["musiala","wirtz","rodri","leao","bruno","dias","felix"],
  ["neves","jota","vitinha","dalot","isak","rice","palmer"],
  ["alisson","ederson","onana","neuer","oblak","maignan","unai"],
  ["saliba","gabriel","stones","walker","akanji","gvardiol","ake"],
  ["odegaard","havertz","martinelli","jesus","trossard","partey","caicedo"],
  ["enzo","jackson","mudryk","madueke","nkunku","mainoo","garnacho"],
  ["hojlund","mount","casemiro","guimaraes","gordon","tonali","botman"],
  ["trippier","joelinton","griezmann","morata","koke","depaul","molina"],
  ["lewandowski","raphinha","araujo","kounde","balde","ferran","olmo"],
  ["carvajal","rudiger","militao","camavinga","tchouameni","rodrygo","brahim"],
  ["nunez","diaz","szoboszlai","macallister","gakpo","jones","konate"],
  ["kimmich","sane","gnabry","coman","goretzka","davies","upamecano"],
  ["kvaratskhelia","osimhen","lobotka","anguissa","politano","dilorenzo","meret"],
  ["lautaro","thuram","barella","bastoni","dimarco","calhanoglu","sommer"],
  ["pulisic","reijnders","theo","tomori","loftus","okafor","sportiello"],
  ["vlahovic","chiesa","locatelli","bremer","yildiz","cambiaso","koopmeiners"],
  ["dybala","lukaku","pellegrini","mancini","paredes","cristante","ndicka"],
  ["dembele","barcola","hakimi","marquinhos","zaireemery","ramospsg","doue"],
  ["nuno","asensio","ruiz","lee","kolo","hernandez","safonov"],
  ["gyokeres","hjulmand","diomande","trincao","quaresma","catamo","morita"],
  ["dimaria","kokcu","otamendi","antoniols","bah","florentino","aursnes"],
  ["varela","galeno","evanilson","diogocosta","francisco","pepeporto","samu"],
  ["frimpong","grimaldo","boniface","tah","xhaka","palacios","andrich"],
  ["guirassy","adeyemi","brandt","schlotterbeck","kobel","malen","sabitzer"],
  ["openda","simons","sesko","raum","lukeba","haidara","xaver"],
  ["marmoush","ekitike","skhiri","trapp","undav","fuhrich","stiller"],
  ["palhinha","pereira","jimenez","iwobi","muniz","leno","watkins"],
  ["bailey","diaby","mcginn","tielemans","pau","emiliano","bowen"],
  ["paqueta","kudus","soucek","areola","zouma","emerson","mitoma"],
  ["estupinan","ferguson","dunk","veltman","adringa","verbruggen","eze"],
  ["olise","guehi","mateta","doucoure","johnstone","cunha","neto"],
  ["aitnouri","kilman","dawson","sarabia","semedo","ochoa","lozano"],
  ["alvarez","gimenez","pineda","montes","pepi","reyna","musah"],
  ["weah","mckennie","dest","balogun","david","eustaquio","larin"],
  ["kone","buchanan","crepeau","pellistri","dearrascaeta","vecino","bentancur"],
  ["ugarte","rochet","olivera","emilianoarg","romero","lisandro","julian"],
  ["almada","locelso","tagliafico","montiel","nico","acuna","simeone"],
  ["richarlison","endrick","savinho","murillo","luizhenrique","wendell","andreas"],
  ["estevao","igorjesus","yan","andrey","beraldo","joaopedro","caio"],
  ["kim","hwang","leekangin","kubo","minamino","endo","tomiyasu"],
  ["ito","maeda","furuhashi","sugawara","kamada","asano","doan"],
  ["ziyech","bounou","amrabat","ennesyri","mazraoui","saiss","ounahi"],
  ["mostafa","elneny","trezeguet","hegazy","shenawy","mane","koulibaly"],
  ["mendysn","gana","sarr","diatta","diallosn","awoniyi","iheanacho"],
  ["simonng","bassey","ndidi","aina","osayi","onuachu","nanasi"],
  ["kulusevski","elanga","forsberg","claesson","olsen","hauge","ekdal"],
  ["solbakken","sorloth","thorsteinsson","berg","bobb","nusa","ostigard"],
  ["roque","tel","arda","branthwaite","gray","hall","quansah"]
];

window.FOOTBALL_LEVELS = window.FOOTBALL_LEVEL_SETS.map(function (words, index) {
  const levelNumber = index + 1;
  const cleanWords = words.slice(0, levelNumber <= 5 ? 4 : words.length).map(function (word) { return word.toLowerCase(); });
  const maxWordLength = cleanWords.reduce(function (max, word) { return Math.max(max, word.length); }, 0);
  const ramp = [7, 8, 9, 10, 10, 11, 11, 12, 12, 13];
  const shapeCycle = ['square', 'square', 'wide', 'stadium', 'tall', 'square', 'wide', 'stadium', 'tall', 'wide'];
  const targetSize = levelNumber <= 10 ? ramp[levelNumber - 1] : levelNumber <= 25 ? 12 : levelNumber <= 40 ? 13 : 14;
  const baseSize = Math.max(maxWordLength, targetSize);
  const shape = shapeCycle[(levelNumber - 1) % shapeCycle.length];
  let width = baseSize;
  let height = baseSize;

  if (shape === 'wide') {
    width = baseSize + 1;
    height = Math.max(7, baseSize - 1);
  } else if (shape === 'tall') {
    width = baseSize;
    height = baseSize + 1;
  } else if (shape === 'stadium') {
    width = baseSize + 1;
    height = baseSize;
  }

  const orientations = levelNumber <= 15
    ? ['horizontal', 'vertical']
    : levelNumber <= 35
      ? ['horizontal', 'vertical', 'diagonal', 'diagonalBack']
      : ['horizontal', 'horizontalBack', 'vertical', 'verticalUp', 'diagonal', 'diagonalBack', 'diagonalUp', 'diagonalUpBack'];

  return {
    title: 'Nivel ' + levelNumber + ' - ' + (levelNumber <= 15 ? 'Aquecimento' : levelNumber <= 35 ? 'Jogo grande' : 'Noite europeia'),
    description: levelNumber <= 10
      ? 'A grelha cresce passo a passo ate ao decimo nivel.'
      : levelNumber <= 35
        ? 'Agora tambem ha nomes escondidos na diagonal.'
        : 'Todas as direcoes contam, incluindo nomes invertidos.',
    orientations: orientations,
    words: cleanWords,
    grid: { width: width, height: height, shape: shape, preventOverlap: levelNumber <= 5 },
    pack: 'base',
    rewardEvery: 10
  };
});

window.FOOTBALL_RELATOS = {
  ronaldo: 'Ronaldo de bicicleta! Que momento inacreditavel na Champions.',
  messi: 'Messi, Messi, Messi... arrancou, passou por todos e fez magia.',
  neymar: 'Neymar no um contra um, fintou, sorriu e deixou a defesa parada.',
  mbappe: 'Mbappe dispara pela esquerda... ninguem o apanha!',
  salah: 'Salah cortou para dentro e rematou colocado. Golo de estrela.',
  modric: 'Modric levanta a cabeca, mete trivela e rasga o jogo inteiro.',
  haaland: 'Haaland apareceu na area. Um toque, um golo, sem perdao.',
  saka: 'Saka recebe aberto, puxa para dentro e levanta a bancada.',
  foden: 'Foden entre linhas, primeiro toque perfeito e remate venenoso.',
  yamal: 'Yamal encara o defesa como veterano e inventa espaco onde nao havia.',
  bellingham: 'Bellingham chega vindo de tras... apareceu no momento certo.',
  vinicius: 'Vinicius parte para cima, ganha no sprint e incendeia o jogo.',
  rodri: 'Rodri controla o meio-campo e escolhe sempre a jogada certa.',
  bruno: 'Bruno viu o passe antes de todos. Bola perfeita entre linhas.',
  dias: 'Dias corta no limite! Defesa de capitao, grito de bancada.',
  kane: 'Kane recua, vira o jogo e depois aparece para finalizar.',
  son: 'Son arranca em velocidade e finaliza com frieza.',
  palmer: 'Palmer prepara, espera, e mete a bola onde o guarda-redes nao chega.'
};

window.FOOTBALL_REWARDS = {
  5: {
    id: 'brasil10',
    name: 'Amarelo do 10',
    number: '10',
    colors: ['#f2d230', '#0b7f39'],
    accent: '#0b7f39',
    rarity: 'Mitica',
    story: 'Amarelo e verde para lembrar o 10 brasileiro que transforma uma jogada simples em magia.',
    pattern: 'linear-gradient(180deg, #0b7f39 0 .4rem, transparent .4rem), radial-gradient(circle at 50% 1.05rem, #0b7f39 0 .24rem, transparent .25rem)'
  },
  10: {
    id: 'red7',
    name: 'Sete vermelho',
    number: '7',
    colors: ['#b30d22', '#f7f7f1'],
    accent: '#f7f7f1',
    rarity: 'Rara',
    story: 'Vermelho e branco inspirado no extremo goleador que ataca a area como se fosse o ultimo minuto.',
    pattern: 'linear-gradient(180deg, #f7f7f1 0 .34rem, transparent .34rem), linear-gradient(90deg, transparent 0 74%, #f7f7f1 74% 100%)'
  },
  15: {
    id: 'arg10',
    name: 'Dez azul-rubro',
    number: '10',
    colors: ['#143d79', '#8a1024'],
    accent: '#f2c94c',
    rarity: 'Mitica',
    story: 'Azul e vermelho para o maestro argentino de toque curto, arrancada baixa e finalizacao fria.',
    pattern: 'repeating-linear-gradient(90deg, #143d79 0 24%, #8a1024 24% 48%)'
  },
  20: {
    id: 'nine9',
    name: 'Nove rubro-negro',
    number: '9',
    colors: ['#111111', '#b30d22'],
    accent: '#f3f3f3',
    rarity: 'Epica',
    story: 'Preto e vermelho para o avancado de area que vive entre centrais e aparece no sitio certo.',
    pattern: 'repeating-linear-gradient(90deg, #111111 0 22%, #b30d22 22% 44%)'
  },
  25: {
    id: 'total14',
    name: 'Catorze total',
    number: '14',
    colors: ['#ef7d18', '#111820'],
    accent: '#f7f7f1',
    rarity: 'Mitica',
    story: 'Laranja intenso inspirado no futebol total, na inteligencia posicional e no jogo sempre em movimento.',
    pattern: 'linear-gradient(180deg, #111820 0 .3rem, transparent .3rem), linear-gradient(90deg, transparent 0 78%, #111820 78% 100%)'
  },
  30: {
    id: 'maestro5',
    name: 'Cinco maestro',
    number: '5',
    colors: ['#f7f7f1', '#143d79'],
    accent: '#8a1024',
    rarity: 'Mitica',
    story: 'Branco elegante para o maestro frances que parece ter sempre mais um segundo que os outros.',
    pattern: 'linear-gradient(180deg, #143d79 0 .28rem, transparent .28rem), linear-gradient(90deg, #8a1024 0 8%, transparent 8% 92%, #143d79 92% 100%)'
  },
  35: {
    id: 'english8',
    name: 'Oito vermelho',
    number: '8',
    colors: ['#c8102e', '#f7f7f1'],
    accent: '#f7f7f1',
    rarity: 'Epica',
    story: 'Vermelho classico para o medio ingles de chegada a area, passe longo e remate sem pedir licenca.',
    pattern: 'linear-gradient(180deg, #f7f7f1 0 .28rem, transparent .28rem), linear-gradient(90deg, transparent 0 82%, #f7f7f1 82% 100%)'
  },
  40: {
    id: 'fullback3',
    name: 'Tres azul-branco',
    number: '3',
    colors: ['#1246a0', '#f7f7f1'],
    accent: '#f7f7f1',
    rarity: 'Epica',
    story: 'Azul e branco para o lateral lendario que sobe a ala como quem abre uma autoestrada.',
    pattern: 'repeating-linear-gradient(90deg, #1246a0 0 26%, #f7f7f1 26% 52%)'
  },
  45: {
    id: 'regista21',
    name: 'Vinte e um azul',
    number: '21',
    colors: ['#1c5fa8', '#0b1d3a'],
    accent: '#f7d64a',
    rarity: 'Epica',
    story: 'Azul profundo para o medio italiano que dita o ritmo, baixa a pulsacao e encontra a linha certa.',
    pattern: 'linear-gradient(180deg, #0b1d3a 0 .3rem, transparent .3rem), radial-gradient(circle at 50% 1rem, #f7d64a 0 .18rem, transparent .2rem)'
  },
  50: {
    id: 'keeper1',
    name: 'Um muralha',
    number: '1',
    colors: ['#111820', '#2b3440'],
    accent: '#8ee6ff',
    rarity: 'Lendaria',
    story: 'Escura, fria e imponente, inspirada no guarda-redes iconico que ganha duelos antes do remate.',
    pattern: 'linear-gradient(135deg, transparent 0 36%, #2b3440 36% 54%, transparent 54% 100%), linear-gradient(180deg, #8ee6ff 0 .24rem, transparent .24rem)'
  }
};





window.FOOTBALL_PACKS = [
  { id: 'base', name: 'Temporada Base', status: 'included', price: 'Gratis', levels: 50, theme: 'Jogadores atuais', description: 'Primeiros 50 niveis com craques em atividade.', colors: ['#0b7f39', '#f2c94c'] },
  { id: 'next50', name: 'Novos Craques', status: 'coming', price: 'Update gratis', levels: 50, theme: 'Proximos 50 niveis', description: 'Mais jogadores atuais para prolongar a carreira.', colors: ['#143d79', '#ffffff'] },
  { id: 'legends', name: 'Lendas', status: 'coming', price: 'Brevemente', levels: 40, theme: 'Classicos', description: 'Figo, Kaka e outros nomes historicos ficam para uma expansao propria.', colors: ['#111820', '#f2c94c'] },
  { id: 'portugal', name: 'Portugal', status: 'coming', price: 'Brevemente', levels: 30, theme: 'Liga e selecao', description: 'Jogadores portugueses e craques que marcaram o futebol nacional.', colors: ['#0b7f39', '#8a1024'] },
  { id: 'brasil', name: 'Brasil', status: 'coming', price: 'Brevemente', levels: 30, theme: 'Canarinha', description: 'Craques brasileiros atuais e, mais tarde, edicoes retro.', colors: ['#f2c94c', '#0b7f39'] },
  { id: 'competitions', name: 'Competicoes', status: 'coming', price: 'Brevemente', levels: 40, theme: 'Noites europeias', description: 'Desafios por competicao, sempre sem usar marcas oficiais na arte.', colors: ['#1c2f6f', '#e8f3ff'] }
];
