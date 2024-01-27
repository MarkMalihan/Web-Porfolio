import React from "react";
import techStack from "../components/TechStack";
import TechStack from "../components/TechStack";
import DesignToolkit from "../components/DesignToolkit";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <section className="w-full md:w-2/3 flex items-center justify-start">
          {/*Information*/}
          <section className="w-full m-5 md:m-10 p-5 space-y-3 bg-white border rounded-md shadow-md">
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

        <section className="w-full md:w-1/3 flex items-center justify-center bg-blue-200 rounded-s-3xl shadow-md">
          {/*PIC*/}
          <section className="m-10">
            <img
              src="/pic2.jpg"
              alt="Argel"
              className="rounded-md shadow-md"
              width="200px"
            />
          </section>
        </section>
      </div>

      <hr className="w-4/5 my-14 mx-auto border-t-blue-500" />

      <section className="mx-5 2xl:mx-40">
        <h1 className="text-3xl text-black/80 font-bold m-5">Tech Stack</h1>
        <TechStack />
      </section>
      <section className="mx-5 2xl:mx-40">
        <h1 className="text-3xl text-black/80 font-bold m-5">Design ToolKit</h1>
        <DesignToolkit />
      </section>

      <hr className="w-4/5 my-14 mx-auto border-t-blue-500" />
    </>
  );
}

export default Home;
