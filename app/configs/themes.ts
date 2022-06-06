import type { ColorScheme } from "~/types";

const colors = require("tailwindcss/colors");

/**
 * Config Themes
 * Based on Vechai UI
 *
 * - ColorScheme objects
 * - Exported object of ColorScheme objects, used in the ThemeProvider
 * - Array of available themes, used in the ThemeSwitcher
 */

export const fire: ColorScheme = {
  id: "fire",
  type: "light",
  colors: {
    primary: colors.red,
    neutral: colors.neutral,
    bg: { base: colors.white, fill: colors.neutral["100"] },
    text: { foreground: colors.neutral["900"], muted: colors.neutral["700"] },
  },
};

export const rose: ColorScheme = {
  id: "rose",
  type: "light",
  colors: {
    primary: colors.rose,
    neutral: colors.stone,
    bg: { base: colors.stone["100"], fill: colors.stone["200"] },
    text: { foreground: colors.stone["900"], muted: colors.stone["700"] },
  },
};

export const amber: ColorScheme = {
  id: "amber",
  type: "light",
  colors: {
    primary: colors.amber,
    neutral: colors.stone,
    bg: { base: colors.stone["100"], fill: colors.stone["200"] },
    text: { foreground: colors.stone["900"], muted: colors.stone["700"] },
  },
};

export const midnight: ColorScheme = {
  id: "midnight",
  type: "dark",
  colors: {
    primary: colors.red,
    neutral: colors.neutral,
    bg: { base: colors.neutral["900"], fill: colors.neutral["900"] },
    text: { foreground: colors.neutral["100"], muted: colors.neutral["300"] },
  },
};

export const dawn: ColorScheme = {
  id: "dawn",
  type: "dark",
  colors: {
    primary: colors.rose,
    neutral: colors.stone,
    bg: { base: colors.stone["900"], fill: colors.stone["900"] },
    text: { foreground: colors.stone["100"], muted: colors.stone["300"] },
  },
};

export const night: ColorScheme = {
  id: "night",
  type: "dark",
  colors: {
    primary: colors.amber,
    neutral: colors.gray,
    bg: { base: colors.gray["900"], fill: colors.gray["800"] },
    text: { foreground: colors.gray["100"], muted: colors.gray["300"] },
  },
};

/**
 * SpecifiedTheme Provider colors data
 */
export const configThemes = {
  fire,
  midnight,

  rose,
  dawn,

  amber,
  night,
};

/**
 * Theme Switcher buttons
 */
export const configAvailableThemes = [
  {
    name: "Fire",
    id: "fire",
    type: "light",
    primaryColor: configThemes.fire.colors.primary["500"],
    backgroundColor: configThemes.fire.colors.bg.base,
  },
  {
    name: "Midnight",
    id: "midnight",
    type: "dark",
    primaryColor: configThemes.midnight.colors.primary["500"],
    backgroundColor: configThemes.midnight.colors.bg.base,
  },

  {
    name: "Rose",
    id: "rose",
    type: "light",
    primaryColor: configThemes.rose.colors.primary["500"],
    backgroundColor: configThemes.rose.colors.bg.base,
  },
  {
    name: "Dawn",
    id: "dawn",
    type: "dark",
    primaryColor: configThemes.dawn.colors.primary["500"],
    backgroundColor: configThemes.dawn.colors.bg.base,
  },

  {
    name: "Amber",
    id: "amber",
    type: "light",
    primaryColor: configThemes.amber.colors.primary["500"],
    backgroundColor: configThemes.amber.colors.bg.base,
  },
  {
    name: "Night",
    id: "night",
    type: "dark",
    primaryColor: configThemes.night.colors.primary["500"],
    backgroundColor: configThemes.night.colors.bg.base,
  },
];

export const configAvailableRadiuses = [
  { name: "none", value: "none" },
  { name: "sm", value: "0.125rem" },
  { name: "md", value: "0.375rem" },
  { name: "lg", value: "0.5rem" },
  { name: "xl", value: "0.75rem" },
  { name: "full", value: "3rem" },
];
