import {apiCaller} from "../../axios/client.ts";
import {ENDPOINTS} from "./api-endpoints.service.ts";

export const getAllBlogs = () => {
    const data = apiCaller.get(ENDPOINTS.blogs.base)
    return data
}