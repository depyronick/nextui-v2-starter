import { ReactNode } from 'react';
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

interface PageProps {
  children?: ReactNode
}

const Page = ({ ...props }: PageProps) => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold hidden sm:block text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex">
          <NavbarItem as={Link} color="foreground" href="#">
            Features
          </NavbarItem>
          <NavbarItem isActive as={Link} href="#">
            Customers
          </NavbarItem>
          <NavbarItem as={Link} color="foreground" href="#">
            Integrations
          </NavbarItem>
          <NavbarItem as={Link} color="foreground" href="#">
            Pricing
          </NavbarItem>
          <NavbarItem as={Link} className="hidden lg:block" color="foreground" href="#">
            Company
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem as={Link} href="#">
            Login
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="mx-auto max-w-7xl">
        <div className="my-12">
          <div className="flex gap-4 flex-row">
            <Button variant="bordered">Button</Button>
            <Button variant="faded">Button</Button>
            <Button variant="ghost">Button</Button>
            <Button variant="solid">Button</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;