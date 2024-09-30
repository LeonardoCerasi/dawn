const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'EUR',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Pineto',
    scale: 'C'
  },
  clock: {
    format: 'd/N/Y - h:i:s',
    iconColor: '#ff7b95'
  },
  search: {
    // default is g, for some reason (obv I don't know JS)
    engines: {
      g: ['https://duckduckgo.com/?q=', 'DuckDuckGo'],
      d: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: ['todo-list'],
  openLastVisitedTab: true,
  tabs: [
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'news',
        links: [
          {
            name: 'manifesto',
            url: 'https://ilmanifesto.it/',
            icon: 'news',
            icon_color: '#dc143c',
          },
          {
            name: 'guardian',
            url: 'https://theguardian.com/europe/',
            icon: 'brand-guardian',
            icon_color: '#0073cf',
          },
          {
            name: 'repubblica',
            url: 'https://repubblica.it/',
            icon: 'book',
            icon_color: '#bebebe',
          },
          {
            name: 'gt',
            url: 'https://globaltimes.cn/',
            icon: 'affiliate',
            icon_color: '#ed872d',
          },
          {
            name: 'metalitalia',
            url: 'https://metalitalia.com/',
            icon: 'meteor',
            icon_color: '#008000'
          },
        ]
      },
      {
        name: 'Science',
        links: [
          {
            name: 'scientific american',
            url: 'https://scientificamerican.com/',
          },
          {
            name: 'quanta magazine',
            url: 'https://quantamagazine.org/',
          },
          {
            name: 'le scienze',
            url: 'https://lescienze.it/',
          },
        ]
      },
      {
        name: 'Proton',
        links: [
          {
            name: 'mail',
            url: 'https://mail.proton.me/u/0/inbox/',
            icon: 'mail',
            icon_color: '#7b68ee',
          },
          {
            name: 'calendar',
            url: 'https://calendar.proton.me/u/0',
            icon: 'calendar-event',
            icon_color: '#9370db',
          },
          {
            name: 'drive',
            url: 'https://drive.proton.me/u/0',
            icon: 'server-2',
            icon_color: '#8a2be2'
          },
        ]
      },
      ]
    },
    {
      name: 'study',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'unimi',
          links: [
            {
              url: 'https://unimia.unimi.it/',
              icon: 'notebook',
              icon_color: '#bebebe',
              name: 'unimia',
            },
            {
              url: 'https://ariel.unimi.it/',
              icon: 'school',
              icon_color: '#008000',
              name: 'ariel',
            },
            {
              url: 'https://minerva.unimi.it/',
              icon: 'book',
              icon_color: '#ed872d',
              name: 'minerva',
            },
            {
              url: 'https://easystaff.divsi.unimi.it/PortaleStudenti/',
              icon: 'list search',
              icon_color: '#dda0dd',
              name: 'agenda',
            },
            {
              url: 'https://outlook.office.com/mail/',
              icon: 'mail',
              icon_color: '#0073cf',
              name: 'mail',
            },
          ]
        },
        {
          name: 'corsi',
          links: [
            {
              name: '/quantistica/',
              url: 'https://pcforte.mi.infn.it/mq/index.html',
              icon: 'brand-elastic',
              icon_color: '#008000',
            },
            {
              name: '/relatività/',
              url: 'https://myariel.unimi.it/course/view.php?id=5082',
              icon: 'diabolo',
              icon_color: '#dc143c',
            },
            {
              name: '/nucleare/',
              url: 'https://www0.mi.infn.it/~sleoni/Istituzioni-FISNUC.html',
              icon: 'brand-react-native',
              icon_color: '#ed872d',
            },
            {
              name: '/geo & gruppi/',
              url: 'https://drive.google.com/drive/folders/1ZsMwLztSQsZEu7GBfX8Xo9ZHXpbviECY',
              icon: 'hexagon-3d',
              icon_color: '#0073cf',
            },
          ]
        },
        {
          name: 'journals',
          links: [
            {
              name: 'arXiv',
              url: 'https://arxiv.org',
            },
            {
              name: 'nature',
              url: 'https://www-nature-com.pros1.lib.unimi.it/',
            },
            {
              name: 'nature astronomy',
              url: 'https://www-nature-com.pros1.lib.unimi.it/natastron/',
            },
            {
              name: 'science',
              url: 'https://www-science-org.pros1.lib.unimi.it/loi/science/',
            },
          ]
        },
      ]
    },
    {
      name: 'dev',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'djf',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    },
    {
      name: 'chill',
      background_url: 'src/img/banners/sw.gif',
      categories: [
        {
          name: 'prova',
          links: [
            {
              name: 'prova',
              url: 'prova',
            },
          ]
        },
      ]
    },]
});
