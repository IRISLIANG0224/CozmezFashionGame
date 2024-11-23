import {
  CLOTHING_TYPES,
  CHARACTERS,
  TYPE_TO_SLOT_MAP,
  Z_INDEX,
  DEFAULT_POSITIONS,
} from "../constants";

/**
 * KNT Clo (Main) Images
 */
// Bottoms
import KNTBottom01 from "../assets/img/Game/KNT/Clo/Bottom_01.png";
import KNTBottom02 from "../assets/img/Game/KNT/Clo/Bottom_02.png";
import KNTBottom03 from "../assets/img/Game/KNT/Clo/Bottom_03.png";
// Chain
import KNTChain1 from "../assets/img/Game/KNT/Clo/Chain_1.png";
import KNTChain2 from "../assets/img/Game/KNT/Clo/Chain_02.png";
// Choker
import KNTChoker01 from "../assets/img/Game/KNT/Clo/Choker_01.png";
// Coats
import KNTCoat01Top from "../assets/img/Game/KNT/Clo/Coat_01_Top.png";
// Hats
import KNTHat01 from "../assets/img/Game/KNT/Clo/Hat_01.png";
import KNTHat02 from "../assets/img/Game/KNT/Clo/Hat_02.png";
// Inner
import KNTInnerTop03 from "../assets/img/Game/KNT/Clo/Inner_Top_03.png";
// Middle Coat
import KNTMiddleCoat01Top from "../assets/img/Game/KNT/Clo/Middle_Coat_01_Top.png";
// Outer Coat
import KNTOutterCoat01Top from "../assets/img/Game/KNT/Clo/Outter_Coat_01_Top.png";
// Shoes
import KNTShoes01 from "../assets/img/Game/KNT/Clo/Shoes_01.png";
import KNTShoes02 from "../assets/img/Game/KNT/Clo/Shoes_02.png";
import KNTShoes03 from "../assets/img/Game/KNT/Clo/Shoes_03.png";
// Tops
import KNTTop01 from "../assets/img/Game/KNT/Clo/Top_01.png";
import KNTTop02 from "../assets/img/Game/KNT/Clo/Top_02.png";
import KNTTop03 from "../assets/img/Game/KNT/Clo/Top_03.png";

/**
 * KNT Base (Coat) Images
 */
import KNTCoat01Base from "../assets/img/Game/KNT/Coat/Coat_01.png";
import KNTMiddleCoat01Base from "../assets/img/Game/KNT/Coat/Middle_Coat_01.png";
import KNTOutterCoat01Base from "../assets/img/Game/KNT/Coat/Outter_Coat_01.png";
import KNTTop02Base from "../assets/img/Game/KNT/Coat/Top_02.png";

/**
 * KNT UI Images
 */
// Bottoms UI
import KNTBottom01UI from "../assets/img/Game/KNT/UI/Bottom_01.png";
import KNTBottom02UI from "../assets/img/Game/KNT/UI/Bottom_02.png";
import KNTBottom03UI from "../assets/img/Game/KNT/UI/Bottom_03.png";
// Chain UI
import KNTChain1UI from "../assets/img/Game/KNT/UI/Chain_1.png";
import KNTChain2UI from "../assets/img/Game/KNT/UI/Chain_02.png";
// Choker UI
import KNTChoker01UI from "../assets/img/Game/KNT/UI/Choker_01.png";
// Coats UI
import KNTCoat01UI from "../assets/img/Game/KNT/UI/Coat_01.png";
// Hats UI
import KNTHat01UI from "../assets/img/Game/KNT/UI/Hat_01.png";
import KNTHat02UI from "../assets/img/Game/KNT/UI/Hat_02.png";
// Inner UI
import KNTInnerTop03UI from "../assets/img/Game/KNT/UI/Inner_Top_03.png";
// Middle Coat UI
import KNTMiddleCoat01UI from "../assets/img/Game/KNT/UI/Middle_Coat_01.png";
// Outer Coat UI
import KNTOutterCoat01UI from "../assets/img/Game/KNT/UI/Outter_Coat_01.png";
// Shoes UI
import KNTShoes01UI from "../assets/img/Game/KNT/UI/Shoes_01.png";
import KNTShoes02UI from "../assets/img/Game/KNT/UI/Shoes_02.png";
import KNTShoes03UI from "../assets/img/Game/KNT/UI/Shoes_03.png";
// Tops UI
import KNTTop01UI from "../assets/img/Game/KNT/UI/Top_01.png";
import KNTTop02UI from "../assets/img/Game/KNT/UI/Top_02.png";
import KNTTop03UI from "../assets/img/Game/KNT/UI/Top_03.png";

