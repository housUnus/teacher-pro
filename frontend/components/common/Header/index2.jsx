import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star, Search } from "lucide-react";
import { UserNav } from "./UserNav";
import { MobileNav } from "./MobileNav";
import Categories from "./Categories";

export default function Header({}) {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:px-6">
        <div className="lef-nav flex justify-start items-center gap-x-4">
          <Link href="/" className="ml-2 font-bold text-xl flex">
            <Star /> TEST UI
          </Link>
          <NavigationMenu className="hidden md:flex gap-3">
            <NavigationMenuList >
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 grid-flow-col w-max items-start">
                    <Categories />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for anything..."
                className="text-sm md:tex-base pl-8 md:w-[300px] lg:w-[400px] rounded-full shadow-none"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <MobileNav />
        {/* Desktop */}
        <div className="hidden md:flex gap-3 items-center">
          <Link href="teach" className={navigationMenuTriggerStyle()}>
            Teach on TEST
          </Link>
          <Button variant="outline" asChild className="rounded-full border-2">
            <Link href="/sign-up" target="_blank">
              Sign Up
            </Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link href="/sign-in" target="_blank">
              Sign In
            </Link>
          </Button>
          {/* <UserNav /> */}
        </div>
      </div>
    </header>
  );
}
