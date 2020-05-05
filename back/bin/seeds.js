const { withDbConnection, dropIfExists } = require("../lib/withDbConnection");
const User = require("../models/user");
const Article = require("../models/article");
const Game = require("../models/game");
const Gametype = require("../models/gametype");
const Platform = require("../models/platform");

withDbConnection(async () => {
  // USERS
  await dropIfExists(User);
  await User.deleteMany();
  await User.create([
    {
      usertype: "user",
      username: "carballo",
      email: "carballo@carballo.com",
      password: "aimala10",
      gamesOwned: [],
      platformsOwned: [],
      steamid: "",
    },
    {
      usertype: "user",
      username: "Hola",
      email: "hola@hola.com",
      password: "hola1234",
      gamesOwned: [],
      platformsOwned: [],
      steamid: "",
    },
    {
      usertype: "user",
      username: "AimalaUser",
      email: "aimala@aimala.com",
      password: "aimala1234",
      gamesOwned: [],
      platformsOwned: [],
      steamid: "",
    },
    {
      usertype: "admin",
      username: "david",
      email: "david@david.com",
      password: "aimala10",
      gamesOwned: [],
      platformsOwned: [],
      steamid: "",
    },
    {
      usertype: "user",
      username: "diego",
      email: "diego@diego.com",
      password: "aimala10",
      gamesOwned: [],
      platformsOwned: [],
      steamid: "",
    },
    {
      usertype: "user",
      username: "alex",
      email: "alex@alex.com",
      password: "aimala10",
      gamesOwned: [],
      platformsOwned: [],
      steamid: "",
    },
    {
      usertype: "user",
      username: "simon",
      email: "simon@simon.com",
      password: "aimala10",
      gamesOwned: [],
      platformsOwned: [],
      steamid: "",
    },
  ]);
  console.log(">>> Users Created");
  // ARTICLES
  await dropIfExists(Article);
  await Article.deleteMany();
  await Article.create([
    {
      gameRelated: [],
      platformRelated: [],
      title: "Sony presenta el Dualsense de PS5",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor mauris, aliquam sed aliquam blandit, elementum et lacus. Praesent eu volutpat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor dapibus viverra. Proin non dictum ante. Sed finibus ornare ex, eget pulvinar metus facilisis eu. Curabitur sed odio odio. Cras malesuada nunc justo, at cursus nibh feugiat sed. Praesent ut libero dolor. Aliquam quis pulvinar leo. Nunc quis auctor lectus. Donec pharetra tristique aliquam. Maecenas venenatis scelerisque orci, eget tincidunt nulla feugiat quis.",
      image:
        "https://blog.us.playstation.com/tachyon/sites/3/2020/04/49746632758_f9b3e73dc2_ka.jpg",
    },
    {
      gameRelated: [],
      platformRelated: [],
      title:
        "Nintendo confirma que 160.000 cuentas han sido afectadas por un hackeo masivo",
      text:
        "Nintendo Switch ha sufrido un intento de hackeo masivo que podríamos catalogar como exitoso tras la información que acaba de compartir Nintendo. La compañía ha informado que más de 160.000 cuentas se han visto afectadas por este suceso.",
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/2400/public/media/image/2020/03/nintendo-switch-online-1894321.jpg",
    },
    {
      gameRelated: [],
      platformRelated: [],
      title: "Red Dead Redemption 2 llegará en mayo a Xbox Game Pass",
      text:
        "Red Dead Redemption 2, el último título de Rockstar Games, llegará al catálogo de tarifa plana de Microsoft el próximo 7 de mayo. Según ha confirmado Xbox, el lanzamiento incluye el contenido adicional del Modo Historia, el Modo Foto con todas las funciones y acceso gratuito a Red Dead Online. ",
      image:
        "https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_1600/sgjbuogs7sfcimiu936m.jpg",
    },
  ]);
  console.log(">>> Articles Created");
  // GAMES
  await dropIfExists(Game);
  await Game.deleteMany();
  await Game.create([
    {
      title: "Borderlands 3",
      gameType: [],
      cover: {
        url: "https://assets-jpcust.jwpsrv.com/thumbnails/azkncaps-720.jpg",
      },
      description: "El juego al que Carballo va a dedicar las próximas 24/72h.",
      publisher: "Gearbox",
      year: "2019",
      trailer: "Q-o3cuQo5as",
      platforms: [],
      status: "pending",
      userCreator: [],
    },
    {
      title: "Doom Eternal",
      gameType: [],
      cover: {
        url:
          "https://s3.gaming-cdn.com/images/products/2669/271x377/doom-eternal-cover.jpg",
      },
      description:
        "Doom Eternal es un videojuego de acción y disparos en primera persona desarrollado por id Software y publicado por Bethesda Softworks.​ Es el quinto título principal de la serie Doom y la secuela directa del juego estrenado en 2016.",
      publisher: "id Software",
      year: "2020",
      trailer: "qgvV4GE8vVA",
      platforms: [],
      status: "pending",
      userCreator: [],
    },
    {
      title: "Super Mario Bros",
      gameType: [],
      cover: {
        url:
          "https://3.bp.blogspot.com/-Q-dQahgp1_g/VleJ8cqoGyI/AAAAAAAAWN8/YlzIqgSyUW4/s1600/MarioNES.jpg",
      },
      description:
        "Videojuego de plataformas, diseñado por Shigeru Miyamoto. El juego describe las aventuras de los hermanos Mario y Luigi que deben rescatar a la Princesa Peach del Reino Champiñón que fue secuestrada por el rey de los Koopas, Bowser",
      publisher: "Nintendo",
      year: "1985",
      trailer: "ia8bhFoqkVE",
      platforms: [],
      status: "published",
      userCreator: [],
    },
    {
      title: "Lemmings",
      gameType: [],
      cover: {
        url:
          "https://www.mobygames.com/images/covers/l/67467-lemmings-amiga-front-cover.jpg",
      },
      description:
        "Consiste en controlar a lemmings a través de diversos obstáculos (barrancos, paredes, montañas, etc.) con el objetivo de llegar a una puerta final. Los lemmings pueden realizar una serie de acciones: construir escaleras, bloquear el paso a otros lemmings, lanzarse en paracaídas, etc. También tienen la opción de suicidarse.",
      publisher: "Rockstar North",
      year: "1991",
      trailer: "xIuxB1oR2WQ",
      platforms: [],
      status: "pending",
      userCreator: [],
    },
    {
      title: "Tomb Raider",
      gameType: [],
      cover: {
        url:
          "http://www.masgamers.com/wp-content/uploads/2017/10/TOMBRAIDER1996PSX-1.jpg",
      },
      description:
        "Narra las aventuras de Lara Croft, una arqueóloga británica en busca de tesoros y reliquias del mundo antiguo al más puro estilo de Indiana Jones. ",
      publisher: "Core Design",
      year: "1996",
      trailer: "x1Lp3D2tUFg",
      platforms: [],
      status: "pending",
      userCreator: [],
    },
    {
      title: "Animal Crossing: New Horizons",
      gameType: [],
      cover: {
        url:
          "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202001/13/00197580504765____4__640x640.jpg",
      },
      description:
        "Animal Crossing es una serie de videojuegos de simulación de vida publicada por Nintendo, en la que el jugador vive en un pueblo habitado por animales antropomórficos, llevando a cabo diversas actividades.",
      publisher: "Nintendo",
      year: "2020",
      trailer: "5YPxiTLMcdg",
      platforms: [],
      status: "pending",
      userCreator: [],
    },
    {
      title: "Barbarian: The Ultimate Warrior",
      gameType: [],
      cover: {
        url:
          "https://alchetron.com/cdn/barbarian-the-ultimate-warrior-fdd1e921-f512-4c37-9c5e-04a0dc60c7f-resize-750.jpeg",
      },
      description:
        "Este es un videojuego de lucha que les da a los jugadores control sobre bárbaros con espada. En el modo de dos jugadores del videojuego, estos enfrentan a sus personajes entre sí. También tiene un modo para un jugador, en el que el bárbaro del jugador enfrenta una serie de desafíos establecidos por un mago malvado para rescatar a una princesa.",
      publisher: "Palace Software",
      year: "1987",
      trailer: "vPlDqnM5zek",
      platforms: [],
      status: "pending",
      userCreator: [],
    },
  ]);
  console.log(">>> Games Created");
  // GAMETYPES
  await dropIfExists(Gametype);
  await Gametype.deleteMany();
  await Gametype.create([
    {
      gametype: "Plataformas",
      description:
        "Género de videojuegos que se caracterizan por tener que caminar, correr, saltar o escalar sobre una serie de plataformas y acantilados, con enemigos, mientras se recogen objetos para poder completar el juego",
    },
    {
      gametype: "Acción",
      description:
        "Videojuegos en el que el jugador debe usar su velocidad, destreza y tiempo de reacción. Normalmente la violencia es su principal característica de interacción: combate con armas de fuego o cuerpo a cuerpo.",
    },
    {
      gametype: "Shooter",
      description:
        "Género de videojuegos centrado en las armas y otros combates basados ​​en armas. El género comparte rasgos comunes con los juego de acción.",
    },
  ]);
  // PLATFORMS
  await dropIfExists(Platform);
  await Platform.deleteMany();
  await Platform.create([
    {
      name: "Nintendo NES",
      year: "1983",
      description:
        "Nintendo Entertainment System, también conocida como NES o en Japón conocida como FAMICOM​, es la segunda consola de sobremesa de Nintendo, y es una videoconsola de ocho bits perteneciente a la tercera generación en la industria de los videojuegos",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/NES_logo.svg/225px-NES_logo.svg.png",
      image: {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NES-Console-Set.png/250px-NES-Console-Set.png",
      },
      gamepad:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/NES_controller.jpg/200px-NES_controller.jpg",
    },
    {
      name: "Amiga 500",
      year: "1987",
      description:
        "The Amiga 500, also known as the A500, is the first low-end Commodore Amiga 16/32-bit multimedia home/personal computer. It was announced at the winter Consumer Electronics Show in January 1987 – at the same time as the high-end Amiga 2000 – and competed directly against the Atari 520ST.",
      logo: "https://gbatemp.net/gc/images/plav.png",
      image: {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Amiga500_system.jpg/300px-Amiga500_system.jpg",
      },
      gamepad:
        "https://lh3.googleusercontent.com/-Y2IzrVRTJeE/Wj9vsl0LOjI/AAAAAAAADno/AqQs6nNAxbsaM4JZBgXmyRbsKJVeP82XwCHMYCw/fullsizeoutput_9007.jpeg?imgmax=1600",
    },
    {
      name: "Playstation",
      year: "1994",
      description:
        "Es una videoconsola de sobremesa de 32 bits lanzada por Sony Computer Entertainment considerada la más exitosa de su generación.  Tuvo gran éxito al implantar el CD-ROM y gracias a títulos como Gran Turismo, Metal Gear o Final Fantasy.",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/1024px-Playstation_logo_colour.svg.png",
      image: {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSX-Console-wController.png/1920px-PSX-Console-wController.png",
      },
      gamepad:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/PSX-Original-Controller.jpg/800px-PSX-Original-Controller.jpg",
    },
    {
      name: "Amstrad CPC 6128",
      year: "1985",
      description:
        "El Amstrad CPC 6128 fue un ordenador doméstico creado y comercializado por la empresa británica Amstrad Consumer Plc en 1985.",
      logo: "https://gbatemp.net/gc/images/plav.png",
      image: {
        url:
          "https://www.retrogamer.net/wp-content/uploads/2014/04/amstardcpc6128-300x289.png",
      },
      gamepad:
        "https://lh3.googleusercontent.com/-Y2IzrVRTJeE/Wj9vsl0LOjI/AAAAAAAADno/AqQs6nNAxbsaM4JZBgXmyRbsKJVeP82XwCHMYCw/fullsizeoutput_9007.jpeg?imgmax=1600",
    },
    {
      name: "Dreamcast",
      year: "1998",
      description:
        "Dreamcast (ドリームキャスト) es la sexta y última consola de videojuegos hasta ahora producida por Sega. Fue desarrollada en cooperación con Hitachi y Microsoft.",
      logo: "https://gbatemp.net/gc/images/plav.png",
      image: {
        url:
          "https://static.hsbnoticias.com/sites/default/files/styles/original/public/gallery/2019/09/consola-13.jpg",
      },
      gamepad:
        "https://lh3.googleusercontent.com/-Y2IzrVRTJeE/Wj9vsl0LOjI/AAAAAAAADno/AqQs6nNAxbsaM4JZBgXmyRbsKJVeP82XwCHMYCw/fullsizeoutput_9007.jpeg?imgmax=1600",
    },
  ]);
  console.log(">>> Platforms Created");
});
