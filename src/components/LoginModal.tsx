import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useDialog } from "@/context/DialogContext";
import { Type } from "@/types";
import { loginUser } from "@/services/apis/auth.service";
import { useAuth } from "@/context/AuthContext";
import React from "react";

const FormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const LoginModal = () => {
  const { dialogType, setDialogType } = useDialog();
  const { setAccessToken } = useAuth();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await loginUser({
      username: data.username,
      password: data.password,
    });
    if (result.success) {
      setDialogType(null);
      if (result.accessToken) setAccessToken(result.accessToken);
      document.cookie = `accessToken=${result.accessToken}`;
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
        <DialogTitle>Đăng nhập</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên đăng nhập</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập tên đăng nhập" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập mật khẩu"
                    {...field}
                    type="password"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="flex !flex-col gap-4">
            <Button type="submit">Đăng nhập</Button>
            <div className="flex justify-center gap-1">
              <p className="text-sm">Bạn chưa có tài khoản?</p>
              <p
                className="text-sm font-bold cursor-pointer"
                onClick={() => setDialogType({ type: Type.register })}
              >
                Đăng kí
              </p>
            </div>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default LoginModal;
