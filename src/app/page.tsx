import { Header } from "@/app/sections/Header";
import PricingSection from "@/components/PricingSection";
import { Bento } from "./sections/Bento";
import Features from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Brands } from "./sections/LogoCloud";
import Footer from "./sections/Footer";
import Cta from "./sections/Cta";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Brands />
      <Bento />
      <PricingSection />
      <Features />
      <Cta/>
      <Footer/>
    </main>
  );
}
