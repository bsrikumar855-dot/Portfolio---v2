import Cursor from "@/components/Cursor";
import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import PhotoBand from "@/components/PhotoBand";
import Manifesto from "@/components/Manifesto";
import SelectedWork from "@/components/SelectedWork";
import TechIndex from "@/components/TechIndex";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <Masthead />
      <main>
        <Hero />
        <PhotoBand />
        <Manifesto />
        <SelectedWork />
        <TechIndex />
        <About />
        <Contact />
      </main>
    </>
  );
}