/**
 * NYT Clo (Main) Images
 */
// Bottoms
import NYTBottom1 from "../assets/img/Game/NYT/Clo/Bottom_1.png";
import NYTBottom2 from "../assets/img/Game/NYT/Clo/Bottom_2.png";
import NYTBottom3 from "../assets/img/Game/NYT/Clo/Bottom_3.png";
// Chains
import NYTChain1 from "../assets/img/Game/NYT/Clo/Chain_1.png";
import NYTChain2 from "../assets/img/Game/NYT/Clo/Chain_2.png";
// Choker
import NYTChoker1 from "../assets/img/Game/NYT/Clo/Choker_1.png";
// Coats
import NYTCoat1Top from "../assets/img/Game/NYT/Clo/Coat_1_Top.png";
import NYTCoat2 from "../assets/img/Game/NYT/Clo/Coat_2.png";
// Hat
import NYTHat1 from "../assets/img/Game/NYT/Clo/Hat_1.png";
// Middle Coat
import NYTMiddleCoat1Top from "../assets/img/Game/NYT/Clo/Middle_Coat_1_Top.png";
// Outer Coat
import NYTOuterCoat1Top from "../assets/img/Game/NYT/Clo/Outer_Coat_1_Top.png";
// Shoes
import NYTShoes01 from "../assets/img/Game/NYT/Clo/Shoes_01.png";
import NYTShoes02 from "../assets/img/Game/NYT/Clo/Shoes_02.png";
import NYTShoes03 from "../assets/img/Game/NYT/Clo/Shoes_03.png";
// Socks
import NYTSocks1 from "../assets/img/Game/NYT/Clo/Socks_1.png";
import NYTSocks2 from "../assets/img/Game/NYT/Clo/Socks_2.png";
// Tops
import NYTTop1 from "../assets/img/Game/NYT/Clo/Top_1.png";
import NYTTop2 from "../assets/img/Game/NYT/Clo/Top_2.png";
import NYTTop3 from "../assets/img/Game/NYT/Clo/Top_3.png";

/**
 * NYT Base (Coat) Images
 */
import NYTCoat1Base from "../assets/img/Game/NYT/Coat/Coat_1.png";
import NYTCoat2Base from "../assets/img/Game/NYT/Coat/Coat_2.png";
import NYTMiddleCoat1Base from "../assets/img/Game/NYT/Coat/Middle_Coat_1.png";
import NYTOuterCoat1Base from "../assets/img/Game/NYT/Coat/Outer_Coat_1.png";

/**
 * NYT UI Images
 */
// Bottoms UI
import NYTBottom1UI from "../assets/img/Game/NYT/UI/Bottom_1.png";
import NYTBottom2UI from "../assets/img/Game/NYT/UI/Bottom_2.png";
import NYTBottom3UI from "../assets/img/Game/NYT/UI/Bottom_3.png";
// Chains UI
import NYTChain1UI from "../assets/img/Game/NYT/UI/Chain_1.png";
import NYTChain2UI from "../assets/img/Game/NYT/UI/Chain_2.png";
// Choker UI
import NYTChoker1UI from "../assets/img/Game/NYT/UI/Choker_1.png";
// Coats UI
import NYTCoat1UI from "../assets/img/Game/NYT/UI/Coat_1.png";
import NYTCoat2UI from "../assets/img/Game/NYT/UI/Coat_2.png";
// Hat UI
import NYTHat1UI from "../assets/img/Game/NYT/UI/Hat_1.png";
// Middle Coat UI
import NYTMiddleCoat1UI from "../assets/img/Game/NYT/UI/Middle_Coat_1.png";
// Outer Coat UI
import NYTOuterCoat1UI from "../assets/img/Game/NYT/UI/Outer_Coat_1.png";
// Shoes UI
import NYTShoes01UI from "../assets/img/Game/NYT/UI/Shoes_01.png";
import NYTShoes02UI from "../assets/img/Game/NYT/UI/Shoes_02.png";
import NYTShoes03UI from "../assets/img/Game/NYT/UI/Shoes_03.png";
// Socks UI
import NYTSocks1UI from "../assets/img/Game/NYT/UI/Socks_1.png";
import NYTSocks2UI from "../assets/img/Game/NYT/UI/Socks_2.png";
// Tops UI
import NYTTop1UI from "../assets/img/Game/NYT/UI/Top_1.png";
import NYTTop2UI from "../assets/img/Game/NYT/UI/Top_2.png";
import NYTTop3UI from "../assets/img/Game/NYT/UI/Top_3.png";

