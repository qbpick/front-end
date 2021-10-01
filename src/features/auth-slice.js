import { createSlice } from "@reduxjs/toolkit";

// ADD change localStorage
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: JSON.parse(localStorage.getItem("auth")),
    /* 
      maybe sessionStorage for admins 
			student - студент 
			admin - администратор
			admission-secretaty - секретарь приемной комиссии
			admissions-officer - работник приемной комиссии - лох который только удаляет и добавляет
	  */
    role: "student",
  },
  reducers: {
    changeIsAuth: (state, action) => {
      state.isAuth = action.payload;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    changeRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { changeIsAuth, changeRole } = authSlice.actions;

export default authSlice.reducer;
