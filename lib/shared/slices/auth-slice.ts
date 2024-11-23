import { login, LoginRequest } from "@/lib/api/auth-api";
import { UserModel } from "@/lib/model/user-model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setUser } from "./user-slice";

interface AuthState {
    token: string | null;
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AuthState = {
    token: "",
    status: "idle",
};

// Corrected doAuthLogin with proper async/await
export const doAuthLogin = createAsyncThunk("auth/login", async (payload: LoginRequest, { dispatch }) => {
    const res = await login(payload);
    dispatch(setUser(res.user));
    return res.data.jwtToken;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doAuthLogin.pending, (state) => {
            state.status = "loading";
            state.token = null;
        });
        builder.addCase(doAuthLogin.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.token = action.payload;
        });
        builder.addCase(doAuthLogin.rejected, (state) => {
            state.status = "failed";
            state.token = null;
        });
    },
});

export const { reducer: authReducer } = authSlice;
export default authSlice.reducer;
