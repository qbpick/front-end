import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    /* Array of specialties */
    selectedSpecialties: [],
    /* Is there an appointment with the admissions committee */
    isAppointment: false,
  },
  reducers: {
    addSpecialty: (state, action) => {
      state.selectedSpecialties = [
        ...state.selectedSpecialties,
        action.payload,
      ];
    },
    changeIsAppointment: (state, action) => {
      state.isAppointment = action.payload;
    },
  },
});

export const { addSpecialty, changeIsAppointment } = studentSlice.actions;

export default studentSlice.reducer;
