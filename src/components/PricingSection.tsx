"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CircleCheck, Gem } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  link: string;
  highlighted?: boolean;
}

const pricingTiers: PricingCardProps[] = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for beginners and indiehackers.",
    features: ["No credit card required", "Up to 1 user", "1 project"],
    link: "#",
  },
  {
    name: "Pro",
    price: 39,
    description: "Perfect for small teams and growing businesses.",
    features: [
      "Everything in Starter",
      "Up to 5 users",
      "5 projects",
      "24/7 Support",
    ],
    link: "#",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 299,
    description: "Perfect for big companies and organizations.",
    features: [
      "Everything in Pro",
      "Unlimited users",
      "Unlimited projects",
      "Priority Support",
      "Custom features",
    ],
    link: "#",
  },
];

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
  hidden: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childrenVariants = {
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: -10,
    filter: "blur(5px)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const PricingCard = ({
  name,
  price,
  description,
  features,
  link,
  highlighted = false,
}: PricingCardProps): JSX.Element => {
  return (
    <motion.div
      className={cn(
        "relative h-full py-8 px-6 mb-5 rounded-xl backdrop-blur-md bg-background border border-purple-300/80 flex flex-col",
        {
          "bg-background/40 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.4)]":
            highlighted,
        }
      )}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        },
        hidden: {
          opacity: 0,
          y: -10,
          filter: "blur(5px)",
        },
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {highlighted && (
        <BorderBeam
          className="absolute inset-0 z-0"
          size={250}
          duration={15}
          borderWidth={2}
          colorFrom="#9c40ff"
          colorTo="#ffaa40"
          delay={0}
        />
      )}

      {highlighted && (
        <span className="hidden md:block font-semibold absolute left-1/2 -translate-x-1/2 -top-12 w-fit backdrop-blur-md bg-background/80 px-4 py-1 border border-purple-400 rounded-full text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          Popular
        </span>
      )}
      <div className="grid grid-flow-row gap-y-2">
        <h3 className="text-lg lg:text-2xl font-semibold text-center">
          {highlighted ? (
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              {name}
            </span>
          ) : (
            name
          )}
        </h3>
      </div>
      <div className="grid grid-flow-row items-center justify-center mt-4 gap-y-2">
        <h4 className="text-4xl font-bold text-center">
          <span
            className={cn("", {
              "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500":
                highlighted,
              "text-primary": !highlighted,
            })}
          >
            ${price}{" "}
          </span>
          <span className="text-xl text-muted-foreground font-normal">
            /month
          </span>
        </h4>
        <p className="text-sm text-muted-foreground text-center">
          {description}
        </p>
      </div>
      <div className="w-full flex py-6 items-center justify-center">
        <span className="min-w-full h-[0.85px] lg:h-[0.5px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></span>
      </div>
      <div className="flex flex-grow h-full flex-col justify-start items-start gap-y-4 px-2">
        {features.map((feature, index) => (
          <div className="grid grid-flow-col gap-x-3 items-center" key={index}>
            <CircleCheck
              className={cn("size-5", {
                "text-purple-500": highlighted,
                "text-muted-foreground": !highlighted,
              })}
            />
            <p className="text-base text-muted-foreground">{feature}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Link href={link} className="w-full">
          <Button
            size={"lg"}
            variant="outline"
            className={cn(
              "w-full relative group overflow-hidden flex justify-center backdrop-blur-md rounded-xl bg-background/30 border border-white/20",
              {
                "bg-purple-500 bg-opacity-20 rounded-xl text-purple-400 border-purple-400 hover:bg-purple-500/20 hover:text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]":
                  highlighted,
              }
            )}
          >
            {highlighted ? (
              <>
                <span className="group-hover:-translate-x-64 text-center transition duration-500 group">
                  Get Started{" "}
                </span>
                <div className="translate-x-full group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-purple-300 z-20">
                  Start your free trial
                </div>
              </>
            ) : (
              <>Get Started</>
            )}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const PricingSection = (): JSX.Element => {
  return (
    <motion.section
      className="w-full min-h-screen bg-background relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Purple gradient background */}

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute h-full w-full bg-[radial-gradient(rgba(168,85,247,0.3)_0.5px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_50%,transparent_100%)]"
        variants={{
          visible: {
            opacity: 0.5,
            filter: "blur(0px)",
          },
          hidden: {
            opacity: 0,
            filter: "blur(5px)",
          },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="w-full max-w-6xl mx-auto py-24 px-4 xl:px-8 relative z-10">
        <div className="max-w-3xl mx-auto grid items-center justify-center grid-flow-row">
          <motion.span
            className="w-min mx-auto p-3 backdrop-blur-lg bg-purple-500/10 border border-purple-300 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            variants={childrenVariants}
          >
            <Gem className="size-6 text-white" />
          </motion.span>
          <motion.h3
            className="mt-8 text-2xl lg:text-5xl font-medium text-center text-white"
            variants={childrenVariants}
          >
            Start building today
          </motion.h3>
          <motion.p
            className="text-purple-200/70 mb-3 text-center mt-4 max-w-md px-8 lg:px-2 mx-auto font-medium"
            variants={childrenVariants}
          >
            Building SaaS has never been easier. Choose the right plan for you
            and start your free trial right now.
          </motion.p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              link={tier.link}
              highlighted={tier.highlighted}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
