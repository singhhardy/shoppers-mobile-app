import { createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
            state.error = null
        },
        loginSuccess: (state, action) => {
            state.isAuthenticated = true,
            state.user = action.payload,
            state.loading = false
        },
        loginFailure: (state, action) => {
            state.error = action.payload,
            state.loading = false
        },
        logout: (state) => {
            return initialState;
        }
    }
})

export const loginUser = (email, password) => async (dispatch) => {
    dispatch(loginStart())
    try{
        const userData = await authService.login(email, password)
        dispatch(loginSuccess(userData))
    } catch(error) {
        dispatch(loginFailure('Invalid Credentials'))
    }
}

export const logoutUser = () => (dispatch) => {
    authService.logout();
    dispatch(logout)
}

export const { loginStart, loginSuccess, loginFailure, logout} = authSlice.actions
export default authSlice.reducer