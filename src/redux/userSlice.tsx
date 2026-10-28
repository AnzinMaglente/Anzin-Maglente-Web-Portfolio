import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    emails: [],
    fullName: "",
    nickname: "",
    gender: "",
    region: "",
    language: "",
    timezone: "",
    allComments: [],
    allArticles: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTimezone: (state, action) => {
      state.timezone = action.payload;
    },
    setAllComments: (state, action) => {
      state.allComments = action.payload;
    },
    setAllArticles: (state, action) => {
      state.allArticles = action.payload;
    },
  },
});

export const {
  setUser,
  setEmails,
  setFullName,
  setNickname,
  setGender,
  setRegion,
  setLanguage,
  setTimezone,
  setAllComments,
  setAllArticles,
} = usersSlice.actions;
export default usersSlice.reducer;
