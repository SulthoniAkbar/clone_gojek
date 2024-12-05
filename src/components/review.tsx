import Image from "next/image";

const ReviewSection = () => {
  const stats = [
    {
      img: "https://cdn-site.gojek.com/uploads/170_mil_340e5c5603.png",
      value: "190 juta+",
      description: "Jumlah install aplikasi",
      bgColor: "bg-green-200",
    },
    {
      img: "https://cdn-site.gojek.com/uploads/2_million_04b50bc75a.png",
      value: "2 juta+",
      description: "Mitra Driver yang sudah tergabung dengan kami",
      bgColor: "bg-purple-200",
    },
    {
      img: "https://cdn-site.gojek.com/uploads/50_million_c34b6365a4.png",
      value: "900.000+",
      description: "Jumlah Mitra GoFood",
      bgColor: "bg-orange-200",
    },
    {
      img: "https://cdn-site.gojek.com/uploads/12x_growth_cc1a49b8c3.png",
      value: "2.448x",
      description: "Lipat kenaikan pengunduhan aplikasi Gojek dari 2015",
      bgColor: "bg-blue-200",
    },
  ];

  return (
    <section className="bg-white pt-10 pb-20 block lg:block">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative rounded-[20px] md:rounded-[40px] shadow-lg overflow-visible ${stat.bgColor} flex flex-col items-center text-center pt-20 md:pt-32 pb-10 px-6`}
          >

            <div className="absolute -top-10 md:-top-14 transform">
              <Image
                src={stat.img}
                alt={stat.description}
                width={300} 
                height={300} 
                className="rounded-md w-28 md:w-48 lg:w-72"
                priority
              />
            </div>
            <div className="mt-12 md:mt-3">
              <h3 className="text-xl md:text-2xl font-bold text-black">
                {stat.value}
              </h3>
              <p className="text-sm md:text-gray-700 mt-1 md:mt-2">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
