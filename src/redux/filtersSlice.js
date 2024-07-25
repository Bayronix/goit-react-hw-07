import { createSlice } from "@reduxjs/toolkit";

export const selectFilteredContacts = (state) => state.contacts.items;

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setQuery } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filter.name;

export default filtersSlice.reducer;
