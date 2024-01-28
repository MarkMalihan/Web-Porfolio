import React from "react";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-5 p-5 mt-14">
        <section className="w-full  md:w-3/4 m-auto  flex flex-col items-center justify-start gap-5">
          <div className=" flex gap-5 md:mr-auto">
            <img src="/StarPolygons.com_4-1.svg" alt="" width="30px" />
            <img src="/StarPolygons.com_4-1.svg" alt="" width="30px" />
            <img src="/StarPolygons.com_4-1.svg" alt="" width="30px" />
            <img src="/StarPolygons.com_4-1.svg" alt="" width="30px" />
            <img src="/StarPolygons.com_4-1.svg" alt="" width="30px" />
            <img src="/StarPolygons.com_4-1.svg" alt="" width="30px" />
          </div>
          {/*Information*/}
          <section className="w-full p-5 space-y-3 bg-white border rounded-md shadow-md">
            <p className="text-2xl">Hi! I am</p>
            <h1 className="text-5xl text-blue-800 font-bold tracking-wide">
              Mark Angelo Malihan
            </h1>
            <hr />
            <p className="text-4xl text-gray-700 font-semibold leading-loose tracking-wide">
              Frontend Dev | Feeling UI/UX Designer
            </p>
            <hr />

            <section className="flex flex-col md:flex-row items-center justify-between">
              <button className="px-4 py-1 border border-blue-400 hover:bg-blue-500 hover:text-white rounded-full">
                Resume
              </button>
              <ul className="flex gap-5">
                <li className="flex flex-col items-center p-2 hover:bg-teal-100 hover:rounded-md duration-300">
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/material-rounded/48/3f484e/facebook-new.png"
                    alt="facebook-new"
                  />
                </li>
                <li className="flex flex-col items-center p-2 hover:bg-teal-100 hover:rounded-md duration-300">
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/material-rounded/48/3f484e/new-post.png"
                    alt="new-post"
                  />
                </li>
                <li className="flex flex-col items-center p-2 hover:bg-teal-100 hover:rounded-md duration-300">
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/material-rounded/48/3f484e/github.png"
                    alt="github"
                  />
                </li>
                <li className="flex flex-col items-center p-2 hover:bg-teal-100 hover:rounded-md duration-300">
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/material-rounded/48/3f484e/discord-logo.png"
                    alt="discord-logo"
                  />
                </li>
                <li className="flex flex-col items-center p-2 hover:bg-teal-100 hover:rounded-md duration-300">
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/material-rounded/48/3f484e/linkedin--v1.png"
                    alt="linkedin--v1"
                  />
                </li>
              </ul>
            </section>
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
    </>
  );
}

export default HeroSection;
