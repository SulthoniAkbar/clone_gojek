"use client";

import React from "react";
import Image from "next/image";

interface InfoItem {
  img: string;
  title: string;
  description: string;
}

const IntroduceSection: React.FC = () => {
  const infoItems: InfoItem[] = [
    {
      img: "/FortuneTop20.png",
      title: "Fortune Top 20",
      description:
        "Satu-satunya perusahaan Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune.",
    },
    {
      img: "/BerkontribusiEkonomi.png",
      title: "Berkontribusi lebih dari $7.1 triliun",
      description: "Penggerak roda perekonomian Indonesia.",
    },
    {
      img: "/GerakanHijau.png",
      title: "Jaket hijau, pergerakan juga hijau",
      description:
        "Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020.",
    },
    {
      img: "/TumbuhPasPandemi.png",
      title: "Tumbuh 80% sejak pandemi",
      description:
        "Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.",
    },
  ];

  return (
    <section className="relative bg-white pb-1 pt-10">
      <div className="bg-gray-900 w-full h-[166px] absolute top-0 flex items-end">
        <div className="bg-white w-full h-24 rounded-t-[64px] lg:rounded-t-[96px]"></div>
      </div>

      <div className="relative mx-auto px-6 -mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className=" p-8 flex flex-col items-center text-center space-y-6"
            >
              <div className="w-30 h-28 flex justify-center items-center mb-9">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;
