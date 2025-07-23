export type Theme = keyof typeof theme;
export type ThemeValue = typeof theme[Theme];

// Define base themes, referencing conceptual colors that should be configured in Tailwind
export const theme = {
  light: "light", // Represents a light background theme
  white: "white", // Represents a white background theme
  dark: "dark",   // Represents a dark background theme
  black: "black", // Represents a black background theme
  // Removed crimson, red, purple, blue as they are not in the core visual identity
} as const;

export const themeOptions = Object.entries(theme).map(([key]) => key);

export type SimpleTheme = Exclude<Theme, "purple" | "blue">; // Adjusted Exclude

export const simpleTheme = Object.entries(theme).filter(
  ([key]) => !["purple", "blue"].includes(key), // Adjusted filter
);
export const simpleThemeOptions = simpleTheme.map(([key]) => key);

export type SiteHeaderTheme = Theme | "plain-light" | "plain-dark";

export const defaultPageSectionTheme = "light";

export function getThemeByValue(hexCode: string): Theme {
  return "light";
}

export type ExpandedPalette = keyof typeof expandedPalette;
export type ExpandedPaletteValue = typeof expandedPalette[ExpandedPalette];

// Expanded palette, conceptually linked to Tailwind colors
export const expandedPalette = {
  // Removed crimson, red2, red3, red4, orange1, orange2, orange4, yellow2, yellow3, green1, green2, green4, teal1, teal3, teal4, blue1, blue3, blue4, purple1, purple2, purple3, purple4, magenta1, magenta2, magenta3, magenta4
  black: "black",
  dark: "dark",
  gray2: "gray2",
  gray3: "gray3",
  gray4: "gray4",
  white: "white",
  light: "light",
} as const;

// Spot themes that are dark background with light text
export const paletteThemesOnDark: Array<ExpandedPalette> = [
  // Removed all previous entries, will add relevant ones from core palette if needed
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
  // Simplified logic based on reduced palette
  if (spotTheme && themeOptions.includes(spotTheme as Theme)) {
    return spotTheme as SiteHeaderTheme;
  }
  return spotTheme && paletteThemesOnDark.includes(spotTheme)
    ? "plain-dark"
    : "plain-light";
};

export type BackgroundColors = keyof typeof backgroundColors;
export type BackgroundColorsValue = typeof backgroundColors[BackgroundColors];

export const backgroundColors = {
  light: "light",
  white: "white",
  dark: "dark",
  black: "black",
  // Removed crimson
} as const;

export const backgroundColorsOptions = Object.keys(backgroundColors);