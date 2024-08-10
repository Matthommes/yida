"use client";
import Image from "next/image";
import Logo from "/public/yidaglaze.png";

export default function Navbar() {
  return (
    <nav className=" ">
      <Image src={Logo} alt="Brand logo" className=" h-32 w-32 " />
    </nav>
  );
}
