import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `increased ${state.cartItems[itemIndex].name} product cart quantity`,
          {
            position: "bottom-left",
          }
        ); //The product has been added and the quantity is being increased.
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }; //The quantity of the product is added to the new product
        state.cartItems.push(tempProduct); //Then this new product is added to the state.cartItems array.
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
