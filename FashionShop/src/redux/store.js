/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './reducer/userReducer';
import {persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { cartReducer } from './reducer/cartReducer';
import useLogout from '../hooks/useLogout';
import { addressReducer } from './reducer/addressReducer';

const appReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  address: addressReducer,
});

const rootReducer = (state, action) => {
  if (action.type === useLogout) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 128
      },
    }),
});

export const persistor = persistStore(store);
