import { createSlice } from "@reduxjs/toolkit";


// ADD change localStorage
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
    // "user" | "worker" | "admin"
    role: "user",
  },
  reducers: {
    changeIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    changeRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { changeIsAuth, changeRole } = authSlice.actions;

export default authSlice.reducer;
