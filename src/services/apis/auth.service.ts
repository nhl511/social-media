import { apiCaller } from "@/axios/client";
import { ENDPOINTS } from "./api-endpoints.service";
import { ApiResponse, Auth } from "@/types";

export const registerUser = async ({ username, password }: Auth) => {
  const data: ApiResponse = await apiCaller.post(ENDPOINTS.auth.register, {
    username,
    password,
  });
  return data;
};

export const loginUser = async ({ username, password }: Auth) => {
  const data: ApiResponse = await apiCaller.post(ENDPOINTS.auth.login, {
    username,
    password,
  });
  return data;
};
