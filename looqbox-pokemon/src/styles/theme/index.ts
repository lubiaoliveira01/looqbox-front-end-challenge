import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  title: "default",
  colors: {
    type: {
      bug: "#8CB230",
      dark: "#58575F",
      dragon: "#0F6AC0",
      electric: "#EED535",
      fairy: "#ED6EC7",
      fighting: "#D04164",
      fire: "#FD7D24",
      flying: "#748FC9",
      ghost: "#556AAE",
      grass: "#62B957",
      ground: "#DD7748",
      ice: "#61CEC0",
      normal: "#9DA0AA",
      poison: "#A552CC",
      psychic: "#EA5D60",
      rock: "#BAAB82",
      steel: "#417D9A",
      water: "#4A90DA",
    },
    backgroundType: {
      bug: "#8BD674",
      dark: "#6F6E78",
      dragon: "#7383B9",
      electric: "#F2CB55",
      fairy: "#EBA8C3",
      fighting: "#EB4971",
      fire: "#FFA756",
      flying: "#83A2E3",
      ghost: "#8571BE",
      grass: "#8BBE8A",
      ground: "#F78551",
      ice: "#91D8DF",
      normal: "#B5B9C4",
      poison: "#9F6E97",
      psychic: "#FF6568",
      rock: "#D4C294",
      steel: "#4C91B2",
      water: "#58ABF6",
    },
    background: {
      white: "#FFFFFF",
      input: "#F2F2F2",
      template: "#DFDFDF",
    },
    text: {
      white: "#FFFFFF",
      black: "#17171B",
      gray: "#747476",
      number: "#17171B",
    },
    height: {
      short: "#FFC5E6",
      medium: "#AEBFD7",
      tall: "#AAACB8",
    },
    weight: {
      light: "#99CD7C",
      normal: "#57B2DC",
      heavy: "#5A92A5",
    },
  },
  breakpoints: {
    values: {
      xs: "360px",
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  font: {
    family: {
      global:
        'Play Regular, Work Sans, Roboto, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu,Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      playregular: 'Play Regular',
      worksans: 'Work Sans',
    },
    light: 300,
    normal: 400,
    bold: 600,
    bolder: 800,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '3.2rem',
      xxlarge: '4rem',
      huge: '6rem',
    },
  },
};

export default defaultTheme;
