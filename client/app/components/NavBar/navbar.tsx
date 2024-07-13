"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Image from "next/image";
import MensLink from "./LinkBT/MensLink";
import WomesLink from "./LinkBT/WomesLink";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      <NavbarContent className="sm:hidden " justify="start">
      <NavbarMenuToggle
  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  style={{ color: 'white' }}
/>            </NavbarContent>

      <NavbarContent className="sm:hidden " justify="center">
        <NavbarBrand>
        <Image src="/logo4.png" alt="ACME" width={180} height={180} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " >
      <NavbarBrand>
          <Image src="/logo4.png" alt="ACME" width={200} height={200} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
           <NavbarItem>
              <Link color="foreground" href="#">
                Home
              </Link>
           </NavbarItem>

           <MensLink />
           <WomesLink />
      </NavbarContent>


      <NavbarContent justify="end">
       
        <NavbarItem className="sm:hidden">
          <Button as={Link} color="primary" href="#" variant="flat">
          <Image src="/googleico.png" alt="Google" width={50} height={50} />
            </Button>
        </NavbarItem>
        <NavbarItem className=" hidden sm:block" >
          <Button as={Link} color="primary" href="#" variant="flat">
              Contune With Google
              <Image src="/googleico.png" alt="Google" width={50} height={50} />

              
            </Button>
        </NavbarItem>
      </NavbarContent>



      <NavbarMenu className="dark">
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
