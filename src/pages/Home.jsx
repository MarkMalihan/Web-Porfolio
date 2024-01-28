import React from "react";
import techStack from "../components/TechStack";
import TechStack from "../components/TechStack";
import DesignToolkit from "../components/DesignToolkit";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto container ">
        <hr className=" my-14 mx-auto border-t-teal-300" />
        <h1 className="text-3xl text-black/80 font-bold m-5 text-blue-200">
          Tech Stack
        </h1>
        <TechStack />
      </section>
      <section className="mx-auto container ">
        <h1 className="text-3xl text-black/80 font-bold m-5 text-blue-200">
          Design ToolKit
        </h1>
        <DesignToolkit />
        <hr className="my-14 mx-auto border-t-teal-300" />
      </section>
    </>
  );
}

export default Home;
