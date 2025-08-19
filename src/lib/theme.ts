// Berisi semua variabel dan fungsi yang terkait dengan sistem tema dan warna.

export type Theme = keyof typeof theme;
export type ThemeValue = (typeof theme)[Theme];

export const theme = {
  light: "#f6f4f2",
  white: "#ffffff",
  dark: "#222222",
  black: "#000000",
  crimson: "#a41034",
  red: "#e80538",
  purple: "#85609f",
  blue: "#aac8eb",
} as const;

export const themeOptions = Object.entries(theme).map(([key]) => key);

export type SimpleTheme = Exclude<Theme, "purple" | "blue">;

export const simpleTheme = Object.entries(theme).filter(
  ([key]) => !["purple", "blue"].includes(key),
);
export const simpleThemeOptions = simpleTheme.map(([key]) => key);

export type SiteHeaderTheme = Theme | "plain-light" | "plain-dark";

export const defaultPageSectionTheme = "light";

export function getThemeByValue(hexCode: ThemeValue): Theme {
  return (
    (Object.entries(theme).find(
      ([, value]) => value === hexCode,
    )?.[0] as Theme) || "light"
  );
}

export type ExpandedPalette = keyof typeof expandedPalette;
export type ExpandedPaletteValue = (typeof expandedPalette)[ExpandedPalette];

export const expandedPalette = {
  crimson: theme.crimson,
  red2: theme.red,
  red3: "#ED5541",
  red4: "#E0B2A7",
  orange1: "#AE6429",
  orange2: "#E87D1E",
  orange4: "#F7C76B",
  yellow2: "#EBCD00",
  yellow3: "#F3E44D",
  green1: "#026833",
  green2: "#52A52E",
  green4: "#B3D56A",
  teal1: "#006085",
  teal3: "#56BAB3",
  teal4: "#9BD6C4",
  blue1: "#3B2883",
  blue3: "#7FA4D1",
  blue4: theme.blue,
  purple1: "#57116A",
  purple2: "#80408D",
  purple3: "#9B7FAF",
  purple4: "#C6B2D1",
  magenta1: "#78244C",
  magenta2: "#C9006B",
  magenta3: "#D86199",
  magenta4: "#E599BA",
  black: theme.black,
  dark: theme.dark,
  gray2: "#68666F",
  gray3: "#A3A0A2",
  gray4: "#D5D0CA",
  white: theme.white,
  light: theme.light,
} as const;

// Spot themes that are dark background with light text
export const paletteThemesOnDark: Array<ExpandedPalette> = [
  "crimson",
  "red2",
  "orange1",
  "green1",
  "teal1",
  "blue1",
  "purple1",
  "purple2",
  "magenta1",
  "magenta2",
  "black",
  "dark",
  "gray2",
];

export const spotThemeOptions = Object.entries(expandedPalette).map(
  ([key]) => key,
);

export const getSplitTopperTheme = (spotTheme: ExpandedPalette | undefined) =>
  spotTheme && paletteThemesOnDark.includes(spotTheme) ? "dark" : "white";

export const getLargeAssetTopperTheme = (
  spotTheme: ExpandedPalette | undefined,
): SiteHeaderTheme => {
  if (spotTheme === "red2") return "red";
  if (spotTheme === "blue4") return "blue";
  if (spotTheme && themeOptions.includes(spotTheme)) {
    return spotTheme as SiteHeaderTheme;
  }
  return spotTheme && paletteThemesOnDark.includes(spotTheme)
    ? "plain-dark"
    : "plain-light";
};

export type BackgroundColors = keyof typeof backgroundColors;
export type BackgroundColorsValue = (typeof backgroundColors)[BackgroundColors];

export const backgroundColors = {
  light: theme.light,
  white: theme.white,
  dark: theme.dark,
  black: theme.black,
  crimson: theme.crimson,
} as const;

export const backgroundColorsOptions = Object.keys(backgroundColors);
