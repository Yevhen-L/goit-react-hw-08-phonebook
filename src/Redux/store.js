import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Визначте loggerMiddleware або видаліть його, якщо вам не потрібен
const loggerMiddleware = store => next => action => {
  const result = next(action);
  return result;
};

// Виправте ім'я змінної на persistedContactsReducer
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Зміни тут
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: ['persist/PERSIST'],
    },
  }).concat(loggerMiddleware), // Додайте loggerMiddleware, якщо вам він потрібен
});

export const persistor = persistStore(store);

export default store;
