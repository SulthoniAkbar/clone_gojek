"use client"; // Jika menggunakan Next.js dengan App Router

import React from "react";

const Header = () => {
  return (
    <header
      className="relative h-screen w-full bg-cover bg-center py-15"
      style={{
        backgroundImage:
          "url('https://cdn-site.gojek.com/uploads/hero_b18c33ed07.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative flex w-full h-full flex-col justify-end md:justify-center text-white px-6 md:px-10">
        <h1 className="lg:w-2/3 drop-shadow-lg font-bold tracking-normal text-2xl md:text-4xl lg:text-5/xl leading-tight md:leading-snug lg:leading-relaxed">
          8 negara. 20+ layanan. 1 platform on-demand terkemuka
        </h1>
      </div>
    </header>
  );
};

export default Header;
