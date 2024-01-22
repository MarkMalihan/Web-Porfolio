import React from "react";
import Cards from "../components/Cards";

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

      <hr className="w-full my-20 border-t-blue-500" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 p-3 gap-5">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export default Home;
