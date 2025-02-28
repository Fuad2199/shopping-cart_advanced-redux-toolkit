import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
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
      state.status = "fulfilled";
      state.entities = action.payload
    })
    .addCase(productsFetch.rejected, (state, action) => {
      state.status = "rejected";
      state.entities = action.payload
    });
  },
});

export default productSlice.reducer;
