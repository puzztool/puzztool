import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createRootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const configurePuzzToolStore = () => {
  const rootReducer = createRootReducer();
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions for "redux-persist"
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

  let persistor = persistStore(store);

  return { store, persistor };
};

export default configurePuzzToolStore;
