import React, { useState } from "react";

import BlogCard from "@/components/BlogCard.tsx";
import { Blog } from "@/types";
import { getAllBlogs } from "@/services/apis/blog.service";

const Blogs = () => {
  const [blogs, setBlogs] = useState<any>([]);
  React.useEffect(() => {
    getAllBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);
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
