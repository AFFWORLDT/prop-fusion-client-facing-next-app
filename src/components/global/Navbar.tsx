import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  LogIn,
  Mail,
  Menu,
  MessageCircleHeart,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Logo from "./Logo";

const NAV_ITEMS = [
  { href: "/properties", label: "Properties" },
  { href: "/communities", label: "Communities" },
  { href: "/buildings", label: "Buildings" },
  { href: "/findagencies", label: "Find Agencies" },
  { href: "/blog", label: "Blog" },
];

function Navbar() {
  return (
    <header className="px-4 py-4 shadow">
      <nav className="flex justify-between items-center">
        <div className="flex space-x-5 items-center">
          <div className="logo-container"><Logo /></div>
          <ul className="space-x-8 hidden md:flex">
            {NAV_ITEMS.map((item) => (
              <Link href={item.href} key={item.label}>
                <li
                  className="text-black hover:text-purple-800 hover:bg-purple-50 px-3 py-1 rounded-full cursor-pointer transition-all duration-200"
                  aria-label={item.label}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Desktop login button */}
        <div className="hidden md:block">
          <Button className="bg-primary" aria-label="Sign Up or Login">
            <span className="hidden md:block">Sign Up or Login</span>
            <LogIn />
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" aria-label="Open Menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <div className="flex justify-around">
                  <Button className="text-sm" variant="outline">
                    Switch to CRM
                  </Button>
                  <Button className="text-sm" variant="outline">
                    Sign Up or Login
                  </Button>
                </div>
              </SheetHeader>
              <div className="grid gap-4 py-8">
                <div className="w-full block">
                  {NAV_ITEMS.map((item) => (
                    <React.Fragment key={item.label}>
                      <Link href={item.href}>
                        <h3
                          className="mb-2 text-xl text-gray-800 cursor-pointer"
                          aria-label={item.label}
                        >
                          {item.label}
                        </h3>
                      </Link>
                      <Separator className="mb-2" />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <span className="text-sm font-extralight text-center mt-3 text-gray-400">
                    About Us
                  </span>
                </SheetClose>
              </SheetFooter>
              <div className="flex gap-7 justify-center my-4 text-gray-400">
                <span>Term of Use</span>
                <span>Privacy Policy</span>
              </div>
              <div className="flex gap-3 justify-center mt-7">
                <Facebook className="text-blue-500" aria-label="Facebook" />
                <Instagram className="text-red-600" aria-label="Instagram" />
                <Linkedin className="text-blue-800" aria-label="LinkedIn" />
                <Mail className="text-orange-700" aria-label="Email" />
                <MessageCircleHeart className="text-green-500" aria-label="Message" />
                <Youtube className="text-red-600" aria-label="YouTube" />
              </div>
              <span className="flex justify-center font-light mt-7 text-gray-500">
                xyz@gmail.com
              </span>
              <footer className="fixed bottom-0 left-0 w-full text-center p-4">
                <div className="text-gray-400">
                  Copyright &copy; 2024 Affworld Technology
                </div>
                <div className="text-gray-400">All rights reserved</div>
              </footer>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
