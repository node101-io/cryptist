module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    includes: {
      external: {
        css: ['general', 'page'],
        js: ['page', 'serverRequest', 'header']
      },
      meta: {
        title: res.__('Cryptist'),
        description: res.__('Cryptist is a blockchain event in Istanbul'),
        image: '/img/meta/header.png',
        twitter: true
      }
    },
    speakers: [
      // {
      //   color: 'purple',
      //   name: 'Errol Drummond',
      //   company: 'Cryptİst host',
      //   title: 'Welcome Speech',
      //   linkedin: '',
      //   image: 'erol.png'
      // },
      {
        color: 'turquoise',
        name: 'Emre Tekişalp',
        company: 'O(1) Labs',
        title: 'Zk Use cases',
        linkedin: 'https://www.linkedin.com/in/emretekisalp',
        twitter: 'https://x.com/etekis',
        image: 'emre.png'
      },
      {
        color: 'purple',
        name: 'Diego Kingston',
        company: 'Lambda Class',
        title: 'Deep dive into the Stark Platinum Prover',
        linkedin: null,
        twitter: 'https://x.com/zkdiegokingston',
        image: 'diego.png'
      },
      {
        color: 'green',
        name: 'Anish Mohammed',
        company: 'Panther Protocol',
        title: 'Privacy Architectures - Compliance Trade Offs',
        linkedin: 'https://ae.linkedin.com/in/anishmohammed',
        twitter: 'https://x.com/anishmohammed',
        image: 'anish.png'
      },
      {
        color: 'orange',
        name: 'Özgür Armanc Yiğit',
        company: 'Ethereum Foundation',
        title: 'Elliptic Curves and ZK Proof Aggregation',
        linkedin: 'https://tr.linkedin.com/in/oay',
        twitter: null,
        image: 'ozgur.png'
      },
      {
        color: 'red',
        name: 'Toghrul Maharramov',
        company: 'Scroll',
        title: 'Why Scroll?',
        linkedin: 'https://www.linkedin.com/in/toghrulmaharramov',
        twitter: 'https://x.com/toghrulmaharram',
        image: 'toghrul.png'
      },
      {
        color: 'green',
        name: 'Craig Johnson',
        company: 'Aleo',
        title: 'Aleo Advantage: ZK by Design',
        linkedin: 'https://www.linkedin.com/in/craigjson/',
        twitter: 'https://x.com/craigjson',
        image: 'craig.png'
      },
      {
        color: 'purple',
        name: 'Andy Guzman',
        company: 'Ethereum Foundation',
        title: 'Introducing PSE: Open Source Tooling & Research for the Community',
        linkedin: 'https://www.linkedin.com/in/andyguzmantoledo/',
        twitter: 'https://x.com/AndyGuzmanEth',
        image: 'andy.png'
      },
      {
        color: 'turquoise',
        name: 'Porter Adams',
        company: 'zkSync',
        title: 'Defending ZK Circuits',
        linkedin: 'https://www.linkedin.com/in/porter-adams-0127b7125/',
        twitter: 'https://x.com/portport255',
        image: 'porter.png'
      },
      {
        color: 'orange',
        name: 'Ekrem Bal',
        company: 'Chainway',
        title: 'The Future of Privacy and Proof of Innocence',
        linkedin: 'https://www.linkedin.com/in/ekrembal/',
        twitter: 'https://x.com/ekrembal_',
        image: 'ekrem.png'
      },
      {
        color: 'red',
        name: 'Doğan Alpaslan',
        company: 'Clave',
        title: 'ZK Webauthn Part 1',
        linkedin: 'https://www.linkedin.com/in/doganalpaslan/',
        twitter: 'https://x.com/DoganEth',
        image: 'dogan.png'
      },
      {
        color: 'green',
        name: 'Kaan Uzdoğan',
        company: 'Ethereum Foundation',
        title: null,
        linkedin: 'https://www.linkedin.com/in/kuzdogan',
        twitter: 'https://x.com/kaanuzdogan',
        image: 'kaan_2.png'
      },
      {
        color: 'purple',
        name: 'Deniz Baş',
        company: 'Herodotus',
        title: 'Enhancing L2s with Storage Proofs: Introducing Herodotus',
        linkedin: null,
        twitter: 'https://x.com/d0x471b',
        image: 'deniz.png'
      },
      {
        color: 'turquoise',
        name: 'Marcin Kaźmierczak',
        company: 'RedStone',
        title: 'Panel Moderator',
        linkedin: 'https://www.linkedin.com/in/marcin-kazmierczak1/',
        twitter: 'https://x.com/Marcin_Kaz13',
        image: 'marcin.png'
      },
      {
        color: 'orange',
        name: 'Raphael Panic',
        company: 'Protokit',
        title: 'ZK App Chain Thesis',
        linkedin: 'https://at.linkedin.com/in/rpanic',
        twitter: 'https://x.com/rpanic46',
        image: 'raphael.png'
      },
      {
        color: 'red',
        name: 'Utku Dördüncü',
        company: 'Paribu Ventures',
        title: 'Funding the Path to Mass ZK Adoption: How Much More to Invest in the ZK Space',
        linkedin: 'https://www.linkedin.com/in/utkudorduncu',
        twitter: null,
        image: 'utku.png'
      },
      {
        color: 'green',
        name: 'Gökhan El',
        company: 'IOSG Ventures',
        title: 'Funding the Path to Mass ZK Adoption: How Much More to Invest in the ZK Space',
        linkedin: 'https://www.linkedin.com/in/ergokhaner?',
        twitter: 'https://x.com/ergokhaner?s=21',
        image: 'gokhan.png'
      },
      {
        color: 'red',
        name: 'Georg Wiese',
        company: 'Powdr Labs',
        title: 'Get ready for deep dives into ZK tooling and developer experience',
        linkedin: 'https://www.linkedin.com/in/georgwiese?originalSubdomain=de',
        twitter: 'https://twitter.com/georgwiese',
        image: 'georg.png'
      },
      {
        color: 'green',
        name: 'Connor O Hara Rollkit',
        company: 'Celestia',
        title: 'Get ready for deep dives into ZK tooling and developer experience',
        linkedin: 'https://www.linkedin.com/in/connor-o-hara-2a8a7696/',
        twitter: 'https://twitter.com/colludingnode',
        image: 'connor.png'
      },
      {
        color: 'turquoise',
        name: 'Milica Vulić',
        company: 'ZKM',
        title: 'Get ready for deep dives into ZK tooling and developer experience',
        linkedin: 'https://www.linkedin.com/in/0xmilica?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        twitter: 'https://twitter.com/0xMilica',
        image: 'milica.png'
      },
      {
        color: 'orange',
        name: 'Clément Walter',
        company: 'Kakarot',
        title: 'Kakarot, an EVM execution client ZK by design',
        linkedin: 'https://www.linkedin.com/in/clementwalter/',
        twitter: 'https://twitter.com/ClementWalter',
        image: 'clement.png'
      },
      {
        color: 'purple',
        name: 'Ye Zang',
        company: 'Scroll',
        title: 'Benefits of Scaling that Comes with Zero-Knowledge',
        linkedin: 'https://www.linkedin.com/in/ye-zhang-70b072148/?originalSubdomain=cn',
        twitter: 'https://twitter.com/yezhang1998',
        image: 'ye-zang.png'
      },
      {
        color: 'orange',
        name: 'Henri Lieutaud',
        company: 'Starknet Foundation',
        title: 'Benefits of Scaling that Comes with Zero-Knowledge',
        linkedin: 'https://www.linkedin.com/in/henri-lieutaud-2156a142/?locale=en_US',
        twitter: 'https://twitter.com/henrlihenrli',
        image: 'henri.png'
      }
      // {
      //   color: 'green',
      //   name: 'Eda Akturk',
      //   company: 'Helium Foundation',
      //   title: 'Getting Into Web3 as a Developer',
      //   linkedin: '',
      //   image: 'eda.png'
      // },
      // {
      //   color: 'orange',
      //   name: 'Murat Karademir',
      //   company: 'Cryptİst host',
      //   title: 'Welcome Speech',
      //   linkedin: '',
      //   image: 'murat.png'
      // },
      // {
      //   color: 'orange',
      //   name: 'Kaan Uzdoğan',
      //   company: 'Ethereum Foundation',
      //   title: 'Ethereum Rollup-Centric Roadmap',
      //   linkedin: '',
      //   image: 'kaan.png'
      // },
      // {
      //   color: 'red',
      //   name: 'Luke Pearson',
      //   company: 'Polychain Capital',
      //   title: 'Tips and Tricks: Finding Your Way Around a ZK Universe',
      //   linkedin: '',
      //   image: 'luke.png'
      // },
      // {
      //   color: 'light-blue',
      //   name: 'Anthony DiPrinzio',
      //   company: 'Aleo',
      //   title: 'Use Cases for Private Applications on Web3: Where is the Real Value?',
      //   linkedin: '',
      //   image: 'anthony.png'
      // },
      // {
      //   color: 'green',
      //   name: 'Doruk İşmen',
      //   company: 'dYdX',
      //   title: 'dYdX V4 - The dYdX Chain',
      //   linkedin: '',
      //   image: 'doruk.png'
      // },
      // {
      //   color: 'purple',
      //   name: 'Utku Dördüncü',
      //   company: 'Paribu Ventures',
      //   title: 'ZK Technology Use Cases: Transfer Your Off-chain Personas Into Web3 with FirstBatch',
      //   linkedin: '',
      //   image: 'utku.png'
      // },
      // {
      //   color: 'turquoise',
      //   name: 'Todd Norton',
      //   company: 'Manta Network',
      //   title: 'SNARKs, ZKPs, and Other Things The NSA Doesn’t Want You to Know About',
      //   linkedin: '',
      //   image: 'todd.png'
      // },
      // {
      //   color: 'orange',
      //   name: 'Albiona Hoti',
      //   company: 'Manta Network',
      //   title: 'Private Everything: On-chain Privacy Demo with Manta Network\'s Dolphin Testnet',
      //   linkedin: '',
      //   image: 'albiona.png'
      // },
      // {
      //   color: 'purple',
      //   name: 'Ömer Kaya',
      //   company: 'Paribu Ventures',
      //   title: 'ZK Technology Use Cases: Transfer Your Off-chain Personas Into Web3 with FirstBatch',
      //   linkedin: '',
      //   image: 'omer.png'
      // },
      // {
      //   color: 'turquoise',
      //   name: 'Kerim Kaya',
      //   company: 'Paribu Ventures',
      //   title: 'ZK Technology Use Cases: Transfer Your Off-chain Personas Into Web3 with FirstBatch',
      //   linkedin: '',
      //   image: 'kerim.png'
      // }
    ],
    workshops: [
      {
        color: 'gray',
        name: 'Mauro Toscano',
        company: 'Lambda Class',
        title: 'How to use Lambdaworks and the STARK Platinum Prover Part 1',
        linkedin: null,
        twitter: 'https://x.com/MauroToscanoDev',
        image: 'mauro.png'
      },
      {
        color: 'gray',
        name: 'Diego Kingston',
        company: 'Lambda Class',
        title: 'How to use Lambdaworks and the STARK Platinum Prover Part 2',
        linkedin: null,
        twitter: 'https://x.com/zkdiegokingston',
        image: 'diego.png'
      },
      {
        color: 'gray',
        name: 'Florent Tavernier',
        company: 'Proof of Passport',
        title: 'Proof of Passport: Towards ZK Identity Singularity',
        linkedin: 'https://www.linkedin.com/in/florent-tavernier-771aa0180/',
        twitter: 'https://x.com/turboblitzzz',
        image: 'florent.png'
      },
      {
        color: 'gray',
        name: 'ZK Lim',
        company: 'Aleo',
        title: 'Learning Leo',
        linkedin: 'https://www.linkedin.com/in/zklim5389',
        twitter: 'https://x.com/zklim5389',
        image: 'zklim.png'
      },
      {
        color: 'gray',
        name: 'Saurabh Chalke',
        company: 'ZkHub',
        title: 'Fast and Privacy - Preserving Zero-Knowledge Proof Generation',
        linkedin: 'https://linkedin.com/in/saurabhchalke',
        twitter: 'https://x.com/saurabhchalke',
        image: 'saurabh.png'
      },
      {
        color: 'gray',
        name: 'Gunit Malik',
        company: 'ZkHub',
        title: 'Fast and Privacy-Preserving Zero-Knowledge Proof Generation',
        linkedin: 'https://www.linkedin.com/in/gunit-malik-765776281/',
        twitter: 'https://twitter.com/_gumnut',
        image: 'gunit.png'
      },
      {
        color: 'gray',
        name: 'Craig Johnson',
        company: 'Aleo',
        title: 'dApp Development on Aleo',
        linkedin: 'https://www.linkedin.com/in/craigjson/',
        twitter: 'https://twitter.com/Akinsp_',
        image: 'craig.png'
      },
      {
        color: 'gray',
        name: 'Akın Semih Pur',
        company: 'Aleo',
        title: 'dApp Development on Aleo',
        linkedin: 'https://www.linkedin.com/in/akinsemihpur/?originalSubdomain=tr',
        twitter: 'https://twitter.com/craigjson',
        image: 'akin.png'
      },
      {
        color: 'gray',
        name: 'Evan Marshall',
        company: 'Demox',
        title: 'Optimizing Client-Side Proofs - Deploying zkNFT Collections',
        linkedin: 'https://www.linkedin.com/in/evan-marshall-66598053/',
        twitter: 'https://twitter.com/CoralRelief',
        image: 'evan.png'
      },
      {
        color: 'gray',
        name: 'Luke Newman',
        company: 'Puzzle',
        title: 'Multiplayer Privacy with Puzzle (Part 2)',
        linkedin: 'https://www.linkedin.com/in/lucas-newman-5a683a8a/',
        twitter: null,
        image: 'luke.png'
      },
      {
        color: 'gray',
        name: 'Alp Bassa',
        company: 'Veridise',
        title: 'Formal Verification of ZKP Circuits',
        linkedin: 'https://www.linkedin.com/in/alp-bassa-8b655420/',
        twitter: null,
        image: 'alp.png'
      },
      {
        color: 'gray',
        name: 'Matt Wyatt',
        company: 'Puzzle',
        title: 'Multiparty Privacy Stack',
        linkedin: 'https://www.linkedin.com/in/matthew-wyatt-196433a7/',
        twitter: 'https://twitter.com/zkmattwyatt',
        image: 'matt.png'
      }
    ],
    sponsors: {
      lead: [
        {
          image: 'aleo.png',
          name: 'Aleo Network',
          website: 'https://aleo.org',
          linkedin: 'https://www.linkedin.com/company/aleohq',
          twitter: 'https://x.com/AleoHQ',
          type: 'Lead Sponsor'
        },
      ],
      platinum: [
        {
          image: 'scroll.png',
          name: 'Scroll',
          website: 'https://scroll.io/',
          linkedin: 'https://www.linkedin.com/company/scroll-io/',
          twitter: 'https://x.com/Scroll_ZKP',
          type: 'Platinum Sponsor'
        },
        {
          image: 'zksync.png',
          name: 'zkSync',
          website: 'https://zksync.io',
          linkedin: 'https://www.linkedin.com/company/zksync-network',
          twitter: 'https://x.com/zksync',
          type: 'Platinum Sponsor'
        },
        {
          image: 'sponsor-6.png',
          name: 'Paribu Ventures',
          website: 'https://ventures.paribu.com/',
          linkedin: 'https://www.linkedin.com/company/paribu-ventures/',
          twitter: 'https://x.com/ParibuVentures',
          type: 'Platinum Sponsor'
        },
        // {
        //   image: 'sponsor-2.png',
        //   name: 'dYdX Foundation',
        //   linkedin: 'https://ch.linkedin.com/company/dydx-foundation',
        //   twitter: 'https://x.com/dydxfoundation',
        //   type: 'Platinum Partner'
        // },
        // {
        //   image: 'sponsor-3.png',
        //   name: 'Ethereum Foundation',
        //   linkedin: 'https://www.linkedin.com/company/ethereum-foundation/',
        //   twitter: 'https://x.com/ethereum',
        //   type: 'Platinum Partner'
        // },
        // {
        //   image: 'sponsor-4.png',
        //   name: 'Manta Network',
        //   linkedin: 'https://www.linkedin.com/company/mantanetwork/',
        //   twitter: 'https://x.com/MantaNetwork',
        //   type: 'Platinum Partner'
        // },
        // {
        //   image: 'sponsor-5.png',
        //   name: 'O(1) Labs',
        //   linkedin: 'https://www.linkedin.com/company/o1labs/',
        //   twitter: 'https://x.com/o1_labs',
        //   type: 'Platinum Partner'
        // },
      ]
    },
    partners: [
      {
        image: 'antalpha.png',
        name: 'Antalpha',
        website: 'https://antalpha.com/',
        linkedin: 'https://www.linkedin.com/company/antalpha/',
        twitter: 'https://x.com/Antalpha_Labs',
        type: 'Developer Community Partner'
      },
      {
        image: 'rise-in.png',
        name: 'Rise in',
        website: 'https://www.risein.com/',
        linkedin: 'https://www.linkedin.com/company/risein/',
        twitter: 'https://x.com/risein_com',
        type: 'Developer Community Partner'
      },
      {
        image: 'lambda-class.png',
        name: 'Lambda Class',
        website: 'https://lambdaclass.com/',
        linkedin: 'https://www.linkedin.com/company/lambdaclass/',
        twitter: 'https://x.com/class_lambda',
        type: 'Developer Community Partner'
      },
      {
        image: 'hoodies.png',
        name: 'Hoodies',
        website: 'https://link3.to/hoodiescommunity',
        linkedin: 'https://www.linkedin.com/company/hoodiescommunity',
        twitter: 'https://x.com/HoodiesCT',
        type: 'Community Partner'
      },
      {
        image: 'ytu_blockchain.png',
        name: 'YTU Blockchain',
        website: 'https://linktr.ee/blockchainytu',
        linkedin: 'https://www.linkedin.com/company/ytu-blockchain/',
        twitter: 'https://twitter.com/BlockchainYtu',
        type: 'Talent Partner'
      },
      {
        image: 'partner-2.png',
        name: 'ITU Blockchain',
        website: 'https://www.itublockchain.com/',
        linkedin: 'https://www.linkedin.com/company/itublockchain/',
        twitter: 'https://x.com/ITUblockchain',
        type: 'Talent Partner'
      },
      {
        image: 'odtu_blockchain.png',
        name: 'ODTU Blockchain',
        website: 'https://x.com/odtublockchain',
        linkedin: 'https://www.linkedin.com/company/odtublockchain/?viewAsMember=true',
        twitter: 'https://twitter.com/odtublockchain',
        type: 'Talent Partner'
      },
      {
        image: 'uzman_coin.png',
        name: 'Uzmancoin',
        website: 'https://uzmancoin.com/',
        linkedin: 'https://www.linkedin.com/company/uzmancoin/',
        twitter: 'https://twitter.com/uzmancoin',
        type: 'Media Partner'
      },
      {
        image: 'krpt.png',
        name: 'KRPT',
        website: 'https://krpt.com/tr/',
        linkedin: 'https://www.linkedin.com/company/krptcom/',
        twitter: 'https://twitter.com/KRPTcom',
        type: 'Media Partner'
      },
      // {
      //   image: 'partner-1.png',
      //   name: 'Buchain',
      //   linkedin: 'https://www.linkedin.com/company/bogazicichain/',
      //   twitter: 'https://x.com/bogazicichain',
      //   type: 'Platinum Partner'
      // },
      
      // {
      //   image: 'partner-3.png',
      //   name: 'L2 Planet',
      //   linkedin: 'https://www.linkedin.com/company/l2-planet/?trk=similar-pages',
      //   twitter: 'https://x.com/layer2planet',
      //   type: 'Platinum Partner'
      // },
      // {
      //   image: 'partner-4.png',
      //   name: 'zkApe',
      //   linkedin: '',
      //   twitter: 'https://x.com/0xzkape',
      //   type: 'Platinum Partner'
      // },
      // {
      //   image: 'partner-5.png',
      //   name: 'node101',
      //   linkedin: 'https://www.linkedin.com/company/node101/',
      //   twitter: 'https://x.com/node_101',
      //   type: 'Platinum Partner'
      // },
      // {
      //   image: 'partner-6.png',
      //   name: 'Btchaber',
      //   linkedin: 'https://www.linkedin.com/company/btchabercom/',
      //   twitter: 'https://x.com/BTCHabercom',
      //   type: 'Platinum Partner'
      // },
    ],
    schedule: [
      {
        time: '10.00 - 10.20',
        title: 'Mete Koray Gergin, Mustafa Aksöz, Error Drummond',
        text: 'Welcome Speech'
      },
      {
        time: '10.20 - 10.40',
        title: 'Ekrem Bal, Chainway',
        text: 'Proof of Innocence'
      },
      {
        time: '10.40 - 11.00',
        title: 'Raphael Panic, Protokit',
        text: 'ZK AppChain Thesis'
      },
      {
        time: '11.00 - 11.20',
        title: 'Clément Walter, Kakarot',
        text: 'Kakarot, an EVM Execution Client ZK by Design '
      },
      {
        time: '11.20 - 11.40',
        title: 'Dieho Kingston, Lambda Class',
        text: 'Deep Dive into the Stark Platinum Prover'
      },
      {
        time: '11.40 - 12.10',
        title: 'Break',
        text: ''
      },
      {
        time: '12.10 - 12.30',
        title: 'Anish Mohammed, Panther Protocol',
        text: 'Privacy Architectures - Compliance Trade-offs'
      },
      {
        time: '12.30 - 12.50',
        title: 'Craig Johnson, Aleo',
        text: 'Aleo Advantage: ZK by Design'
      },
      {
        time: '12.50 - 13.10',
        title: 'Deniz Baş, Herodotus',
        text: 'Storage Proofs '
      },
      {
        time: '13.10 - 13.30',
        title: 'Porter Adams, zkSync',
        text: 'Defending ZK Circuits'
      },
      {
        time: '13.30 - 14.30',
        title: 'Lunch Break',
        text: ''
      },
      {
        time: '14.30 - 14:50',
        title: 'Utku Dördüncü, Paribu Ventures',
        text: 'Funding the Path to Mass ZK Adoption: How Much More to Invest in the ZK Space'
      },
      {
        time: '14.50 - 15.20',
        title: 'PANEL: Ethereum Foundation, Aleo, Celestia, Powdr Labs, ZKM',
        text: 'Get Ready for Deep Dives into ZK Tooling and Developer Experience'
      },
      {
        time: '15.20 - 15.40',
        title: 'Andy Guzman, Ethereum Foundation',
        text: 'Introducing PSE: Open Source Tooling & Research for the Community'
      },
      {
        time: '15.40 - 16.00',
        title: 'Doğan Alpaslan',
        text: 'ZK Webauthn'
      },
      {
        time: '16.00 - 16.20',
        title: 'Break',
        text: ''
      },
      {
        time: '16.20 - 16.50',
        title: 'PANEL: Redstone, Scroll, O(1) Labs, Starknet, zkSync',
        text: 'Benefits of Scaling that Comes with Zero-Knowledge'
      },
      {
        time: '16.50 - 17.10',
        title: 'Özgür Armanc Yiğit, Ethereum Foundation',
        text: 'Elliptic Curves and ZK Proof Aggregation'
      },
      {
        time: '17.10 - 17.30',
        title: 'Emre Tekişalp, O(1) Labs',
        text: 'ZK Use Cases'
      },
      {
        time: '17.30 - 17.50',
        title: 'Toghrul Maharramov, Scroll',
        text: 'Why Scroll?'
      }

      // {
      //   time: '9:00 - 10:00',
      //   title: 'Good Morning Coffee',
      //   text: 'Welcome Speech, Errol Drummond & Murat Karademir'
      // },
      // {
      //   time: '10:10 - 10:40',
      //   title: 'Todd Norton, Manta Network',
      //   text: '“SNARKs, ZKPs, and Other Things The NSA Doesn’t Want You to Know About”'
      // },
      // {
      //   time: '10:40 - 11:10',
      //   title: 'Kaan Uzdoğan, Ethereum Foundation',
      //   text: '“Ethereum Rollup-Centric Roadmap”'
      // },
      // {
      //   time: '11:10 - 11:40',
      //   title: 'Luke Pearson, Polychain Capital',
      //   text: '“Tips and Tricks: Finding Your Way Around a ZK Universe”'
      // },
      // {
      //   time: '11:40 - 12:10',
      //   title: 'Coffee Break',
      //   text: ''
      // },
      // {
      //   time: '12:10 - 12:40',
      //   title: 'Emre Tekişalp, O(1) Labs',
      //   text: '“Zk Use Cases”'
      // },
      // {
      //   time: '12:40 - 13:10',
      //   title: 'Anthony DiPrinzio, Aleo',
      //   text: '“Use Cases for Private Applications on Web3: Where is the Real Value?”'
      // },
      // {
      //   time: '13:10 - 13:40',
      //   title: 'Eda Akturk, Helium Foundation',
      //   text: '“Getting Into Web3 as a Developer”'
      // },
      // {
      //   time: '13:40 - 14:40',
      //   title: 'Lunch and Networking',
      //   text: ''
      // },
      // {
      //   time: '14:40 - 15:10',
      //   title: 'Doruk İşmen, dYdX',
      //   text: '“dYdX V4 - The dYdX Chain”'
      // },
      // {
      //   time: '15:10 - 15:40',
      //   title: 'Albiona Hoti, Manta Network',
      //   text: '“Private Everything: On-chain Privacy Demo with Manta Network\'s Dolphin Testnet”'
      // },
      // {
      //   time: '15:40 - 16:00',
      //   title: 'Coffee Break',
      //   text: ''
      // },
      // {
      //   time: '16:30 - 17:00',
      //   title: 'Toghrul Maharramov, Scroll',
      //   text: '“Zero-Knowledge Proofs in the World of Rollups”'
      // },
      // {
      //   time: '17:00 - 18:00',
      //   title: 'Chill Vibes Only',
      //   text: ''
      // },
      // {
      //   time: '20:00 - 00:00',
      //   title: 'After Party at a different location',
      //   text: ''
      // }
    ],
    workshops_schedule: [
      {
        time: '10.00 - 10.45',
        title: 'Mauro Toscano - Diego Kingston, Lambda Class',
        text: 'Lambda Class - How to use Lambdaworks and the STARK Platinum Prover'
      },
      {
        time: '10.45 - 11.25',
        title: 'Gunit Malik - Saurabh Chalke, ZkHub',
        text: 'zkHub - Fast and Privacy-Preserving Zero-Knowledge Proof Generation'
      },
      {
        time: '11.25 - 12.00',
        title: 'Break',
        text: ''
      },
      {
        time: '12.00 - 12.30',
        title: 'Evan Marshall, Demox',
        text: 'Talk | Optimizing Client-Side Proofs'
      },
      {
        time: '12.30 - 13.10',
        title: 'ZK Lim, Aleo',
        text: 'Workshop | Learning Leo'
      },
      {
        time: '13.10 - 13.30',
        title: 'Matt Wyatt, Puzzle',
        text: 'Talk | Multiparty Privacy Stack'
      },
      {
        time: '13.30 - 14.30',
        title: 'Lunch Break',
        text: ''
      },
      {
        time: '14.30 - 15.20',
        title: 'Craig Johnson, Aleo',
        text: 'Workshop | dApp Development on Aleo'
      },
      {
        time: '15.20 - 15.40',
        title: 'Alp Bassa, Veridise',
        text: 'Talk | Formal Verification of ZKP Circuits'
      },
      {
        time: '15.40 - 16.00',
        title: 'Luke Newman, Puzzle',
        text: 'Workshop | Multiplayer Privacy with Puzzle (Part 1)'
      },
      {
        time: '16.00 - 16.20',
        title: 'Break',
        text: ''
      },
      {
        time: '16.20 - 16.50',
        title: 'Luke Newman, Puzzle',
        text: 'Workshop | Multiplayer Privacy with Puzzle (Part 2)'
      },
      {
        time: '16.50 - 17.10',
        title: 'Akın Semih Pur, Aleo',
        text: 'Aleo Avantajı: Tasarımdan ZK'
      },
      {
        time: '17.10 - 17.50',
        title: 'Evan Marshall, Demox',
        text: 'Workshop | Deploying zkNFT Collections'
      }
    ]
  });
};
