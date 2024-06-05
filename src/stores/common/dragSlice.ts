import { createSlice } from '@reduxjs/toolkit';

export const dragSlice = createSlice({
  name: 'drag',
  initialState: {},
  reducers: {
    setComponents: function () {}
  }
});

export const { setComponents } = dragSlice.actions;

export default dragSlice.reducer;
