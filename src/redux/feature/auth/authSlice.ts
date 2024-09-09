import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  user: null,
  token: null,
  userDetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token, userDetails } = action.payload;
      state.user = user;
      state.token = token;
      state.userDetails = userDetails;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userDetails = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentUserDetails = (state: RootState) =>
  state.auth.userDetails;
