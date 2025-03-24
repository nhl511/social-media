import {createContext, useContext, useState} from "react";
import {Blog, BlogContextType} from "../types.ts";

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const BlogProvider = ({children}: { children: React.ReactNode }) => {
    const [blog, setBlog] = useState<Blog | null>(null)
    return (
        <BlogContext.Provider value={{blog, setBlog}}>
            {children}
        </BlogContext.Provider>
    )
}

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useBlog must be used within a BlogProvider");
    }
    return context;
};


export default BlogProvider