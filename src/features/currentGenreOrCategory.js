import { createSlice } from "@reduxjs/toolkit";

// A piece from the whole 'store' that separates or contain the movie genres & categories
export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  // the reducer that connects to our 'store' and provides logic of what to do
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
    },
  },
});

// an automatic action creator that we can export to use with other components
export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
