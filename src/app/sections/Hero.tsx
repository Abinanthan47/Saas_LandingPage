"use client";
import { AnimatedBadge } from "@/components/AnimatedBadge";
import { ShineButton } from "@/components/ShimmerButton";
import { BorderBeam } from "@/components/ui/border-beam";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Sparkles } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import DashboardImg from "../../../public/assets/App.png";
import DashboardImgMob from "../../../public/assets/App_mob.png";
import heroImage from "../../../public/assets/image.png";

export function Hero() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-[#000018] antialiased bg-grid-white/[0.2] relative">
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"7 2"}
        className={cn(
          "absolute inset-0 w-full h-full",
          " [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="hidden md:block ">
        <Image
          src={heroImage}
          alt="spotlight right"
          width={512}
          height={512}
          className="absolute top-0 right-0"
        />

        <Image
          src={heroImage}
          alt="spotlight right"
          width={512}
          height={512}
          className="absolute top-0 left-0 scale-x-[-1] "
        />
        <Sparkles
          density={320}
          speed={1.2}
          size={1.2}
          direction="radial"
          opacitySpeed={2}
          color="#FFF"
          className="absolute   top-0 left-0 h-[40%] w-[20%] [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]"
        />

        <Sparkles
          density={300}
          speed={1.2}
          size={1.2}
          direction="radial"
          opacitySpeed={2}
          color="#ffffff"
          className="absolute   top-0 right-0 h-[40%] w-[20%] [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]"
        />
      </div>
      <div className="top-[20%] absolute">
        <AnimatedBadge />
        <h1 className="text-4xl md:text-7xl text-center">
          Revolutionize Your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-100 to-purple-900">
            Web Rankings
          </span>{" "}
          with AI
        </h1>
        <p className="mt-5 font-100 text-gray-300 text-center text-sm md:text-base px-4 md:px-0">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets <br className="hidden md:block" />
          user-friendly SEO tools.
        </p>
        <div className="mt-5 text-center">
          <ShineButton />
        </div>

        <div className="md:mt-10 relative">
          <div className="relative">
            <Image
              src={DashboardImg}
              alt="Dashboard Preview"
              width={1000}
              height={1000}
              className="hidden md:block bg-black rounded-2xl  border border-purple-500"
            />
            <Image
              src={DashboardImgMob}
              alt="Dashboard Preview"
              width={500}
              height={500}
              className=" md:hidden rounded-2xl "
            />

            <BorderBeam
              size={300}
              duration={12}
              delay={9}
              borderWidth={4}
              className="hidden md:block absolute rounded-2xl inset-0"
            />
          </div>
          <div className="hidden md:block absolute top-20 inset-x-0 w-full h-1/2 bg-gradient-to-t from-[#000018] via-[#000018]/80 to-transparent"></div>
          <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/2 bg-gradient-to-t from-[#000018] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
