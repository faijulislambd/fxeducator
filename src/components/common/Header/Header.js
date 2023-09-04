"use client";

import "@/app/globals.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import NavLink from "@/components/utils/NavLink";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/utils/Button";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="px-5 py-8 border-b border-b-color-[rgba(0,0,0,0,.4)] relative">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div>
          <Image
            src={logo}
            alt="FX Educator Logo"
            placeholder="blur"
            width={250}
          />
        </div>
        <div
          className="lg:hidden text-2xl rounded-full bg-amber-500 inline-flex w-12 h-12 items-center justify-center cursor-pointer"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          {!mobileMenu ? <IoMdMenu></IoMdMenu> : <IoMdClose></IoMdClose>}
        </div>
        <ul
          className={`lg:flex-row lg:space-y-0 lg:items-center lg:space-x-2 lg:relative lg:bg-transparent lg:py-0 lg:px-0 lg:w-auto lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto absolute space-y-3 flex flex-col bg-slate-200 w-full left-0 py-4 px-4 transition-all top-full ${
            !mobileMenu
              ? "translate-y-10 opacity-0 pointer-events-none"
              : "translate-y-0 opacity-1"
          }`}
        >
          <li className="inline-flex">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="inline-flex">
            <NavLink>About Us</NavLink>
          </li>
          <li className="inline-flex">
            <NavLink>Courses</NavLink>
          </li>
          <li className="inline-flex">
            <NavLink>Article</NavLink>
          </li>
          <li className="inline-flex">
            <NavLink>Signals</NavLink>
          </li>
          <li>
            <Link href="#">
              <Button>Sign In</Button>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Button>Join Now</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