export const NYT_CLOTHING_ITEMS = [
  // NYT Bottoms
  {
    id: "NB001",
    type: CLOTHING_TYPES.LOWERS,
    character: CHARACTERS.NYT,
    name: "Bottom 1",
    slot: "lower",
    uiImage: NYTBottom1UI,
    mainImage: NYTBottom1,
    position: { x: 95, y: 246, zIndex: 5 },
  },
  {
    id: "NB002",
    type: CLOTHING_TYPES.LOWERS,
    character: CHARACTERS.NYT,
    name: "Bottom 2",
    slot: "lower",
    uiImage: NYTBottom2UI,
    mainImage: NYTBottom2,
    position: { x: 30, y: 224, zIndex: 5 },
  },
  {
    id: "NB003",
    type: CLOTHING_TYPES.LOWERS,
    character: CHARACTERS.NYT,
    name: "Bottom 3",
    slot: "lower",
    uiImage: NYTBottom3UI,
    mainImage: NYTBottom3,
    position: { x: 100, y: 240, zIndex: 5 },
  },

  // NYT Chains
  {
    id: "NC001",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.NYT,
    name: "Chain 1",
    slot: "chain1",
    uiImage: NYTChain1UI,
    mainImage: NYTChain1,
    position: { x: 157, y: 89, zIndex: 20 },
  },
  {
    id: "NC002",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.NYT,
    name: "Chain 2",
    slot: "chain2",
    uiImage: NYTChain2UI,
    mainImage: NYTChain2,
    position: { x: 153, y: 86, zIndex: 20 },
  },

  // NYT Choker
  {
    id: "NCH001",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.NYT,
    name: "Choker 1",
    slot: "choker",
    uiImage: NYTChoker1UI,
    mainImage: NYTChoker1,
    position: { x: 170, y: 100, zIndex: 19 },
  },

  // NYT Hat
  {
    id: "NH001",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.NYT,
    name: "Hat 1",
    slot: "hat",
    uiImage: NYTHat1UI,
    mainImage: NYTHat1,
    position: { x: 131, y: -15, zIndex: 25 },
  },

  // NYT Tops
  {
    id: "NT001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.NYT,
    name: "Top 1",
    slot: "top",
    uiImage: NYTTop1UI,
    mainImage: NYTTop1,
    position: { x: 70, y: 80, zIndex: 10 },
  },
  {
    id: "NT002",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.NYT,
    name: "Top 2",
    slot: "top",
    uiImage: NYTTop2UI,
    mainImage: NYTTop2,
    position: { x: 78, y: 76, zIndex: 10 },
  },
  {
    id: "NT003",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.NYT,
    name: "Top 3",
    slot: "top",
    uiImage: NYTTop3UI,
    mainImage: NYTTop3,
    position: { x: 94, y: 72, zIndex: 10 },
  },

  // NYT Coats with base layers
  {
    id: "NCT001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.NYT,
    name: "Coat 1",
    slot: "middleCoat",
    uiImage: NYTCoat1UI,
    mainImage: NYTCoat1Top,
    baseImage: NYTCoat1Base,
    position: { x: 27, y: 100, zIndex: 15 },
    basePosition: { x: 27, y: 100, zIndex: -1 },
  },
  {
    id: "NCT002",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.NYT,
    name: "Coat 2",
    slot: "middleCoat",
    uiImage: NYTCoat2UI,
    mainImage: NYTCoat2,
    baseImage: NYTCoat2Base,
    position: { x: 27, y: 28, zIndex: 30 },
    basePosition: { x: 27, y: 28, zIndex: -1 },
  },
  {
    id: "NMCT001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.NYT,
    name: "Middle Coat 1",
    slot: "middleCoat",
    uiImage: NYTMiddleCoat1UI,
    mainImage: NYTMiddleCoat1Top,
    baseImage: NYTMiddleCoat1Base,
    position: { x: 39, y: 90, zIndex: 13 },
    basePosition: { x: 39, y: 84, zIndex: -1 },
  },
  {
    id: "NOCT001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.NYT,
    name: "Outer Coat 1",
    slot: "outerCoat",
    uiImage: NYTOuterCoat1UI,
    mainImage: NYTOuterCoat1Top,
    baseImage: NYTOuterCoat1Base,
    position: { x: 0, y: 100, zIndex: 31 },
    basePosition: { x: 0, y: 100, zIndex: -1 },
  },

  // NYT Shoes
  {
    id: "NS001",
    type: CLOTHING_TYPES.FOOTWEAR,
    character: CHARACTERS.NYT,
    name: "Shoes 01",
    slot: "shoes",
    uiImage: NYTShoes01UI,
    mainImage: NYTShoes01,
    position: { x: 95, y: 546, zIndex: 2 },
  },
  {
    id: "NS002",
    type: CLOTHING_TYPES.FOOTWEAR,
    character: CHARACTERS.NYT,
    name: "Shoes 02",
    slot: "shoes",
    uiImage: NYTShoes02UI,
    mainImage: NYTShoes02,
    position: { x: 92, y: 582, zIndex: 2 },
  },
  {
    id: "NS003",
    type: CLOTHING_TYPES.FOOTWEAR,
    character: CHARACTERS.NYT,
    name: "Shoes 03",
    slot: "shoes",
    uiImage: NYTShoes03UI,
    mainImage: NYTShoes03,
    position: { x: 86, y: 559, zIndex: 2 },
  },

  // NYT Socks
  {
    id: "NSK001",
    type: CLOTHING_TYPES.FOOTWEAR,
    character: CHARACTERS.NYT,
    name: "Socks 1",
    slot: "socks",
    uiImage: NYTSocks1UI,
    mainImage: NYTSocks1,
    position: { x: 94, y: 437, zIndex: 1 },
  },
  {
    id: "NSK002",
    type: CLOTHING_TYPES.FOOTWEAR,
    character: CHARACTERS.NYT,
    name: "Socks 2",
    slot: "socks",
    uiImage: NYTSocks2UI,
    mainImage: NYTSocks2,
    position: { x: 95, y: 475, zIndex: 1 },
  },
];

