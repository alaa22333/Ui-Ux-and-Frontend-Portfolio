import Image from 'next/image'
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
// import Services from "@/sections/Services";
import Skills from "@/sections/Skills";
import Sponsors from "@/sections/Sponsors";
import Services from '@/sections/Services';

export default function Home() {

      return (
    <div className="h-full w-full  overflow-hidden   ">
      <Hero />
      <div className="relative">
        <About />
        <div className="main-gradient left-0 top-1/2  " />
        <div className="main-gradient right-0 bottom-1/2  " />
      </div>
      {
        <div className="relative">
          <Sponsors />
          <div className="main-gradient left-0 top-1/2  " />
        </div>
      }
      <div className="relative">
        <Skills />

      </div>
      <div className="relative">
        <Services  />
        <div className="main-gradient right-0 top-0  " />
      </div>
      <div className="relative">
        <Contact />
        <div className="main-gradient right-1/2 top-10   " />
        <div className="main-gradient left-0 top-[10rem]   " />
        <div className="main-gradient right-0 bottom-0   " />
      </div>
      <div className="relative ">
        <Footer />
        <div className="main-gradient right-0 top-10   " />
        <div className="main-gradient left-20 top-10   " />
        <div className="main-gradient left-0 top-10   " />
      </div>
    </div>
  );

}
