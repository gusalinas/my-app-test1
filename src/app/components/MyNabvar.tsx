import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function MyNabvar() {

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar disableAnimation isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Image
                        width={60}
                        alt="Logo"
                        src="images/logo1.png"
                        />
                    <p className="font-bold text-inherit">TheOrchis</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand className="mr-20">
                    <Image
                        width={60}
                        alt="Logo"
                        src="images/logo1.png"
                        />
                    <p className="font-bold text-inherit">TheOrchis</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page" color="secondary">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden sm:flex">
                <Button
                    href="#"
                    as={Link}
                    color="secondary"
                    variant="solid"
                    >
                    Login
                </Button>
                </NavbarItem>
                <NavbarItem>
                    {/*<Button as={Link} color="warning" href="#" variant="flat">
                        Sign Up
                    </Button>*/}
                    <ThemeSwitcher></ThemeSwitcher>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
