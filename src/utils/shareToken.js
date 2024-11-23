/**
 * Share token utilities for outfit and mood sharing
 */

/**
 * Generate a share token containing both characters' outfit and mood data
 * @param {Object} state - Current Redux state for outfits and moods
 * @returns {string} Base64 encoded token
 */
export const generateShareToken = (state) => {
  // Extract relevant data from state
  const shareData = {
    KNT: {
      ...state.KNT,
      mood: state.KNTMood
    },
    NYT: {
      ...state.NYT,
      mood: state.NYTMood
    }
  };

  return btoa(JSON.stringify(shareData));
};

/**
 * Parse a share token back into outfit and mood configurations
 * @param {string} token - Base64 encoded share token
 * @returns {Object|null} Decoded outfit and mood data or null if invalid
 */
export const parseShareToken = (token) => {
  try {
    const decodedData = JSON.parse(atob(token));

    // Validate data structure
    if (!decodedData.KNT || !decodedData.NYT) {
      throw new Error('Invalid data structure');
    }

    // Extract moods and outfits
    const outfitData = {
      KNT: {
        ...decodedData.KNT,
        mood: decodedData.KNT.mood || 'Default'
      },
      NYT: {
        ...decodedData.NYT,
        mood: decodedData.NYT.mood || 'Default'
      }
    };

    return outfitData;
  } catch (error) {
    console.error('Invalid share token:', error);
    return null;
  }
};

/**
 * Generate a complete share URL with outfit and mood data
 * @param {Object} state - Current Redux state for outfits and moods
 * @returns {string} Complete share URL
 */
export const generateShareUrl = (state) => {
  const token = generateShareToken(state);
  return `${window.location.origin}/share?outfit=${encodeURIComponent(token)}`;
};