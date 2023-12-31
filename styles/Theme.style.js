export const theme = {
  colors: {
    naviBlue: "#1e2140",
    tomato: "tomato",
    violet: "violet",
    turquoise: "turquoise",
    grey: "#7f83a2",
    greyBlue: "#d6dffd",
    greyDark: "rgb(21 25 50)",
    greyLight: "rgb(239 241 250)",
    blackBlue: "rgb(30 30 47)",
  },
  fonts: {
    fontOpenSans: "'Open Sans', sans-serif",
    fontMontserrat: "'Montserrat', sans-serif",
    fontRoboto: "'Roboto Mono', sans-serif",
  },
};

const breakpoints = {
  small: 480,
  medium: 768,
  large: 1024
};

export const media = {
  small: `(max-width: ${breakpoints.small}px)`,
  medium: `(max-width: ${breakpoints.medium}px)`,
  large: `(max-width: ${breakpoints.large}px)`
};