import React, { useState } from "react";

import BlogCard from "@/components/BlogCard.tsx";
import { Blog } from "@/types";
import { getBlogs } from "@/db";
import { useTriggerReload } from "@/context/TriggerReloadContext";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[] | []>([]);
  const { reloadBlog, setReloadBlog } = useTriggerReload();

  React.useEffect(() => {
    loadBlogs();
  }, [reloadBlog]);

  const loadBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
    setReloadBlog(false);
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      {blogs.map((blog: Blog) => (
        <BlogCard
          id={blog.id}
          title={blog.title}
          description={blog.description}
          content={blog.content}
          imgUrl={blog.imgUrl}
          createdAt={blog.createdAt}
          likeCount={blog.likeCount}
          comments={blog.comments}
          user={blog.user}
        />
      ))}
    </div>
  );
};

export default Blogs;
