import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  items: [],
  status: null, //watchs async promises
  error: null //if error message unsuccess when we give error message
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (_, { rejectWithValue }) => {
    const productsAPI = "http://localhost:5000/products"
    try {
      const response = await axios.get(productsAPI);
      return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
