import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import tailwindcss from "@tailwindcss/vite";

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
        name: "ETHISTANBUL CONFERENCE",
        dates: "September 5-6-7, 2025",
        type: "CONFERENCE",
        link: "https://ethistanbul.io/",
      },
      {
        name: "ETHISTANBUL HACKATHON",
        dates: "September 5-6-7, 2025",
        type: "HACKATHON",
        link: "https://ethistanbul.io/",
      },
      {
        name: "CIPHER DAY",
        dates: "September 4, 2025",
        type: "INTERACTIVE WORKSHOP",
        // link: ''
      },
      {
        name: "TEDX",
        dates: "TBA",
        type: "CONFERENCE",
        // link: ''
      },
    ],
    // faqs: Array.from({ length: 6 }, () => 'What is Cryptist?'),
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
        answer: `Absolutely! Cryptist is open to everyone from complete beginners to experienced researchers.

Whether you're just starting to explore cryptography, zero-knowledge or privacy technologies in general, or already deep into them, you’ll find talks, workshops, and people that match your curiosity.

All you need is an interest and a willingness to learn.
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
        isIframe: true,
        src: "https://www.youtube.com/embed/y3M0KictJwI?rel=0&modestbranding=1&controls=1&showinfo=0",
        alt: "recent cryptography sessions 2",
      },
      {
        label: "III",
        isIframe: true,
        src: "https://www.youtube.com/embed/y3M0KictJwI?rel=0&modestbranding=1&controls=1&showinfo=0",
        alt: "recent cryptography sessions 3",
      },
      {
        label: "IV",
        isIframe: true,
        src: "https://www.youtube.com/embed/y3M0KictJwI?rel=0&modestbranding=1&controls=1&showinfo=0",
        alt: "recent cryptography sessions 4",
      },
      {
        label: "V",
        isIframe: false,
        src: "/recent-sessions/5.webp",
        alt: "recent cryptography sessions 5",
      },
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
        },
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
          name: "itu-blockchain",
          website: "https://www.itublockchain.com/",
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
      url: "/",
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
