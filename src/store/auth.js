import { createSlice } from '@reduxjs/toolkit'

const intialAuthState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: intialAuthState,
    reducers: {
        login(state) {
           state.isAuthenticated = true
        },
        logOut(state) {
            state.isAuthenticated = false
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer
