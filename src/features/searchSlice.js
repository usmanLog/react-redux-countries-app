import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "search/fetchCountries",
  async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    originalData: [],
    data: [],
    word: null,
    category: null,
  },
  reducers: {
    searchCountry: (state, action) => {
      state.word = action.payload.name;
      state.data = [...state.originalData].filter((country) =>
        country.name.toLowerCase().includes(state.word.toLowerCase())
      );
    },
    searchByCategory: (state, action) => {
      state.category = action.payload.word;
      state.data = [...state.originalData].filter(
        (country) => country.region === state.category
      );
    },
  },

  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      state.originalData = action.payload;
      if (!state.word && !state.category) {
        state.data = [...state.originalData];
      }
    },
  },
});

export const { searchCountry, searchByCategory } = searchSlice.actions;

export default searchSlice.reducer;
