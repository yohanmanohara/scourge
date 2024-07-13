"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import MensLink from "./LinkBT/MensLink";
import WomesLink from "./LinkBT/WomesLink";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { signIn, useSession } from "next-auth/react";
import Avatarcomponent from "./avata/Avata";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data: session } = useSession();

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
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="dark"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          style={{ color: 'white' }}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Image src="/logo4.png" alt="ACME" width={240} height={240} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <Image src="/logo4.png" alt="ACME" width={200} height={200} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>

        <MensLink />
        <WomesLink />
      </NavbarContent>
     
      {!session ? (
        <NavbarContent justify="end">
          <NavbarItem className="sm:hidden">
            <Button as={Link} color="primary" href="#" variant="flat" onClick={()=>{signIn()}} >
              <Image src="/googleico.png" alt="Google" width={30} height={30} />
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden sm:block">
            <Button as={Link} color="primary" href="#" variant="flat" onClick={()=>{signIn()}}>
              Continue With Google
              <Image src="/googleico.png" alt="Google" width={30} height={30} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ShoppingCartIcon style={{ color: 'white' }} />
          </NavbarItem>
        </NavbarContent>
       
      ) : (
        <NavbarContent justify="end">
         <Avatarcomponent />
          <NavbarItem>
            <ShoppingCartIcon style={{ color: 'white' }} />
          </NavbarItem>
       </NavbarContent>
      )}

      <NavbarMenu className="dark">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
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
