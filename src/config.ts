import { config as customConfig } from "../config.ts";

type DefaultConfig = {
  inputDir: string;
  outputDir: string;
  charset: string[];
  maxImageCount: number;
  maxImageSize: number;
  heightScale: 1 | 2 | 3;
  allowFileTypes: string[];
};

const defaultConfig: DefaultConfig = {
  inputDir: "./input",
  outputDir: "./output",
  charset: [
    "@",
    "&",
    "#",
    "$",
    "¥",
    "/",
    "?",
    "!",
    "|",
    "*",
    "+",
    "-",
    ",",
    ".",
    " ",
  ],
  maxImageCount: 10,
  maxImageSize: 100,
  heightScale: 2,
  allowFileTypes: [".png", ".jpg", ".jpeg"],
};

export const config = { ...defaultConfig, ...customConfig };

export type Config = Partial<Omit<DefaultConfig, "allowFileTypes">>;
