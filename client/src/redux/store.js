import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig,userSlice),
    // user: userReducer,
    // course: courseReducer,
    // blog: blogReducer,
    // instructor: instructorReducer,
    // contact: contactReducer,
  },
});

export const persistor = persistStore(store);
