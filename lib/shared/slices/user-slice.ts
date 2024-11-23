import { UserModel } from "@/lib/model/user-model";
import { createAction, createSlice, PrepareAction } from "@reduxjs/toolkit";

export interface UserState {
    user: UserModel | null;
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: UserState = {
    user: null,
    status: "idle",
};

export const setUser = createAction<PrepareAction<UserModel>>("user/setUser", (payload) => {
    return {
        payload,
    };
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setUser, (state, action) => {
            state.user = action.payload;
            state.status = "succeeded";
        });
    },
});

export const { reducer: userReducer } = userSlice;
export default userSlice.reducer;
