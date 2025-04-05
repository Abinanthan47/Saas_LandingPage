import { Marquee } from "@/components/ui/marquee";
import { FaGoogle, FaHubspot, FaWordpressSimple } from "react-icons/fa";
import { SiGoogleanalytics, SiGooglecloudspanner } from "react-icons/si";

const Logos = {
  wordpress: () => (
    <FaWordpressSimple className="h-14 p-1 border-purple-500 border-2 rounded-full w-14 text-purple-400 shadow-md shadow-purple-600" />
  ),
  hubspot: () => (
    <FaHubspot className="h-14 w-14 p-1 border-purple-500 border-2 rounded-full  text-purple-400 shadow-md shadow-purple-600" />
  ),
  google: () => (
    <FaGoogle className="h-14 w-14 p-1 border-purple-500 border-2 rounded-full  text-purple-400 shadow-md shadow-purple-600" />
  ),
  analytics: () => (
    <SiGooglecloudspanner className="h-14 w-14 p-1 border-purple-500 border-2 rounded-full  text-purple-400 shadow-md shadow-purple-600" />
  ),
};

export function MarqueeDemo() {
  const arr = [Logos.wordpress, Logos.hubspot, Logos.google, Logos.analytics];

  return (
    <Marquee className="">
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit  mx-[4rem] flex items-center justify-start"
        >
          <Logo />
        </div>
      ))}
    </Marquee>
  );
}
