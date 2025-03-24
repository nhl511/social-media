import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Blog } from "../types.ts";
import * as React from "react";
import { MessageSquareText, ThumbsUp } from "lucide-react";
import { DialogTrigger } from "./ui/dialog.tsx";
import { useBlog } from "../context/BlogContext.tsx";

const BlogCard: React.FC<Blog> = ({
  id,
  title,
  description,
  imgUrl,
  createdAt,
  user,
  likeCount,
  comments,
  content,
}) => {
  const { setBlog } = useBlog();
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-xs">
          {user.name} - {createdAt}
        </CardDescription>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={imgUrl} alt="" className="aspect-video object-cover" />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3">
        <div className="flex gap-4">
          <span className="flex text-sm items-center gap-1">
            <ThumbsUp size={14} />
            {likeCount}
          </span>
          <span className="flex text-sm items-center gap-1">
            <DialogTrigger>
              <MessageSquareText
                size={14}
                className="cursor-pointer"
                onClick={() =>
                  setBlog({
                    id,
                    title,
                    description,
                    imgUrl,
                    createdAt,
                    user,
                    likeCount,
                    comments,
                    content,
                  })
                }
              />
            </DialogTrigger>
            {comments.commentCount}
          </span>
        </div>
        <div className="flex gap-2 w-full border-t-1 pt-4">
          <Button variant="outline" className="flex-1 cursor-pointer">
            <ThumbsUp />
            Thích
          </Button>
          <DialogTrigger className="flex-1">
            <Button
              variant="outline"
              className="w-full cursor-pointer"
              onClick={() =>
                setBlog({
                  id,
                  title,
                  description,
                  imgUrl,
                  createdAt,
                  user,
                  likeCount,
                  comments,
                  content,
                })
              }
            >
              <MessageSquareText />
              Bình luận
            </Button>
          </DialogTrigger>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
