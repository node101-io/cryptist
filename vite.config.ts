import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import tailwindcss from "@tailwindcss/vite";

const pageData = {
  '/index.html': {
    title: 'Cryptist',
    slidingTexts: [
      'Zero Knowledge Proving',
      'Fully Homomorphic Encryption',
      'Multi-Party Computation',
      'Trusted Execution Environment',
      'Post Quantum Encryption',
      'Lattice Based Cryptography',
      'Lightweight Cryptography',
      'ZK Virtual Machines',
    ],
    switchContext: {
      speakers: [],
      partners: [],
      sponsors: [],
    }
  },
  '/cryptist-2022.html': {
    title: 'Cryptist I',
    path: '2022/',
    switchContext: {
      speakers: [
        {
          name: 'ALBIONA HOTI',
          company: 'MANTA NETWORK',
          image: '/speakers/albiona.webp'
        },
        {
          name: 'ANTHONY DIPRINZIO',
          company: 'ALEO',
          image: '/speakers/anthony.webp'
        },
        {
          name: 'EDA AKTÜRK',
          company: 'HELIUM FOUNDATION',
          image: '/speakers/eda.webp'
        },
        {
          name: 'DORUK İŞMEN',
          company: 'DYDX',
          image: '/speakers/doruk.webp'
        },
        {
          name: 'TOGHRUL MAHARRAMOV',
          company: 'SCROLL',
          image: '/speakers/toghrul.webp'
        },
        {
          name: 'KAAN UZDOĞAN',
          company: 'ETHEREUM FOUNDATION',
          image: '/speakers/kaan.webp'
        },
        {
          name: 'EMRE TEKİŞALP',
          company: 'O(1) LABS',
          image: '/speakers/emre.webp'
        },
        {
          name: 'KERİM KAYA',
          company: 'PARIBU',
          image: '/speakers/kerim.webp'
        },
        {
          name: 'LUKE PEARSON',
          company: 'POLY CHAIN',
          image: '/speakers/luke.webp'
        },
        {
          name: 'ÖMER KAYA',
          company: 'PARIBU',
          image: '/speakers/omer.webp'
        },
        {
          name: 'TODD NORTON',
          company: 'MANTA NETWORK',
          image: '/speakers/todd.webp'
        },
        {
          name: 'UTKU DÖRDÜNCÜ',
          company: 'PARIBU',
          image: '/speakers/utku.webp'
        }
      ],
      sponsors: [
        "aleo",
        "scroll",
        "dydx",
        "paribu-ventures",
        "ethereum-foundation",
        "o1labs",
        "mantanetwork",
      ],
      partners: [
        "btc-haber",
        "l2-planet",
        "zkape",
        "ytu-blockchain",
        "itu-blockchain",
        "boun-blockchain",
        "node101"
      ],
      gallery: Array.from({ length: 11 }, (_, index) => index + 1),
    }
  },
  '/cryptist-2023.html': {
    title: 'Cryptist II',
    path: '2023/',
    switchContext: {
      speakers: [{
        name: "EMRE TEKİŞALP",
        company: "O(1) LABS"
      },
      {
        name: "DIEGO KINGSTON",
        company: "LAMBDA CLASS"
      },
      {
        name: "ANISH MOHAMMED",
        company: "PANTHER PROTOCOL"
      },
      {
        name: "ÖZGÜR ARMANC YİĞİT",
        company: "ETHEREUM"
      },
      {
        name: "TOGHRUL MAHARRAMOV",
        company: "SCROLL"
      },
      {
        name: "CRAIG JOHNSON",
        company: "ALEO"
      },
      {
        name: "ANDY GUZMAN",
        company: "ETHEREUM"
      },
      {
        name: "PORTER ADAMS",
        company: "ZKSYNC"
      },
      {
        name: "EKREM BAL",
        company: "CHAINWAY"
      },
      {
        name: "DOĞAN ALPASLAN",
        company: "CLAVE"
      },
      {
        name: "KAAN UZDOĞAN",
        company: "ETHEREUM"
      },
      {
        name: "DENİZ BAŞ",
        company: "HERODOTUS"
      },
      {
        name: "MARCIN KAŹMIERCZAK",
        company: "REDSTONE"
      },
      {
        name: "RAPHAEL PANIC",
        company: "PROTOKIT"
      },
      {
        name: "UTKU DÖRDÜNCÜ",
        company: "PARIBU VENTURES"
      },
      {
        name: "GÖKHAN EL",
        company: "IOSG VENTURES"
      },
      {
        name: "GEORG WIESE",
        company: "POWDR LABS"
      },
      {
        name: "CONNOR O HARA ROLLKIT",
        company: "CELESTIA"
      },
      {
        name: "MILICA VULIĆ",
        company: "ZKM"
      },
      {
        name: "CLÉMENT WALTER",
        company: "KAKAROT"
      },
      {
        name: "YE ZANG",
        company: "SCROLL"
      },
      {
        name: "HENRI LIEUTAUD",
        company: "STARKNET FOUNDATION"
      },
      ],
      sponsors: [
        "aleo",
        "scroll",
        "zksync",
        "paribu-ventures",
      ],
      partners: [
        "antalpha-labs",
        "lambda-class",
        "hoodies",
        "ytu-blockchain",
        "itu-blockchain",
        "odtu-blockchain",
        "uzman-coin",
        "krpto",
        "rise-in"
      ],
      gallery: Array.from({ length: 18 }, (_, index) => index + 1),
    },
  },
};

const commonData = {
  headerLinks: [
    {
      name: 'X',
      url: 'https://x.com/cryptistanbul',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/playlist?list=PL5c21nTlaW9ODGy_XOOUTFzZZbrlSO2d7',
    },
    {
      name: 'Brand Kit',
      url: '/',
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
    }),
    tailwindcss(),
  ],
});
