import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    title: "",
    description: "",
    imageID: "",
    tag: "",
    likes: 0,
    comments: "",
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setimageID: (state, action) => {
      state.imageID = action.payload;
    },
    setTag: (state, action) => {
      state.tag = action.payload;
    },
    setLikes: (state, action) => {
      state.likes = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const {
  setTitle,
  setDescription,
  setimageID,
  setTag,
  setLikes,
  setComments,
} = articleSlice.actions;
export default articleSlice.reducer;
