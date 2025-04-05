import { GradientTracing } from "@/components/ui/gradient-tracing";

const GradientTrace = () => (
  <div className="absolute w-full -top-10">
    <GradientTracing
      width={1920}
      height={500}
      path="M0,200 C160,100 320,300 480,200 S800,100 960,200 S1280,300 1440,200 S1760,100 1920,200 M0,200 C160,300 320,100 480,200 S800,300 960,200 S1280,100 1440,200 S1760,300 1920,200"
      gradientColors={["#9D4EDD", "#7B2CBF", "#5A189A"]}
    />
  </div>
);

export { GradientTrace };
