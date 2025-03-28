import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Blogs from "./components/Blogs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useDialog } from "@/context/DialogContext";
import { Type } from "@/types";
import { useAuth } from "@/context/AuthContext";

const Home = () => {
  const { setDialogType } = useDialog();
  const { accessToken } = useAuth();
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <Button
          className="cursor-pointer"
          onClick={() =>
            accessToken
              ? setDialogType({ type: Type.createPost })
              : setDialogType({ type: Type.login })
          }
        >
          <Plus />
          Tạo bài viết mới
        </Button>
      </div>
      <div className="flex justify-between">
        <div className="w-full flex gap-5">
          <div className="flex items-center gap-2">
            <span className="text-sm">Ngày đăng:</span>
            <Select>
              <SelectTrigger>
                <SelectValue className="text-sm" placeholder="--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Mới nhất</SelectItem>
                <SelectItem value="old">Cũ nhất</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Lượt thích:</span>
            <Select>
              <SelectTrigger>
                <SelectValue className="text-sm" placeholder="--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Cao nhất</SelectItem>
                <SelectItem value="old">Thấp nhất</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Input
          className="text-sm w-1/3"
          placeholder="Tìm kiếm tiêu đề hoặc nội dung"
        />
      </div>
      <Blogs />
    </div>
  );
};

export default Home;
