import { createSlice } from "@reduxjs/toolkit";

let initialState = {}

export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {initialState, isAuth: false},
    reducers: {
        login: (state, action) => {
            state = action.payload
            state.isAuth = true
        }
    }

})

export const { login } = loginSlice.actions;
export default loginSlice.reducer;