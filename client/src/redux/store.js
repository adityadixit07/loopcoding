import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";
import adminSlice from "./adminSlice";
import courseSlice from "./courseSlice";
import alertSlice from "./alertSlice";
const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userSlice),
    admin: persistReducer(persistConfig, adminSlice),
    courses: persistReducer(persistConfig, courseSlice),
    alerts: alertSlice.reducer,
  },
});

export const persistor = persistStore(store);
