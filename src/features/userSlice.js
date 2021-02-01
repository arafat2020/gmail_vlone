import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null
  },
    reducers: {
        userLogIn: (state, action) => {
            state.user = action.payload
        },
        userLogOut: state => {
            state.user = null;
   
        },
    }
});

export const { userLogIn,userLogOut } = userSlice.actions;


export const selectUser = state => state.user.user;

export default userSlice.reducer;
