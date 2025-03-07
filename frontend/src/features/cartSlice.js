import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  carTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1; //The product has been added and the quantity is being increased.
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }; //The quantity of the product is added to the new product
        state.cartItems.push(tempProduct); //Then this new product is added to the state.cartItems array.
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
