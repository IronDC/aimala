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
      username: "marc",
      email: "marc@marc.com",
      password: "aimala10",
      gamesOwned: [],
      platformsOwned: [],
      steamid: "",
    },
  ]);
  console.log(">>> Users Created: carballo, david, marc");
  // ARTICLES
  await dropIfExists(Article);
  await Article.deleteMany();
  await Article.create([
    {
      gameRelated: [],
      platformRelated: [],
      title: "Example Article for development purpouses",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor mauris, aliquam sed aliquam blandit, elementum et lacus. Praesent eu volutpat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor dapibus viverra. Proin non dictum ante. Sed finibus ornare ex, eget pulvinar metus facilisis eu. Curabitur sed odio odio. Cras malesuada nunc justo, at cursus nibh feugiat sed. Praesent ut libero dolor. Aliquam quis pulvinar leo. Nunc quis auctor lectus. Donec pharetra tristique aliquam. Maecenas venenatis scelerisque orci, eget tincidunt nulla feugiat quis.",
      image: "https://wallpapercave.com/wp/04FoKF7.png",
    },
    {
      gameRelated: [],
      platformRelated: [],
      title: "Another article, also for development",
      text:
        "Donec eu justo ut tellus tempor ultricies. Curabitur tristique a nibh aliquam aliquet. Donec viverra consectetur egestas. Nunc vulputate mi vitae egestas scelerisque. Nam egestas fermentum sem sed ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. In a felis a erat condimentum sollicitudin. Nam at feugiat ipsum, id eleifend odio. Nulla faucibus massa vel pretium convallis. Praesent sit amet eros dolor. Nam cursus bibendum purus sit amet consectetur.",
      image:
        "https://www.raspberrypi.org/app/uploads/2019/06/lemmings-original-large-1574x1080.jpg",
    },
  ]);
  console.log(">>> Articles Created: 2");
  // GAMES
  await dropIfExists(Game);
  await Game.deleteMany();
  await Game.create([
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
  ]);
  console.log(">>> Games Created: Super Mario Bros, Lemmings, Tomb Raider");
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
  console.log(">>> Gametypes Created: Plataformas, Acción, Shooter");
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
  ]);
  console.log(">>> Platforms Created: Nintendo NES, Amiga 500, Playstation");
});
