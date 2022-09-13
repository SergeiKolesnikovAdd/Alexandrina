export const colors = {
  white: "#FFFFFF",
  black: "#333333",
  blueGradient: "radial-gradient(100% 1103.13% at 0% 100%, #93EBFF 0%, #2079FF 100%);",
  blue: "#2079FF",
  yellow: "#F2B20B",
  pink: "#F48ABD",
  green: "#5BBD77",
  blue: "#3C7DFF",
  violet: "#A263F1",
};

export const fontFamilies = {
  Font: '"HelveticaNeue", Arial, sans-serif',
};

export const namesOfBreakpoints = {
  desktopXXLG: "desktopXXLG",
  desktopXLG: "desktopXLG",
  desktopLG: "desktopLG",
  desktopMD: "desktopMD",
  desktopSM: "desktopSM",
  tabletLG: "tabletLG",
  tabletSM: "tabletSM",
  phone: "phone",
};

const {
  desktopXXLG,
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
} = namesOfBreakpoints;

export const subsequenceOfBreakpoints = [
  desktopXXLG, // больше чем 1920px
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
];

export const breakpointsWidth = {
  [desktopXLG]: "1920px",
  [desktopLG]: "1600px",
  [desktopMD]: "1440px",
  [desktopSM]: "1280px",
  [tabletLG]: "1024px",
  [tabletSM]: "768px",
  [phone]: "600px",
};

export const offsets = {
  [desktopLG]: {
    xlg: 160,
    lg: 120,
    lgmd: 84,
    md: 60,
    smmd: 40,
    sm: 24,
    xsm: 20,
    xxsm: 16,
    none: 0,
  },
};

export const typesOfoffset = Object.keys(offsets[desktopLG]);

export const sizes = {
  [desktopLG]: {
    x4: "50vw",
    x3: "37.5vw",
    x2: "25vw",
    x1: "12.5vw",
    half: "6.25vw",
    count: 8,
  },
  [tabletLG]: {
    x2: "50vw",
    x1: "25vw",
    half: "12.5vw",
    thirdX2: "17vw",
    thirdX1: "8.5vw",
    count: 4,
  },
};

export const fontSizes = {
  [desktopLG]: {
    h1: "12.125vw",
    h2: "72px",
    h3: "32px",
    text: "16px",
    caption: "14px",
    vw: "1vw",
    vw15: "1.5vw",
    vw2: "2vw",
  },
};