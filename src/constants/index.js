/**
 * Define clothing categories available in the game
 */
export const CLOTHING_TYPES = {
    TOPS: 'tops',
    LOWERS: 'lowers',
    FOOTWEAR: 'footwear',
    ACCESSORIES: 'accessories'
  };
  
  /**
   * Define available characters in the game
   */
  export const CHARACTERS = {
    KNT: 'KNT',
    NYT: 'NYT'
};

/**
 * Map clothing types to their respective slots in the outfit state
 */
export const TYPE_TO_SLOT_MAP = {
  tops: ['inner', 'top', 'middleCoat', 'outerCoat'],
  lowers: ['lower'],
  footwear: ['socks', 'shoes'],
  accessories: ['hat', 'chain1', 'chain2', 'choker']
};
