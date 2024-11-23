/**
 * Reusable selectors for accessing outfit state
 * Using selectors helps with performance and code organization
 */

/**
 * Selects the current character's complete outfit
 * @param {Object} state - Redux state
 * @returns {Object} Current character's outfit configuration
 */
export const selectCurrentOutfit = state => 
    state.outfit[state.outfit.currentCharacter];
  
  /**
   * Selects a specific item from the current character's outfit
   * @param {Object} state - Redux state
   * @param {string} slot - Slot name to select
   * @returns {string} Item ID in the specified slot
   */
  export const selectOutfitItem = (state, slot) => 
    state.outfit[state.outfit.currentCharacter][slot];