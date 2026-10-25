import { SECTION_IDS } from "./config/sections";
import { site } from "./config/site";
import { Navbar } from "./components/Navbar";
import { ProgressBar } from "./components/ProgressBar";
import { Bio } from "./sections/Bio";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { Projects } from "./sections/Projects";
import { Quote } from "./sections/Quote";
import { Skills } from "./sections/Skills";

export default function App() {
  return (
    <>
      <a className="skip-link" href={`#${SECTION_IDS.bio}`}>
        {site.ui.skipLabel}
      </a>
      <ProgressBar />
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <Bio />
        <Quote />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
