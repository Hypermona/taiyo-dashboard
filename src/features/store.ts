import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";
import { useDispatch } from "react-redux";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
  contact: contactSlice,
  theme: themeSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
