import { createSlice } from "@reduxjs/toolkit";

export type Theme = "system" | "dark" | "light";

const initialState: Theme = "dark" as Theme;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (_, { payload }) => {
      return payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
