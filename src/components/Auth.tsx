import { useDialog } from "@/context/DialogContext";
import { Button } from "./ui/button";
import { Type } from "@/types";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Auth = () => {
  const { setDialogType } = useDialog();
  const { accessToken, setAccessToken } = useAuth();
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    if (accessToken) {
      setName(JSON.parse(accessToken).name);
    }
  }, [accessToken]);

  const handleLogout = () => {
    setAccessToken("");
    document.cookie =
      "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return accessToken ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="cursor-pointer">
          {name}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel
          className="text-red-600 font-bold cursor-pointer"
          onClick={handleLogout}
        >
          Đăng xuất
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button
      className="cursor-pointer"
      onClick={() => setDialogType({ type: Type.login })}
    >
      Đăng nhập
    </Button>
  );
};

export default Auth;
