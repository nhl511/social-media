import React, {useState} from "react";
import {getAllBlogs} from "../../../services/apis/blog.service.ts";
import {Blog} from "../../../types.ts";
import BlogCard from "../../../components/BlogCard.tsx";
import {Dialog} from "../../../components/ui/dialog.tsx";
import {useBlog} from "../../../context/BlogContext.tsx";
import BlogModal from "../../../components/BlogModal.tsx";

const Blogs = () => {
    const [blogs, setBlogs] = useState<any>([]);
    const {blog} = useBlog();
    React.useEffect(() => {
        getAllBlogs().then((data) => {
            setBlogs(data)
        })
    }, [])
    return (
        <Dialog>
            <div className="grid grid-cols-3 gap-4">
                {
                    blogs.map((blog: Blog) => (
                        <BlogCard id={blog.id} title={blog.title} description={blog.description} content={blog.content}
                                  imgUrl={blog.imgUrl}
                                  createdAt={blog.createdAt}
                                  likeCount={blog.likeCount}
                                  comments={blog.comments}
                                  user={blog.user}/>

                    ))
                }
            </div>
            {
                blog && (
                    <BlogModal
                        id={blog.id}
                        title={blog.title}
                        description={blog.description}
                        imgUrl={blog.imgUrl}
                        createdAt={blog.createdAt}
                        likeCount={blog.likeCount}
                        comments={blog.comments}
                        user={blog.user}
                        content={blog.content}
                    />
                )
            }

        </Dialog>
    );
};

export default Blogs;