import { AnimatedBadge2 } from "@/components/AnimatedBadge";
import { AnimatedListDemo } from "@/components/AnimatesList";
import { CardDemo } from "@/components/cards-demo-1";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { AlertCircle, BarChart, Brain, Link } from "lucide-react";
import Image from "next/image";
const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];
const pathLengths = [1, 1, 1, 1, 1];
const features = [
  {
    name: "AI Content Analysis",
    description:
      "Automatically analyze and optimize your content for better SEO",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <CardDemo />,
    Icon: Brain,
  },
  {
    name: "Real-time SEO Alerts",
    description:
      "Get instant notifications about your website's SEO performance, ranking changes, and optimization opportunities.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <AnimatedListDemo />,
    Icon: AlertCircle,
  },
  {
    name: "Multi-platform Integration",
    description:
      "Seamlessly connect with Google Analytics, Search Console, WordPress, and other major platforms.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 top-0 lg:col-span-2",
    background: (
      <div className="flex justify-center items-center">
        <Image
          src="/assets/integrate.svg"
          alt="Integration SVG"
          width={500}
          height={500}
          className="max-w-full p-2 h-auto"
        />
      </div>
    ),
    Icon: Link,
  },
  {
    name: "SEO Progress Tracking",
    description:
      "Monitor your SEO and content performance with detailed analytics.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        className="absolute  -z-10"
      />
    ),
    Icon: BarChart,
  },
];

export function Bento() {
  return (
    <div className="p-2">
      <AnimatedBadge2 />
      <h2 className="text-5xl font-medium text-center mb-2">
        Harness the Power of AI
      </h2>
      <p className="text-sm font-thin text-center text-white/80 mb-10">
        Everything you need to collaborate, create, scale, at one place.
      </p>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
