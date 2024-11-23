// src/utils/shareToken.js
/**
 * Generate a share token containing both characters' outfit data
 */
export const generateShareToken = (outfits) => {
    return btoa(JSON.stringify(outfits));
  };
  
  /**
   * Decode a share token back into outfit configurations
   */
  export const decodeShareToken = (token) => {
    try {
      return JSON.parse(atob(token));
    } catch (error) {
      console.error('Invalid share token:', error);
      return null;
    }
  };
  
  /**
   * Generate a complete share URL
   */
  export const generateShareUrl = (outfits) => {
    const token = generateShareToken(outfits);
    return `${window.location.origin}/share?outfit=${token}`;
};