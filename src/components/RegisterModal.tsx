import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDialog } from "@/context/DialogContext";
import { Type } from "@/types";

const FormSchema = z.object({
  username: z.string(),
  password: z.string(),
  repeatPassword: z.string(),
});

const RegisterModal = () => {
  const { setDialogType } = useDialog();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      repeatPassword: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Đăng ký</DialogTitle>
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
                  <Input placeholder="Nhập mật khẩu" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập lại mật khẩu" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="flex !flex-col gap-4">
            <Button type="submit">Đăng ký</Button>
            <div className="flex justify-center gap-1">
              <p className="text-sm">Bạn đã có tài khoản?</p>
              <p
                className="text-sm font-bold cursor-pointer"
                onClick={() =>
                  setDialogType({
                    type: Type.login,
                  })
                }
              >
                Đăng nhập
              </p>
            </div>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default RegisterModal;
