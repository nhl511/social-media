import React from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createBlog } from "@/db";
import { useAuth } from "@/context/AuthContext";
import { useDialog } from "@/context/DialogContext";
import { useTriggerReload } from "@/context/TriggerReloadContext";

const FormSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
  imgUrl: z.string(),
});

const CreatePostModal = () => {
  const { accessToken } = useAuth();
  const { dialogType, setDialogType } = useDialog();
  const { setReloadBlog } = useTriggerReload();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      imgUrl: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await createBlog({
      title: data.title,
      description: data.description,
      content: data.content,
      imgUrl: data.imgUrl,
      user: JSON.parse(accessToken).id,
      comments: null,
      likeCount: 0,
      createdAt: Date.now().toString(),
    });
    if (result) {
      setReloadBlog(true);
      setDialogType(null);
    }
  }

  React.useEffect(() => {
    if (dialogType?.type) {
      form.reset();
    }
  }, [dialogType?.type, form]);

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Tạo bài viết</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tiêu đề</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập tiêu đề" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập mô tả" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nội dung</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập nội dung" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link ảnh</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập link ảnh" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="flex !flex-col gap-4">
            <Button type="submit" className="cursor-pointer">
              Tạo bài viết
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default CreatePostModal;
