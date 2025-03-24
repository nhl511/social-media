import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "./ui/navigation-menu.tsx";
import {Link} from "react-router-dom";
import {NavbarItem} from "../types.ts";

const Navbar = () => {
    const items: NavbarItem[] = [
        {
            title: "Trang chủ",
            path: "/"
        },
        {
            title: "Quản lí bài viết",
            path: "/quan-li-bai-viet"
        }
    ]
    return (
        <NavigationMenu className="container mx-auto">
            <NavigationMenuList>
                <NavigationMenuItem>
                    {
                        items.map((item: NavbarItem, index: number) => (
                            <Link to={item.path} key={index}>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {item.title}
                                </NavigationMenuLink>
                            </Link>
                        ))
                    }
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navbar;