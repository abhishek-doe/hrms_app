import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, serial: 1, name: "Diwali", date: "02-03-2000", description: "Festival of lights" },
  { id: 2, serial: 2, name: "Holy", date: "03-02-2020", description: "Festival of Colors" }
];

export const holidaySlice = createSlice({
  name: "holidaySlice",
  initialState,
  reducers: {
    holiday: (state, action) => {
      state.push(action.payload);
      // serial += 1;
    },
  },
});

export const { holiday } = holidaySlice.actions;
export default holidaySlice.reducer;
