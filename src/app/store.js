import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth-slice";
import studentSlice from "../features/student-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    student: studentSlice,
  },
});
