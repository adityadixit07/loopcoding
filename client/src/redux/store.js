import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";
import adminSlice from "./adminSlice";
import courseSlice from "./courseSlice";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userSlice),
    admin: persistReducer(persistConfig, adminSlice),
    courses: persistReducer(persistConfig, courseSlice),
    // user: userReducer,
    // course: courseReducer,
    // blog: blogReducer,
    // instructor: instructorReducer,
    // contact: contactReducer,
  },
});

export const persistor = persistStore(store);
