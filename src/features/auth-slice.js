import { createSlice } from "@reduxjs/toolkit";

// ADD change localStorage
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    // isAuth: JSON.parse(localStorage.getItem("auth")),
    isAuth: true,
    /* 
			student - студент 
			admin - администратор
			admission-secretaty - секретарь приемной комиссии
			admissions-officer - работник приемной комиссии - лох который только удаляет и добавляет
	  */
    role: "admissions-officer",
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
