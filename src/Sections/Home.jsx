import React from "react";
import Hero from "./Hero";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Vocabulary from "./Vocabulary";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-slate-200">
      <main className="flex-grow">
        <Hero />
        <SectionTwo />
        <SectionOne />
        <SectionThree />
        <Vocabulary />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
