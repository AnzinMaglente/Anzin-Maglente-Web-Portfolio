import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: { loader: false },
  reducers: {
    showLoader: (state: any) => {
      state.loader = true;
    },
    hideLoader: (state: any) => {
      state.loader = false;
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
