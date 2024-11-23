/**
 * Outfit management slice
 * Handles all state changes related to character outfits
 */
import { createSlice } from '@reduxjs/toolkit';
import { CHARACTERS } from '../constants';

/**
 * Initial state for a single character's outfit
 * '0' represents no item equipped in that slot
 */
const initialOutfit = {
  hat: '0',
  chain1: '0',
  chain2: '0',
  choker: '0',
  inner: '0',
  top: '0',
  middleCoat: '0',
  outerCoat: '0',
  lower: '0',
  socks: '0',
  shoes: '0'
};

/**
 * Complete initial state for the outfit slice
 * Includes outfit data for both characters
 */
const initialState = {
  currentCharacter: CHARACTERS.KNT,
  KNT: { ...initialOutfit },
  NYT: { ...initialOutfit }
};

/**
 * Create the outfit slice with reducers
 */
const outfitSlice = createSlice({
  name: 'outfit',
  initialState,
  reducers: {
    /**
     * Sets a clothing item in a specific slot for the current character
     * @param {Object} state - Current Redux state
     * @param {Object} action - Action with payload containing slot and itemId
     */
    setClothingItem(state, action) {
      const { slot, itemId } = action.payload;
      state[state.currentCharacter][slot] = itemId;
    },

    /**
     * Clears all clothing items from the current character
     * @param {Object} state - Current Redux state
     */
    clearOutfit(state) {
      state[state.currentCharacter] = { ...initialOutfit };
    },

    /**
     * Switches the current character
     * @param {Object} state - Current Redux state
     * @param {Object} action - Action with payload containing character identifier
     */
    switchCharacter(state, action) {
      state.currentCharacter = action.payload;
    }
  }
});

// Export actions and reducer
export const { 
  setClothingItem, 
  clearOutfit, 
  switchCharacter 
} = outfitSlice.actions;

export default outfitSlice.reducer;