import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import tailwindcss from "@tailwindcss/vite";
import { loadSpeakers, convertSpeakersForConfig } from "./src/data/speakers-loader.js";

const pageData = {
  "/index.html": {
    title: "Cryptist",
    slidingTexts: [
      "Zero Knowledge Proving",
      "Fully Homomorphic Encryption",
      "Multi-Party Computation",
      "Trusted Execution Environment",
      "Post Quantum Encryption",
      "Lattice Based Cryptography",
      "Lightweight Cryptography",
      "ZK Virtual Machines",
    ],
    otherEvents: [
      {
        name: "CRYPTANKARA",
        dates: "September 4, 2025",
        type: "CRYPTOGRAPHY WORKSHOP",
        typeColor: "#90FFC9",
        // link: ''
      },
      {
        name: "ETHISTANBUL CONFERENCE",
        dates: "September 5-6-7, 2025",
        type: "CONFERENCE",
        typeColor: "#ACDAFF",
        link: "https://ethistanbul.io/",
      },
      {
        name: "ETHISTANBUL HACKATHON",
        dates: "September 5-6-7, 2025",
        type: "HACKATHON",
        typeColor: "#FFF3A4",
        link: "https://ethistanbul.io/",
      },
      {
        name: "TÜBİTAK BİLGEM DAY",
        dates: "September 5, 2025",
        type: "CRYPTOGRAPHY WORKSHOP",
        typeColor: "#90FFC9",
        link: "https://lu.ma/yhv362ie"
      },
    ],
    faqs: [
      {
        question: "What is Cryptist?",
        answer:
          "Cryptist is an annual community-driven event in Istanbul focused on zero-knowledge, privacy, and cryptography. It brings together researchers, developers, protocols, and curious minds for a full day of technical talks, workshops, and real conversations, right at the intersection of Europe and Asia.",
      },
      {
        question: "Where can I register?",
        answer:
          "You can register for Cryptist via Luma <a href='https://lu.ma/cryptist2025' target='_blank'>here</a>.",
      },
      {
        question: "I'm new to cryptography. Can I still join?",
        answer: `
          Cryptist is a technically-focused event, best suited for those with at least a basic understanding of cryptography, zero-knowledge, or related privacy technologies.<br><br>
          If you're early in your journey but already exploring the space (through study, research, or hands-on experimentation) you will likely find sessions that resonate with you.<br><br>
          It's not an entry-level conference, but a great place to deepen your learning and connect with others who are actively building and researching.
`,
      },
      // {
      //   question: "What is the recent cryptography sessions event?",
      //   answer: ""
      // },
      {
        question: "Will the event be live-streamed? Where can I follow it?",
        answer:
          "There won’t be a livestream, but don't worry, the talks will be recorded and published on our YouTube channel after the event.",
      },
      // {
      //   question: "How can I become a volunteer/speaker/sponsor?",
      //   answer: "We’d love to have you involved! If you're interested in contributing as a volunteer, speaker, or sponsor, just click on the words to submit your application. Our team will review and get back to you as soon as possible."
      // },
      {
        question: "I have another question.",
        answer:
          "Feel free to reach out! You can contact us via email at <a href='mailto:cryptistanbul@gmail.com' target='_blank'>cryptistanbul@gmail.com</a> or join our <a href='https://t.me/cryptistanbul' target='_blank'>Telegram group</a> and message one of the admins directly.",
      },
    ],
    recentSessions: [
      {
        label: "I",
        isIframe: false,
        src: "/recent-sessions/1.webp",
        alt: "recent cryptography sessions 1",
      },
      {
        label: "II",
        isIframe: false,
        src: "/recent-sessions/2.webp",
        // isIframe: true,
        // src: "https://www.youtube-nocookie.com/embed/y3M0KictJwI?rel=0&modestbranding=1&controls=1&showinfo=0",
        alt: "recent cryptography sessions 2",
      },
      {
        label: "III",
        isIframe: false,
        src: "/recent-sessions/3.webp",
        // isIframe: true,
        // src: "https://www.youtube-nocookie.com/embed/y3M0KictJwI?rel=0&modestbranding=1&controls=1&showinfo=0",
        alt: "recent cryptography sessions 3",
      },
      {
        label: "IV",
        isIframe: false,
        src: "/recent-sessions/4.webp",
        // isIframe: true,
        // src: "https://www.youtube-nocookie.com/embed/y3M0KictJwI?rel=0&modestbranding=1&controls=1&showinfo=0",
        alt: "recent cryptography sessions 4",
      },
      {
        label: "V",
        isIframe: false,
        src: "/recent-sessions/5.webp",
        alt: "recent cryptography sessions 5",
      },
    ],
    schedule: [
      {
        time: "10.00-10.20",
        topic: "Opening",
        speaker: "Errol Drummond & Yunus Gürlek // Terminal 3 & node101",
      },
      {
        time: "10.20-10.40",
        topic: "Computational Assumptions in Blockchains",
        speaker: "Abdullah Talayhan // Individual",
      },
      {
        time: "10.40-11.00",
        topic: "Evolution of Threshold Signatures: The Cryptographic Backbone of Modern Custodial Wallets",
        speaker: "Muhammed Ali Bingöl // De Montfort Uni, ex. TUBITAK BILGEM",
      },
      {
        time: "11.00-11.20",
        topic: "eERC: A Practical Confidential Token Protocol",
        speaker: "Furkan Boyraz // Avalanche",
      },
      {
        time: "11.20-11.40",
        topic: "Transciphering in FHE",
        speaker: "Furkan Akal // Inco Network",
      },
      {
        time: "11.40-12.30",
        topic: "Break",
        speaker: "",
      },
      {
        time: "12.30-12.50",
        topic: "Multi-party Computation and its Application in Leader Election",
        speaker: "Oğuz Yayla // METU, Ayware",
      },
      {
        time: "12.50-13.10",
        topic: "What is a Rollup? 2025 Edition",
        speaker: "Toghrul Maharramov // Fluent",
      },
      {
        time: "13.10-13.30",
        topic: "The philosophy of privacy",
        speaker: "Errol Drummond // Terminal 3",
      },
      {
        time: "13.30-13.50",
        topic: "Verifiable & Private Inference, beyond ZK & FHE",
        speaker: "Erhan Tezcan // @dria",
      },
      {
        time: "13.50-14.50",
        topic: "Lunch Break",
        speaker: "",
      },
      {
        time: "14.50-15.50",
        topic: "Side discussions, and research meetups",
        speaker: "",
      },
      {
        time: "15.50-16.20",
        topic: "Security in Digital Asset Custody",
        speaker: "Ahmet Şahinoğlu // Paribu Custody",
      },
      {
        time: "16.20-16.40",
        topic: "BitVM",
        speaker: "Robin Linus // BitVM, zkCoins, ZeroSync creator",
      },
      {
        time: "16.40-17.00",
        topic: "PQC on Bitcoin",
        speaker: "Hunter Beast // BIP360 Author, Anduro, Surmount Systems",
      },
      {
        time: "17.00-17.20",
        topic: "Crytography: the corner stone of BTCFi",
        speaker: "Fisher Yu // Babylon Labs",
      },
      {
        time: "17.20-17.40",
        topic: "Closing",
        speaker: "Errol Drummond & Yunus Gürlek // Terminal 3 & node101",
      }
    ],
    oldSponsors: [
      {
        src: "/sponsors/aleo.webp",
        alt: "aleo",
      },
      {
        src: "/sponsors/dydx.webp",
        alt: "dydx",
      },
      {
        src: "/sponsors/ethereum-foundation.webp",
        alt: "ethereum foundation",
      },
      {
        src: "/sponsors/mantanetwork.webp",
        alt: "mantanetwork",
      },
      {
        src: "/sponsors/o1labs.webp",
        alt: "o1labs",
      },
      {
        src: "/sponsors/paribu-ventures.webp",
        alt: "paribu ventures",
      },
      {
        src: "/sponsors/scroll.webp",
        alt: "scroll",
      },
      {
        src: "/sponsors/zksync.webp",
        alt: "zksync",
      },
    ],
    switchContext: {
      speakers: convertSpeakersForConfig(loadSpeakers()).sort((a, b) => a.name.localeCompare(b.name)),
      partners: [
        {
          name: "coinzonia",
          website: "https://www.coinzonia.com/",
        },
        {
          name: "ayware",
          website: "",
        },
        {
          name: "famecrypt",
          website: "https://famecrypt.com.tr/en/"
        },
        {
          name: "tubitak",
          website: "https://en.bilgem.tubitak.gov.tr/en/"
        },
        {
          name: "btc-haber",
          website: "https://www.btchaber.com/",
        },
        {
          name: "house-of-zk",
          website: "https://www.hozk.io/",
        }
      ],
      sponsors: [
        {
          name: "citrea",
          website: "https://citrea.xyz/",
        },
        {
          name: "avalanche",
          website: "https://www.avax.network/",
        },
        {
          name: "paribu-custody",
          website: "https://www.paribucustody.com/",
        },
        {
          name: "rise",
          website: "https://risechain.com/",
        },
        {
          name: "babylon",
          website: "https://babylonlabs.io/",
        }
      ],
    }
  },
  "/cryptist-2022.html": {
    title: "Cryptist I",
    path: "2022/",
    switchContext: {
      speakers: [
        {
          name: "ALBIONA HOTI",
          company: "MANTA NETWORK",
          image: "/speakers/albiona.webp",
        },
        {
          name: "ANTHONY DIPRINZIO",
          company: "ALEO",
          image: "/speakers/anthony.webp",
        },
        {
          name: "EDA AKTÜRK",
          company: "HELIUM FOUNDATION",
          image: "/speakers/eda.webp",
        },
        {
          name: "DORUK İŞMEN",
          company: "DYDX",
          image: "/speakers/doruk.webp",
        },
        {
          name: "TOGHRUL MAHARRAMOV",
          company: "SCROLL",
          image: "/speakers/toghrul.webp",
        },
        {
          name: "KAAN UZDOĞAN",
          company: "ETHEREUM",
          image: "/speakers/kaan.webp",
        },
        {
          name: "EMRE TEKİŞALP",
          company: "O(1) LABS",
          image: "/speakers/emre.webp",
        },
        {
          name: "KERİM KAYA",
          company: "PARIBU",
          image: "/speakers/kerim.webp",
        },
        {
          name: "LUKE PEARSON",
          company: "POLY CHAIN",
          image: "/speakers/luke.webp",
        },
        {
          name: "ÖMER KAYA",
          company: "PARIBU",
          image: "/speakers/omer.webp",
        },
        {
          name: "TODD NORTON",
          company: "MANTA NETWORK",
          image: "/speakers/todd.webp",
        },
        {
          name: "UTKU DÖRDÜNCÜ",
          company: "PARIBU",
          image: "/speakers/utku.webp",
        },
      ],
      sponsors: [
        {
          name: "aleo",
          website: "https://aleo.org/",
        },
        {
          name: "scroll",
          website: "https://scroll.io/",
        },
        {
          name: "dydx",
          website: "https://www.dydx.xyz/",
        },
        {
          name: "paribu-ventures",
          website: "https://ventures.paribu.com/",
        },
        {
          name: "ethereum-foundation",
          website: "https://ethereum.foundation/",
        },
        {
          name: "o1labs",
          website: "https://o1labs.org/",
        },
        {
          name: "mantanetwork",
          website: "https://www.manta.network/",
        },
      ],
      partners: [
        {
          name: "btc-haber",
          website: "https://www.btchaber.com/",
        },
        {
          name: "l2-planet",
          website: "https://x.com/layer2planet?lang=en",
        },
        {
          name: "zkape",
          website: "https://www.zkape.io/",
        },
        {
          name: "ytu-blockchain",
          website: "https://ytublockchain.com/",
        },
        {
          name: "itu-blockchain",
          website: "https://www.itublockchain.com/",
        },
        {
          name: "boun-blockchain",
          website: "https://buchain.org/",
        },
        {
          name: "node101",
          website: "https://node101.io/",
        }
      ],
      gallery: Array.from({ length: 10 }, (_, index) => index + 1),
    },
  },
  "/cryptist-2023.html": {
    title: "Cryptist II",
    path: "2023/",
    switchContext: {
      speakers: [
        {
          name: "EMRE TEKİŞALP",
          company: "O(1) LABS",
          image: "/speakers/emre.webp",
        },
        {
          name: "DIEGO KINGSTON",
          company: "LAMBDA CLASS",
          image: "/speakers/diego.webp",
        },
        {
          name: "ANISH MOHAMMED",
          company: "PANTHER PROTOCOL",
          image: "/speakers/anish.webp",
        },
        {
          name: "ÖZGÜR ARMANC YİĞİT",
          company: "ETHEREUM",
          image: "/speakers/ozgur.webp",
        },
        {
          name: "TOGHRUL MAHARRAMOV",
          company: "SCROLL",
          image: "/speakers/toghrul.webp",
        },
        {
          name: "CRAIG JOHNSON",
          company: "ALEO",
          image: "/speakers/craig.webp",
        },
        {
          name: "ANDY GUZMAN",
          company: "ETHEREUM",
          image: "/speakers/andy.webp",
        },
        {
          name: "PORTER ADAMS",
          company: "ZKSYNC",
          image: "/speakers/porter.webp",
        },
        {
          name: "EKREM BAL",
          company: "CHAINWAY",
          image: "/speakers/ekrem.webp",
        },
        {
          name: "DOĞAN ALPASLAN",
          company: "CLAVE",
          image: "/speakers/dogan.webp",
        },
        {
          name: "KAAN UZDOĞAN",
          company: "ETHEREUM",
          image: "/speakers/kaan.webp",
        },
        {
          name: "DENİZ BAŞ",
          company: "HERODOTUS",
          image: "/speakers/deniz.webp",
        },
        {
          name: "MARCIN KAŹMIERCZAK",
          company: "REDSTONE",
          image: "/speakers/marcin.webp",
        },
        {
          name: "RAPHAEL PANIC",
          company: "PROTOKIT",
          image: "/speakers/raphael.webp",
        },
        {
          name: "UTKU DÖRDÜNCÜ",
          company: "PARIBU VENTURES",
          image: "/speakers/utku.webp",
        },
        {
          name: "GÖKHAN EL",
          company: "IOSG VENTURES",
          image: "/speakers/gokhan.webp",
        },
        {
          name: "GEORG WIESE",
          company: "POWDR LABS",
          image: "/speakers/georg.webp",
        },
        {
          name: "CONNOR O'HARA",
          company: "CELESTIA",
          image: "/speakers/connor.webp",
        },
        {
          name: "MILICA VULIĆ",
          company: "ZKM",
          image: "/speakers/milica.webp",
        },
        {
          name: "CLÉMENT WALTER",
          company: "KAKAROT",
          image: "/speakers/clement.webp",
        },
        {
          name: "YE ZANG",
          company: "SCROLL",
          image: "/speakers/ye.webp",
        },
        {
          name: "HENRI LIEUTAUD",
          company: "STARKNET FOUNDATION",
          image: "/speakers/henri.webp",
        },
      ],
      sponsors: [
        {
          name: "aleo",
          website: "https://aleo.org/",
        },
        {
          name: "scroll",
          website: "https://scroll.io/",
        },
        {
          name: "zksync",
          website: "https://zksync.io/",
        },
        {
          name: "paribu-ventures",
          website: "https://ventures.paribu.com/",
        },
      ],
      partners: [
        {
          name: "antalpha-labs",
          website: "https://www.antalpha.com/",
        },
        {
          name: "lambda-class",
          website: "https://lambdaclass.com/",
        },
        {
          name: "hoodies",
          website: "https://hoodrun.io/",
        },
        {
          name: "ytu-blockchain",
          website: "https://ytublockchain.com/",
        },
        {
          name: "odtu-blockchain",
          website: "https://x.com/odtublockchain",
        },
        {
          name: "uzman-coin",
          website: "https://uzmancoin.com/",
        },
        {
          name: "krpto",
          website: "https://krpt.com/tr/",
        },
        {
          name: "rise-in",
          website: "https://www.risein.com/",
        },
      ],
      gallery: Array.from({ length: 18 }, (_, index) => index + 1),
    },
  },
};

const commonData = {
  headerLinks: [
    {
      name: "X",
      url: "https://x.com/cryptistanbul",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/playlist?list=PL5c21nTlaW9ODGy_XOOUTFzZZbrlSO2d7",
    },
    {
      name: "Brand Kit",
      url: "https://drive.google.com/drive/folders/1p8-Y30vvZ7E-tUL7VWSQMeNWsfRLpLv-?usp=drive_link",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/cryptistanbul/",
    },
  ],
};

export default defineConfig({
  plugins: [
    handlebars({
      context(pagePath) {
        return {
          ...pageData[pagePath],
          ...commonData,
        };
      },
      partialDirectory: "./partials",
      helpers: {
        inc: (value: number) => Number(value) + 1,
        equals: (value: number, target: number) => value === target,
      },
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cryptist2022: "cryptist-2022.html",
        cryptist2023: "cryptist-2023.html",
      },
    },
  },
});
