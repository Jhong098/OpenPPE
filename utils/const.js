import { getReactSelectOptions } from "./util";

export const DEFAULT_CATEGORIES = [
  "Surgical",
  "Ventilator",
  "Mask",
  "Gloves",
  "Eyes",
];

export const DEFAULT_SIZES = ["S", "M", "L"];

export const CATEGORY_OPTIONS = getReactSelectOptions(DEFAULT_CATEGORIES);

export const SIZE_OPTIONS = getReactSelectOptions(DEFAULT_SIZES);