export const KNT_CLOTHING_ITEMS = [
  // KNT Bottoms
  {
    id: "KB001",
    type: CLOTHING_TYPES.LOWERS,
    character: CHARACTERS.KNT,
    slot: "lower",
    name: "Bottom 01",
    uiImage: KNTBottom01UI,
    mainImage: KNTBottom01,
    position: { x: 20, y: 180, zIndex: 5 },
  },
  {
    id: "KB002",
    type: CLOTHING_TYPES.LOWERS,
    character: CHARACTERS.KNT,
    name: "Bottom 02",
    slot: "lower",
    uiImage: KNTBottom02UI,
    mainImage: KNTBottom02,
    position: { x: 61, y: 190, zIndex: 5 },
  },
  {
    id: "KB003",
    type: CLOTHING_TYPES.LOWERS,
    character: CHARACTERS.KNT,
    name: "Bottom 03",
    slot: "lower",
    uiImage: KNTBottom03UI,
    mainImage: KNTBottom03,
    position: { x: 95, y: 250, zIndex: 5 },
  },

  // KNT Chains
  {
    id: "KC001",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.KNT,
    name: "Chain 1",
    slot: "chain1",
    uiImage: KNTChain1UI,
    mainImage: KNTChain1,
    position: { x: 172, y: 89, zIndex: 20 },
  },
  {
    id: "KC002",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.KNT,
    name: "Chain 2",
    slot: "chain2",
    uiImage: KNTChain2UI,
    mainImage: KNTChain2,
    position: { x: 178, y: 75, zIndex: 20 },
  },

  // KNT Choker
  {
    id: "KCH001",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.KNT,
    name: "Choker 01",
    slot: "choker",
    uiImage: KNTChoker01UI,
    mainImage: KNTChoker01,
    position: { x: 187, y: 99, zIndex: 19 },
  },

  // KNT Hats
  {
    id: "KH001",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.KNT,
    name: "Hat 01",
    slot: "hat",
    uiImage: KNTHat01UI,
    mainImage: KNTHat01,
    position: { x: 151, y: -20, zIndex: 25 },
  },
  {
    id: "KH002",
    type: CLOTHING_TYPES.ACCESSORIES,
    character: CHARACTERS.KNT,
    name: "Hat 02",
    slot: "hat",
    uiImage: KNTHat02UI,
    mainImage: KNTHat02,
    position: { x: 148, y: 10, zIndex: 25 },
  },

  // KNT Inner Tops
  {
    id: "KIT003",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: "Inner Top 03",
    slot: "inner",
    uiImage: KNTInnerTop03UI,
    mainImage: KNTInnerTop03,
    position: { x: 84, y: 58, zIndex: 8 },
  },

  // KNT Tops with base layers
  {
    id: "KT001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: "Top 01",
    slot: "top",
    uiImage: KNTTop01UI,
    mainImage: KNTTop01,
    position: { x: 115, y: 62, zIndex: 10 },
  },
  {
    id: "KT002",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: "Top 02",
    slot: "top",
    uiImage: KNTTop02UI,
    mainImage: KNTTop02,
    baseImage: KNTTop02Base,
    position: { x: 24, y: 40, zIndex: 10 },
    basePosition: { x: 30, y: 40, zIndex: -1 },
  },
  {
    id: "KT003",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: "Top 03",
    slot: "top",
    uiImage: KNTTop03UI,
    mainImage: KNTTop03,
    position: { x: 74, y: 69, zIndex: 10 },
  },

  // KNT Coats with base layers
  {
    id: "KCT001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: "Coat 01",
    slot: "middleCoat",
    uiImage: KNTCoat01UI,
    mainImage: KNTCoat01Top,
    baseImage: KNTCoat01Base,
    position: { x: 30, y: 160, zIndex: 15 },
    basePosition: { x: 32, y: 140, zIndex: -1 },
  },
  {
    id: "KMCT001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: "Middle Coat 01",
    slot: "middleCoat",
    uiImage: KNTMiddleCoat01UI,
    mainImage: KNTMiddleCoat01Top,
    baseImage: KNTMiddleCoat01Base,
    position: { x: 17, y: 61, zIndex: 13 },
    basePosition: { x: 17, y: 61, zIndex: -20 },
  },
  {
    id: "KOCT001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: "Outer Coat 01",
    slot: "outerCoat",
    uiImage: KNTOutterCoat01UI,
    mainImage: KNTOutterCoat01Top,
    baseImage: KNTOutterCoat01Base,
    position: { x: -25, y: 60, zIndex: 17 },
    basePosition: { x: -25, y: 59, zIndex: -3 },
  },

  // KNT Shoes
  {
    id: "KS001",
    type: CLOTHING_TYPES.FOOTWEAR,
    character: CHARACTERS.KNT,
    name: "Shoes 01",
    slot: "shoes",
    uiImage: KNTShoes01UI,
    mainImage: KNTShoes01,
    position: { x: -9, y: 578, zIndex: 2 },
  },
  {
    id: "KS002",
    type: CLOTHING_TYPES.FOOTWEAR,
    character: CHARACTERS.KNT,
    name: "Shoes 02",
    slot: "shoes",
    uiImage: KNTShoes02UI,
    mainImage: KNTShoes02,
    position: { x: -2, y: 551, zIndex: 2 },
  },
  {
    id: "KS003",
    type: CLOTHING_TYPES.FOOTWEAR,
    character: CHARACTERS.KNT,
    name: "Shoes 03",
    slot: "shoes",
    uiImage: KNTShoes03UI,
    mainImage: KNTShoes03,
    position: { x: -5, y: 526, zIndex: 2 },
  },
];

