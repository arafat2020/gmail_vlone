import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    openmail: null,
    openMassage: false,
  },
  reducers: {
    selectedMail: (state, action) => {
      state.openmail = action.payload
    },
    openMassageBox: state => {
      state.openMassage = true;
    },
    closeMassageBox: state => {
      state.openMassage = false;
    }
  },
});

export const { openMassageBox,closeMassageBox,selectedMail } = mailSlice.actions;


export const selectOpenMail = state => state.mail.openmail
export const selectMail = state => state.mail.openMassage;

export default mailSlice.reducer;
