/**
 * Outfit management slice
 * Handles all state changes related to character outfits and moods
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
 * Includes outfit data and moods for both characters
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
     * Sets the mood for a specific character
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
     * Loads outfit and mood data from a share token
     * @param {Object} state - Current Redux state
     * @param {Object} action - Action with payload containing outfit and mood data
     */
    loadOutfitFromToken(state, action) {
      const { KNT, NYT } = action.payload;
      
      if (KNT) {
        // Load KNT outfit data
        Object.keys(initialOutfit).forEach(slot => {
          state.KNT[slot] = KNT[slot] || '0';
        });
        state.KNTMood = KNT.mood || 'Default';
      }
      
      if (NYT) {
        // Load NYT outfit data
        Object.keys(initialOutfit).forEach(slot => {
          state.NYT[slot] = NYT[slot] || '0';
        });
        state.NYTMood = NYT.mood || 'Default';
      }
    },

    /**
     * Clears all outfits and resets moods to default
     * @param {Object} state - Current Redux state
     */
    clearAll(state) {
      state.KNT = { ...initialOutfit };
      state.NYT = { ...initialOutfit };
      state.KNTMood = 'Default';
      state.NYTMood = 'Default';
    }
  }
});

// Export actions and reducer
export const {
  setClothingItem,
  clearOutfit,
  switchCharacter,
  setMood,
  loadOutfitFromToken,
  clearAll
} = outfitSlice.actions;

export default outfitSlice.reducer;