import { configureStore, createSlice } from '@reduxjs/toolkit';


const teklifSlice = createSlice({
  name: 'teklif',
  initialState: {
    selectedTeklif: null,
  },
  reducers: {
    setTeklif: (state, action) => {
      state.selectedTeklif = action.payload;
    },
  },
});

export const { setTeklif } = teklifSlice.actions;

const store = configureStore({
  reducer: {
    teklif: teklifSlice.reducer,
    
  },
});

export default store;
