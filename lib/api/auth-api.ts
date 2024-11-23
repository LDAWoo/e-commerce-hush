import { UserModel } from "../model/user-model";
import { httpApi } from "./http-api";

export interface AuthData {
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignUpRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ResetPasswordRequest {
    email: string;
}

export interface SecurityCodePayload {
    code: string;
}

export interface NewPasswordData {
    newPassword: string;
}

export interface LoginResponse {
    user: UserModel;
    data: {
        jwtToken: string;
    };
}

export const login = (payload: LoginRequest): Promise<LoginResponse> => httpApi.post<LoginResponse>("/public/v1/user/login", payload).then(({ data }) => data);

export const signUp = (payload: SignUpRequest): Promise<UserModel> => httpApi.post<UserModel>("/public/v1/user/register", payload).then(({ data }) => data);

export const resetPassword = (payload: ResetPasswordRequest): Promise<void> => httpApi.post<void>("/public/v1/user/forgot-password", payload).then(({ data }) => data);

export const verifySecurityCode = (payload: SecurityCodePayload): Promise<void> => httpApi.post<void>("/public/v1/user/verify-security-code", payload).then(({ data }) => data);

export const changePassword = (payload: NewPasswordData): Promise<void> => httpApi.post<void>("/member/v1/user/change-password", payload).then(({ data }) => data);
