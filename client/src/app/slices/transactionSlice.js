import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async () => {
    try {
      const res = await axios.get("url");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  transactions: [],
  isLoading: false,
  errors: null,
};
const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    add: (state, action) => {
      state.transactions.push(action);
    },
    edit: (state, action) => {
      const index = state.transactions.findIndex(
        (item) => item._id === action._id
      );
      state.transactions.splice(index, 1);
      state.transactions.push(action);
    },
    remove: (state, action) => {
      const index = state.transactions.findIndex(
        (item) => item._id === action._id
      );
      state.transactions.splice(index, 1);
    },
    clearAll: (state) => {
      state.transactions = [];
    },
  },
  extraReducers: {
    [getTransactions.pending]: (state) => (state.isLoading = true),
    [getTransactions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transactions = action.payload;
    },
    [getTransactions.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export default transactionSlice.reducer;
export const { add, edit, remove, clearAll } = transactionSlice.actions;
