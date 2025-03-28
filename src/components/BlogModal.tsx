import { CircleUser, MessageSquareText, ThumbsUp } from "lucide-react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Blog, Comment, Type } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { useDialog } from "@/context/DialogContext";
import moment from "moment";

const BlogModal: React.FC<Blog> = ({
  title,
  description,
  imgUrl,
  createdAt,
  user,
  likeCount,
  comments,
}) => {
  const { accessToken } = useAuth();
  const { setDialogType } = useDialog();
  return (
    <DialogContent className="h-[90vh] flex flex-col justify-start">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="text-xs">
          {user.name} - {moment(Number(createdAt)).fromNow()}
        </DialogDescription>
      </DialogHeader>
      <div className="overflow-auto mb-14 pb-2">
        <p className="text-base mb-3 text-gray-500">{description}</p>
        <img src={imgUrl} alt="" className="aspect-video object-cover" />
        <DialogFooter className="flex !flex-col items-start gap-3">
          <div className="flex gap-4 mt-4">
            <span className="flex text-sm items-center gap-1">
              <ThumbsUp size={14} />
              {likeCount}
            </span>
            <span className="flex text-sm items-center gap-1">
              <MessageSquareText size={14} className="cursor-pointer" />
              {comments ? comments.commentCount : 0}
            </span>
          </div>
          <div className="flex gap-2 w-full border-y-1 py-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                if (accessToken) {
                  console.log("like");
                } else {
                  setDialogType({ type: Type.login });
                }
              }}
            >
              <ThumbsUp />
              Thích
            </Button>
            <Button variant="outline" className="flex-1">
              <MessageSquareText />
              Bình luận
            </Button>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {comments ? (
              comments?.commentList.map((comment: Comment, index) => (
                <div key={index} className="flex gap-2">
                  <CircleUser strokeWidth={1.2} size={32} />
                  <div>
                    <div className="bg-gray-100 p-3 rounded-2xl w-max">
                      <p className="text-sm font-bold">{comment.user.name}</p>
                      <p className="text-base">{comment.content}</p>
                    </div>
                    <p className="text-xs mt-1">{comment.createdAt}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-lg font-bold">Chưa có bình luận nào</p>
                <p className="text-base">Hãy là người đầu tiên bình luận</p>
              </div>
            )}
          </div>
        </DialogFooter>
      </div>
      {accessToken ? (
        <div className="absolute left-4 bottom-4 right-4 bg-white">
          <div className="flex">
            <Input
              className="px-3 py-6 rounded-tr-none rounded-br-none !ring-0 !outline-0 !border-gray-200"
              placeholder="Các hạ xin hãy viết bình luận tại đây"
            />
            <Button
              variant="outline"
              className="py-6 rounded-tl-none rounded-bl-none ml-[-1px]"
            >
              Gửi
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <p className="text-base">Các hạ vui lòng đăng nhập để bình luận</p>
          <Button
            className="cursor-pointer"
            onClick={() => setDialogType({ type: Type.login })}
          >
            Đăng nhập
          </Button>
        </div>
      )}
    </DialogContent>
  );
};

export default BlogModal;
