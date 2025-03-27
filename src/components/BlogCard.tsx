import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MessageSquareText, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import { Blog, Type } from "@/types";
import { useDialog } from "@/context/DialogContext";

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
  const { setDialogType } = useDialog();
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
            <MessageSquareText
              size={14}
              className="cursor-pointer"
              onClick={() =>
                setDialogType({
                  type: Type.blogCard,
                  data: {
                    blog: {
                      id,
                      title,
                      description,
                      imgUrl,
                      createdAt,
                      user,
                      likeCount,
                      comments,
                      content,
                    },
                  },
                })
              }
            />
            {comments.commentCount}
          </span>
        </div>
        <div className="flex gap-2 w-full border-t-1 pt-4">
          <Button variant="outline" className="flex-1 cursor-pointer">
            <ThumbsUp />
            Thích
          </Button>
          <Button
            variant="outline"
            className="flex-1 cursor-pointer"
            onClick={() =>
              setDialogType({
                type: Type.blogCard,
                data: {
                  blog: {
                    id,
                    title,
                    description,
                    imgUrl,
                    createdAt,
                    user,
                    likeCount,
                    comments,
                    content,
                  },
                },
              })
            }
          >
            <MessageSquareText />
            Bình luận
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
