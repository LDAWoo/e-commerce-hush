import axios from "axios";
import { AxiosError } from "axios";

export const httpApi = axios.create({
    baseURL: process.env.NEXT_API_URL,
});
