"use client"
import { ChevronRight } from "lucide-react";

import AnimatedPop from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";

export async function AnimatedBadge() {
  return (
    <AnimatedPop className="mb-3">
      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )}
      >
        Latest Update just arrived
      </span>
      <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </AnimatedPop>
  );
}

export async function AnimatedBadge2() {
  return (
    <AnimatedPop className="mb-5">
      ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )}
      >
        Features
      </span>
      <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </AnimatedPop>
  );
}
