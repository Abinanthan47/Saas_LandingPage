import Image from "next/image";
import logo1 from "../../../public/assets/logo-acme.png";
import logo2 from "../../../public/assets/logo-apex.png";
import logo4 from "../../../public/assets/logo-celestial.png";
import logo5 from "../../../public/assets/logo-echo.png";
import logo6 from "../../../public/assets/logo-pulse.png";
import logo3 from "../../../public/assets/logo-quantum.png";

export const Brands = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="relative min-h-[25vh] md:mt-[20vh] bg-[#000018] md:min-h-[50vh] overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-full h-full absolute bg-[#000018] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <h2 className="text-xl font-normal text-muted-foreground/80 mb-8 -mt-32 relative z-10">
          Trusted by
        </h2>

        <div className=" max-w-5xl overflow-hidden relative z-10">
          <div className="flex animate-marquee space-x-16">
            {[...logos, ...logos].map((logo, index) => (
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                key={index}
                width={100}
                height={40}
                className="w-auto h-8 grayscale opacity-100  hover:opacity-50 transition-all"
              />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#000018] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#000018] to-transparent" />
        </div>
      </div>
    </div>
  );
};
