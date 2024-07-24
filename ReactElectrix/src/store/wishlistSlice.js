import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
    },
  }
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;