/**
 * Combine all clothing items
 */
export const CLOTHING_ITEMS = [...KNT_CLOTHING_ITEMS, ...NYT_CLOTHING_ITEMS];

/**
 * Helper functions for item management
 */
export const getItemsByType = (type, character) =>
  CLOTHING_ITEMS.filter(
    (item) => item.type === type && item.character === character
  );

export const getItemById = (id) =>
  CLOTHING_ITEMS.find((item) => item.id === id);

/**
 * Get items for specific slots
 */
export const getItemsBySlot = (slot, character) =>
  CLOTHING_ITEMS.filter(
    (item) => item.slot === slot && item.character === character
  );

/**
 * Pre-filtered collections for easy access
 */
export const KNT_TOPS = getItemsByType(CLOTHING_TYPES.TOPS, CHARACTERS.KNT);
export const KNT_LOWERS = getItemsByType(CLOTHING_TYPES.LOWERS, CHARACTERS.KNT);
export const KNT_FOOTWEAR = getItemsByType(
  CLOTHING_TYPES.FOOTWEAR,
  CHARACTERS.KNT
);
export const KNT_ACCESSORIES = getItemsByType(
  CLOTHING_TYPES.ACCESSORIES,
  CHARACTERS.KNT
);

export const NYT_TOPS = getItemsByType(CLOTHING_TYPES.TOPS, CHARACTERS.NYT);
export const KNT_HATS = getItemsBySlot("hat", CHARACTERS.KNT);
export const KNT_CHAINS = [
  ...getItemsBySlot("chain1", CHARACTERS.KNT),
  ...getItemsBySlot("chain2", CHARACTERS.KNT),
];
export const KNT_CHOKERS = getItemsBySlot("choker", CHARACTERS.KNT);
export const KNT_INNER_TOPS = getItemsBySlot("inner", CHARACTERS.KNT);
export const KNT_OUTER_COATS = getItemsBySlot("outerCoat", CHARACTERS.KNT);
export const KNT_MIDDLE_COATS = getItemsBySlot("middleCoat", CHARACTERS.KNT);

