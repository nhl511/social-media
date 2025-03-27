import { apiCaller } from "../../axios/client.ts";
import { ENDPOINTS } from "./api-endpoints.service.ts";

export const getAllBlogs = async () => {
  const data = await apiCaller.get(ENDPOINTS.blogs.base);
  return data;
};
