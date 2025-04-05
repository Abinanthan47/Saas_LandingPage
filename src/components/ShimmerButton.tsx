import { ShimmerButton } from "@/components/ui/shimmer-button";

export function ShineButton() {
  return (
    <div className="z-10 flex items-center justify-center">
    <ShimmerButton className="shadow-2xl scale-90">
      <span className="whitespace-pre-wrap text-center text-xs font-500 leading-none tracking-tight text-white lg:text-base">
        Get Started
      </span>
    </ShimmerButton>
  </div>
  );
}
