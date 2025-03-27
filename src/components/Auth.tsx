import { useDialog } from "@/context/DialogContext";
import { Button } from "./ui/button";
import { Type } from "@/types";

const Auth = () => {
  const { setDialogType } = useDialog();
  return (
    <Button
      className="cursor-pointer"
      onClick={() => setDialogType({ type: Type.login })}
    >
      Đăng nhập
    </Button>
  );
};

export default Auth;
