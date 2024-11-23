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
  NYT: { ...initialOutfit },
  KNTMood: 'Default',
  NYTMood: 'Default'
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
    },

    /**
     * Sets mood for a character
     * @param {Object} state - Current Redux state
     * @param {Object} action - Action with payload containing character and mood
     */
    setMood(state, action) {
      const { character, mood } = action.payload;
      if (character === CHARACTERS.KNT) {
        state.KNTMood = mood;
      } else if (character === CHARACTERS.NYT) {
        state.NYTMood = mood;
      }
    },

    /**
     * Loads outfit data from a share token
     * @param {Object} state - Current Redux state
     * @param {Object} action - Action with payload containing outfit data for both characters
     */
    loadOutfitFromToken(state, action) {
      const { KNT, NYT } = action.payload;
      
      // Load KNT data
      if (KNT) {
        Object.keys(initialOutfit).forEach(slot => {
          if (KNT[slot]) {
            state.KNT[slot] = KNT[slot];
          }
        });
        if (KNT.mood) {
          state.KNTMood = KNT.mood;
        }
      }

      // Load NYT data
      if (NYT) {
        Object.keys(initialOutfit).forEach(slot => {
          if (NYT[slot]) {
            state.NYT[slot] = NYT[slot];
          }
        });
        if (NYT.mood) {
          state.NYTMood = NYT.mood;
        }
      }
    }
  }
});

export const {
  setClothingItem,
  clearOutfit,
  switchCharacter,
  setMood,
  loadOutfitFromToken
} = outfitSlice.actions;

export default outfitSlice.reducer;