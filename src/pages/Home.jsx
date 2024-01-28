import React from "react";
import techStack from "../components/TechStack";
import TechStack from "../components/TechStack";
import DesignToolkit from "../components/DesignToolkit";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-5 p-5 mt-14">
        <section className="w-full md:w-3/4 m-auto  flex items-center justify-start">
          {/*Information*/}
          <section className="w-full p-5 space-y-3 bg-white border rounded-md shadow-md">
            <p className="text-2xl">Hi! I am</p>
            <h1 className="text-5xl text-blue-500 font-bold">
              Mark Angelo Malihan
            </h1>
            <hr />
            <p className="text-4xl font-semibold leading-loose">
              Frontend Dev | Feeling UI/UX Designer
            </p>
            <hr />
            <button className="px-4 py-1 border border-blue-400 hover:bg-blue-500 hover:text-white rounded-full">
              Resume
            </button>
            <button></button>
          </section>
        </section>

        {/* <section className="w-full md:w-1/3 flex items-center justify-center bg-blue-200 rounded-s-3xl shadow-md">
          
          <section className="m-10">
            <img
              src="/pic2.jpg"
              alt="Argel"
              className="rounded-md shadow-md"
              width="200px"
            />
          </section>
        </section> */}
      </div>

      <section className="mx-auto container ">
        <hr className=" my-14 mx-auto border-t-blue-100" />
        <h1 className="text-3xl text-black/80 font-bold m-5 text-white">
          Tech Stack
        </h1>
        <TechStack />
      </section>
      <section className="mx-auto container ">
        <h1 className="text-3xl text-black/80 font-bold m-5 text-white">
          Design ToolKit
        </h1>
        <DesignToolkit />
        <hr className="my-14 mx-auto border-t-blue-100" />
      </section>
    </>
  );
}

export default Home;
