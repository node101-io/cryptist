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
    // speakers: [
    //   {
    //     color: 'purple',
    //     name: 'Errol Drummond',
    //     company: 'Cryptİst host',
    //     title: 'Welcome Speech',
    //     linkedin: '',
    //     image: 'erol.png'
    //   },
    //   {
    //     color: 'turquoise',
    //     name: 'Emre Tekişalp',
    //     company: 'O(1) Labs',
    //     title: 'ZK and Web3 Mass Adoption (and it’s not just about scalability)',
    //     linkedin: '',
    //     image: 'emre.png'
    //   },
    //   {
    //     color: 'green',
    //     name: 'Eda Akturk',
    //     company: 'Helium Foundation',
    //     title: 'Getting Into Web3 as a Developer',
    //     linkedin: '',
    //     image: 'eda.png'
    //   },
    //   {
    //     color: 'orange',
    //     name: 'Murat Karademir',
    //     company: 'Cryptİst host',
    //     title: 'Welcome Speech',
    //     linkedin: '',
    //     image: 'murat.png'
    //   },
    //   {
    //     color: 'orange',
    //     name: 'Kaan Uzdoğan',
    //     company: 'Ethereum Foundation',
    //     title: 'Ethereum Rollup-Centric Roadmap',
    //     linkedin: '',
    //     image: 'kaan.png'
    //   },
    //   {
    //     color: 'red',
    //     name: 'Luke Pearson',
    //     company: 'Polychain Capital',
    //     title: 'Tips and Tricks: Finding Your Way Around a ZK Universe',
    //     linkedin: '',
    //     image: 'luke.png'
    //   },
    //   {
    //     color: 'light-blue',
    //     name: 'Anthony DiPrinzio',
    //     company: 'Aleo',
    //     title: 'Use Cases for Private Applications on Web3: Where is the Real Value?',
    //     linkedin: '',
    //     image: 'anthony.png'
    //   },
    //   {
    //     color: 'green',
    //     name: 'Doruk İşmen',
    //     company: 'dYdX',
    //     title: 'dYdX V4 - The dYdX Chain',
    //     linkedin: '',
    //     image: 'doruk.png'
    //   },
    //   {
    //     color: 'blue',
    //     name: 'Toghrul Maharramov',
    //     company: 'Scroll',
    //     title: 'Zero-Knowledge Proofs in the World of Rollups',
    //     linkedin: '',
    //     image: 'toghrul.png'
    //   },
    //   {
    //     color: 'purple',
    //     name: 'Utku Dördüncü',
    //     company: 'Paribu Ventures',
    //     title: 'ZK Technology Use Cases: Transfer Your Off-chain Personas Into Web3 with FirstBatch',
    //     linkedin: '',
    //     image: 'utku.png'
    //   },
    //   {
    //     color: 'turquoise',
    //     name: 'Todd Norton',
    //     company: 'Manta Network',
    //     title: 'SNARKs, ZKPs, and Other Things The NSA Doesn’t Want You to Know About',
    //     linkedin: '',
    //     image: 'todd.png'
    //   },
    //   {
    //     color: 'orange',
    //     name: 'Albiona Hoti',
    //     company: 'Manta Network',
    //     title: 'Private Everything: On-chain Privacy Demo with Manta Network\'s Dolphin Testnet',
    //     linkedin: '',
    //     image: 'albiona.png'
    //   },
    //   {
    //     color: 'purple',
    //     name: 'Ömer Kaya',
    //     company: 'Paribu Ventures',
    //     title: 'ZK Technology Use Cases: Transfer Your Off-chain Personas Into Web3 with FirstBatch',
    //     linkedin: '',
    //     image: 'omer.png'
    //   },
    //   {
    //     color: 'turquoise',
    //     name: 'Kerim Kaya',
    //     company: 'Paribu Ventures',
    //     title: 'ZK Technology Use Cases: Transfer Your Off-chain Personas Into Web3 with FirstBatch',
    //     linkedin: '',
    //     image: 'kerim.png'
    //   }
    // ],
    // sponsors: [
    //   1
    // ]
    // schedule: [
    //   {
    //     time: '9:00 - 10:00',
    //     title: 'Good Morning Coffee',
    //     text: 'Welcome Speech, Errol Drummond & Murat Karademir'
    //   },
    //   {
    //     time: '10:10 - 10:40',
    //     title: 'Todd Norton, Manta Network',
    //     text: '“SNARKs, ZKPs, and Other Things The NSA Doesn’t Want You to Know About”'
    //   },
    //   {
    //     time: '10:40 - 11:10',
    //     title: 'Kaan Uzdoğan, Ethereum Foundation',
    //     text: '“Ethereum Rollup-Centric Roadmap”'
    //   },
    //   {
    //     time: '11:10 - 11:40',
    //     title: 'Luke Pearson, Polychain Capital',
    //     text: '“Tips and Tricks: Finding Your Way Around a ZK Universe”'
    //   },
    //   {
    //     time: '11:40 - 12:10',
    //     title: 'Coffee Break',
    //     text: ''
    //   },
    //   {
    //     time: '12:10 - 12:40',
    //     title: 'Emre Tekişalp, O(1) Labs',
    //     text: '“ZK and Web3 Mass Adoption (and it’s not just about scalability)”'
    //   },
    //   {
    //     time: '12:40 - 13:10',
    //     title: 'Anthony DiPrinzio, Aleo',
    //     text: '“Use Cases for Private Applications on Web3: Where is the Real Value?”'
    //   },
    //   {
    //     time: '13:10 - 13:40',
    //     title: 'Eda Akturk, Helium Foundation',
    //     text: '“Getting Into Web3 as a Developer”'
    //   },
    //   {
    //     time: '13:40 - 14:40',
    //     title: 'Lunch and Networking',
    //     text: ''
    //   },
    //   {
    //     time: '14:40 - 15:10',
    //     title: 'Doruk İşmen, dYdX',
    //     text: '“dYdX V4 - The dYdX Chain”'
    //   },
    //   {
    //     time: '15:10 - 15:40',
    //     title: 'Albiona Hoti, Manta Network',
    //     text: '“Private Everything: On-chain Privacy Demo with Manta Network\'s Dolphin Testnet”'
    //   },
    //   {
    //     time: '15:40 - 16:00',
    //     title: 'Coffee Break',
    //     text: ''
    //   },
    //   {
    //     time: '16:30 - 17:00',
    //     title: 'Toghrul Maharramov, Scroll',
    //     text: '“Zero-Knowledge Proofs in the World of Rollups”'
    //   },
    //   {
    //     time: '17:00 - 18:00',
    //     title: 'Chill Vibes Only',
    //     text: ''
    //   },
    //   {
    //     time: '20:00 - 00:00',
    //     title: 'After Party at a different location',
    //     text: ''
    //   }
    // ]
  });
};
