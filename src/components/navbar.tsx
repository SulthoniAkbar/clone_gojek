"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-[99] shadow-md transition ease-in-out duration-200 bg-gray-900">

      <div className="justify-between hidden lg:flex h-[100px] w-full items-center px-10 text-white">
        <div className="logo">
          <Image
            src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
            alt="Gojek Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="flex menus gap-10 flex-columns items-center">
          <div className="menus flex gap-10 flex-column relative">
            {[
              "Beranda",
              "Gabung jadi Mitra",
              "GoCorp",
              "Karir",
              "Perusahaan",
              "Produk",
              "Blog",
              "Bantuan",
              "ID",
            ].map((menu, index) => (
              <a
                key={index}
                className="hover:underline pb-1 font-maisonBold sm:font-maisonExtendedBold md:font-maisonDemi leading-height_32x text-size_12x md:text-size_9x u-animation-underline visit flex content-center gap-2 cursor-pointer"
                href="#"
              >
                {menu}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden header-mobile fixed z-50 w-full bg-gray-900 text-white">
        <div className="flex justify-between items-center h-[80px] px-4">
          <div className="logo">
            <Image
              src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
              alt="Gojek Logo"
              width={120}
              height={40}
            />
          </div>
          <div
            className="hamburger flex flex-col gap-[4px] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-[2.5px] w-[25px] bg-white"></span>
            <span className="h-[2.5px] w-[25px] bg-white"></span>
            <span className="h-[2.5px] w-[25px] bg-white"></span>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu flex flex-col gap-4 p-4 bg-gray-900">
            {[
              "Beranda",
              "Gabung jadi Mitra",
              "GoCorp",
              "Karir",
              "Perusahaan",
              "Produk",
              "Blog",
              "Bantuan",
              "ID",
            ].map((menu, index) => (
              <a key={index} className="block py-2 hover:underline" href="#">
                {menu}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