export const NYT_HATS = getItemsBySlot("hat", CHARACTERS.NYT);
export const NYT_CHAINS = [
  ...getItemsBySlot("chain1", CHARACTERS.NYT),
  ...getItemsBySlot("chain2", CHARACTERS.NYT),
];
export const NYT_CHOKERS = getItemsBySlot("choker", CHARACTERS.NYT);
export const NYT_SOCKS = getItemsBySlot("socks", CHARACTERS.NYT);
export const NYT_OUTER_COATS = getItemsBySlot("outerCoat", CHARACTERS.NYT);
export const NYT_MIDDLE_COATS = getItemsBySlot("middleCoat", CHARACTERS.NYT);

/**
 * Layer order for rendering clothes
 */
export const LAYER_ORDER = [
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
 * Additional utility functions
 */
export const getBaseItem = (item) => {
  if (!item) return null;
  if (!item.baseImage) return null;

  return {
    ...item,
    mainImage: item.baseImage,
    position: item.basePosition || item.position,
  };
};

/**
 * Get items with their base layers
 */
export const getItemWithBase = (id) => {
  const item = getItemById(id);
  if (!item) return [];

  const result = [];
  const baseItem = getBaseItem(item);
  if (baseItem) {
    result.push(baseItem);
  }
  result.push(item);

  return result;
};

/**
 * Get all items for a character
 */
export const getCharacterItems = (character) =>
  CLOTHING_ITEMS.filter((item) => item.character === character);

/**
 * Get next available slot for a type
 */
export const getAvailableSlot = (type, currentOutfit) => {
  const slots = TYPE_TO_SLOT_MAP[type];
  if (!slots) return null;

  return slots.find((slot) => currentOutfit[slot] === "0") || slots[0];
};

/**
 * Validate if an item can be equipped in current outfit
 */
export const canEquipItem = (item, currentOutfit) => {
  if (!item || !item.slot) return false;

  // Check if the slot is available or already contains this item
  return (
    currentOutfit[item.slot] === "0" || currentOutfit[item.slot] === item.id
  );
};

/**
 * Get conflicting items when trying to equip an item
 */
export const getConflictingItems = (item, currentOutfit) => {
  if (!item || !item.slot) return [];

  return Object.entries(currentOutfit)
    .filter(([slot, itemId]) => {
      if (itemId === "0") return false;
      const existingItem = getItemById(itemId);
      return existingItem && existingItem.slot === item.slot;
    })
    .map(([_, itemId]) => getItemById(itemId));
};

export default CLOTHING_ITEMS;
