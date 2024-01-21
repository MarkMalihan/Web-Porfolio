import React from "react";

function Home() {
  return (
    <>
      <div className="flex items-center gap-5">
        <section className="w-2/3 flex items-center justify-start my-5 bg-gray-400 rounded-e-3xl shadow-md">
          {/*Information*/}
          <section className="w-fit m-10 p-5 space-y-3 bg-white border rounded-md shadow-md">
            <p className="text-xl">Hi! I am</p>
            <h1 className="text-4xl text-blue-500 font-bold">
              Mark Angelo Malihan
            </h1>
            <hr />
            <p className="text-2xl font-semibold leading-loose">
              Frontend Dev |<br /> Feeling UI/UX Designer
            </p>
            <hr />
            <button className="px-4 py-1 border border-blue-400 hover:bg-blue-500 hover:text-white rounded-full">
              Resume
            </button>
            <button></button>
          </section>
          {/*PIC*/}
          <section className="mr-16 p-10">
            <img
              src="src/assets/pic2.jpg"
              alt="Argel"
              className="rounded-md shadow-md"
              width="200px"
            />
          </section>
        </section>
        {/*LOGO*/}
        <section className="w-1/3 flex items-center justify-center bg-white rounded-s-3xl shadow-md">
          <section className="m-10 p-5  bg-white rounded-md">
            <img src="/animation.gif" alt="" width="200px" />
          </section>
        </section>
      </div>

      <hr className="w-full border-t-blue-500" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-5">
        <section className="w-full  p-5 space-y-3 bg-white border rounded-md shadow-md">
          <h1>EMpty</h1>
        </section>
        <section className="w-full p-5 space-y-3 bg-white border rounded-md shadow-md">
          <h1>EMpty</h1>
        </section>
        <section className="w-full  p-5 space-y-3 bg-white border rounded-md shadow-md">
          <h1>EMpty</h1>
        </section>
        <section className="w-full  p-5 space-y-3 bg-white border rounded-md shadow-md">
          <h1>EMpty</h1>
        </section>
        <section className="w-full  p-5 space-y-3 bg-white border rounded-md shadow-md">
          <h1>EMpty</h1>
        </section>
        <section className="w-full  p-5 space-y-3 bg-white border rounded-md shadow-md">
          <h1>EMpty</h1>
        </section>
      </div>
    </>
  );
}

export default Home;