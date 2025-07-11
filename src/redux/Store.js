import { configureStore } from "@reduxjs/toolkit";
import jobslice from "./Jobslice.js";

// Configure and export the Redux store
const Store = configureStore({
  reducer: {
    job: jobslice,//  job slice reducer
    
  }
});

export default Store;