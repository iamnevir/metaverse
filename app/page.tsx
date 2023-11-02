import Explore from "@/components/sections/Explore";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import GetStarted from "@/components/sections/GetStarted";
import WhatsNew from "@/components/sections/WhatsNew";
import Image from "next/image";
import World from "@/components/sections/World";
import Insights from "@/components/sections/Insights";
import Feedback from "@/components/sections/Feedback";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className=" bg-primary-black overflow-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
