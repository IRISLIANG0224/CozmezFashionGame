export const generateShareToken = (state) => {
  const shareData = {
    k: {
      m: state.KNT.mood,
      o: { ...state.KNT }
    },
    n: {
      m: state.NYT.mood,
      o: { ...state.NYT }
    }
  };
  
  delete shareData.k.o.mood;
  delete shareData.n.o.mood;

  const compressedData = JSON.stringify(shareData);
  return btoa(compressedData)
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

export const parseShareToken = (token) => {
  try {
    token = token.replace(/-/g, '+').replace(/_/g, '/');
    while (token.length % 4) token += '=';
    
    const decodedData = JSON.parse(atob(token));

    return {
      KNT: {
        ...decodedData.k.o,
        mood: decodedData.k.m || 'Default'
      },
      NYT: {
        ...decodedData.n.o,
        mood: decodedData.n.m || 'Default'
      },
      KNTMood: decodedData.k.m || 'Default',
      NYTMood: decodedData.n.m || 'Default'
    };
  } catch (error) {
    console.error('Invalid share token:', error);
    return null;
  }
};

export const generateShareUrl = (state) => {
  const token = generateShareToken(state);
  return `${window.location.origin}/share?outfit=${token}`;
};