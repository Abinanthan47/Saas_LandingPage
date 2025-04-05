import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHubspot, SiNotion } from "react-icons/si";
import logo from "../../public/assets/logo.svg";
import Threads from "../../public/Threads/Threads";
import { OrbitingCircles } from "../components/magicui/orbiting-circles";
import { Button } from "./ui/button";
import { Sparkles } from "./ui/sparkles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Semi-circle cover with gradient border */}
      <div className="absolute top-1/2 left-0 w-full h-[1000px] bg-[#010019]  z-40">
        {/* Gradient border with fade effect */}
        <div className="absolute top-0 left-20 right-20 h-[1.5px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        <div className=" items-center justify-center flex mt-20 flex-col gap-5">
          <h1 className="text-4xl md:text-6xl">Seamless Integration</h1>
          <p className="text-sm font-medium text-center text-wrap text-white/70 w-96">
            Unite your favorite tools for effortless connectivity. Boost
            productivity through interconnected workflows.
          </p>
          <Button
            variant="outline"
            className="mt-5 h-10  p-3 rounded-full border-2 border-white"
          >
            Get Started
          </Button>
       
        </div>
      </div>

      {/* Enhanced glowing background effects with better contrast */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-[10%] md:left-[38%] flex justify-center  w-96 h-[28rem] bg-gradient-to-t from-[#6C2ECC] to-transparent rounded-full filter blur-[100px] " />
        {/* <div className="absolute bottom-1/4 right-1/4 w-96 h-64 bg-violet-500/30 rounded-full filter blur-[100px] " /> */}
      </div>

      <Sparkles
        density={400}
        size={1.4}
        direction="top"
        className="absolute inset-x-0 top-0 h-full w-full  [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
      />

      {/* Improved 3D Platform Effect with better gradient */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-purple-900/30 via-purple-800/15 to-transparent backdrop-blur-sm z-30" />

      {/* Enhanced center icon with improved glow and contrast */}
      <div className="absolute z-40 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-xl border-2 border-purple-300 shadow-md shadow-purple-600">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-xl animate-pulse" />
        <div className="relative z-50 h-20 w-20 rounded-full p-3 flex items-center justify-center border border-purple-300/30">
          <Image
            src={logo}
            alt="logo"
            className="relative z-50 drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]"
          />
        </div>
      </div>

      {/* First orbit - Closest with improved visibility */}
      <OrbitingCircles
        radius={150}
        iconSize={50}
        path={true}
        speed={0.7}
        className="z-30"
      >
        <Logo type="figma" glowColor="purple" />
        <Logo type="framer" glowColor="blue" />
        <Logo type="notion" glowColor="violet" />
      </OrbitingCircles>

      {/* Second orbit - Middle with improved visibility */}
      <OrbitingCircles
        radius={250}
        iconSize={50}
        path={true}
        speed={0.5}
        reverse={true}
        className="z-20"
      >
        <Logo type="diamond" glowColor="indigo" />
        <Logo type="cube" glowColor="purple" />
        <Logo type="boat" glowColor="blue" />
      </OrbitingCircles>

      {/* Third orbit - Farthest with improved visibility */}
      <OrbitingCircles
        radius={350}
        iconSize={50}
        path={true}
        speed={0.3}
        reverse={false}
        className="z-10"
      >
        <Logo type="green" glowColor="violet" />
        <Logo type="notion" glowColor="indigo" />
        <Logo type="diamond" glowColor="purple" />
      </OrbitingCircles>
    </div>
  );
}

// Updated Logo component with enhanced glow effect
function Logo({
  type,
  glowColor = "white",
}: {
  type: string;
  glowColor?: string;
}) {
  const glowStyles = {
    purple: "shadow-[0_0_30px_rgba(168,85,247,0.7)]",
    blue: "shadow-[0_0_30px_rgba(59,130,246,0.7)]",
    violet: "shadow-[0_0_30px_rgba(139,92,246,0.7)]",
    indigo: "shadow-[0_0_30px_rgba(99,102,241,0.7)]",
    white: "shadow-[0_0_30px_rgba(255,255,255,0.7)]",
  };

  return (
    <div
      className={cn(
        "relative group transition-all duration-300",
        "hover:scale-110 hover:z-50"
      )}
    >
      {/* Enhanced glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-xl bg-gradient-to-tr",
          {
            "from-purple-500/60 to-purple-600/60": glowColor === "purple",
            "from-blue-500/60 to-blue-600/60": glowColor === "blue",
            "from-violet-500/60 to-violet-600/60": glowColor === "violet",
            "from-indigo-500/60 to-indigo-600/60": glowColor === "indigo",
            "from-white/60 to-white/60": glowColor === "white",
          }
        )}
      />

      {/* Icon container with enhanced glass effect */}
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center",
          "rounded-full backdrop-blur",
          "transform transition-all duration-300",
          glowStyles[glowColor as keyof typeof glowStyles]
        )}
      >
        {renderLogo(type)}
      </div>
    </div>
  );
}

// Helper function to render the specific logo SVG
function renderLogo(type: string) {
  const iconSize = "text-2xl";

  switch (type) {
    case "figma":
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <SiHubspot className={iconSize} />
        </div>
      );
    case "framer":
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <FaInstagram className={iconSize} />
        </div>
      );
    case "notion":
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <SiNotion className={iconSize} />
        </div>
      );
    case "diamond":
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <FaGoogle className={iconSize} />
        </div>
      );
    case "cube":
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <FaFacebookF className={iconSize} />
        </div>
      );
    case "boat":
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <FaXTwitter className={iconSize} />
        </div>
      );
    case "green":
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <FaPinterestP className={iconSize} />
        </div>
      );
    default:
      return <div className="h-full w-full rounded-full bg-white"></div>;
  }
}
