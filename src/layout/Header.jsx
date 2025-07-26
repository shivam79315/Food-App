import React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-green-600">
        Foodie<span className="text-yellow-500">Now</span>
      </div>

      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <a href="/" className="hover:text-green-600">Home</a>
        <a href="/menu" className="hover:text-green-600">Menu</a>
        <a href="/orders" className="hover:text-green-600">Orders</a>
        <a href="/contact" className="hover:text-green-600">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>My Orders</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;