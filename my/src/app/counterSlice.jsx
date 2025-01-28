import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, // Initial state
  data : false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state) => {
    state.data = true;
      
    },

  },
});

export const { add } = counterSlice.actions;

export default counterSlice.reducer;