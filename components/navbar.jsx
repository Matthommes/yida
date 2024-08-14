"use client";
import Image from "next/image";
import Logo from "/public/yidaglaze.png";
import { Button } from "./ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" flex w-full items-center justify-center py-6">
      <Image
        src={Logo}
        alt="Brand logo"
        className="h-28 w-28 lg:h-44 lg:w-44"
      />
    </nav>
  );
}
