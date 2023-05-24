import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import transctionReducer from "./slices/transactionSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    transactions: transctionReducer,
  }
})

