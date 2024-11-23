// src/constants/index.js

/**
 * Define clothing categories
 */
export const CLOTHING_TYPES = {
  TOPS: "tops",
  LOWERS: "lowers",
  FOOTWEAR: "footwear",
  ACCESSORIES: "accessories",
};

/**
 * Define available characters
 */
export const CHARACTERS = {
  KNT: "KNT",
  NYT: "NYT",
};

/**
 * Map clothing types to their possible slots
 * This defines which slots can hold which types of items
 */
export const TYPE_TO_SLOT_MAP = {
  tops: ["inner", "top", "middleCoat", "outerCoat"],
  lowers: ["lower"],
  footwear: ["socks", "shoes"],
  accessories: ["hat", "chain1", "chain2", "choker"],
};

/**
 * Define slots render order from bottom to top
 */
export const SLOT_ORDER = [
  "socks",
  "inner",
  "lower",
  "top",
  "middleCoat",
  "outerCoat",
  "shoes",
  "chain1",
  "chain2",
  "choker",
  "hat",
];

/**
 * Define initial outfit state
 */
export const INITIAL_OUTFIT = {
  hat: "0",
  chain1: "0",
  chain2: "0",
  choker: "0",
  inner: "0",
  top: "0",
  middleCoat: "0",
  outerCoat: "0",
  lower: "0",
  socks: "0",
  shoes: "0",
};

/**
 * Z-index ranges for different clothing layers
 */
export const Z_INDEX = {
  BASE: {
    socks: 1,
    inner: 3,
    lower: 5,
    top: 7,
    middleCoat: 9,
    outerCoat: 11,
    shoes: 13,
    chain1: 15,
    chain2: 16,
    choker: 17,
    hat: 19,
  },
  MAIN: {
    socks: 2,
    inner: 4,
    lower: 6,
    top: 8,
    middleCoat: 10,
    outerCoat: 12,
    shoes: 14,
    chain1: 15,
    chain2: 16,
    choker: 18,
    hat: 20,
  },
};

/**
 * Default positions for different clothing types
 */
export const DEFAULT_POSITIONS = {
  hat: { x: 100, y: 50 },
  chain1: { x: 100, y: 150 },
  chain2: { x: 100, y: 150 },
  choker: { x: 100, y: 130 },
  inner: { x: 100, y: 150 },
  top: { x: 100, y: 150 },
  middleCoat: { x: 100, y: 150 },
  outerCoat: { x: 100, y: 150 },
  lower: { x: 20, y: 180 },
  socks: { x: 100, y: 450 },
  shoes: { x: -9, y: 578 },
};

/**
 * Game step configurations
 */
export const GAME_STEPS = {
  KNT: 1,
  NYT: 2,
  TOTAL: 2,
};

// export default {
//   CLOTHING_TYPES,
//   CHARACTERS,
//   TYPE_TO_SLOT_MAP,
//   SLOT_ORDER,
//   INITIAL_OUTFIT,
//   Z_INDEX,
//   DEFAULT_POSITIONS,
//   GAME_STEPS
// };
