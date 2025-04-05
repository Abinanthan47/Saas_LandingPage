"use client";

import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";
import { FaBell, FaCommentDots, FaUserPlus } from "react-icons/fa";
import { PiGraphThin } from "react-icons/pi";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "SEO Alert",
      description: "AI detected a ranking change",
      time: "15m ago",
      icon: <FaBell  className="text-2xl text-purple-400" />,
    },
    {
      name: "New User Signup",
      description: "A new user joined your platform",
      time: "10m ago",
      icon: <FaUserPlus className="text-2xl text-purple-400" />,
    },
    {
      name: "New Message",
      description: "You received a support inquiry",
      time: "5m ago",
      icon: <FaCommentDots className="text-2xl text-purple-400" />,
    },
    {
      name: "Traffic Surge",
      description: "AI detected a spike in visitors",
      time: "2m ago",
      icon: <PiGraphThin className="text-2xl text-purple-400" />,
    },
  ];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles

        // dark styles
        "transform-gpu bg-transparent backdrop-blur-md  border-2 border-[#cc9aff] [box-shadow:0_-5px_40px_-10px_#8433D6_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-3xl">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[100px] w-full mt-8 flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
