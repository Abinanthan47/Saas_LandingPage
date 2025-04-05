"use client";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from "../../../public/assets/icon-menu.svg";
import LogoIcon from "../../../public/assets/logo.svg";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-5 border-b border-white/30 md:border-none absolute top-0 left-0 right-0 z-10">
      <div className="container">
        <div className="flex justify-center space-x-28 items-center  mx-auto">
          <div>
            <div className=" h-10 w-10 inline-flex   border-purple-400 border-2 rounded-xl bg-gradient-to-tr from-purple-600 to-purple-800 justify-center items-center">
              <Image
                src={LogoIcon}
                className="h-6 w-6  hover-text-[361764]"
                alt="Logo"
              />
            </div>
          </div>
          <div className=" hidden md:block border px-4 py-3 justify-center items-center  rounded-xl border-purple-300 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:border-[#9d60f9] ">
            <nav className="flex gap-8 ">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                About
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 animate-gradient  bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl font-medium text-sm  border-2 antialiased border-white/50 inset-0 shadow-[0px_0px_20px_#371866]">
              Join waitlist
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              <Image src={MenuIcon} alt="Menu" className="ml-8" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute  top-20  w-full  bg-gray-900/95 border  border-white/30 rounded-b-xl">
            <nav className="flex flex-col p-6 text-center space-y-4">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                About
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
