import jwt from 'jsonwebtoken';

const JWT_TOKEN_NAME = 'buggodie-ready-to-rent-token';
const USER_EMAIL = 'email';

export const getToken = () => localStorage.getItem(JWT_TOKEN_NAME);
export const getUserEmail = () => localStorage.getItem(USER_EMAIL);

export const setToken = (token) => localStorage.setItem(JWT_TOKEN_NAME, token);
export const setUserEmail = (email) => localStorage.setItem(USER_EMAIL, email);

export const removeToken = () => localStorage.removeItem(JWT_TOKEN_NAME);
export const removeUserEmail = () => localStorage.removeItem(USER_EMAIL);

export const isLoggedIn = () => {
  const token = localStorage.getItem(JWT_TOKEN_NAME);
  if (!token) return false;

  const decodedToken = jwt.decode(token);
  const expirationTime = decodedToken.exp * 1000;
  const isExpired = Date.now() - expirationTime > 0;
  return !isExpired;
};

export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return false;

  const decodedToken = jwt.decode(token);
  return decodedToken.user;
};
