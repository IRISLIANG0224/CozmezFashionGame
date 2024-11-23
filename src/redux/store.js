import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import outfitReducer from './outfitSlice';

/**
 * Redux persist configuration
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['outfit'] // Only persist outfit state
};

/**
 * Create persisted reducer
 */
const persistedReducer = persistReducer(persistConfig, outfitReducer);

/**
 * Configure store with persisted reducer
 */
const store = configureStore({
  reducer: {
    outfit: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;