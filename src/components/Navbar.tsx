import { NavbarItem } from "@/types";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const Navbar = () => {
  const items: NavbarItem[] = [
    {
      title: "Trang chủ",
      path: "/",
    },
    {
      title: "Quản lí bài viết",
      path: "/quan-li-bai-viet",
    },
  ];
  return (
    <NavigationMenu className="container mx-auto flex justify-between py-4">
      <div className="flex-1">logo</div>
      <NavigationMenuList className="flex-1">
        {items.map((item: NavbarItem, index: number) => (
          <NavigationMenuItem key={index}>
            <Link to={item.path}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <div className="flex-1 flex justify-end">
        <Auth />
      </div>
    </NavigationMenu>
  );
};

export default Navbar;
